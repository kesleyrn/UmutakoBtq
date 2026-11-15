import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { BUSINESS } from "@/lib/constants";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: `${BUSINESS.name} | ${BUSINESS.tagline}`, template: `%s | ${BUSINESS.name}` },
  description:
    "Thoughtful, beautifully presented gifts from Umutako Gift Boutik. Browse the collection and order easily on WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
