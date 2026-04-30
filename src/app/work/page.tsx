import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/link-button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and examples from Strata Consulting engagements — website builds, digital optimization, and platform work.",
};

const placeholderCases = [
  {
    title: "Marketing site rebuild",
    tags: ["Web Development", "SEO"],
    teaser:
      "Rebuilt a professional services firm's website from scratch on Next.js. Lighthouse scores went from 40s to 98. Organic traffic up 60% in 90 days.",
  },
  {
    title: "Digital footprint audit",
    tags: ["Digital Footprint", "Platform Utilization"],
    teaser:
      "Audited a SaaS company's full digital presence. Found missing structured data, broken canonical tags, and $4k/month in redundant SaaS seats.",
  },
];

export default function WorkPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-2xl mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Work
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Real results from real engagements. Full case studies coming soon —
          client work is in progress.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-20">
        {placeholderCases.map((item) => (
          <div
            key={item.title}
            className="border border-border rounded-xl p-6 flex flex-col gap-4 bg-muted/20"
          >
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h2 className="font-semibold text-lg">{item.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {item.teaser}
            </p>
            <p className="text-xs text-muted-foreground italic">
              Full case study in progress
            </p>
          </div>
        ))}
      </div>

      <div className="border border-border rounded-2xl p-8 sm:p-12 text-center">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
          Want to be a case study?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          We&apos;re taking on a small number of founding clients at reduced
          rates in exchange for detailed testimonials.
        </p>
        <LinkButton href="/contact">
          Let&apos;s talk <ArrowRight className="ml-2 h-4 w-4" />
        </LinkButton>
      </div>
    </div>
  );
}
