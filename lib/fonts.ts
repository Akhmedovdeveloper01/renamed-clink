import { Manrope, Playfair_Display } from "next/font/google";

export const fontDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic", "latin-ext"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const fontBody = Manrope({
  subsets: ["latin", "cyrillic", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});
