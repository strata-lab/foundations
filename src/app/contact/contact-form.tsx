"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContact, type ContactState } from "./actions";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center gap-4 py-12 text-center"
      >
        <CheckCircle className="h-10 w-10 text-foreground" aria-hidden="true" />
        <h2 className="text-xl font-semibold">Message sent</h2>
        <p className="text-muted-foreground max-w-sm">
          Thanks for reaching out. We&apos;ll be in touch within one business
          day.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-6" noValidate>
      {/* Honeypot — hidden from real users, bots fill it in */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
        tabIndex={-1}
      >
        <label htmlFor="website">Website (leave blank)</label>
        <input
          id="website"
          name="website"
          type="text"
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">
            Name <span aria-label="required">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Jane Smith"
            disabled={isPending}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">
            Email <span aria-label="required">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="jane@example.com"
            disabled={isPending}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Acme Corp (optional)"
          disabled={isPending}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">
          Message <span aria-label="required">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us what you're working on and how we can help…"
          disabled={isPending}
        />
      </div>

      {state.status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive"
        >
          <AlertCircle
            className="h-4 w-4 mt-0.5 flex-shrink-0"
            aria-hidden="true"
          />
          {state.message}
        </div>
      )}

      <Button type="submit" size="lg" disabled={isPending} className="sm:w-fit">
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
