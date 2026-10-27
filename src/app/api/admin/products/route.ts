import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession, logAuditEvent } from '@/lib/auth';
import { adminProductSchema } from '@/lib/validators';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const parsed = adminProductSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || 'Données produit invalides.' },
        { status: 400 }
      );
    }

    if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('user:password')) {
      return NextResponse.json(
        { error: 'Connectez la variable DATABASE_URL PostgreSQL pour persister de nouveaux produits.' },
        { status: 503 }
      );
    }

    const data = parsed.data;
    const slug = data.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    let category = await prisma.category.findFirst();
    if (!category) {
      category = await prisma.category.create({
        data: { name: 'Matériel Informatique', slug: 'materiel-informatique' },
      });
    }

    const created = await prisma.product.create({
      data: {
        sku: data.sku,
        name: data.name,
        slug: `${slug}-${Date.now().toString().slice(-4)}`,
        price: data.price,
        compareAtPrice: data.compareAtPrice || null,
        stockQuantity: data.stockQuantity,
        inStock: data.stockQuantity > 0,
        condition: data.condition,
        warrantyInfo: data.warrantyInfo || null,
        shortDescription: data.shortDescription || data.name,
        description: data.description,
        categoryId: data.categoryId || category.id,
        isFeatured: data.isFeatured,
        isPromo: data.isPromo,
        images:
          data.images && data.images.length > 0
            ? {
                create: data.images.map((img, i) => ({
                  url: img.url,
                  isMain: i === 0,
                  sortOrder: i,
                })),
              }
            : undefined,
      },
    });

    await logAuditEvent({
      userId: session.sub,
      action: 'CREATE_PRODUCT',
      entity: 'Product',
      entityId: created.id,
      details: { sku: created.sku, name: created.name },
    });

    return NextResponse.json({ success: true, product: created });
  } catch (err) {
    console.error('[POST /api/admin/products]', err);
    return NextResponse.json({ error: 'Erreur lors de la création du produit.' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });
  }

  const id = request.nextUrl.searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'Identifiant requis.' }, { status: 400 });
  }

  if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('user:password')) {
    return NextResponse.json(
      { error: 'Base PostgreSQL requise pour archiver un produit.' },
      { status: 503 }
    );
  }

  try {
    await prisma.product.update({
      where: { id },
      data: { status: 'ARCHIVED', inStock: false },
    });
    return NextResponse.json({ success: true, message: 'Produit archivé.' });
  } catch {
    return NextResponse.json({ error: 'Produit introuvable en base.' }, { status: 404 });
  }
}
