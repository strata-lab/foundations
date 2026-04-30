import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { LinkButton } from "@/components/link-button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Strata Consulting is a software consultancy that builds websites, optimizes digital presence, and helps businesses get more from their platforms.",
};

const values = [
  {
    title: "Boring correctness over novelty",
    body: "We use proven tools and well-understood patterns. Your website shouldn't be a science experiment.",
  },
  {
    title: "Performance is a feature",
    body: "A slow website loses deals. We treat Core Web Vitals as acceptance criteria, not afterthoughts.",
  },
  {
    title: "Accessible by default",
    body: "WCAG AA isn't a checkbox. Accessible sites are better sites — for users, for SEO, for everyone.",
  },
  {
    title: "Ship, then iterate",
    body: "Done and deployed beats perfect and delayed. We move fast, we test, and we improve.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          About Strata
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We&apos;re a software consultancy that helps businesses build and
          optimize their digital presence. Small team. High standards. No
          bullshit.
        </p>
      </div>

      <Separator className="mb-16" />

      {/* Mission */}
      <div className="max-w-2xl mb-16">
        <h2 className="text-xl font-bold tracking-tight mb-4">What we do</h2>
        <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
          <p>
            Strata Consulting was founded on a simple observation: most
            businesses have a digital presence problem, not a product problem.
            Great companies lose deals to competitors with faster websites,
            better search rankings, and tools that actually work together.
          </p>
          <p>
            We fix that. We build websites that load fast, rank well, and
            convert visitors into customers. We audit digital footprints and
            close the gaps that cost revenue. We look at the platforms you
            already pay for and help you actually use them.
          </p>
          <p>
            Every engagement is focused and time-boxed. We don&apos;t do
            retainers for their own sake. We come in, do the work, leave
            documentation, and hand it back to you in better shape than we
            found it.
          </p>
        </div>
      </div>

      <Separator className="mb-16" />

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-xl font-bold tracking-tight mb-10">How we work</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {values.map(({ title, body }) => (
            <div key={title}>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border border-border rounded-2xl p-8 sm:p-12 text-center">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
          Sounds like a fit?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          We work with a small number of clients at a time. Drop us a note and
          we&apos;ll see if there&apos;s a match.
        </p>
        <LinkButton href="/contact">
          Get in touch <ArrowRight className="ml-2 h-4 w-4" />
        </LinkButton>
      </div>
    </div>
  );
}
