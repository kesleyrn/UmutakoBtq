import type { Config } from "tailwindcss";

// Colours come from the Umutako Gift Boutik logo: gold on black. Pages stay white.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#B99853", // logo gold: buttons, borders, icons
          hover: "#C8AB6E",   // lighter gold for hover fills
          dark: "#7D5F1A",    // darker gold for text on white (readable)
          soft: "#F8F3E6",    // faint gold tint for small highlights
        },
        charcoal: { DEFAULT: "#14130F", soft: "#5E5B53" }, // logo black and a muted grey
        line: "#E6E3DC",
        danger: "#B3261E", // errors only
      },
      fontFamily: { sans: ["var(--font-montserrat)", "system-ui", "sans-serif"] },
      maxWidth: { page: "76rem" },
    },
  },
  plugins: [],
};

export default config;
