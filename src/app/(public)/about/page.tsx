import type { Metadata } from "next";
import { BadgeCheck, Eye, HeartHandshake, ShieldCheck, Sparkles, Target, TrendingUp } from "lucide-react";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ABOUT_IMAGE, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `${BUSINESS.name} is a gift boutique with thoughtful, beautifully presented gifts for every occasion.`,
};

const VALUES = [
  { icon: BadgeCheck, title: "Quality", text: "We choose gifts for their materials, finish and lasting value." },
  { icon: HeartHandshake, title: "Customer Satisfaction", text: "Every customer deserves helpful, friendly and honest service." },
  { icon: Sparkles, title: "Elegance", text: "Refined presentation that makes every gift feel special." },
  { icon: ShieldCheck, title: "Reliability", text: "We do what we say, so you can order with confidence." },
  { icon: TrendingUp, title: "Continuous Improvement", text: "We keep growing our range and service to serve you better." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero title={`About ${BUSINESS.name}.`} subtitle="Discover the passion behind thoughtful, beautifully presented gifts." image={ABOUT_IMAGE} />

      <section className="py-20 sm:py-24" aria-labelledby="who-heading">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-dark">Who we are</p>
            <h2 id="who-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">A gift boutique built on thoughtfulness</h2>
          </div>
          <div className="space-y-4 text-charcoal-soft">
            <p>
              {BUSINESS.name} is a gift boutique in Kigali. We create unique and creative custom gifts, including bride and groom door hangers,
              welcome gifts, pregnancy and baby milestone gifts, curated gift sets for her and couple packages.
            </p>
            <p>
              Our focus is simple: help you find a gift that shows you care, and make ordering it as easy as sending a message.
            </p>
            <p>Browse the collection online and order directly on WhatsApp, visit us at Town Center Building, or follow us on Instagram to see what is new.</p>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-20 sm:py-24">
        <Container className="grid gap-6 md:grid-cols-2">
          {[
            { icon: Target, label: "Our Mission", text: "To help people share love and appreciation through thoughtful, beautifully presented gifts." },
            { icon: Eye, label: "Our Vision", text: "To become a trusted destination for gifts, recognised for quality, variety and excellent customer service." },
          ].map(({ icon: Icon, label, text }) => (
            <article key={label} className="rounded-lg bg-white p-8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand-dark"><Icon className="h-5 w-5" aria-hidden /></span>
              <h2 className="mt-5 text-xl font-semibold">{label}</h2>
              <p className="mt-3 text-charcoal-soft">{text}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="values-heading">
        <Container>
          <SectionHeading eyebrow="What guides us" title="Our Core Values" align="center" />
          <h2 id="values-heading" className="sr-only">Core values</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-lg border border-line p-6 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-brand-dark"><Icon className="h-5 w-5" aria-hidden /></span>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-charcoal-soft">{text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner title="Discover a Gift You Will Love." text="Explore our collection of thoughtful gifts." primaryLabel="Explore Our Collection" />
    </main>
  );
}
