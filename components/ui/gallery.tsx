"use client";

import { useEffect } from "react";

export const galleryItems = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD04cRxolyj1-lwooWKDhdSL1prjDM6xUAuYrGFcVX5lH06jcI52dMNY7lDu-wiF_a_L1KOEapYrbOijsX9-MntQZLfU9PifpeqTKEVKPpV38UWLnyiL13jXaJQibAryKtr3zQITAN3Jemd5vOJsGZHWPmGy5FxeVm-pOcYVNGtc4xIk3bc-DnuaVGrROwGBb3XXwU__-pr6QS3WzsA-nHVnhdrpp1euhsyX4-aTYibYJfK1C5Fp09frBVIbYwkbJ5mhyA",
    title: "Crystal Blue Private Pool & Sun Canopy",
    caption:
      "Private tiled pool framed by pebble wash coping and lush tropical shrubbery under protective sun shades.",
    category: "pool",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgjsvwaDExXofoBbnm-ii6i-tx__mj-DHEfClA4x_jIwyVMsufKOGgokMy7-vjJTBU1bwTyyT2whHewT7a7Y57xlPsnEzIIEP9KvM4rf_BXlxAd6utLOAQCwT_hoT9TXwJ3wV7hvOf40vzrp3eVl8o0A-GYySrxY3H8hLwcuEJwwiDO9V0NZej30yE2WO1BCos9pg1XGBbmwIyf5fW6pMbRxpGJPtp3UC94a6v5gpt7Zot-n5vW2sEugv6r3343V85_gw",
    title: "Balinese-Inspired Garden Statue & Lush Flora",
    caption:
      "Peaceful praying stone guardian surrounded by vibrant cycads, philodendrons, and weathered stone steps.",
    category: "garden",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfJ-eYYOt-HPiTNT-eVd7MOUR_yOwZE45L6bOB8Zutsguw02gUXfLf16aKPGUVAB6wRyN3xtBdAI-gTUVyChu3NGZkrUK7tofRReUR0BxVhtGYFkbjD5qoV_7JJtPOOUmBXTFW8R9ioMnWF90G515s_ZjxJ7MTR5F52A_t90zelHKHKDuwm6KUSl9g2HPS0Vf6QqAnjrd5jS2xhH4C15GgbC4SVOhFWFXQLX4MAnqCPuapEr15Nde-Cjv-0AReCq_m8pQ",
    title: "Custom Oak Kitchen & Breakfast Bar",
    caption:
      "Warm natural cabinetry, deep black faucet accents, modern appliances, and comfortable bar seating.",
    category: "kitchen",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-c9QNdWEkUqasqX0dZGZ0OOb-IVfzaybZRBqUFqOdJYzYdGOQolx_l8evyFIdkN8UO3HXPTJCpqz1ixmEuOzph79ZoGFWYnc7r91ccMxvzLMsFnTafZwQAc3RulvbvZYIJhfxJP5xLvBRL58eG0tbMXL0xdkoq-X1MxEYqPu2T5HTUhSXrB3qdc8ri4opdJ9ILVSydAGDAXSCVSElq9heNrpco1ucaS-2i5JvDr7aSdzp3r2l2xvOMv9A4FQXnPlL2Hpw",
    title: "Open Living Room with Fluted Wood Accents",
    caption:
      "Airy great room layout featuring floor-to-ceiling sliding glass, ceiling fan cooling, and rich fluted wall details.",
    category: "living",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNX5QqJEhyWF9plyCPX8xcLilXKNqFU0eQq7PaEdQA2iuw_MkiMgtnHpZzl70i3n4J9IoKWT2jE5OmX1zVQtrT-ezomOc891ES4AP6FWH-r2giYXvG3lVxh6YuPvFDDvjRckV0NBCPjb0gwq8PsqF1-f_2VQ8DGv_tGk8d21Upw-PYICeWGf7tDJh8GDc-VJ9HVCuo1lbjaVKo1on_Hpb2YACAzDSMMgQVVXr1gbLoFAwMsFLIPRyVK6za9Z1VNeck3N0",
    title: "Modern Tropical Villa Exterior & Manicured Lawns",
    caption:
      "Contemporary architectural clean lines embedded in a flourishing botanical garden landscape under clear Bataan skies.",
    category: "exterior",
  },
  {
    src: "placeholder",
    title: "Shaded Lanai Deck",
    caption:
      "Spacious transition between air-conditioned interiors and sunlit gardens, designed for slow afternoon coffee.",
    category: "exterior",
  },
  {
    src: "placeholder",
    title: "Garden Master Suite",
    caption:
      "Minimalist aesthetic offering tranquil views into private bamboo clusters with soft natural daylight.",
    category: "living",
  },
  {
    src: "placeholder",
    title: "Dusk Reflections by the Pool",
    caption:
      "Illuminated garden pathways and pool lights providing intimate ambiance for starlit gatherings.",
    category: "pool",
  },
];

type GalleryProps = {
  currentIndex: number | null;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function Gallery({
  currentIndex,
  setCurrentIndex,
}: GalleryProps) {
  const isLightboxOpen = currentIndex !== null;

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const nextSlide = () => {
    setCurrentIndex((current) => {
      if (current === null) return 0;

      return (current + 1) % galleryItems.length;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((current) => {
      if (current === null) return 0;

      return (
        (current - 1 + galleryItems.length) %
        galleryItems.length
      );
    });
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = isLightboxOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  if (currentIndex === null) {
    return null;
  }

  const item = galleryItems[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4">
      
      {/* Top Action Bar */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white z-20">
        <div className="flex items-center gap-3">
          <span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider">
            {currentIndex + 1} / {galleryItems.length}
          </span>

          <span className="w-1 h-1 rounded-full bg-white/40" />

          <span className="font-headline-sm text-body-md text-white/90 hidden sm:inline">
            {item.title}
          </span>
        </div>

        <button
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          onClick={closeLightbox}
          type="button"
        >
          <span className="material-symbols-outlined text-[24px]">
            close
          </span>
        </button>
      </div>

      {/* Previous */}
      <button
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
        onClick={prevSlide}
        type="button"
      >
        <span className="material-symbols-outlined text-[28px]">
          chevron_left
        </span>
      </button>

      {/* Next */}
      <button
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
        onClick={nextSlide}
        type="button"
      >
        <span className="material-symbols-outlined text-[28px]">
          chevron_right
        </span>
      </button>

      {/* Image */}
      <div className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center justify-center">
        <img
          alt={item.title}
          className="max-h-[72vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          src={item.src}
        />

        <p className="mt-4 text-center font-body-md text-body-md text-surface-container-highest max-w-xl">
          {item.caption}
        </p>
      </div>
    </div>
  );
}