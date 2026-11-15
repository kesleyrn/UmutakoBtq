import Link from "next/link";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { getActiveCategories } from "@/services/categories";

export async function Footer() {
  const categories = await getActiveCategories();
  const h = "mb-4 text-sm font-semibold uppercase tracking-wider text-white";
  const a = "text-sm text-white/70 transition-colors hover:text-white";
  const social = "rounded-full border border-white/25 p-2 transition-colors hover:border-brand hover:text-brand";

  return (
    <footer className="mt-24 bg-charcoal text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="gold" layout="stacked" className="h-24" />
          <p className="mt-4 text-sm text-white/70">{BUSINESS.tagline}.</p>
          <div className="mt-5 flex gap-3">
            <a href={BUSINESS.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={social}><Instagram className="h-4 w-4" /></a>
            {BUSINESS.facebookUrl && (
              <a href={BUSINESS.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={social}><Facebook className="h-4 w-4" /></a>
            )}
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className={h}>Explore</h2>
          <ul className="space-y-2.5">{NAV_LINKS.map((l) => <li key={l.href}><Link href={l.href} className={a}>{l.label}</Link></li>)}</ul>
        </nav>

        {categories.length > 0 && (
          <nav aria-label="Categories">
            <h2 className={h}>Categories</h2>
            <ul className="space-y-2.5">
              {categories.map((c) => <li key={c.id}><Link href={`/shop?category=${c.slug}`} className={a}>{c.name}</Link></li>)}
            </ul>
          </nav>
        )}

        <div>
          <h2 className={h}>Contact us</h2>
          <ul className="space-y-3 text-sm text-white/70">
            {BUSINESS.address && <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />{BUSINESS.address}</li>}
            {BUSINESS.phoneDisplay && (
              <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /><a href={`tel:${BUSINESS.phoneTel}`} className="hover:text-white">{BUSINESS.phoneDisplay}</a></li>
            )}
            {BUSINESS.email && (
              <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /><a href={`mailto:${BUSINESS.email}`} className="hover:text-white">{BUSINESS.email}</a></li>
            )}
            {BUSINESS.hours && <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />{BUSINESS.hours}</li>}
            <li className="flex gap-2"><Instagram className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /><a href={BUSINESS.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">@{BUSINESS.instagram.handle}</a></li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-wrap items-center justify-between gap-2 py-5 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <Link href="/admin/login" className="hover:text-white">Admin</Link>
        </Container>
      </div>
    </footer>
  );
}
