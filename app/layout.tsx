import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garden Villa | Private Villa Retreat in Bataan, Philippines",
  description:
    "A private villa surrounded by greenery in Bataan, Philippines, designed for slow mornings, shared meals, and memorable stays. Check availability for your exclusive tropical sanctuary.",
};

const navLinks = [
  { label: "Home", path: "home", current: true },
  { label: "The Villa", path: "the-villa" },
  { label: "Gallery", path: "gallery" },
  { label: "Amenities", path: "amenities" },
  { label: "Availability", path: "availability" },
  { label: "Location", path: "location" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-surface font-body-md text-body-md text-on-surface antialiased">
        {/* Site Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(40,51,49,0.04)]">
          <div className="bg-surface-container-low text-on-surface-variant text-center py-1.5 px-gutter-mobile md:px-gutter-desktop font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest">
            Bataan, Philippines • Private Villa Retreat
          </div>
          <div className="h-20 max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AEtjO1XPr2V-rY7YynA4bOvva2nU46WEZwsOEKzfgcCiU3jhRctQbmT_zV7OAMcu3epjVwU1XALyUlPqR3ypo_GS179kDVQ8M5e_ql2kmrq0Ar3l8ZebtRHlMD9NccARrTxzl_RRR5ZPlg1fGfiSgr1NgSlCZM5pP7hZ-YDStlADKjgSITT8jv1dOg7hRrhvoxxzS1xuT3Wx_mXSNH0c9LaY0dCHUtQ44HAeIdcR-jw4CNyT8GBvjBlIfN0ziljxAfve-eltg5z6PEthbg"
              />
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm tracking-tight text-primary">
                  Garden Villa
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                  Bataan
                </span>
              </div>
            </div>
            <nav className="hidden lg:flex items-center gap-space-lg">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  aria-current={link.current ? "page" : undefined}
                  className={
                    link.current
                      ? "transition-colors py-2 px-3 bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-lg"
                      : "font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg"
                  }
                  data-path={link.path}
                  href="#"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-space-sm">
              <a
                className="inline-flex items-center justify-center bg-primary-container text-secondary-fixed font-label-md text-label-md px-space-md py-2.5 rounded-lg shadow-sm hover:bg-primary transition-all"
                data-path="availability"
                href="#"
              >
                Check Availability
              </a>
            </div>
          </div>
        </header>

        <main className="w-full pt-20 bg-surface">{children}</main>

        {/* Site Footer */}
        <footer className="w-full bg-surface-container-low mt-space-section">
          <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-3xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl">
              <div className="md:col-span-5 space-y-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="font-headline-md text-headline-md text-primary">
                    Garden Villa
                  </span>
                  <span className="font-caption-eyebrow text-caption-eyebrow text-secondary uppercase tracking-widest">
                    • Bataan
                  </span>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm leading-relaxed font-normal">
                  A private villa retreat designed for slow mornings, shared meals, and
                  memorable stays.
                </p>
                <div className="pt-space-xs">
                  <span className="font-label-sm text-label-sm text-outline tracking-wide">
                    Exclusive Private Sanctuary • Mount Samat Foothills
                  </span>
                </div>
              </div>
              <div className="md:col-span-3 space-y-space-md">
                <h4 className="font-label-lg text-label-lg text-primary uppercase tracking-wider font-semibold">
                  The Retreat
                </h4>
                <ul className="space-y-space-xs">
                  <li className="leading-none">
                    <a
                      className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors inline-block py-1"
                      data-path="the-villa"
                      href="#"
                    >
                      The Villa
                    </a>
                  </li>
                  <li className="leading-none">
                    <a
                      className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors inline-block py-1"
                      data-path="amenities"
                      href="#"
                    >
                      Amenities &amp; Grounds
                    </a>
                  </li>
                  <li className="leading-none">
                    <a
                      className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors inline-block py-1"
                      data-path="gallery"
                      href="#"
                    >
                      Visual Journal
                    </a>
                  </li>
                  <li className="leading-none">
                    <a
                      className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors inline-block py-1"
                      data-path="availability"
                      href="#"
                    >
                      Rates &amp; Availability
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-4 space-y-space-md">
                <h4 className="font-label-lg text-label-lg text-primary uppercase tracking-wider font-semibold">
                  Inquiries &amp; Location
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Pilar, Bataan Peninsula, Philippines
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  stay@gardenvillabataan.ph
                  <br />
                  +63 (917) 800-VILLA
                </p>
                <div className="pt-space-xs">
                  <a
                    className="font-label-sm text-label-sm uppercase tracking-widest text-primary hover:text-primary-container font-semibold transition-colors"
                    data-path="location"
                    href="#"
                  >
                    View Travel &amp; Directions →
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-space-2xl pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <p>© 2025 Garden Villa Bataan. All rights reserved.</p>
              <div className="flex items-center gap-space-lg">
                <a className="hover:text-on-surface transition-colors" data-path="home" href="#">
                  Sanctuary Protocol
                </a>
                <a className="hover:text-on-surface transition-colors" data-path="home" href="#">
                  Privacy Policy
                </a>
                <a className="hover:text-on-surface transition-colors" data-path="home" href="#">
                  Guest Guidelines
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}