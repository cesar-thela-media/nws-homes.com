/**
 * Client-side lead POST for N8N (or compatible) webhooks.
 * Env: NEXT_PUBLIC_N8N_WEBHOOK_URL
 */

export type LeadPayload = {
  source: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  zip?: string;
  service?: string;
  message: string;
  submittedAt: string;
};

export type LeadSubmitResult =
  | { ok: true; mode: "webhook" | "offline" }
  | { ok: false; error: string };

export function getLeadWebhookUrl(): string | undefined {
  const url = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL?.trim();
  return url || undefined;
}

export async function submitLead(payload: LeadPayload): Promise<LeadSubmitResult> {
  const webhookUrl = getLeadWebhookUrl();

  if (!webhookUrl) {
    // Pure FE / preview: no webhook configured — clear offline path for QA.
    if (typeof window !== "undefined") {
      console.info(
        "[NWS lead] NEXT_PUBLIC_N8N_WEBHOOK_URL is unset — offline success path only",
        payload
      );
    }
    return { ok: true, mode: "offline" };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return {
        ok: false,
        error: "We could not send your message. Please call us or try again.",
      };
    }
    return { ok: true, mode: "webhook" };
  } catch {
    return {
      ok: false,
      error: "Something went wrong. Please call us or try again.",
    };
  }
}
