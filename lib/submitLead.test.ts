/**
 * Lightweight Node test for shipped submitLead (no reimplementation).
 * Run: bun test lib/submitLead.test.ts
 */
import { afterEach, describe, expect, mock, test } from "bun:test";
import { getLeadWebhookUrl, submitLead } from "./submitLead";

const originalEnv = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

afterEach(() => {
  if (originalEnv === undefined) {
    delete process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
  } else {
    process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL = originalEnv;
  }
  mock.restore();
});

describe("submitLead (shipped path)", () => {
  test("offline mode when webhook unset", async () => {
    delete process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
    expect(getLeadWebhookUrl()).toBeUndefined();
    const result = await submitLead({
      source: "test",
      email: "a@b.com",
      phone: "1",
      message: "hi",
      submittedAt: new Date().toISOString(),
    });
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.mode).toBe("offline");
  });

  test("POSTs JSON to NEXT_PUBLIC_N8N_WEBHOOK_URL on success", async () => {
    process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL = "https://hooks.example.test/n8n";
    let calledUrl = "";
    let body = "";
    // @ts-expect-error mock fetch
    globalThis.fetch = mock(async (url: string, init?: RequestInit) => {
      calledUrl = String(url);
      body = String(init?.body || "");
      return new Response("{}", { status: 200 });
    });

    const payload = {
      source: "nws-contact",
      name: "Test User",
      email: "t@example.com",
      phone: "2815550100",
      message: "Kitchen remodel",
      submittedAt: "2026-07-20T00:00:00.000Z",
    };
    const result = await submitLead(payload);
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.mode).toBe("webhook");
    expect(calledUrl).toBe("https://hooks.example.test/n8n");
    const parsed = JSON.parse(body);
    expect(parsed.source).toBe("nws-contact");
    expect(parsed.email).toBe("t@example.com");
    expect(parsed.message).toBe("Kitchen remodel");
  });

  test("returns error when webhook responds non-OK", async () => {
    process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL = "https://hooks.example.test/n8n";
    // @ts-expect-error mock fetch
    globalThis.fetch = mock(async () => new Response("fail", { status: 500 }));
    const result = await submitLead({
      source: "nws-contact",
      email: "t@example.com",
      phone: "1",
      message: "x",
      submittedAt: new Date().toISOString(),
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error.toLowerCase()).toContain("could not send");
  });
});
