import {
  LockKeyhole,
  Sprout,
  Waves,
  CalendarDays,
  ArrowRight,
  Users,
  MapPin,
  Coffee,
  CookingPot,
  Refrigerator,
  Snowflake,
  Tv,
  Utensils,
  Armchair,
  Fan,
  Flame,
  Warehouse,
  Wifi,
  Lock,
  TowelRack,
  Phone,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Immersive Hero Section */}
      <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden -mt-20">
        {/* Hero Background with Subtle Gradient Scrim */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtsf8Fh25n63ydlP0yWTX-iAPFenFUjbd4w36_bBVuRuITxZlu1yzr6sufEbUpDp9KCzAFSE7pSwWPe6JXJOC_6TSezGo-AuiQw8Hljo6DX778uQ2LrN52Ly7UapD9Jreb-ghCHRCYrFcHmXCjnChoKByV2dovVN2aB6PSkbPtRlEg6UVloBVcWhhDhRz17t-Cgyr48qKGm5zXErraq-ERmiNOEnnLjQi7XRRaG5lrt7qQqlJhNxy7kKinb8Ig-uYUVaM")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/25 to-surface" />
        {/* Hero Content */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop pt-28 pb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-bright/90 backdrop-blur-md shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary" />
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
            A private villa surrounded by greenery, designed for slow mornings,
            shared meals, and memorable stays.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-container hover:bg-primary text-secondary-fixed px-8 py-3.5 rounded-lg font-label-lg text-label-lg shadow-md transition-all duration-200"
              href="/availability"
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
              <Waves className="h-4 w-4 text-primary" />
              Private Plunge Pool
            </span>

            <span className="text-outline-variant">•</span>

            <span className="flex items-center gap-2">
              <Sprout className="h-4 w-4 text-primary" />
              Manicured Grounds
            </span>

            <span className="text-outline-variant">•</span>

            <span className="flex items-center gap-2">
              <LockKeyhole className="h-4 w-4 text-primary" />
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
              An intimate sanctuary nestled in the lush tropical landscape of
              Bataan.
            </h2>
            <div className="w-12 h-0.5 bg-secondary-fixed-dim rounded-full my-2" />
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Surrounded by native palms, flowering hedges, and gentle shade
              sails, Garden Villa was conceptualized as a serene oasis away from
              urban rush. Here, daily itineraries dissolve into sun-warmed
              swims, long unhurried breakfasts outdoors, and evening toasts
              under starry coastal skies.
            </p>
            <p className="font-body-md text-body-md text-outline leading-relaxed">
              Whether you are reuniting with family, retreating with close
              friends, or curating an intimate celebration, the entire grounds
              belong exclusively to your party for an entirely secluded stay.
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
              <div className="h-10 w-[1px] bg-outline-variant/60" />
              <div className="flex flex-col">
                <span className="font-headline-lg text-headline-lg text-primary font-display-hero">
                  Up to 15
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  Day &amp; Night Capacity
                </span>
              </div>
              <div className="h-10 w-[1px] bg-outline-variant/60" />
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZzwp_4GCzpRLICN3DQntJpG3QFb7kb39hzVuV-X6fKb8dC-dGXxbXtYYMqPE4yiiJS-uvIJNGLro9UTHXaiZ_luDWRAftwcWNPXN2yYpqMG3mjwBl2Evu7f_r3YV2eHbTe_x1hmACSfTHoXumZ-U_Wy0pObwH5kc7sWHfe_lLqauieBoJQe2SMeujAKE2f7Cw26_Z7mIJ9WE3IEKCrH8bgqSW9SUcW4_uKVxwCkBr1bzFI8TsQB0L4NX47hRV6Rrn0TQ"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-surface-bright/90 backdrop-blur-md shadow-sm">
                <p className="font-label-md text-label-md text-primary font-medium flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Lush Courtyard &amp; Private Pavilion
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Step straight from the living salon onto stone pathways and
                  breezy sunlit gardens.
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
                  <Waves className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Private Plunge Pool &amp; Garden
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Immaculately tiled pool framed by sun sails, potted tropical
                  flora, and smooth pebble decks for cool afternoon dips.
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
                  <Armchair className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Spacious Living &amp; Dining
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Sun-drenched salon with custom fluted wood walls, cozy lounge
                  seating, big-screen entertainment, and family dining.
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
                  <Refrigerator className="h-5 w-5 text-primary" />
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
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Exclusive Sanctuary
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  No shared corridors or strangers. You get complete private
                  access to the entire gated property for uninterrupted privacy.
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMNmbnCKXY7JIaHbrB3eF2SNhoAfHxbES3q6lUUPcIaryOxuBvDsxPqIFh0sazE3RjTc14OS5q-igR9w9Gwhh0H-Xirm6LbgZ24KkAl4w2Iwj1IFVYsYv_opqwjyuNTev1hwKzgWsXQU_y0QjxRLJwUR-zVxZm7970K8S3vBhjIYGB5CsMtPkr56WxMjom2O7PPIx6GpRxnPzbuwA7Zr-puTfOOo100ZpXh_b8zTdcReAeQzQlUEckO5i2exGQ1R91bjk"
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
                  Featuring a statement warm timber slat accent wall, expansive
                  glass doors facing the landscaped garden, plush sofas,
                  high-speed Wi-Fi, and a large dining centerpiece tailored for
                  hearty group meals and late-night board games.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-6 font-body-sm text-body-sm text-outline">
                <span className="flex items-center gap-1.5">
                  <Tv className="h-4 w-4" />
                  Smart TV
                </span>

                <span className="flex items-center gap-1.5">
                  <Snowflake className="h-4 w-4" />
                  Full AC
                </span>

                <span className="flex items-center gap-1.5">
                  <Utensils className="h-4 w-4" />
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFALqFNXdo3dSJjDRt2AWVFYN53smO5OR8CNkcXw_n7r4Sq6EgCFzj0feFhsXu8f4NRJ7LHUz-Vv4HwgzVgfVbujRVeMshYGV-bclVeiJTvA_tHLic3ztCqwJf07PjRkuSETjVYlWwDL-RxwziXJGJXnUz0Gfz0g7LIDJ1Eqsl1XdQ0iW9E86SXHbjH5Z6Z2HWFN23Vec70q86SHyEt1rzzs2zI2WUs7d1PtkhYT_60O2z7GYLeSn9j4ZtqZkxiMNw6DY"
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
                  <Refrigerator className="h-4 w-4" />
                  Refrigerator
                </span>

                <span className="flex items-center gap-1.5">
                  <CookingPot className="h-4 w-4" />
                  Island Bar
                </span>

                <span className="flex items-center gap-1.5">
                  <Coffee className="h-4 w-4" />
                  Kettle &amp; Prep
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Amenities Teaser */}
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
                <Waves className="h-5 w-5 text-primary" />
                <span className="font-label-sm text-label-sm text-on-surface">
                  Private Pool
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-surface-bright/70">
                <Wifi className="h-5 w-5 text-primary" />
                <span className="font-label-sm text-label-sm text-on-surface">
                  High-Speed Wi-Fi
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-surface-bright/70">
                <Fan className="h-5 w-5 text-primary" />
                <span className="font-label-sm text-label-sm text-on-surface">
                  Air Conditioning
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-surface-bright/70">
                <Refrigerator className="h-5 w-5 text-primary" />
                <span className="font-label-sm text-label-sm text-on-surface">
                  Full Kitchen
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-surface-bright/70">
                <Armchair className="h-5 w-5 text-primary" />
                <span className="font-label-sm text-label-sm text-on-surface">
                  Outdoor Seating
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-surface-bright/70">
                <Flame className="h-5 w-5 text-primary" />
                <span className="font-label-sm text-label-sm text-on-surface">
                  BBQ Grill Area
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-surface-bright/70">
                <Warehouse className="h-5 w-5 text-primary" />
                <span className="font-label-sm text-label-sm text-on-surface">
                  Gated Parking
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="/amenities"
              className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-primary-container font-semibold transition-colors"
            >
              View all amenities &amp; spaces
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      {/* Availability Teaser */}
      <section className="w-full py-space-3xl max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="bg-surface-container-lowest rounded-xl shadow-md p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider">
                <CalendarDays className="h-4 w-4 text-secondary" />
                Instant Booking Inquiries
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary">
                Check Dates &amp; Reserve Your Escape
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Due to our exclusive single-booking privacy policy, dates fill
                quickly during weekends and national holidays. Select your
                desired timeframe to check real-time villa availability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="/availability"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-surface-bright px-8 py-3.5 rounded-lg font-label-lg text-label-lg transition-all shadow-sm"
                >
                  Check Availability
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+639178008455"
                  className="inline-flex items-center justify-center gap-2 bg-surface-container text-primary px-8 py-3.5 rounded-lg font-label-lg text-label-lg transition-all"
                >
                  <Phone className="h-4 w-4" />
                  Speak with Concierge
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 bg-surface-container-low rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3 text-on-surface">
                <span className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-primary text-xs font-semibold">✓</span>
                <span className="font-body-md text-body-md">Exclusive full villa access included</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface">
                <span className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-primary text-xs font-semibold">✓</span>
                <span className="font-body-md text-body-md">No corkage fees for food &amp; drinks</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface">
                <span className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-primary text-xs font-semibold">✓</span>
                <span className="font-body-md text-body-md">Flexible cancellation with advance notice</span>
              </div>
              <div className="pt-2 border-t border-surface-container-highest">
                <p className="font-body-sm text-body-sm text-outline">
                  Up to 15 guests • 100% exclusive use • Responds within 24 hrs
                </p>
              </div>
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
              Discover Bataan&apos;s Natural Calm
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
                href="/location"
              >
                Explore Area Guide &amp; Driving Directions
                <ArrowRight className="h-4 w-4 text-secondary" />
              </a>
            </div>
          </div>
          {/* Map Visual Anchor */}
          <div className="lg:col-span-6">
            <div
              className="w-full h-72 rounded-lg shadow-sm bg-cover bg-center overflow-hidden flex items-end p-4"
              data-location="Cupang North, Bataan, Philippines"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDE5CqChquvPZ-iHcNOggaRX_5UKSJMjLoSMTNrhMxHbHSHF8CThGhn2LppKXLIJgmO2Ps8LtfRVvKtg8s7d1aXAo-O8olSt834cOSRMYSMB7gT6IdY4bgYzot3bJdYjkiBRQBlMMqL68eve3NClCai8y2n4TGN5Ly2xS2xoefWe6vpI2YnBkxjrtR7Df5nucJjm-fMjIfeJ2OwWX_oXPbvyVJSsLIxKnNkyB6EwoKPwynMIchZIVsLWw")',
              }}
            >
              <div className="bg-surface-bright/95 backdrop-blur-md px-4 py-2.5 rounded-lg shadow-sm flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-label-md text-label-md text-primary font-semibold">
                    Cupang North, Bataan Peninsula
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
            <TowelRack className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-headline-xl text-headline-xl text-surface-bright max-w-2xl mb-4">
            Your Private Tropical Sanctuary Awaits
          </h3>
          <p className="font-body-lg text-body-lg text-surface-container-high/90 max-w-xl mb-8 leading-relaxed font-light">
            Book your private retreat early for the best weekend selection. We
            provide prompt assistance for special celebrations, custom stays,
            and family vacations.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              className="bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed px-8 py-3.5 rounded-lg font-label-lg text-label-lg shadow-md transition-all"
              href="/availability"
            >
              Send an Inquiry
            </a>
            <a
              className="bg-primary-container hover:bg-tertiary-container text-surface-bright px-8 py-3.5 rounded-lg font-label-lg text-label-lg transition-all flex items-center gap-2"
              href="tel:+639178008455"
            >
              <Phone className="h-5 w-5 text-primary" />
              Speak with Villa Concierge
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
