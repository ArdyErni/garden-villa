export default function Home() {
  return (
    <>
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
              aria-current="page"
              className="transition-colors py-2 px-3 bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-lg"
              data-path="home"
              href="#"
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
              className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg"
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
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Immersive Hero Section */}
          <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden -mt-20">
            {/* Hero Background with Subtle Gradient Scrim */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXxA3EXpOJ_PwsbqFw6IEYplHiPxzpuV7Veix1TbfHdwpAZ-GBvmWXIP2ZYqedLHDqEB5WAoBlYZM1omTR_IY1c5NK03CdwhbrZGjSJGlZG1Ntz25khUtLbJCQF7bVTiKQ7B5tT_ENA-ahqOWBi6jVy2FhoFPcqx7il7JSFYFHd8qhfpj84PlJ6pVwM-iYt9_9rwTCSfFVoOoK1XRtsIZfVtuNz3LRa_buMUECbGER5SJhODv3pfawW0cB2lHOex6xsSs")`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/25 to-surface"></div>
            {/* Hero Content */}
            <div className="relative z-10 max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop pt-28 pb-16 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-bright/90 backdrop-blur-md shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-caption-eyebrow text-caption-eyebrow uppercase text-primary tracking-widest">
                  Exclusive Villa Sanctuary
                </span>
              </div>
              <h1 className="font-display-hero text-display-hero text-surface-bright drop-shadow-sm max-w-3xl mb-4">
                Garden Villa
              </h1>
              <p className="font-headline-md text-headline-md text-secondary-fixed max-w-2xl font-light italic mb-6">
                A Garden Retreat in Bataan
              </p>
              <p className="font-body-xl text-body-xl text-surface-container-lowest/95 max-w-xl mb-10 leading-relaxed font-light">
                A private villa surrounded by greenery, designed for slow
                mornings, shared meals, and memorable stays.
              </p>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-container hover:bg-primary text-secondary-fixed px-8 py-3.5 rounded-lg font-label-lg text-label-lg shadow-md transition-all duration-200"
                  data-path="availability"
                  href="#"
                >
                  Check Availability
                </a>
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-surface/90 hover:bg-surface text-primary px-8 py-3.5 rounded-lg font-label-lg text-label-lg shadow-sm backdrop-blur-md transition-all duration-200"
                  href="#welcome"
                >
                  Explore the Villa
                </a>
              </div>
              {/* Quick Highlights Floating Pill */}
              <div className="mt-16 hidden md:flex items-center gap-8 px-8 py-3.5 rounded-full bg-surface-bright/90 backdrop-blur-md shadow-sm text-on-surface-variant font-label-md text-label-md">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-primary">
                    pool
                  </span>
                  Private Plunge Pool
                </span>
                <span className="text-outline-variant">•</span>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-primary">
                    potted_plant
                  </span>
                  Manicured Grounds
                </span>
                <span className="text-outline-variant">•</span>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-primary">
                    lock_clock
                  </span>
                  100% Private Access
                </span>
              </div>
            </div>
          </section>
          {/* Welcome / Editorial Intro Section */}
          <section
            className="w-full py-space-3xl lg:py-space-4xl max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop"
            id="welcome"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Editorial Column */}
              <div className="lg:col-span-6 flex flex-col items-start space-y-6">
                <span className="font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest text-secondary">
                  Quiet Tropical Living
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary leading-snug">
                  An intimate sanctuary nestled in the lush tropical landscape
                  of Bataan.
                </h2>
                <div className="w-12 h-0.5 bg-secondary-fixed-dim rounded-full my-2"></div>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Surrounded by native palms, flowering hedges, and gentle shade
                  sails, Garden Villa was conceptualized as a serene oasis away
                  from urban rush. Here, daily itineraries dissolve into
                  sun-warmed swims, long unhurried breakfasts outdoors, and
                  evening toasts under starry coastal skies.
                </p>
                <p className="font-body-md text-body-md text-outline leading-relaxed">
                  Whether you are reuniting with family, retreating with close
                  friends, or curating an intimate celebration, the entire
                  grounds belong exclusively to your party for an entirely
                  secluded stay.
                </p>
                <div className="pt-4 flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="font-headline-lg text-headline-lg text-primary font-display-hero">
                      100%
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                      Exclusive Use
                    </span>
                  </div>
                  <div className="h-10 w-[1px] bg-outline-variant/60"></div>
                  <div className="flex flex-col">
                    <span className="font-headline-lg text-headline-lg text-primary font-display-hero">
                      Up to 15
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                      Day &amp; Night Capacity
                    </span>
                  </div>
                  <div className="h-10 w-[1px] bg-outline-variant/60"></div>
                  <div className="flex flex-col">
                    <span className="font-headline-lg text-headline-lg text-primary font-display-hero">
                      2.5 hrs
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                      From Metro Manila
                    </span>
                  </div>
                </div>
              </div>
              {/* Right Image Block */}
              <div className="lg:col-span-6">
                <div className="relative group rounded-xl overflow-hidden shadow-lg bg-surface-container">
                  <img
                    alt="Exterior view of Garden Villa with manicured lawns and stone footpaths"
                    className="w-full h-[480px] lg:h-[560px] object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnmdNRRMrxZEdS-_cOmfdT5bfkZIIfKJNg7rpyOrx-Hyx0VrJHsa0-CbN1fhzU8vrinCYElafmAjNbyId2ZDRV4ZzzRNjziokLZFgIQSuFu593VIdJx7cmxPJq7OOiVGTgIs1t-sNkHJ_Ubgg-iEMDvLpz9fP1LC7oGzs8DjrG1NusjetG8o8O8D7A_3A0fdjHS3h9rJaEjvGbyWZt42qYv8-PKAxDZtUVLg0SW9TMr-gga9B8Dxju6WHMq38B_9ysdXA"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-surface-bright/90 backdrop-blur-md shadow-sm">
                    <p className="font-label-md text-label-md text-primary font-medium flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-lg">
                        nature_people
                      </span>
                      Lush Courtyard &amp; Private Pavilion
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Step straight from the living salon onto stone pathways
                      and breezy sunlit gardens.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 4 Core Pillars / Villa Highlights */}
          <section className="w-full bg-surface-container-low py-space-2xl">
            <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest text-secondary">
                  A Curated Getaway
                </span>
                <h3 className="font-headline-lg text-headline-lg text-primary mt-2">
                  Villa Highlights
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Highlight Card 1 */}
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary mb-4">
                      <span className="material-symbols-outlined text-2xl">
                        pool
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Private Plunge Pool &amp; Garden
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Immaculately tiled pool framed by sun sails, potted
                      tropical flora, and smooth pebble decks for cool afternoon
                      dips.
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mt-6 font-semibold">
                    Poolside Solace
                  </span>
                </div>
                {/* Highlight Card 2 */}
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary mb-4">
                      <span className="material-symbols-outlined text-2xl">
                        chair
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Spacious Living &amp; Dining
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Sun-drenched salon with custom fluted wood walls, cozy
                      lounge seating, big-screen entertainment, and family
                      dining.
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mt-6 font-semibold">
                    Gather &amp; Unwind
                  </span>
                </div>
                {/* Highlight Card 3 */}
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary mb-4">
                      <span className="material-symbols-outlined text-2xl">
                        restaurant
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Fully-Equipped Kitchen
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Cook your favorite feasts with a modern breakfast counter,
                      refrigerator, stovetop, cookware, and serveware.
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mt-6 font-semibold">
                    Home-Cooked Joy
                  </span>
                </div>
                {/* Highlight Card 4 */}
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary mb-4">
                      <span className="material-symbols-outlined text-2xl">
                        vpn_key
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Exclusive Sanctuary
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      No shared corridors or strangers. You get complete private
                      access to the entire gated property for uninterrupted
                      privacy.
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mt-6 font-semibold">
                    Total Seclusion
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Featured Spaces Section */}
          <section className="w-full py-space-3xl lg:py-space-4xl max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest text-secondary">
                  The Interior Architecture
                </span>
                <h3 className="font-headline-xl text-headline-xl text-primary mt-2">
                  Designed for Warm Togetherness
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Organic wood finishes, airy tray ceilings, and fluid transitions
                between lounging, cooking, and garden patio views.
              </p>
            </div>
            {/* Split Grid for Spaces */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Space 1: Living & Dining */}
              <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
                <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                  <img
                    alt="Spacious open living room with dining table and fluted wood feature wall"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcKb5tfiS_Gmzt5JsjwkiAx5DvujcOO5cxX-3LfZyrorV9_zpjHoQFFJ-eLtpSNTJfq-DebKbfDAyQiUHHgyqLH61ewwurZ-y7pMUc2yBnoAjvui7mKo7lBGru23JXNjZ292ul-VPdZchWP0MTiTi0AM6z_HE9Duxl5DvQeHbAKAy7-ectUtMw2Il1gQHWjF8HpFjA5ZqtEXj56IMCVsNc9_ZoqwjIbEYcypzc4riLLaQSJTHZyACOMyguBKOK99Rcpg8"
                  />
                  <span className="absolute top-4 left-4 bg-surface-bright/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-primary uppercase tracking-wider">
                    Living &amp; Dining Hall
                  </span>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h4 className="font-headline-md text-headline-md text-primary">
                      Grand Open-Plan Great Room
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Featuring a statement warm timber slat accent wall,
                      expansive glass doors facing the landscaped garden, plush
                      sofas, high-speed Wi-Fi, and a large dining centerpiece
                      tailored for hearty group meals and late-night board
                      games.
                    </p>
                  </div>
                  <div className="pt-6 flex items-center gap-6 font-body-sm text-body-sm text-outline">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base">
                        tv
                      </span>
                      Smart TV
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base">
                        ac_unit
                      </span>
                      Full AC
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base">
                        table_restaurant
                      </span>
                      8-Seat Dining
                    </span>
                  </div>
                </div>
              </div>
              {/* Space 2: Kitchen & Bar */}
              <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
                <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                  <img
                    alt="Warm wooden kitchen and modern island bar in Garden Villa"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6SgSKePcXaaZl1G_Dw2kKu81iahF9LO5A310V4295YSEVIl1Ftxl7wYwW59neaj8X2z0SnG3sBY_2Kiz6nUxSjOqEUzyObmMHhPdCJ3jJEcYbikk6u8kaLecJf8PYFZjLsdO53fulPF1c0JT_fSU9-8icSs_eR9Hb1h4Er8VdktxaDtlCBWNCPwlnfzNqfZ2RJTjsnljXY8mivyoO6zJs4flA1GIPIgAaJQbH9KHL02kD9xJIW7p-kC3uUN6YqbglTHI"
                  />
                  <span className="absolute top-4 left-4 bg-surface-bright/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-primary uppercase tracking-wider">
                    Culinary Space
                  </span>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h4 className="font-headline-md text-headline-md text-primary">
                      Warm Wooden Island Bar &amp; Kitchen
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Craft breakfast smoothies or assemble evening tapas at the
                      counter. Fitted with warm cabinetry, refrigerator, cooking
                      essentials, and bar stool seating for seamless socializing
                      with the chef.
                    </p>
                  </div>
                  <div className="pt-6 flex items-center gap-6 font-body-sm text-body-sm text-outline">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base">
                        kitchen
                      </span>
                      Refrigerator
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base">
                        countertops
                      </span>
                      Island Bar
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base">
                        coffee
                      </span>
                      Kettle &amp; Prep
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Amenities Strip */}
          <section className="w-full bg-surface-container py-12">
            <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left max-w-xs">
                  <span className="font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest text-secondary">
                    Thoughtful Inclusions
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-primary mt-1">
                    Villa Amenities
                  </h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 w-full flex-1">
                  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-surface-bright/70">
                    <span className="material-symbols-outlined text-primary mb-1">
                      pool
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface">
                      Private Pool
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-surface-bright/70">
                    <span className="material-symbols-outlined text-primary mb-1">
                      wifi
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface">
                      High-Speed Wi-Fi
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-surface-bright/70">
                    <span className="material-symbols-outlined text-primary mb-1">
                      mode_fan
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface">
                      Air Conditioning
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-surface-bright/70">
                    <span className="material-symbols-outlined text-primary mb-1">
                      skillet
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface">
                      Full Kitchen
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-surface-bright/70">
                    <span className="material-symbols-outlined text-primary mb-1">
                      deck
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface">
                      Outdoor Seating
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-surface-bright/70">
                    <span className="material-symbols-outlined text-primary mb-1">
                      outdoor_grill
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface">
                      BBQ Grill Area
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-surface-bright/70">
                    <span className="material-symbols-outlined text-primary mb-1">
                      garage_home
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface">
                      Gated Parking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Interactive Availability & Booking Card Preview */}
          <section className="w-full py-space-3xl max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
            <div className="bg-surface-container-lowest rounded-xl shadow-md p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-xs">
                      calendar_today
                    </span>
                    Instant Booking Inquiries
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-primary">
                    Check Dates &amp; Reserve Your Escape
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Due to our exclusive single-booking privacy policy, dates
                    fill quickly during weekends and national holidays. Select
                    your desired timeframe below to check real-time villa
                    availability.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 text-on-surface">
                      <span className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-primary text-xs font-semibold">
                        ✓
                      </span>
                      <span className="font-body-md text-body-md">
                        Exclusive full villa access included
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface">
                      <span className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-primary text-xs font-semibold">
                        ✓
                      </span>
                      <span className="font-body-md text-body-md">
                        No corkage fees for food &amp; drinks
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface">
                      <span className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-primary text-xs font-semibold">
                        ✓
                      </span>
                      <span className="font-body-md text-body-md">
                        Flexible cancellation with advance notice
                      </span>
                    </div>
                  </div>
                </div>
                {/* Interactive Mini Calendar Selector Widget */}
                <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-surface-container-highest">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        date_range
                      </span>
                      <span className="font-headline-sm text-headline-sm text-primary">
                        Select Desired Dates
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-outline font-label-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
                      Selected
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim inline-block ml-2"></span>
                      Available
                    </div>
                  </div>
                  {/* Date Inputs Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-surface-container-lowest p-3 rounded-lg shadow-sm">
                      <label className="block font-label-sm text-label-sm text-outline uppercase tracking-wider mb-1">
                        Check-in
                      </label>
                      <div className="font-label-lg text-label-lg text-primary font-semibold flex items-center justify-between">
                        <span>Oct 18, 2025</span>
                        <span className="material-symbols-outlined text-secondary text-sm">
                          calendar_month
                        </span>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-3 rounded-lg shadow-sm">
                      <label className="block font-label-sm text-label-sm text-outline uppercase tracking-wider mb-1">
                        Check-out
                      </label>
                      <div className="font-label-lg text-label-lg text-primary font-semibold flex items-center justify-between">
                        <span>Oct 20, 2025</span>
                        <span className="material-symbols-outlined text-secondary text-sm">
                          calendar_month
                        </span>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-3 rounded-lg shadow-sm">
                      <label className="block font-label-sm text-label-sm text-outline uppercase tracking-wider mb-1">
                        Total Guests
                      </label>
                      <div className="font-label-lg text-label-lg text-primary font-semibold flex items-center justify-between">
                        <span>8 Guests</span>
                        <span className="material-symbols-outlined text-secondary text-sm">
                          group
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Quick Mock Calendar Grid */}
                  <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm mb-6">
                    <div className="flex items-center justify-between mb-3 text-center">
                      <span className="font-label-md text-label-md text-primary font-semibold">
                        October 2025
                      </span>
                      <div className="flex gap-1 text-on-surface-variant">
                        <button className="p-1 rounded hover:bg-surface-container">
                          <span className="material-symbols-outlined text-sm">
                            chevron_left
                          </span>
                        </button>
                        <button className="p-1 rounded hover:bg-surface-container">
                          <span className="material-symbols-outlined text-sm">
                            chevron_right
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center font-label-sm text-label-sm text-outline mb-2">
                      <span>S</span>
                      <span>M</span>
                      <span>T</span>
                      <span>W</span>
                      <span>T</span>
                      <span>F</span>
                      <span>S</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center font-body-sm text-body-sm">
                      <span className="text-outline-variant p-1">28</span>
                      <span className="text-outline-variant p-1">29</span>
                      <span className="text-outline-variant p-1">30</span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        1
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        2
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        3
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        4
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        5
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        6
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        7
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        8
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        9
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        10
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        11
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        12
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        13
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        14
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        15
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        16
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        17
                      </span>
                      <span className="p-1.5 rounded-l bg-primary text-surface-bright font-semibold">
                        18
                      </span>
                      <span className="p-1.5 bg-primary/80 text-surface-bright font-semibold">
                        19
                      </span>
                      <span className="p-1.5 rounded-r bg-primary text-surface-bright font-semibold">
                        20
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        21
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        22
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        23
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        24
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        25
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        26
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        27
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        28
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        29
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        30
                      </span>
                      <span className="p-1.5 rounded hover:bg-surface-container text-on-surface">
                        31
                      </span>
                    </div>
                  </div>
                  {/* Submit Button */}
                  <a
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-surface-bright py-3.5 rounded-lg font-label-lg text-label-lg transition-all shadow-sm"
                    data-path="availability"
                    href="#"
                  >
                    <span>Request Reservation for 2 Nights</span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Location Teaser */}
          <section className="w-full py-space-2xl max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-high rounded-xl p-8 lg:p-12 overflow-hidden relative">
              <div className="lg:col-span-6 space-y-4">
                <span className="font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest text-secondary">
                  The Setting
                </span>
                <h3 className="font-headline-lg text-headline-lg text-primary">
                  Discover Bataan's Natural Calm
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Nestled in Bataan — scenic coastal air, heritage sites, and
                  tropical foliage just a comfortable drive from Manila.
                </p>
                <p className="font-body-md text-body-md text-outline">
                  Take a gentle afternoon drive to historic Mount Samat Shrine,
                  explore the coastal coves of Morong, or simply stay cocooned
                  within the privacy of the villa’s courtyard.
                </p>
                <div className="pt-2">
                  <a
                    className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-primary-container font-semibold transition-colors"
                    data-path="location"
                    href="#"
                  >
                    Explore Area Guide &amp; Driving Directions
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
              {/* Map Visual Anchor */}
              <div className="lg:col-span-6">
                <div
                  className="w-full h-72 rounded-lg shadow-sm bg-cover bg-center overflow-hidden flex items-end p-4"
                  data-location="Pilar, Bataan, Philippines"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDE5CqChquvPZ-iHcNOggaRX_5UKSJMjLoSMTNrhMxHbHSHF8CThGhn2LppKXLIJgmO2Ps8LtfRVvKtg8s7d1aXAo-O8olSt834cOSRMYSMB7gT6IdY4bgYzot3bJdYjkiBRQBlMMqL68eve3NClCai8y2n4TGN5Ly2xS2xoefWe6vpI2YnBkxjrtR7Df5nucJjm-fMjIfeJ2OwWX_oXPbvyVJSsLIxKnNkyB6EwoKPwynMIchZIVsLWw")`,
                  }}
                >
                  <div className="bg-surface-bright/95 backdrop-blur-md px-4 py-2.5 rounded-lg shadow-sm flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">
                      pin_drop
                    </span>
                    <div>
                      <p className="font-label-md text-label-md text-primary font-semibold">
                        Pilar, Bataan Peninsula
                      </p>
                      <p className="font-body-sm text-body-sm text-outline">
                        Scenic &amp; quiet rural setting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Warm Final Inquiry CTA Banner */}
          <section className="w-full bg-primary text-on-primary py-space-3xl mt-space-2xl">
            <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-secondary-fixed mb-4">
                <span className="material-symbols-outlined text-xl">spa</span>
              </div>
              <h3 className="font-headline-xl text-headline-xl text-surface-bright max-w-2xl mb-4">
                Your Private Tropical Sanctuary Awaits
              </h3>
              <p className="font-body-lg text-body-lg text-surface-container-high/90 max-w-xl mb-8 leading-relaxed font-light">
                Book your private retreat early for the best weekend selection.
                We provide prompt assistance for special celebrations, custom
                stays, and family vacations.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  className="bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed px-8 py-3.5 rounded-lg font-label-lg text-label-lg shadow-md transition-all"
                  data-path="availability"
                  href="#"
                >
                  Send an Inquiry
                </a>
                <a
                  className="bg-primary-container hover:bg-tertiary-container text-surface-bright px-8 py-3.5 rounded-lg font-label-lg text-label-lg transition-all flex items-center gap-2"
                  href="tel:+639178008455"
                >
                  <span className="material-symbols-outlined text-base">
                    call
                  </span>
                  Speak with Villa Concierge
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
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
                A private villa retreat designed for slow mornings, shared
                meals, and memorable stays.
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
              <a
                className="hover:text-on-surface transition-colors"
                data-path="home"
                href="#"
              >
                Sanctuary Protocol
              </a>
              <a
                className="hover:text-on-surface transition-colors"
                data-path="home"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="hover:text-on-surface transition-colors"
                data-path="home"
                href="#"
              >
                Guest Guidelines
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
