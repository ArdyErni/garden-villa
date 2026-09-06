"use client";

import Link from "next/link";
import { useState } from "react";
import Gallery from "@/components/ui/gallery";
import {
  galleryItems,
  filterLabels,
  type GalleryCategory,
} from "@/data/galleryItems";
import { ArrowRight, Camera, Fullscreen, Calendar } from "lucide-react";

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");

  const filtered =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  // Map a filtered index back to the full galleryItems index for the lightbox
  const openLightbox = (filteredIndex: number) => {
    const item = filtered[filteredIndex];
    const globalIndex = galleryItems.indexOf(item);
    setCurrentIndex(globalIndex);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-xl">
        {/* Top Editorial Header & Storytelling */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg pb-space-xl">
          <div className="space-y-space-xs max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest">
              <Camera className="h-5 w-5 text-primary" />
              Curated Visual Archive
            </div>
            <h1 className="font-display-hero text-headline-xl md:text-display-hero text-primary tracking-tight font-normal">
              Property Gallery
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Explore the serene corners, tranquil waters, and warm living
              spaces of our private Bataan villa. Every vista is designed for
              calm reflection and quiet celebration.
            </p>
          </div>
          {/* Quick Metrics */}
          <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm self-start md:self-auto">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase text-outline tracking-wider">
                Property Scope
              </span>
              <span className="font-headline-sm text-headline-sm text-primary">
                1,200 m²
              </span>
            </div>
            <div className="w-px h-8 bg-surface-container-highest" />
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase text-outline tracking-wider">
                Grounds
              </span>
              <span className="font-headline-sm text-headline-sm text-secondary">
                Botanical Sanctuary
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Controls & Counter Pill */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md py-space-sm mb-space-xl sticky top-20 z-30 bg-surface/95 backdrop-blur-md">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
            {filterLabels.map((f) => (
              <button
                key={f.value}
                className={
                  activeFilter === f.value
                    ? "px-space-md py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-primary text-on-primary shadow-sm"
                    : "px-space-md py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                }
                onClick={() => setActiveFilter(f.value)}
                type="button"
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider shrink-0 bg-surface-container-low px-3 py-1.5 rounded-full">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary" />
            <span>
              Showing {filtered.length} Curated Frame
              {filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg">
          {filtered.map((item, i) => {
            // Assign column spans based on position in the filtered set to preserve the mosaic layout
            const colSpan = (() => {
              const pos = i % 6;
              if (pos === 0) return "md:col-span-7";
              if (pos === 1) return "md:col-span-5";
              if (pos === 2) return "md:col-span-8";
              if (pos === 3) return "md:col-span-4";
              return "md:col-span-6";
            })();

            const aspectRatio = (() => {
              const pos = i % 6;
              if (pos === 0) return "aspect-[4/3] md:aspect-[16/11]";
              if (pos === 1) return "aspect-[4/3] md:aspect-[16/15]";
              if (pos === 2) return "aspect-[16/10]";
              return "aspect-[4/3]";
            })();

            return (
              <div
                key={item.src}
                className={`gallery-card ${colSpan} group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer`}
                onClick={() => openLightbox(i)}
              >
                <div
                  className={`relative w-full ${aspectRatio} overflow-hidden bg-surface-container`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    src={item.src}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-85 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-surface-bright/90 backdrop-blur-md rounded-full font-caption-eyebrow text-caption-eyebrow text-primary uppercase tracking-wider">
                      {filterLabels.find((f) => f.value === item.category)
                        ?.label ?? item.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-bright/90 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <Fullscreen className="h-5 w-5 text-primary" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-space-lg text-white">
                    <h3 className="font-headline-sm text-headline-sm font-serif text-white">
                      {item.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-surface-container-highest/90 mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Quote & Mood Interlude */}
        <div className="my-space-3xl py-space-2xl px-space-xl bg-surface-container-low rounded-2xl flex flex-col md:flex-row items-center justify-between gap-space-xl text-center md:text-left">
          <div className="max-w-xl space-y-space-xs">
            <span className="font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest text-secondary">
              The Atmosphere
            </span>
            <blockquote className="font-headline-md text-headline-md font-serif text-primary italic leading-snug">
              &ldquo;Quiet architecture that lets nature take center stage —
              where time slows down to the rhythm of rustling leaves.&rdquo;
            </blockquote>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <div className="flex flex-col items-center">
              <span className="font-headline-lg text-headline-lg text-primary font-serif">
                100%
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Exclusive Use
              </span>
            </div>
            <div className="w-px h-10 bg-surface-container-highest" />
            <div className="flex flex-col items-center">
              <span className="font-headline-lg text-headline-lg text-primary font-serif">
                15+
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Guest Capacity
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Reservation Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-primary text-on-primary p-space-2xl md:p-space-3xl shadow-md">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-primary-container/40 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-space-xl">
            <div className="space-y-space-xs max-w-xl">
              <span className="font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest text-secondary-fixed">
                Private Sanctuary Awaits
              </span>
              <h2 className="font-headline-xl text-headline-lg md:text-headline-xl text-surface-bright font-serif">
                Enchanted by what you see?
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                Reserve your dates at Garden Villa and experience private
                poolside mornings, open-air banquets, and total botanical
                seclusion in Bataan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0">
              <Link
                href="/availability"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg shadow-sm hover:bg-secondary-fixed-dim transition-all"
              >
                <span>Check Availability</span>
                <Calendar className="h-5 w-5 text-primary" />
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-container text-surface-bright font-label-lg text-label-lg px-space-lg py-3.5 rounded-lg hover:bg-tertiary transition-all"
              >
                <span>Explore The Villa</span>
                <ArrowRight className="h-5 w-5 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Gallery currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  );
}
