"use client";

import ContactForm from "@/components/contact/ContactForm";
import { CONTACT } from "@/lib/constants";

export default function ContactLeadHome() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-20">
        <div>
          <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Get in touch
          </p>
          <h2 className="m-0 font-serif text-[36px] leading-tight text-espresso sm:text-[42px]">
            Start your project with a free consultation.
          </h2>
          <p className="mt-4 max-w-[420px] font-sans text-base text-sage">
            Tell us about your home and goals. We respond within one business day —
            no automated call centers.
          </p>
          <div className="mt-8 space-y-3 font-sans text-sm text-espresso">
            <p className="m-0">
              <span className="text-sage">Office </span>
              <a className="font-semibold text-primary no-underline" href={CONTACT.phoneHref}>
                {CONTACT.phone}
              </a>
            </p>
            <p className="m-0">
              <span className="text-sage">Mobile </span>
              <a className="font-semibold text-primary no-underline" href={CONTACT.phoneMobileHref}>
                {CONTACT.phoneMobile}
              </a>
            </p>
            <p className="m-0">
              <span className="text-sage">Email </span>
              <a className="font-semibold text-primary no-underline" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </p>
            <p className="m-0 text-sage">{CONTACT.hours.weekday}</p>
            <p className="m-0 text-sage">{CONTACT.hours.saturday}</p>
          </div>
        </div>
        <div className="rounded-2xl border border-espresso/10 bg-plaster p-6 lg:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
