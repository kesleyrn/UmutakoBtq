import type { Metadata } from "next";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { BUSINESS, CONTACT_IMAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${BUSINESS.name} with your gift enquiry on WhatsApp.${BUSINESS.hours ? ` ${BUSINESS.hours}.` : ""}`,
};

// Only includes details that have been filled in.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: BUSINESS.name,
  ...(BUSINESS.phoneTel && { telephone: BUSINESS.phoneTel }),
  ...(BUSINESS.email && { email: BUSINESS.email }),
  ...(BUSINESS.address && { address: { "@type": "PostalAddress", streetAddress: BUSINESS.address } }),
  sameAs: [BUSINESS.instagram.url, ...(BUSINESS.facebookUrl ? [BUSINESS.facebookUrl] : [])],
};

export default function ContactPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHero title="Get in Touch with Us." subtitle="We are here to help you find the perfect gift." image={CONTACT_IMAGE} />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[22rem_1fr] lg:gap-14">
          <ContactInfo />
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Send us an enquiry</h2>
            <p className="mb-8 mt-2 text-charcoal-soft">Fill in your details and we will open WhatsApp with your message ready to send.</p>
            <ContactForm />
          </div>
        </Container>
      </section>

      {BUSINESS.address && (
        <section className="pb-16 sm:pb-20" aria-labelledby="map-heading">
          <Container>
            <h2 id="map-heading" className="mb-6 text-2xl font-semibold tracking-tight">Find us</h2>
            <MapEmbed query={BUSINESS.address} />
          </Container>
        </section>
      )}

      <CtaBanner title="We Would Love to Hear from You." text="Message us on WhatsApp and we will help you choose." primaryLabel="Browse the Collection" />
    </main>
  );
}
