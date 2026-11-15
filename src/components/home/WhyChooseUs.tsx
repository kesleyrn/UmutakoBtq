import { BadgeCheck, Gift, Headset, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";

const POINTS = [
  { icon: BadgeCheck, title: "Made for You", text: "Unique and creative custom gifts shaped around your occasion." },
  { icon: Gift, title: "Beautifully Presented", text: "Gifts that look as good as they feel to receive." },
  { icon: Sparkles, title: "For Every Occasion", text: "Weddings, new babies, welcomes, couples and more." },
  { icon: Headset, title: "Friendly Service", text: "Quick, helpful answers on WhatsApp, from choosing to ordering." },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Why choose us" title="Gifting made simple and special" align="center" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-lg border border-line p-6 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand-dark">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-charcoal-soft">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
