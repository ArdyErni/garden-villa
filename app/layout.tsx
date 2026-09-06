import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Garden Villa | Private Villa Retreat in Bataan, Philippines",
  description:
    "A private villa surrounded by greenery in Bataan, Philippines, designed for slow mornings, shared meals, and memorable stays. Check availability for your exclusive tropical sanctuary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${plusJakartaSans.variable} bg-surface font-body-md text-body-md text-on-surface antialiased`}
      >
        <SiteHeader />
        <main className="w-full pt-20 bg-surface">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
