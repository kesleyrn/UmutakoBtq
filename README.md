# Umutako Gift Boutik

Gift catalogue website with WhatsApp ordering and an admin dashboard.
Next.js (App Router) + TypeScript + Tailwind CSS + Supabase.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the Supabase values
npm run dev
```

## Make it yours

- **Business details:** edit `src/lib/constants.ts` (address, phone, WhatsApp number, email, hours, Facebook). Anything left empty is hidden from the site. The WhatsApp number is where customer orders go, so it must be a WhatsApp number.
- **Photos:** add `public/images/hero.jpg`, `public/images/about.jpg` and `public/images/contact.jpg` for the page covers. Without them the covers show a dark gradient.
- **Logo:** files are in `public/logo/` (black for white backgrounds, gold for dark ones).
- **Colours and font:** `tailwind.config.ts` (gold `#B99853`, black `#14130F`, Montserrat).
- **Categories and products:** managed in the admin dashboard.

## Admin dashboard

- Sign in at `/admin/login` (there is also a small "Admin" link in the website footer).
- The first administrator is created in Supabase, see `supabase/README.md`.

## Structure

- `src/app/(public)`: public pages (home, about, shop, contact)
- `src/app/admin`: protected dashboard
- `src/components`: reusable UI grouped by feature
- `src/lib`: constants, WhatsApp builder, validation schemas, Supabase clients
- `src/services`: data access (server-side)
- `src/actions`: server actions for admin writes
- `supabase/`: SQL schema, policies and tests

## Security rules

- Only `NEXT_PUBLIC_*` variables reach the browser. The service role key stays server-side.
- Public reads and all admin writes are enforced by Row Level Security, not only by the UI.
