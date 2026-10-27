import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
export const runtime = "nodejs";
const schema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().email().max(254),
  company: z.string().trim().max(160).optional().default(""),
  category: z.enum([
    "Automatisation",
    "Développement",
    "Cloud & infrastructure",
    "Réseaux & maintenance",
    "Autre projet",
  ]),
  message: z.string().trim().min(20).max(5000),
  website: z.string().max(300).optional().default(""),
  startedAt: z.number().finite(),
});
const attempts = new Map<string, { count: number; until: number }>();
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  let sameOrigin = !origin || origin === process.env.CONTACT_ALLOWED_ORIGIN;
  if (origin && !sameOrigin) {
    try {
      const external = new URL(origin);
      sameOrigin =
        ["http:", "https:"].includes(external.protocol) &&
        external.host === (request.headers.get("host") || request.nextUrl.host);
    } catch {
      sameOrigin = false;
    }
  }
  if (!sameOrigin)
    return NextResponse.json(
      { error: "Origine non autorisée." },
      { status: 403 },
    );
  if (Number(request.headers.get("content-length") || 0) > 16000)
    return NextResponse.json(
      { error: "Message trop volumineux." },
      { status: 413 },
    );
  try {
    const raw = await request.text();
    if (raw.length > 16000)
      return NextResponse.json(
        { error: "Message trop volumineux." },
        { status: 413 },
      );
    let json;
    try {
      json = JSON.parse(raw);
    } catch {
      return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
    }
    const parsed = schema.safeParse(json);
    if (!parsed.success)
      return NextResponse.json(
        {
          error:
            "Vérifiez les champs : nom, email, domaine et description (20 caractères minimum).",
        },
        { status: 400 },
      );
    const d = parsed.data;
    const now = Date.now();
    if (d.website || now - d.startedAt < 1500 || d.startedAt > now)
      return NextResponse.json(
        { error: "Veuillez patienter quelques secondes puis réessayer." },
        { status: 400 },
      );
    // Per-instance abuse guard. Production ingress should additionally enforce distributed limits.
    for (const [key, entry] of attempts)
      if (entry.until < now) attempts.delete(key);
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";
    const key = ip + ":" + d.email.toLowerCase();
    const entry = attempts.get(key);
    if (entry && entry.count >= 3)
      return NextResponse.json(
        { error: "Trop de demandes. Réessayez dans quelques minutes." },
        { status: 429 },
      );
    if (attempts.size >= 10000 && !entry)
      return NextResponse.json(
        { error: "Service temporairement occupé." },
        { status: 503 },
      );
    attempts.set(key, {
      count: (entry?.count || 0) + 1,
      until: entry?.until || now + 600000,
    });
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL)
      return NextResponse.json(
        {
          error:
            "L’envoi est temporairement indisponible. Écrivez à contact@lebosstech.ci ou appelez le +225 05 66 82 16 09.",
        },
        { status: 503 },
      );
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: ["contact@lebosstech.ci"],
        reply_to: d.email,
        subject: `Projet LEBOSS TECH — ${d.category}`,
        text: `Nom : ${d.fullName}\nEmail : ${d.email}\nEntreprise : ${d.company}\nDomaine : ${d.category}\n\n${d.message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!result.ok)
      return NextResponse.json(
        {
          error:
            "Le message n’a pas pu être transmis. Contactez contact@lebosstech.ci.",
        },
        { status: 502 },
      );
    const receipt = await result.json();
    if (!receipt.id)
      return NextResponse.json(
        {
          error:
            "Confirmation d’envoi indisponible. Contactez contact@lebosstech.ci.",
        },
        { status: 502 },
      );
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Envoi impossible pour le moment. Contactez contact@lebosstech.ci.",
      },
      { status: 502 },
    );
  }
}
