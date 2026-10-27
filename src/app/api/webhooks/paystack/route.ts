import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) {
    return NextResponse.json({ error: 'Paystack non configuré.' }, { status: 503 });
  }

  try {
    const rawBody = await request.text();
    const signature = request.headers.get('x-paystack-signature') || '';

    const expectedHash = crypto
      .createHmac('sha512', secret)
      .update(rawBody)
      .digest('hex');

    if (signature !== expectedHash) {
      return NextResponse.json({ error: 'Signature webhook invalide.' }, { status: 401 });
    }

    const event = JSON.parse(rawBody);
    if (event.event === 'charge.success') {
      const ref = String(event.data?.reference || '');
      const amountInXOF = Math.round(Number(event.data?.amount || 0) / 100);
      const orderNumber = String(event.data?.metadata?.orderNumber || ref);

      // Idempotence check
      const existingPayment = await prisma.payment.findUnique({
        where: { providerReference: ref },
      });
      if (existingPayment && existingPayment.status === 'PAID') {
        return NextResponse.json({ received: true, idempotent: true });
      }

      const order = await prisma.order.findUnique({
        where: { orderNumber },
      });

      if (order && amountInXOF >= order.totalAmount) {
        await prisma.$transaction([
          prisma.payment.upsert({
            where: { providerReference: ref },
            update: {
              status: 'PAID',
              verifiedAt: new Date(),
              rawWebhookPayload: event,
            },
            create: {
              orderId: order.id,
              provider: 'PAYSTACK',
              providerReference: ref,
              amount: amountInXOF,
              currency: 'XOF',
              status: 'PAID',
              channel: String(event.data?.channel || 'card'),
              rawWebhookPayload: event,
              verifiedAt: new Date(),
            },
          }),
          prisma.order.update({
            where: { id: order.id },
            data: {
              paymentStatus: 'PAID',
              status: 'CONFIRMED',
            },
          }),
        ]);
      }
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('[POST /api/webhooks/paystack]', err);
    return NextResponse.json({ error: 'Erreur traitement webhook.' }, { status: 500 });
  }
}
