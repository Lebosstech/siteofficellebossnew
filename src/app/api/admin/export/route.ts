import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { getProducts } from '@/lib/catalog-provider';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });
  }

  const type = request.nextUrl.searchParams.get('type') || 'products';

  if (type === 'orders') {
    let rows: Array<Record<string, unknown>> = [];
    if (process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('user:password')) {
      try {
        rows = (await prisma.order.findMany({ orderBy: { createdAt: 'desc' } })) as unknown as Array<
          Record<string, unknown>
        >;
      } catch {
        rows = [];
      }
    }
    const header = 'Reference,Client,Telephone,Ville,Commune,Total_FCFA,Statut,Paiement\n';
    const lines = rows
      .map(
        (r) =>
          `"${r.orderNumber}","${r.customerName}","${r.customerPhone}","${r.city}","${r.commune || ''}",${r.totalAmount},"${r.status}","${r.paymentStatus}"`
      )
      .join('\n');
    return new NextResponse(header + lines, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="lebosstech-commandes.csv"',
      },
    });
  }

  const { items } = await getProducts({ limit: 1000 });
  const header = 'SKU,Nom,Slug,Categorie,Marque,Etat,Prix_FCFA,Ancien_Prix_FCFA,En_Stock,Quantite,Image_Cloudinary\n';
  const lines = items
    .map(
      (p) =>
        `"${p.sku}","${p.name.replace(/"/g, '""')}","${p.slug}","${p.categoryName}","${p.brandName || ''}","${p.condition}",${p.price},${p.compareAtPrice || ''},${p.inStock},${p.stockQuantity},"${p.mainImage}"`
    )
    .join('\n');

  return new NextResponse(header + lines, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="lebosstech-catalogue-506-produits.csv"',
    },
  });
}
