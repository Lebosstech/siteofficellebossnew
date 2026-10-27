import test from "node:test";
import assert from "node:assert/strict";
import { NextRequest } from "next/server";
import { POST } from "../src/app/api/contacts/route";
const payload = (email = "test@example.com") => ({
  fullName: "Test Projet",
  email,
  company: "Test",
  category: "Développement",
  message: "Une demande de projet de développement de test.",
  website: "",
  startedAt: Date.now() - 5000,
});
function request(body: unknown, origin = "http://localhost:3000") {
  return new NextRequest("http://localhost:3000/api/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json", origin },
    body: JSON.stringify(body),
  });
}
test("rejects malformed fields", async () => {
  assert.equal((await POST(request({}))).status, 400);
});
test("rejects cross-origin submissions", async () => {
  assert.equal(
    (await POST(request(payload(), "https://example.org"))).status,
    403,
  );
});
test("rejects honeypot and immediate submissions", async () => {
  assert.equal(
    (await POST(request({ ...payload(), website: "spam" }))).status,
    400,
  );
  assert.equal(
    (await POST(request({ ...payload(), startedAt: Date.now() }))).status,
    400,
  );
});
test("does not claim success without configuration", async () => {
  const old = process.env.RESEND_API_KEY;
  delete process.env.RESEND_API_KEY;
  try {
    assert.equal(
      (await POST(request(payload("missing@example.com")))).status,
      503,
    );
  } finally {
    if (old) process.env.RESEND_API_KEY = old;
  }
});
test("only confirms provider acceptance and forwards actual fields", async () => {
  const original = globalThis.fetch;
  const key = process.env.RESEND_API_KEY,
    from = process.env.CONTACT_FROM_EMAIL;
  process.env.RESEND_API_KEY = "test-key";
  process.env.CONTACT_FROM_EMAIL = "Test <test@example.com>";
  try {
    let received: Record<string, unknown> = {};
    globalThis.fetch = async (_input, init) => {
      received = JSON.parse(String(init?.body));
      return Response.json({ id: "test-receipt" });
    };
    const response = await POST(request(payload("provider@example.com")));
    assert.equal(response.status, 200);
    assert.equal(received.reply_to, "provider@example.com");
    assert.deepEqual(received.to, ["contact@lebosstech.ci"]);
    assert.match(String(received.text), /Test Projet/);
    globalThis.fetch = async () => new Response("", { status: 500 });
    assert.equal(
      (await POST(request(payload("failure@example.com")))).status,
      502,
    );
  } finally {
    globalThis.fetch = original;
    if (key) process.env.RESEND_API_KEY = key;
    else delete process.env.RESEND_API_KEY;
    if (from) process.env.CONTACT_FROM_EMAIL = from;
    else delete process.env.CONTACT_FROM_EMAIL;
  }
});
test("limits repeated submissions", async () => {
  const email = "limit@example.com";
  for (let i = 0; i < 3; i++) await POST(request(payload(email)));
  assert.equal((await POST(request(payload(email)))).status, 429);
});

test("accepts browser origin behind a different internal Next.js hostname", async () => {
  const old = process.env.RESEND_API_KEY;
  delete process.env.RESEND_API_KEY;
  try {
    const proxied = new NextRequest("http://localhost:3001/api/contacts", {
      method: "POST",
      headers: {
        origin: "http://127.0.0.1:3001",
        host: "127.0.0.1:3001",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload("proxied@example.com")),
    });
    assert.equal((await POST(proxied)).status, 503);
  } finally {
    if (old) process.env.RESEND_API_KEY = old;
  }
});
