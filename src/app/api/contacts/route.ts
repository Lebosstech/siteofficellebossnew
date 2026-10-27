import { NextRequest, NextResponse } from 'next/server';
import { contactSubmissionSchema } from '@/lib/validators';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || 'Données invalides.' },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('user:password')) {
      try {
        await prisma.contactMessage.create({
          data: {
            fullName: data.fullName,
            email: data.email,
            phone: data.phone || null,
            subject: data.subject,
            message: data.message,
          },
        });
      } catch {
        // Fallback
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[POST /api/contacts]', err);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}
