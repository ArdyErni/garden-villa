"use client";
console.log("PAGE RENDERED");
import { useState } from "react";
import Gallery from "@/components/ui/gallery";
export default function GalleryPage() {
    console.log("PAGE RENDERED1");
const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  return (
    <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}"
    }}
  />
  <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(40,51,49,0.04)]">
    <div className="bg-surface-container-low text-on-surface-variant text-center py-1.5 px-gutter-mobile md:px-gutter-desktop font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest">
      Bataan, Philippines • Private Villa Retreat
    </div>
    <div className="h-20 max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-sm">
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
      <nav
        className="hidden lg:flex items-center gap-space-lg"
        data-active-classes="bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-lg"
      >
        <a
          className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg"
          data-path="home"
          href="/"
        >
          Home
        </a>
        <a
          className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg"
          data-path="the-villa"
          href="#"
        >
          The Villa
        </a>
        <a
          aria-current="page"
          className="transition-colors py-2 px-3 bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-lg"
          data-path="gallery"
          href="#"
        >
          Gallery
        </a>
        <a
          className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg"
          data-path="amenities"
          href="#"
        >
          Amenities
        </a>
        <a
          className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg"
          data-path="availability"
          href="#"
        >
          Availability
        </a>
        <a
          className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg"
          data-path="location"
          href="#"
        >
          Location
        </a>
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
  <main className="w-full bg-surface">
    <div className="flex flex-col w-full">
      {/* Subtle Scrim Background Glow */}
      <div className="relative w-full max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-xl">
        {/* Top Editorial Header & Storytelling */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg pb-space-xl">
          <div className="space-y-space-xs max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest">
              <span className="material-symbols-outlined text-[14px]">
                photo_camera
              </span>
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
          {/* Quick Metrics / Meta Detail */}
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
          {/* Filter Chips */}
          <div
            className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar"
            id="gallery-filters"
          >
            <button
              className="filter-btn active-filter px-space-md py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-primary text-on-primary shadow-sm"
              data-filter="all"
              type="button"
            >
              All Photos
            </button>
            <button
              className="filter-btn px-space-md py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              data-filter="garden"
              type="button"
            >
              Garden &amp; Grounds
            </button>
            <button
              className="filter-btn px-space-md py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              data-filter="pool"
              type="button"
            >
              Private Pool
            </button>
            <button
              className="filter-btn px-space-md py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              data-filter="living"
              type="button"
            >
              Living &amp; Dining
            </button>
            <button
              className="filter-btn px-space-md py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              data-filter="kitchen"
              type="button"
            >
              Kitchen
            </button>
            <button
              className="filter-btn px-space-md py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              data-filter="exterior"
              type="button"
            >
              Villa Exterior
            </button>
          </div>
          {/* Photo Counter Tracker */}
          <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider shrink-0 bg-surface-container-low px-3 py-1.5 rounded-full">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary" />
            <span id="gallery-counter">Showing 9 Curated Frames</span>
          </div>
        </div>
        {/* Editorial Asymmetric Mosaic Gallery Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-space-lg"
          id="gallery-items-container"
        >
          {/* Photo 1: Feature Pool (Hero Anchor, 7 cols) */}
          <div
            className="gallery-card md:col-span-7 group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
            data-category="pool"
            onClick={() => {
                console.log("PHOTO 1 CLICKED");
                setCurrentIndex(0);
            }}
            >
            <div className="relative w-full aspect-[4/3] md:aspect-[16/11] overflow-hidden bg-surface-container">
              <img
                alt="Crystal Blue Private Pool & Sun Canopy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD-GErG7oCZP1ODKBIjossTC0YJSKHwSuz2te84MpZ5Bn3g-nwVwP4fplC9pxoaymLLqUqcr0P4x7-07pu4ziz5sJ_CcW9PW4smd3aeIxN0G4VdBGFlwT49dRehPfFXDFPz-gVmMs5k6oDJno4Pt3jjRQTmaTKH-v7TZVsuRH6XQUhQjbAbwHIY0gBAehm0gonixPTfwrJPGg5eUVsp8lh5TnckrJQajHyqSNyjELrkKzqv-I7IMhMdoyMYxMxAuxVltg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-85 transition-opacity" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2.5 py-1 bg-surface-bright/90 backdrop-blur-md rounded-full font-caption-eyebrow text-caption-eyebrow text-primary uppercase tracking-wider">
                  Private Pool
                </span>
                <span className="px-2.5 py-1 bg-secondary-container/95 text-on-secondary-container backdrop-blur-md rounded-full font-caption-eyebrow text-caption-eyebrow uppercase tracking-wider">
                  Signature Amenity
                </span>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-bright/90 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-[18px]">
                  fullscreen
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-space-lg text-white">
                <p className="font-caption-eyebrow text-caption-eyebrow text-secondary-fixed uppercase tracking-widest mb-1">
                  Outdoor Sanctuary
                </p>
                <h3 className="font-headline-md text-headline-md font-serif text-white">
                  Crystal Blue Private Pool &amp; Sun Canopy
                </h3>
                <p className="font-body-sm text-body-sm text-surface-container-highest/90 mt-1 max-w-md line-clamp-2">
                  Pebble wash coping, tranquil reflections, and broad
                  architectural shade sails overlooking lush tropical palms.
                </p>
              </div>
            </div>
          </div>
          {/* Photo 2: Garden Entrance & Statue (Editorial Pair, 5 cols) */}
          <div
            className="gallery-card md:col-span-5 group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
            data-category="garden"
            // onclick="openLightbox(1)"
          >
            <div className="relative w-full aspect-[4/3] md:aspect-[16/15] overflow-hidden bg-surface-container">
              <img
                alt="Balinese-Inspired Garden Statue & Lush Flora"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbKEPkE0Y1yb_i4JI5vEfyy_neviwWFf_SmD_UHtHqF7Duf7_PDs-1YwjSZehhPo_N8vC6vHStNpQUko7hA2YzRuYV_Q9d1_SgvLeTLyt7m2cnE89TInfaMcVd-nkej7Ie3GLrckFZ3D7ekNWhaEsUecXpEmt0zAvLoOgnGlzlmWv2uNJzTHgqLl-K6Vm-Yf_O5jXtIDzHiwoZjYnCh9a1AXF1HVBSD2hRKQ9yxoPRQYu9alMsIGVbqu2XkdfSLFC_J24"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-85 transition-opacity" />
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-surface-bright/90 backdrop-blur-md rounded-full font-caption-eyebrow text-caption-eyebrow text-primary uppercase tracking-wider">
                  Garden &amp; Grounds
                </span>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-bright/90 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-[18px]">
                  fullscreen
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-space-lg text-white">
                <p className="font-caption-eyebrow text-caption-eyebrow text-secondary-fixed uppercase tracking-widest mb-1">
                  Balinese Influence
                </p>
                <h3 className="font-headline-sm text-headline-sm font-serif text-white">
                  Carved Stone Deity &amp; Flora Path
                </h3>
                <p className="font-body-sm text-body-sm text-surface-container-highest/90 mt-1 line-clamp-2">
                  Hand-placed volcanic flagstones, cycads, and bird's nest ferns
                  welcoming each resident.
                </p>
              </div>
            </div>
          </div>
          {/* Photo 5: Main Villa Exterior & Lawns (Full Panoramic Span, 8 cols) */}
          <div
            className="gallery-card md:col-span-8 group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
            data-category="exterior"
            // onclick="openLightbox(4)"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
              <img
                alt="Modern Tropical Villa Exterior & Manicured Lawns"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqb2JGg7fb1VOAiQfsjA8MPq_vJrdKZrQPlYTkw6_CwkV7c9_E0IIVr2_Kf_t3RLgpR1wI5t3DQunbqz0CmeU5dYsZiAh7ke-5Jqh2nW1_oFE2ZbuS1vId3BoGd7FLBfmb31Rlo_g6EekuwM1raRrokMDOWDV8kvI8tNaoBnpeRtClIB98HaTGVqPv3ANfy4p2aozhI26Dtf-Is1GwpHTObn9fM2F01E4qS9CC5V-32QqIOfMCaSzTL-gl66t9b_qf_HM"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-65 group-hover:opacity-80 transition-opacity" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2.5 py-1 bg-surface-bright/90 backdrop-blur-md rounded-full font-caption-eyebrow text-caption-eyebrow text-primary uppercase tracking-wider">
                  Villa Exterior
                </span>
                <span className="px-2.5 py-1 bg-primary text-on-primary backdrop-blur-md rounded-full font-caption-eyebrow text-caption-eyebrow uppercase tracking-wider">
                  Master Compound
                </span>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-bright/90 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-[18px]">
                  fullscreen
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-space-lg text-white">
                <p className="font-caption-eyebrow text-caption-eyebrow text-secondary-fixed uppercase tracking-widest mb-1">
                  Architecture &amp; Landscape
                </p>
                <h3 className="font-headline-md text-headline-md font-serif text-white">
                  Modern Villa Facade &amp; Manicured Lawns
                </h3>
                <p className="font-body-sm text-body-sm text-surface-container-highest/90 mt-1 max-w-xl">
                  Deep overhangs, floor-to-ceiling mahogany glass apertures, and
                  golden sunburst trees sheltering private outdoor alcoves.
                </p>
              </div>
            </div>
          </div>
          {/* Feature Detail Card: Botanical Highlight (Editorial Accent, 4 cols) */}
          <div
            className="gallery-card md:col-span-4 group relative bg-surface-container-low rounded-xl p-space-xl flex flex-col justify-between shadow-sm overflow-hidden"
            data-category="garden"
          >
            <div className="space-y-space-md">
              <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined text-[24px]">
                  yard
                </span>
              </div>
              <span className="font-caption-eyebrow text-caption-eyebrow text-secondary uppercase tracking-widest block">
                Botanical Philosophy
              </span>
              <h4 className="font-headline-sm text-headline-sm text-primary font-serif">
                Immersed in Living Greenery
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Over forty distinct tropical specimens flourish across the
                estate, curating cooler ambient temperatures and birdsong from
                dawn till dusk.
              </p>
            </div>
            <div className="pt-space-md">
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-surface-container-lowest p-2.5 rounded-lg">
                  <span className="font-label-sm text-label-sm uppercase text-outline">
                    Species
                  </span>
                  <span className="block font-headline-sm text-headline-sm text-primary">
                    40+
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-2.5 rounded-lg">
                  <span className="font-label-sm text-label-sm uppercase text-outline">
                    Shade Canopy
                  </span>
                  <span className="block font-headline-sm text-headline-sm text-secondary">
                    75%
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Photo 4: Great Living & Dining Hall (6 cols) */}
          <div
            className="gallery-card md:col-span-6 group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
            data-category="living"
            // onclick="openLightbox(3)"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
              <img
                alt="Open Living Room with Fluted Wood Accents"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDak9W4GnZAzPewwkU6_m3HLCxO7l8UBZQmvBfp3t7vQyKnMBu_mvIMpMxxF4pDdakToPTmvGmLkZvJjlFgU73vp050y0X7JQ-lTTx6IjvPHVGdTmfRCK5bm9jmEeMZn2bstbPpJ4Y5N-gYrrBMLsWylfG7WWAsgYAoF93DHNje9XoNVXrs7p4BfX_e_B6H-WEN6TlQ3gfO1yww4D0TdiaihI_KJUNc100wsnqBeyYwkF5n_W2gE-9EGqPtVQnG630i7Xk"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-85 transition-opacity" />
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-surface-bright/90 backdrop-blur-md rounded-full font-caption-eyebrow text-caption-eyebrow text-primary uppercase tracking-wider">
                  Living &amp; Dining
                </span>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-bright/90 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-[18px]">
                  fullscreen
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-space-lg text-white">
                <p className="font-caption-eyebrow text-caption-eyebrow text-secondary-fixed uppercase tracking-widest mb-1">
                  Indoor Gathering
                </p>
                <h3 className="font-headline-sm text-headline-sm font-serif text-white">
                  Fluted Wood Hall &amp; Glass Dining Suite
                </h3>
                <p className="font-body-sm text-body-sm text-surface-container-highest/90 mt-1 line-clamp-2">
                  Natural timber battens, woven armchairs, high recessed
                  ceilings, and seamless courtyard views.
                </p>
              </div>
            </div>
          </div>
          {/* Photo 3: Gourmet Kitchen & Breakfast Bar (6 cols) */}
          <div
            className="gallery-card md:col-span-6 group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
            data-category="kitchen"
            // onclick="openLightbox(2)"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
              <img
                alt="Custom Oak Kitchen & Breakfast Bar"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSuXTVVwc3nhbSNV0Ew3nKvVT2Q69evN3BWc7iccIXCU7x2jwVmPtKvQkPFdIVmEQKc-tUllWhOq8Dz6MqsJO8VTessyP2pNnA8k0QTAnKjxNWeCCseKFkF2Sjyq4ZPJHROhCVw_o_jowkeUzRgckACzBjs7Bfl98_psoZ61pOWm9jLgnPgU3slujpVmeK0R6EPLpSLWazkyPFPurW5nwEgA42EqH_BDErX1WROxQEH1aTS4_GYbd5uMr-zECroTKtg0U"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-85 transition-opacity" />
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-surface-bright/90 backdrop-blur-md rounded-full font-caption-eyebrow text-caption-eyebrow text-primary uppercase tracking-wider">
                  Kitchen &amp; Bar
                </span>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-bright/90 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-[18px]">
                  fullscreen
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-space-lg text-white">
                <p className="font-caption-eyebrow text-caption-eyebrow text-secondary-fixed uppercase tracking-widest mb-1">
                  Culinary Space
                </p>
                <h3 className="font-headline-sm text-headline-sm font-serif text-white">
                  Custom Oak Joinery &amp; Breakfast Island
                </h3>
                <p className="font-body-sm text-body-sm text-surface-container-highest/90 mt-1 line-clamp-2">
                  Fully appointed for family banquets, espresso rituals, and
                  intimate midnight conversation.
                </p>
              </div>
            </div>
          </div>
          {/* Extra Curated Perspective 1: Veranda & Patio (4 cols) */}
          <div
            className="gallery-card md:col-span-4 group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
            data-category="exterior"
            // onclick="openLightbox(5)"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                data-alt="Warm sunlight on a wide concrete veranda terrace with potted monstera plants, teak deck chairs, and view towards the private pool at Garden Villa Bataan, editorial architectural photography, soft natural shadows."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvOGGxErWOVuoDL7TW0HJ1NRGFsqkjFj84VxkJA6xbq-wt8OP-XpciFueOj9PiNN8ajRAwG4gUsEvBiODxxCbc2itnTk2XFJM5HnLPfJDFT0WSXlJPWP3sokOPjTaU_dycD-sp-BHCc1GRNB17bE9RpGUZFd-MM4Yn-LMdGZgV312lQTWIAvV-QT5ewWZMyuvILjfGlSygHLjlUEWWm3sZ2CI-BpHI-H-lTtaTHoq7mjzdhl09UzxFzQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-85 transition-opacity" />
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-surface-bright/90 backdrop-blur-md rounded-full font-caption-eyebrow text-caption-eyebrow text-primary uppercase tracking-wider">
                  Veranda
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-space-md text-white">
                <h4 className="font-headline-sm text-headline-sm font-serif text-white">
                  Shaded Lanai Deck
                </h4>
                <p className="font-body-sm text-body-sm text-surface-container-highest/90 mt-0.5">
                  Where afternoon breezes settle effortlessly.
                </p>
              </div>
            </div>
          </div>
          {/* Extra Curated Perspective 2: Master Bedroom Haven (4 cols) */}
          <div
            className="gallery-card md:col-span-4 group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
            data-category="living"
            // onclick="openLightbox(6)"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                data-alt="Serene minimalist master bedroom at a private tropical retreat with white linen bedding, natural timber headboard, warm lighting, and a garden view window, luxury hospitality design."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEKSAk7KiMg0h2BavzOMVrLxB65JT8EpmmjhxBvNM84pyyHXJUzibAsGJ-8fDU2wn2Wb-yuvA4A555w8XciaGca_BaQVpOgzuy0pglrGHDPkA2OM39XkvaSl71sLR9tEwfPiZ66IEuDc4mJyfWFIstMfRZEj9tNFTCulgU82nPjZTegaOJaQM35zt8E3hkkUIy160ggGU7AmhmoxAEoY_vFtvlVu9e-xo2AQZemJ_ekUrScjTYXTrKEA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-85 transition-opacity" />
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-surface-bright/90 backdrop-blur-md rounded-full font-caption-eyebrow text-caption-eyebrow text-primary uppercase tracking-wider">
                  Bedroom Suite
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-space-md text-white">
                <h4 className="font-headline-sm text-headline-sm font-serif text-white">
                  Garden Master Suite
                </h4>
                <p className="font-body-sm text-body-sm text-surface-container-highest/90 mt-0.5">
                  Crisp linens, gentle acoustic privacy, and morning sun.
                </p>
              </div>
            </div>
          </div>
          {/* Extra Curated Perspective 3: Poolside Twilight (4 cols) */}
          <div
            className="gallery-card md:col-span-4 group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
            data-category="pool"
            // onclick="openLightbox(7)"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                data-alt="Illuminated night pool at a tropical villa with underwater turquoise lights, dark sky, silhouettes of tropical palm trees, and warm ambient lanterns on stone pathway, cozy luxurious evening atmosphere."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnhY8XyiL2xwRevP-XEotqiQeiPsCQHrWeTiRgzkm4PRIaTs7aveeEpO9D3chm13QmT2VjhTQjYx8OolihZjj7_OTV34B2e8a9cmDUWyE8Jz4WHGFHO6HMj3wJV0Z2qibCMiXVXV6jym1KFj5QOfNqGWDZujBgcwDFxjQv0marN_PiKCnW9AlhKl51aKnSa8EIhTmwu6gxoTf65m8drKsftgN5a9uMglbZnyHz1IjLvTuMchSQFnKUWw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-85 transition-opacity" />
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-surface-bright/90 backdrop-blur-md rounded-full font-caption-eyebrow text-caption-eyebrow text-primary uppercase tracking-wider">
                  Golden Hour
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-space-md text-white">
                <h4 className="font-headline-sm text-headline-sm font-serif text-white">
                  Dusk Reflections
                </h4>
                <p className="font-body-sm text-body-sm text-surface-container-highest/90 mt-0.5">
                  Underwater lighting as night settles over Mount Samat.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Editorial Quote & Mood Interlude */}
        <div className="my-space-3xl py-space-2xl px-space-xl bg-surface-container-low rounded-2xl flex flex-col md:flex-row items-center justify-between gap-space-xl text-center md:text-left">
          <div className="max-w-xl space-y-space-xs">
            <span className="font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest text-secondary">
              The Atmosphere
            </span>
            <blockquote className="font-headline-md text-headline-md font-serif text-primary italic leading-snug">
              “Quiet architecture that lets nature take center stage — where
              time slows down to the rhythm of rustling leaves.”
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
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg shadow-sm hover:bg-secondary-fixed-dim transition-all"
                data-path="availability"
                href="#"
              >
                <span>Check Availability</span>
                <span className="material-symbols-outlined text-[18px]">
                  calendar_month
                </span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-container text-surface-bright font-label-lg text-label-lg px-space-lg py-3.5 rounded-lg hover:bg-tertiary transition-all"
                data-path="the-villa"
                href="#"
              >
                <span>Explore The Villa</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Interactive Lightbox Modal */}
      <div
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg hidden opacity-0 transition-opacity duration-300 flex items-center justify-center p-4"
        id="lightbox-modal"
      >
        {/* Top Action Bar */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white z-20">
          <div className="flex items-center gap-3">
            <span
              className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider"
              id="lightbox-counter"
            >
              1 / 8
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span
              className="font-headline-sm text-body-md text-white/90 hidden sm:inline"
              id="lightbox-title"
            >
              Property Showcase
            </span>
          </div>
          <button
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            // onclick="closeLightbox()"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>
        {/* Navigation Arrows */}
        <button
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
        //   onClick="prevSlide()"
          type="button"
        >
          <span className="material-symbols-outlined text-[28px]">
            chevron_left
          </span>
        </button>
        <button
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
        //   onclick="nextSlide()"
          type="button"
        >
          <span className="material-symbols-outlined text-[28px]">
            chevron_right
          </span>
        </button>
        {/* Slide Content */}
        <div className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center justify-center">
          <img
            alt=""
            className="max-h-[72vh] w-auto max-w-full rounded-lg object-contain shadow-2xl transition-all duration-300"
            id="lightbox-img"
            src=""
          />
          <p
            className="mt-4 text-center font-body-md text-body-md text-surface-container-highest max-w-xl"
            id="lightbox-caption"
          />
        </div>
      </div>
      {/* Interactive Filter & Lightbox Vanilla JS */}
    </div>
  </main>
</>

  );
}