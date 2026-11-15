import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { BUSINESS } from "@/lib/constants";

export function Welcome() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-dark">Welcome</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Welcome to {BUSINESS.name}</h2>
          <p className="mt-5 text-charcoal-soft">
            {BUSINESS.name} creates unique and creative custom gifts: bride and groom door hangers, welcome gifts, pregnancy and baby milestone gifts, curated gift sets for her and couple packages.
          </p>
          <p className="mt-4 text-charcoal-soft">
            Browse the collection online, then order in minutes on WhatsApp. We will help you choose something they will remember.
          </p>
        </div>
        <div className="flex justify-center rounded-lg border border-line p-10 sm:p-14">
          <Logo layout="stacked" className="h-40" />
        </div>
      </Container>
    </section>
  );
}
