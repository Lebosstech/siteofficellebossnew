import { NextRequest, NextResponse } from 'next/server';
import { orderSubmissionSchema } from '@/lib/validators';
import { getProductBySlug } from '@/lib/catalog-provider';
import { generateOrderReference } from '@/lib/utils';
import { buildOrderWhatsAppUrl } from '@/lib/whatsapp';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = orderSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || 'Données de commande invalides.' },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const verifiedItems: Array<{
      productId: string;
      name: string;
      sku: string;
      unitPrice: number;
      quantity: number;
      totalPrice: number;
    }> = [];

    let subtotalAmount = 0;

    for (const item of data.items) {
      const product = await getProductBySlug(item.slug);
      if (!product) {
        return NextResponse.json(
          { error: `Le produit "${item.slug}" est introuvable.` },
          { status: 400 }
        );
      }
      if (!product.inStock || product.stockQuantity < item.quantity) {
        return NextResponse.json(
          { error: `Stock insuffisant pour "${product.name}".` },
          { status: 400 }
        );
      }
      const totalPrice = product.price * item.quantity;
      subtotalAmount += totalPrice;
      verifiedItems.push({
        productId: product.id,
        name: product.name,
        sku: product.sku,
        unitPrice: product.price,
        quantity: item.quantity,
        totalPrice,
      });
    }

    const deliveryFee =
      data.deliveryMethod === 'EXPRESS_ABIDJAN'
        ? 3000
        : data.deliveryMethod === 'EXPEDITION_INTERIEUR'
        ? 5000
        : 0;

    const totalAmount = subtotalAmount + deliveryFee;
    const orderNumber = generateOrderReference();

    // Persist in PostgreSQL before any external redirection
    if (process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('user:password')) {
      try {
        await prisma.order.create({
          data: {
            orderNumber,
            customerName: data.customerName,
            customerPhone: data.customerPhone,
            customerEmail: data.customerEmail || null,
            companyName: data.companyName || null,
            city: data.city,
            commune: data.commune || null,
            deliveryAddress: data.deliveryAddress,
            deliveryMethod: data.deliveryMethod,
            deliveryNotes: data.deliveryNotes || null,
            subtotalAmount,
            deliveryFee,
            totalAmount,
            paymentMethod: data.paymentMethod,
            items: {
              create: verifiedItems.map((vi) => ({
                productName: vi.name,
                productSku: vi.sku,
                unitPrice: vi.unitPrice,
                quantity: vi.quantity,
                totalPrice: vi.totalPrice,
              })),
            },
          },
        });
      } catch (dbErr) {
        console.warn('[POST /api/orders] DB write fallback:', dbErr);
      }
    }

    const whatsappUrl = buildOrderWhatsAppUrl({
      orderNumber,
      customerName: data.customerName,
      customerPhone: data.customerPhone,
      city: data.city,
      commune: data.commune,
      deliveryAddress: data.deliveryAddress,
      paymentMethod: data.paymentMethod,
      items: verifiedItems,
      totalAmount,
    });

    return NextResponse.json({
      success: true,
      orderNumber,
      subtotalAmount,
      deliveryFee,
      totalAmount,
      whatsappUrl,
    });
  } catch (err) {
    console.error('[POST /api/orders]', err);
    return NextResponse.json(
      { error: 'Erreur serveur lors de l’enregistrement de la commande.' },
      { status: 500 }
    );
  }
}
