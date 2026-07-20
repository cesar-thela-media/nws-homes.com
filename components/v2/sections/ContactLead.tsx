"use client";

import React, { useState } from "react";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CONTACT } from "@/lib/constants";
import { services } from "@/data/services";
import { t } from "@/components/v2/lib/typography";
import { cn } from "@/lib/utils";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zip: string;
  service: string;
  message: string;
}

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  zip: "",
  service: "",
  message: "",
};

function ContactInfoPanel() {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <div className="flex animate-in flex-col gap-6 fade-in slide-in-from-left-10 fill-mode-both duration-1000 ease-in-out">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <p className={t.label}>Free consultation</p>
        </div>
        <h2 className={cn(t.h2, "max-w-xl")}>
          Let&apos;s talk about your project and take it to the next level.
        </h2>
        <p className={cn(t.lead, "max-w-md")}>
          Tell us what you&apos;re dreaming of. We&apos;ll respond within one
          business day — real people, no automated runaround.
        </p>
      </div>

      <div className="flex animate-in flex-col justify-between gap-6 fade-in slide-in-from-left-10 fill-mode-both duration-1000 delay-100 ease-in-out sm:flex-row">
        <div className="flex flex-col gap-1">
          <p className="flex items-center gap-2 font-v2-sans text-sm font-medium text-muted-foreground">
            <Phone className="h-3.5 w-3.5" />
            Phone
          </p>
          <a
            href={CONTACT.phoneHref}
            className="font-v2-sans text-base font-semibold text-primary hover:underline"
          >
            {CONTACT.phone}
          </a>
          <a
            href={CONTACT.phoneMobileHref}
            className="font-v2-sans text-sm text-muted-foreground hover:text-primary"
          >
            Mobile: {CONTACT.phoneMobile}
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <p className="flex items-center gap-2 font-v2-sans text-sm font-medium text-muted-foreground">
            <Mail className="h-3.5 w-3.5" />
            Email
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="font-v2-sans text-base font-semibold text-primary hover:underline"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>

      <div className="flex animate-in flex-col gap-1 fade-in slide-in-from-left-10 fill-mode-both duration-1000 delay-100 ease-in-out">
        <p className="flex items-center gap-2 font-v2-sans text-sm font-medium text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          Location
        </p>
        <p className="font-v2-sans text-base font-semibold text-primary">{CONTACT.address}</p>
      </div>

      <Separator orientation="horizontal" />

      <div className="flex animate-in flex-col gap-3 fade-in slide-in-from-bottom-10 fill-mode-both duration-1000 delay-100 ease-in-out">
        <p className="font-v2-sans text-sm font-medium text-muted-foreground">Hours</p>
        <ul className="space-y-1 font-v2-sans text-base font-medium text-foreground">
          <li>{CONTACT.hours.weekday}</li>
          <li>{CONTACT.hours.saturday}</li>
          <li className="text-muted-foreground">{CONTACT.hours.sunday}</li>
        </ul>
      </div>
    </div>
  );
}

function ContactFormPanel() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [offlineNote, setOfflineNote] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setOfflineNote(false);
    setLoading(true);
    const { submitLead } = await import("@/lib/submitLead");
    const result = await submitLead({
      source: "nws-contact",
      firstName: formData.firstName,
      lastName: formData.lastName,
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      zip: formData.zip,
      service: formData.service,
      message: formData.message,
      submittedAt: new Date().toISOString(),
    });
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    if (result.mode === "offline") {
      setOfflineNote(true);
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="rounded-2xl border p-8 ring-0">
        <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
            <Check className="h-6 w-6 text-primary" strokeWidth={2.5} />
          </div>
          <p className={cn(t.h3, "text-foreground")}>Message sent!</p>
          <p className="text-muted-foreground">
            We&apos;ll be in touch within one business day.
          </p>
          {offlineNote ? (
            <p className="text-xs text-muted-foreground" data-testid="lead-offline-note">
              Preview mode: webhook not configured (NEXT_PUBLIC_N8N_WEBHOOK_URL).
            </p>
          ) : null}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full">
      <Card className="animate-in gap-6 rounded-2xl border p-8 ring-0 fade-in slide-in-from-right-10 fill-mode-both duration-1000 delay-100 ease-in-out md:gap-8">
        <CardHeader className="p-0">
          <CardTitle className={cn(t.h3, "text-primary")}>
            Start your project
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-4 sm:gap-4 lg:grid-cols-2">
                <div>
                  <Label htmlFor="firstName" className="sr-only">
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="h-9 shadow-xs dark:bg-background"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="sr-only">
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="h-9 shadow-xs dark:bg-background"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="you@email.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-9 shadow-xs dark:bg-background"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div>
                  <Label htmlFor="phone" className="sr-only">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-9 shadow-xs dark:bg-background"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="zip" className="sr-only">
                    ZIP code
                  </Label>
                  <Input
                    id="zip"
                    name="zip"
                    placeholder="ZIP code"
                    value={formData.zip}
                    onChange={handleChange}
                    className="h-9 shadow-xs dark:bg-background"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="service" className="sr-only">
                  Service
                </Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      service: value ?? "",
                    }))
                  }
                >
                  <SelectTrigger
                    id="service"
                    className="h-9! w-full shadow-xs dark:bg-background"
                  >
                    <SelectValue placeholder="What are you interested in?" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s.slug} value={s.slug}>
                        {s.navLabel}
                      </SelectItem>
                    ))}
                    <SelectItem value="other">Other / Not sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-24 resize-none shadow-xs dark:bg-background"
                  required
                />
              </div>

              {error && (
                <p className="rounded-lg bg-destructive/10 px-4 py-3 font-v2-sans text-sm text-destructive">
                  {error}
                </p>
              )}
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="h-10 cursor-pointer rounded-xl disabled:opacity-60"
              >
                {loading ? "Sending…" : "Submit inquiry"}
              </Button>
              <p className="text-center font-v2-sans text-xs text-muted-foreground">
                Free consultation + 5% off — mention the website when you call.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ContactLead() {
  return (
    <section className="py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
        <div className="grid grid-cols-12 content-center justify-between gap-6 sm:gap-8 md:gap-0">
          <div className="col-span-12 w-full md:col-span-6">
            <ContactInfoPanel />
          </div>
          <div className="col-span-1 hidden md:block" />
          <div className="col-span-12 w-full md:col-span-5">
            <ContactFormPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
