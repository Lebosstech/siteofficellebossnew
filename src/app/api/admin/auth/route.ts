import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { signAdminToken, ADMIN_COOKIE_NAME, logAuditEvent } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const expectedEmail = process.env.ADMIN_INITIAL_EMAIL || 'admin@lebosstech.ci';
    const expectedPassword = process.env.ADMIN_INITIAL_PASSWORD || 'LebossTech@2026!';

    if (
      String(email).trim().toLowerCase() !== expectedEmail.toLowerCase() ||
      String(password) !== expectedPassword
    ) {
      return NextResponse.json(
        { error: 'Identifiants administrateur incorrects.' },
        { status: 401 }
      );
    }

    const token = await signAdminToken({
      sub: 'admin-root',
      email: expectedEmail,
      name: 'Administrateur LEBOSS TECH',
      role: 'ADMIN',
    });

    const cookieStore = await cookies();
    cookieStore.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 12,
    });

    await logAuditEvent({
      action: 'ADMIN_LOGIN',
      entity: 'User',
      entityId: 'admin-root',
      details: { email: expectedEmail },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[POST /api/admin/auth]', err);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
  return NextResponse.json({ success: true });
}
