import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/link-button";
import { ArrowRight, Globe, BarChart3, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Strata Consulting — Web Development & Digital Optimization",
  description:
    "We build fast, accessible websites and help businesses optimize their digital footprint and get more from the platforms they already use.",
};

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "From landing pages to complex web applications. Fast, accessible, and built to convert.",
  },
  {
    icon: BarChart3,
    title: "Digital Footprint",
    description:
      "SEO, structured data, Core Web Vitals, and the technical layer that makes search engines trust you.",
  },
  {
    icon: Layers,
    title: "Platform Utilization",
    description:
      "Get more from the platforms you already pay for. We optimize how your stack works together.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <Badge variant="secondary" className="mb-6">
            Web Development &amp; Digital Optimization
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            Build websites that actually perform.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Strata Consulting builds fast, accessible websites and helps
            businesses optimize their digital presence from the ground up —
            from search rankings to platform ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <LinkButton href="/contact" size="lg">
              Start a project <ArrowRight className="ml-2 h-4 w-4" />
            </LinkButton>
            <LinkButton href="/services" size="lg" variant="outline">
              See what we do
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Three things we do well
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Every engagement lives in one of these categories. Often all three.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-foreground/5 border border-border flex items-center justify-center flex-shrink-0">
                  <Icon
                    className="h-5 w-5 text-foreground"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <LinkButton href="/services" variant="outline">
              Full service details <ArrowRight className="ml-2 h-4 w-4" />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="border border-border rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Tell us what you&apos;re building. We&apos;ll tell you whether we
            can help and how.
          </p>
          <LinkButton href="/contact" size="lg">
            Get in touch <ArrowRight className="ml-2 h-4 w-4" />
          </LinkButton>
        </div>
      </section>
    </>
  );
}
