"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { submitLead } from "@/lib/submitLead";

const SERVICES = [
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Custom Home Build",
  "Room Addition",
  "Whole Home Reno",
  "Other",
];

const NEXT_STEPS = [
  { num: "1", label: "We read your message", sub: "Same business day" },
  { num: "2", label: "We call within 24 hrs", sub: "No automated systems" },
  { num: "3", label: "Free home visit", sub: "Firm quote at the visit" },
];

const fieldClass =
  "h-auto rounded-none border-0 border-b border-espresso/15 bg-transparent px-0 py-3 text-[15px] text-espresso shadow-none placeholder:text-sage/70 focus-visible:border-primary focus-visible:bg-primary/[0.03] focus-visible:ring-0";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [offlineNote, setOfflineNote] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [selected, setSelected] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setOfflineNote(false);
    setPending(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const result = await submitLead({
      source: "nws-contact-home",
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      service: selected || String(fd.get("service") || ""),
      message: String(fd.get("message") || ""),
      submittedAt: new Date().toISOString(),
    });
    setPending(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    if (result.mode === "offline") setOfflineNote(true);
    setSubmitted(true);
    form.reset();
    setSelected("");
  }

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
          <Check className="h-6 w-6 text-primary" strokeWidth={2.5} />
        </div>
        <p className="mb-2 font-sans text-xl text-espresso">Message Sent!</p>
        <p className="font-sans text-sm text-sage">
          We&apos;ll be in touch within 1 business day.
        </p>
        {offlineNote ? (
          <p className="mt-2 font-sans text-xs text-sage" data-testid="lead-offline-note">
            Preview mode: webhook not configured (NEXT_PUBLIC_N8N_WEBHOOK_URL).
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-6">
        <p className="mb-2.5 font-sans text-[10px] uppercase tracking-[0.16em] text-sage">
          What are you interested in?
        </p>
        <ToggleGroup
          type="single"
          value={selected}
          onValueChange={(v) => setSelected(v)}
          className="flex flex-wrap justify-start gap-2"
          variant="chip"
          size="sm"
        >
          {SERVICES.map((s) => (
            <ToggleGroupItem key={s} value={s} className="h-8 px-3.5">
              {s}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="mb-5">
        <Input name="name" required placeholder="Your Name" type="text" className={fieldClass} />
      </div>
      <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input name="phone" required placeholder="Your Phone" type="tel" className={fieldClass} />
        <Input name="email" required placeholder="Your Email" type="email" className={fieldClass} />
      </div>
      <div className="mb-7">
        <Textarea
          name="message"
          required
          placeholder="Tell us about your project"
          rows={4}
          className={cn(fieldClass, "min-h-[100px] resize-y")}
        />
      </div>

      {error ? (
        <p className="mb-4 font-sans text-sm text-red-700" role="alert" data-testid="lead-error">
          {error}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? "Sending..." : "Send Message →"}
      </Button>

      <div className="mt-7 border-t border-espresso/10 pt-6">
        <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.18em] text-sage">
          What happens next?
        </p>
        <div className="flex flex-col gap-3.5">
          {NEXT_STEPS.map((step) => (
            <div key={step.num} className="flex items-start gap-3.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <span className="font-sans text-[11px] font-bold text-primary">{step.num}</span>
              </div>
              <div>
                <p className="m-0 font-sans text-[13px] font-semibold text-espresso">{step.label}</p>
                <p className="m-0 font-sans text-[11px] text-sage">{step.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}
