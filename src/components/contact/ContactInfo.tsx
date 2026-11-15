import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { greetingUrl } from "@/lib/whatsapp";

const link = "font-medium hover:text-brand-dark";

export function ContactInfo() {
  const rows = [
    BUSINESS.address && { icon: MapPin, label: "Address", body: (
      <>
        {BUSINESS.address}
        <br />
        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address)}`} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-dark hover:underline">
          Open in Google Maps
        </a>
      </>
    ) },
    BUSINESS.phoneDisplay && { icon: Phone, label: "Telephone", body: <a href={`tel:${BUSINESS.phoneTel}`} className={link}>{BUSINESS.phoneDisplay}</a> },
    BUSINESS.whatsappNumber && { icon: MessageCircle, label: "WhatsApp", body: <a href={greetingUrl()} target="_blank" rel="noopener noreferrer" className={link}>{BUSINESS.phoneDisplay || `+${BUSINESS.whatsappNumber}`}</a> },
    BUSINESS.email && { icon: Mail, label: "Email", body: <a href={`mailto:${BUSINESS.email}`} className={link}>{BUSINESS.email}</a> },
    BUSINESS.hours && { icon: Clock, label: "Business hours", body: <>{BUSINESS.hours}</> },
    { icon: Instagram, label: "Instagram", body: <a href={BUSINESS.instagram.url} target="_blank" rel="noopener noreferrer" className={link}>@{BUSINESS.instagram.handle}</a> },
    BUSINESS.facebookUrl && { icon: Facebook, label: "Facebook", body: <a href={BUSINESS.facebookUrl} target="_blank" rel="noopener noreferrer" className={link}>{BUSINESS.name}</a> },
  ].filter((r): r is Exclude<typeof r, string> => typeof r !== "string");

  return (
    <div className="rounded-lg border border-line bg-white p-6 sm:p-8">
      <h2 className="text-xl font-semibold">{BUSINESS.name}</h2>
      <dl className="mt-6 space-y-5">
        {rows.map(({ icon: Icon, label, body }) => (
          <div key={label} className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-dark"><Icon className="h-4 w-4" aria-hidden /></span>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-charcoal-soft">{label}</dt>
              <dd className="mt-0.5 text-sm">{body}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
