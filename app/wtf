import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Garden Villa | Private Villa Retreat in Bataan, Philippines",
  description:
    "A private villa surrounded by greenery in Bataan, Philippines, designed for slow mornings, shared meals, and memorable stays. Check availability for your exclusive tropical sanctuary.",
};

type Category = "all" | "garden" | "pool" | "living" | "kitchen" | "exterior";
 
const filters: { label: string; value: Category }[] = [
  { label: "All Photos", value: "all" },
  { label: "Garden & Grounds", value: "garden" },
  { label: "Private Pool", value: "pool" },
  { label: "Living & Dining", value: "living" },
  { label: "Kitchen", value: "kitchen" },
  { label: "Villa Exterior", value: "exterior" },
];
const navLinks = [
  { label: "Home", path: "home", current: true },
  { label: "The Villa", path: "the-villa" },
  { label: "Gallery", path: "gallery" },
  { label: "Amenities", path: "amenities" },
  { label: "Availability", path: "availability" },
  { label: "Location", path: "location" },
];

const lightboxItems = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD04cRxolyj1-lwooWKDhdSL1prjDM6xUAuYrGFcVX5lH06jcI52dMNY7lDu-wiF_a_L1KOEapYrbOijsX9-MntQZLfU9PifpeqTKEVKPpV38UWLnyiL13jXaJQibAryKtr3zQITAN3Jemd5vOJsGZHWPmGy5FxeVm-pOcYVNGtc4xIk3bc-DnuaVGrROwGBb3XXwU__-pr6QS3WzsA-nHVnhdrpp1euhsyX4-aTYibYJfK1C5Fp09frBVIbYwkbJ5mhyA",
    title: "Crystal Blue Private Pool & Sun Canopy",
    caption:
      "Private tiled pool framed by pebble wash coping and lush tropical shrubbery under protective sun shades.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgjsvwaDExXofoBbnm-ii6i-tx__mj-DHEfClA4x_jIwyVMsufKOGgokMy7-vjJTBU1bwTyyT2whHewT7a7Y57xlPsnEzIIEP9KvM4rf_BXlxAd6utLOAQCwT_hoT9TXwJ3wV7hvOf40vzrp3eVl8o0A-GYySrxY3H8hLwcuEJwwiDO9V0NZej30yE2WO1BCos9pg1XGBbmwIyf5fW6pMbRxpGJPtp3UC94a6v5gpt7Zot-n5vW2sEugv6r3343V85_gw",
    title: "Balinese-Inspired Garden Statue & Lush Flora",
    caption:
      "Peaceful praying stone guardian surrounded by vibrant cycads, philodendrons, and weathered stone steps.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfJ-eYYOt-HPiTNT-eVd7MOUR_yOwZE45L6bOB8Zutsguw02gUXfLf16aKPGUVAB6wRyN3xtBdAI-gTUVyChu3NGZkrUK7tofRReUR0BxVhtGYFkbjD5qoV_7JJtPOOUmBXTFW8R9ioMnWF90G515s_ZjxJ7MTR5F52A_t90zelHKHKDuwm6KUSl9g2HPS0Vf6QqAnjrd5jS2xhH4C15GgbC4SVOhFWFXQLX4MAnqCPuapEr15Nde-Cjv-0AReCq_m8pQ",
    title: "Custom Oak Kitchen & Breakfast Bar",
    caption:
      "Warm natural cabinetry, deep black faucet accents, modern appliances, and comfortable bar seating.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-c9QNdWEkUqasqX0dZGZ0OOb-IVfzaybZRBqUFqOdJYzYdGOQolx_l8evyFIdkN8UO3HXPTJCpqz1ixmEuOzph79ZoGFWYnc7r91ccMxvzLMsFnTafZwQAc3RulvbvZYIJhfxJP5xLvBRL58eG0tbMXL0xdkoq-X1MxEYqPu2T5HTUhSXrB3qdc8ri4opdJ9ILVSydAGDAXSCVSElq9heNrpco1ucaS-2i5JvDr7aSdzpR3l2xvOMv9A4FQXnPlL2Hpw",
    title: "Open Living Room with Fluted Wood Accents",
    caption:
      "Airy great room layout featuring floor-to-ceiling sliding glass, ceiling fan cooling, and rich fluted wall details.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNX5QqJEhyWF9plyCPX8xcLilXKNqFU0eQq7PaEdQA2iuw_MkiMgtnHpZzl70i3n4J9IoKWT2jE5OmX1zVQtrT-ezomOc891ES4AP6FWH-r2giYXvG3lVxh6YuPvFDDvjRckV0NBCPjb0gwq8PsqF1-f_2VQ8DGv_tGk8d21Upw-PYICeWGf7tDJh8GDc-VJ9HVCuo1lbjaVKo1on_Hpb2YACAzDSMMgQVVXr1gbLoFAwMsFLIPRyVK6za9Z1VNeck3N0",
    title: "Modern Tropical Villa Exterior & Manicured Lawns",
    caption:
      "Contemporary architectural clean lines embedded in a flourishing botanical garden landscape under clear Bataan skies.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvOGGxErWOVuoDL7TW0HJ1NRGFsqkjFj84VxkJA6xbq-wt8OP-XpciFueOj9PiNN8ajRAwG4gUsEvBiODxxCbc2itnTk2XFJM5HnLPfJDFT0WSXlJPWP3sokOPjTaU_dycD-sp-BHCc1GRNB17bE9RpGUZFd-MM4Yn-LMdGZgV312lQTWIAvV-QT5ewWZMyuvILjfGlSygHLjlUEWWm3sZ2CI-BpHI-H-lTtaTHoq7mjzdhl09UzxFzQ",
    title: "Shaded Lanai Deck",
    caption:
      "Spacious transition between air-conditioned interiors and sunlit gardens, designed for slow afternoon coffee.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEKSAk7KiMg0h2BavzOMVrLxB65JT8EpmmjhxBvNM84pyyHXJUzibAsGJ-8fDU2wn2Wb-yuvA4A555w8XciaGca_BaQVpOgzuy0pglrGHDPkA2OM39XkvaSl71sLR9tEwfPiZ66IEuDc4mJyfWFIstMfRZEj9tNFTCulgU82nPjZTegaOJaQM35zt8E3hkkUIy160ggGU7AmhmoxAEoY_vFtvlVu9e-xo2AQZemJ_ekUrScjTYXTrKEA",
    title: "Garden Master Suite",
    caption:
      "Minimalist aesthetic offering tranquil views into private bamboo clusters with soft natural daylight.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnhY8XyiL2xwRevP-XEotqiQeiPsCQHrWeTiRgzkm4PRIaTs7aveeEpO9D3chm13QmT2VjhTQjYx8OolihZjj7_OTV34B2e8a9cmDUWyE8Jz4WHGFHO6HMj3wJV0Z2qibCMiXVXV6jym1KFj5QOfNqGWDZujBgcwDFxjQv0marN_PiKCnW9AlhKl51aKnSa8EIhTmwu6gxoTf65m8drKsftgN5a9uMglbZnyHz1IjLvTuMchSQFnKUWw",
    title: "Dusk Reflections by the Pool",
    caption: "Illuminated garden pathways and pool lights providing intimate ambiance for starlit gatherings.",
  },
];

export default function gallery({
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
        
      </body>
      
    </html>
    
  );
}