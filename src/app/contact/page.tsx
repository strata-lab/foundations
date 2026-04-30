import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Strata Consulting. Tell us what you're building and we'll respond within one business day.",
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left column */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s talk
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Tell us what you&apos;re working on. We&apos;ll tell you honestly
            whether we can help and what the engagement would look like.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-foreground/5 border border-border flex items-center justify-center flex-shrink-0">
                <Mail className="h-4 w-4 text-foreground" aria-hidden="true" />
              </div>
              <div>
                <p className="font-medium text-sm mb-0.5">Email us directly</p>
                <a
                  href="mailto:hello@strataconsult.io"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  hello@strataconsult.io
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-foreground/5 border border-border flex items-center justify-center flex-shrink-0">
                <Clock
                  className="h-4 w-4 text-foreground"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="font-medium text-sm mb-0.5">Response time</p>
                <p className="text-sm text-muted-foreground">
                  Within one business day
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
