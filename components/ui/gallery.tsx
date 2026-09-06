"use client";

import { useCallback, useEffect } from "react";
import { galleryItems } from "@/data/galleryItems";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryProps = {
  currentIndex: number | null;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function Gallery({
  currentIndex,
  setCurrentIndex,
}: GalleryProps) {
  const isLightboxOpen = currentIndex !== null;

  const closeLightbox = useCallback(
    () => setCurrentIndex(null),
    [setCurrentIndex],
  );

  const nextSlide = useCallback(
    () =>
      setCurrentIndex((current) =>
        current === null ? 0 : (current + 1) % galleryItems.length,
      ),
    [setCurrentIndex],
  );

  const prevSlide = useCallback(
    () =>
      setCurrentIndex((current) =>
        current === null
          ? 0
          : (current - 1 + galleryItems.length) % galleryItems.length,
      ),
    [setCurrentIndex],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, closeLightbox, nextSlide, prevSlide]);

  useEffect(() => {
    document.body.style.overflow = isLightboxOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  if (currentIndex === null) return null;

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
          <X className="h-5 w-5 text-primary" />
        </button>
      </div>

      {/* Previous */}
      <button
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
        onClick={prevSlide}
        type="button"
      >
        <ChevronLeft className="h-5 w-5 text-primary" />
      </button>

      {/* Next */}
      <button
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
        onClick={nextSlide}
        type="button"
      >
        <ChevronRight className="h-5 w-5 text-primary" />
      </button>

      {/* Image */}
      <div className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={item.alt}
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
