import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { prisma } from './prisma';

const COOKIE_NAME = 'lebosstech_admin_session';

function getSecretKey(): Uint8Array {
  const secret = process.env.JWT_SECRET || 'lebosstech-super-secret-jwt-key-change-in-production-2026';
  return new TextEncoder().encode(secret);
}

export interface AdminSessionPayload {
  sub: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'EDITOR' | 'VIEWER';
}

export async function signAdminToken(payload: AdminSessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('12h')
    .sign(getSecretKey());
}

export async function verifyAdminToken(token: string): Promise<AdminSessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    return {
      sub: String(payload.sub || ''),
      email: String(payload.email || ''),
      name: String(payload.name || ''),
      role: (payload.role as 'ADMIN' | 'EDITOR' | 'VIEWER') || 'ADMIN',
    };
  } catch {
    return null;
  }
}

export async function getAdminSession(): Promise<AdminSessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyAdminToken(token);
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME;

export async function logAuditEvent(params: {
  userId?: string;
  action: string;
  entity: string;
  entityId?: string;
  details?: Record<string, unknown>;
}) {
  try {
    if (process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('user:password')) {
      await prisma.auditLog.create({
        data: {
          userId: params.userId || null,
          action: params.action,
          entity: params.entity,
          entityId: params.entityId || null,
          details: (params.details || {}) as object,
        },
      });
    }
  } catch {
    // Non-blocking audit log
  }
}
