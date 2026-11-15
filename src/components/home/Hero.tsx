import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { BUSINESS, HERO_IMAGE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[78vh] items-center bg-charcoal bg-cover bg-center"
      // If the image file is missing, the dark gradient below still renders.
      style={{ backgroundImage: `url(${HERO_IMAGE}), linear-gradient(135deg, #14130F 0%, #2a2519 100%)` }}
    >
      <div className="absolute inset-0 -z-10 bg-black/55" aria-hidden />
      <Container className="py-24">
        <div className="max-w-2xl text-white">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand">{BUSINESS.name}</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Find the Perfect Gift for Every Moment.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
            Unique and creative custom gifts for weddings, babies, couples and every special moment, beautifully presented.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/shop" size="lg">Explore Our Collection</Button>
            <Button href="/contact" size="lg" variant="light">Contact Us</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
