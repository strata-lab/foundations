import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { LinkButton } from "@/components/link-button";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strata Consulting delivers website development, digital footprint optimization, and platform utilization consulting for growing businesses.",
};

const services = [
  {
    id: "web-development",
    title: "Website Development",
    tagline: "Your website is your best salesperson. We make sure it performs.",
    description:
      "We build production-grade websites using modern frameworks — fast by default, accessible to all users, and optimized for every search engine from day one.",
    deliverables: [
      "Next.js App Router sites deployed on Vercel",
      "Core Web Vitals > 95 on every page",
      "WCAG AA accessibility compliance",
      "Semantic HTML and structured data baked in",
      "Mobile-first responsive layouts",
      "Custom CMS integration where needed",
    ],
  },
  {
    id: "digital-footprint",
    title: "Digital Footprint Optimization",
    tagline: "Make search engines, social platforms, and AI models trust you.",
    description:
      "Your digital footprint is more than a Google ranking. It's how buyers find you, how AI models cite you, and how your brand holds up across every channel.",
    deliverables: [
      "Technical SEO audit and remediation",
      "Structured data and JSON-LD implementation",
      "Open Graph and social card optimization",
      "Core Web Vitals and Lighthouse audit",
      "AI citation and brand-mention analysis",
      "Sitemap, robots.txt, and indexing hygiene",
    ],
  },
  {
    id: "platform-utilization",
    title: "Platform Utilization",
    tagline: "You're paying for platforms you're barely using.",
    description:
      "Most teams use 20% of what their SaaS stack can do. We audit what you have, identify the gaps, and build the integrations and automations that close them.",
    deliverables: [
      "Platform audit across your current stack",
      "Integration design and implementation",
      "Workflow automation (n8n, Zapier, custom)",
      "Data pipeline and reporting setup",
      "AI feature integration (LLM-powered workflows)",
      "Vendor consolidation recommendations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-2xl mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Services
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Three focused practices that cover the full lifecycle of a company
          building and growing its digital presence.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {services.map((service, i) => (
          <div key={service.id}>
            {i > 0 && <Separator className="mb-16" />}
            <div
              id={service.id}
              className="grid lg:grid-cols-2 gap-10 items-start"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                  {service.title}
                </h2>
                <p className="text-base font-medium text-foreground/70 mb-4 italic">
                  {service.tagline}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  What&apos;s included
                </h3>
                <ul className="flex flex-col gap-3" role="list">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 border border-border rounded-2xl p-8 sm:p-12 text-center">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
          Not sure which service fits?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Tell us what you&apos;re trying to accomplish. We&apos;ll figure out
          the right approach together.
        </p>
        <LinkButton href="/contact">
          Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
        </LinkButton>
      </div>
    </div>
  );
}
