import { NextRequest, NextResponse } from 'next/server';
import { quoteSubmissionSchema } from '@/lib/validators';
import { generateQuoteReference } from '@/lib/utils';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = quoteSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || 'Veuillez vérifier les champs du formulaire.' },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const referenceNumber = generateQuoteReference();

    if (process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('user:password')) {
      try {
        await prisma.quoteRequest.create({
          data: {
            referenceNumber,
            fullName: data.fullName,
            companyName: data.companyName || null,
            email: data.email,
            phone: data.phone,
            serviceType: data.serviceType,
            budgetRange: data.budgetRange || null,
            timeline: data.timeline || null,
            productSlug: data.productSlug || null,
            description: data.description,
          },
        });
      } catch (dbErr) {
        console.warn('[POST /api/quotes] DB write fallback:', dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      referenceNumber,
    });
  } catch (err) {
    console.error('[POST /api/quotes]', err);
    return NextResponse.json(
      { error: 'Erreur lors de la soumission de votre demande de devis.' },
      { status: 500 }
    );
  }
}
