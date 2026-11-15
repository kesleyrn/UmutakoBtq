export type Business = {
  name: string;
  tagline: string;
  address: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsappNumber: string;
  email: string;
  instagram: { handle: string; url: string };
  facebookUrl: string;
  hours: string;
};

/**
 * Business details live here. Anything left empty ("") is simply hidden from the website.
 * Email and Facebook are still empty: add them when available.
 */
export const BUSINESS: Business = {
  name: "Umutako Gift Boutik",
  tagline: "Thoughtful gifts, beautifully presented",
  address: "Town Center Building, F2B 25, Kigali, Rwanda",
  phoneDisplay: "+250 791 896 669",
  phoneTel: "+250791896669",
  whatsappNumber: "250791896669", // digits only. Customer orders go to this number, so it must be on WhatsApp.
  email: "",
  instagram: { handle: "umutako_gift_boutik", url: "https://www.instagram.com/umutako_gift_boutik/" },
  facebookUrl: "",
  hours: "Monday to Saturday, 9:00 AM to 7:00 PM. Sunday closed.",
};

export const PAGE_SIZE = 12;
export const HOME_NEW_ARRIVALS_COUNT = 8;


export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const SORT_OPTIONS = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
] as const;

export type SortValue = (typeof SORT_OPTIONS)[number]["value"];

/** Drop a bedroom photo here (public/images/hero.jpg). Without it the hero shows a dark gradient. */
export const HERO_IMAGE = "/images/hero.jpg";

export const ABOUT_IMAGE = "/images/about.jpg";
export const CONTACT_IMAGE = "/images/contact.jpg";
