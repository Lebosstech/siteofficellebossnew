import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAdminSession, logAuditEvent } from '@/lib/auth';
import { getCatalogSummary, getProducts } from '@/lib/catalog-provider';
import {
  SOFTWARE_SOLUTIONS,
  INITIAL_SERVICES,
  INITIAL_PROJECTS,
  INITIAL_ARTICLES,
  INITIAL_FAQS,
  INITIAL_SITE_SETTINGS,
} from '@/data/cms-seed-data';

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });
  }

  try {
    const summary = await getCatalogSummary();
    const { items: recentProducts } = await getProducts({ page: 1, limit: 60, sort: 'newest' });

    let orders: unknown[] = [];
    let quotes: unknown[] = [];
    let contacts: unknown[] = [];
    let confirmedRevenue = 0;
    let pendingOrdersCount = 0;

    if (process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('user:password')) {
      try {
        const [dbOrders, dbQuotes, dbContacts, revenueAgg, pendingCount] = await Promise.all([
          prisma.order.findMany({
            include: { items: true, payments: true },
            orderBy: { createdAt: 'desc' },
            take: 50,
          }),
          prisma.quoteRequest.findMany({
            orderBy: { createdAt: 'desc' },
            take: 50,
          }),
          prisma.contactMessage.findMany({
            orderBy: { createdAt: 'desc' },
            take: 50,
          }),
          prisma.order.aggregate({
            where: { paymentStatus: 'PAID' },
            _sum: { totalAmount: true },
          }),
          prisma.order.count({
            where: { status: { in: ['PENDING', 'CONFIRMED', 'PROCESSING'] } },
          }),
        ]);

        orders = dbOrders;
        quotes = dbQuotes;
        contacts = dbContacts;
        confirmedRevenue = revenueAgg._sum.totalAmount || 0;
        pendingOrdersCount = pendingCount;
      } catch {
        // Fallback when DB tables are not yet migrated
      }
    }

    return NextResponse.json({
      user: session,
      metrics: {
        totalProducts: summary.totalProducts,
        inStockCount: summary.inStockCount,
        outOfStockCount: summary.outOfStockCount,
        promoCount: summary.promoCount,
        featuredCount: summary.featuredCount,
        totalCategories: summary.totalCategories,
        totalBrands: summary.totalBrands,
        softwareAppsCount: SOFTWARE_SOLUTIONS.length,
        ordersCount: orders.length,
        pendingOrdersCount,
        confirmedRevenue,
        quotesCount: quotes.length,
        contactsCount: contacts.length,
      },
      categories: summary.categories,
      brands: summary.brands,
      products: recentProducts,
      orders,
      quotes,
      contacts,
      cms: {
        softwareSolutions: SOFTWARE_SOLUTIONS,
        services: INITIAL_SERVICES,
        projects: INITIAL_PROJECTS,
        articles: INITIAL_ARTICLES,
        faqs: INITIAL_FAQS,
        settings: INITIAL_SITE_SETTINGS,
      },
    });
  } catch (err) {
    console.error('[GET /api/admin/dashboard]', err);
    return NextResponse.json({ error: 'Erreur lors du chargement du tableau de bord.' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { entity, id, status, paymentStatus, internalNotes } = body;

    if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('user:password')) {
      return NextResponse.json(
        { error: 'Base de données PostgreSQL requise pour modifier les enregistrements.' },
        { status: 503 }
      );
    }

    if (entity === 'order') {
      const updated = await prisma.order.update({
        where: { id },
        data: {
          ...(status ? { status } : {}),
          ...(paymentStatus ? { paymentStatus } : {}),
          ...(internalNotes !== undefined ? { internalNotes } : {}),
        },
      });
      await logAuditEvent({
        userId: session.sub,
        action: 'UPDATE_ORDER_STATUS',
        entity: 'Order',
        entityId: id,
        details: { status, paymentStatus },
      });
      return NextResponse.json({ success: true, record: updated });
    }

    if (entity === 'quote') {
      const updated = await prisma.quoteRequest.update({
        where: { id },
        data: {
          ...(status ? { status } : {}),
          ...(internalNotes !== undefined ? { internalNotes } : {}),
        },
      });
      return NextResponse.json({ success: true, record: updated });
    }

    return NextResponse.json({ error: 'Entité non supportée.' }, { status: 400 });
  } catch (err) {
    console.error('[PATCH /api/admin/dashboard]', err);
    return NextResponse.json({ error: 'Erreur lors de la mise à jour.' }, { status: 500 });
  }
}
