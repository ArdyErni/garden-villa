"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Availability", href: "/availability" },
  { label: "Location", href: "/location" },
];

function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log("[Mobile Menu] State changed:", mobileMenuOpen);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* =========================
          HEADER
      ========================== */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(40,51,49,0.04)]">
        <div className="bg-surface-container-low text-on-surface-variant text-center py-1.5 px-gutter-mobile md:px-gutter-desktop font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest">
          Bataan, Philippines • Private Villa Retreat
        </div>

        <div className="h-20 max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">
          {/* Logo */}
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

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-space-lg">
            {navLinks.map((link) => {
              const active = isActive(link.href, pathname);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "transition-colors py-2 px-3 bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-lg"
                      : "font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-space-sm">
            <Link
              href="/availability"
              className="inline-flex items-center justify-center bg-primary-container text-secondary-fixed font-label-md text-label-md px-space-md py-2.5 rounded-lg shadow-sm hover:bg-primary transition-all"
            >
              Check Availability
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => {
              console.log("[Mobile Menu] HAMBURGER CLICKED");
              console.log("[Mobile Menu] Current state:", mobileMenuOpen);
              setMobileMenuOpen(true);

              console.log("[Mobile Menu] setMobileMenuOpen(true) called");
            }}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            className="relative z-[100] lg:hidden inline-flex items-center justify-center w-12 h-12 shrink-0 rounded-lg text-on-surface-variant hover:bg-surface-container-low active:bg-surface-container-low transition-colors touch-manipulation"
          >
            <Menu size={26} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      {/* =========================
          MOBILE DRAWER

          IMPORTANT:
          This is OUTSIDE the header.
      ========================== */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => {
              console.log("[Mobile Menu] CLOSE BUTTON CLICKED");
              setMobileMenuOpen(false);
            }}
            className="absolute inset-0 bg-black/30"
          />

          {/* Drawer */}
          <aside className="absolute right-0 top-0 flex h-full w-[min(85%,360px)] flex-col bg-[#f8f7ef] shadow-2xl">
            {/* Drawer header */}
            <div className="flex h-20 items-center justify-between border-b border-black/10 bg-[#f8f7ef] px-6">
              <div className="flex items-center gap-space-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Garden Villa"
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

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-on-surface-variant hover:bg-black/5 transition-colors"
              >
                <X size={22} strokeWidth={1.8} />
              </button>
            </div>

            {/* Mobile navigation */}
            <nav className="flex flex-col gap-2 bg-[#f8f7ef] p-5">
              {navLinks.map((link) => {
                const active = isActive(link.href, pathname);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={
                      active
                        ? "bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-lg px-4 py-3.5"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-black/5 font-label-md text-label-md rounded-lg px-4 py-3.5 transition-colors"
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="mt-4 border-t border-black/10 pt-5">
                <Link
                  href="/availability"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center bg-primary-container text-secondary-fixed font-label-md text-label-md px-space-md py-3 rounded-lg shadow-sm hover:bg-primary transition-all"
                >
                  Check Availability
                </Link>
              </div>
            </nav>
            <div className="mt-auto border-t border-black/10 px-5 py-5 text-center">
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Developed by{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=61593952083483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  ABE Solutions
                </a>
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
