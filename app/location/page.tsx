import {
  Map,
  Landmark,
  Waves,
  MapPin,
  Route,
  Mail,
  Phone,
  TowelRack,
} from "lucide-react";

export default function LocationPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <div className="w-full max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-xl pb-space-lg">
        <div className="space-y-space-xs max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest">
            <MapPin className="h-5 w-5 text-primary" />
            The Setting
          </div>
          <h1 className="font-display-hero text-headline-xl md:text-display-hero text-primary tracking-tight font-normal">
            Location &amp; Directions
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Nestled in Bataan — scenic coastal air, heritage sites, and tropical
            foliage just a comfortable drive from Manila.
          </p>
        </div>
      </div>

      {/* Map & Location Overview */}
      <section className="w-full py-space-xl max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-high rounded-xl p-8 lg:p-12 overflow-hidden relative">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest text-secondary">
              Cupang West, Balanga City, Bataan
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Discover Bataan&apos;s Natural Calm
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Nestled in Bataan — scenic coastal air, heritage sites, and
              tropical foliage just a comfortable drive from Manila.
            </p>
            <p className="font-body-md text-body-md text-outline">
              Take a gentle afternoon drive to historic Mount Samat Shrine,
              explore the coastal coves of Morong, or simply stay cocooned
              within the privacy of the villa&apos;s courtyard.
            </p>
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant">
                <MapPin className="h-5 w-5 text-primary" />
                Cupang West, Balanga City, Bataan
              </div>
              <div className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant">
                <Map className="h-5 w-5 text-primary" />
                Approximately 2.5 hours from Metro Manila
              </div>
            </div>
          </div>
          {/* Map Visual */}
          <div className="lg:col-span-6">
            <div
              className="w-full h-72 rounded-lg shadow-sm bg-cover bg-center overflow-hidden flex items-end p-4"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDE5CqChquvPZ-iHcNOggaRX_5UKSJMjLoSMTNrhMxHbHSHF8CThGhn2LppKXLIJgmO2Ps8LtfRVvKtg8s7d1aXAo-O8olSt834cOSRMYSMB7gT6IdY4bgYzot3bJdYjkiBRQBlMMqL68eve3NClCai8y2n4TGN5Ly2xS2xoefWe6vpI2YnBkxjrtR7Df5nucJjm-fMjIfeJ2OwWX_oXPbvyVJSsLIxKnNkyB6EwoKPwynMIchZIVsLWw")',
              }}
            >
              <div className="bg-surface-bright/95 backdrop-blur-md px-4 py-2.5 rounded-lg shadow-sm flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-label-md text-label-md text-primary font-semibold">
                    Cupang West, Balanga City, Bataan
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

      {/* Key Location Facts */}
      <section className="w-full py-space-xl max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary mb-3">
              <Map className="h-5 w-5" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
              From Metro Manila
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Approximately 2.5 hours by car via SCTEX and NLEX. A comfortable
              drive through scenic provincial roads.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary mb-3">
              <Landmark className="h-5 w-5" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
              Mount Samat Foothills
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Located near the foothills of Mount Samat, home to the historic
              Dambana ng Kagitingan shrine and panoramic views.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary mb-3">
              <Waves className="h-5 w-5" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
              Coastal Coves of Morong
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A short drive from the villa leads to the coastal coves of Morong,
              known for calm waters and natural scenery.
            </p>
          </div>
        </div>
      </section>

      {/* Directions Placeholder */}
      <section className="w-full py-space-xl max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="bg-surface-container-low rounded-xl p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Route className="h-5 w-5 text-primary" />
            <h2 className="font-headline-md text-headline-md text-primary">
              Travel &amp; Directions
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-2xl">
            Detailed driving directions and a map pin will be shared upon
            booking confirmation. Our team is happy to assist with travel
            planning and local recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:stay@gardenvillabataan.ph"
              className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-primary-container font-semibold transition-colors"
            >
              <Mail className="h-5 w-5 text-primary" />
              Request Directions via Email
            </a>
            <span className="hidden sm:block text-outline-variant">•</span>
            <a
              href="tel:+639178008455"
              className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-primary-container font-semibold transition-colors"
            >
              <Phone className="h-5 w-5 text-primary" />
              +63 (917) 800-VILLA
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-primary text-on-primary py-space-3xl mt-space-2xl">
        <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop text-center flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-secondary-fixed mb-4">
            <TowelRack className="h-5 w-5 text-primary" />
          </div>
          <h2 className="font-headline-xl text-headline-xl text-surface-bright max-w-2xl mb-4">
            Your Bataan Retreat Awaits
          </h2>
          <p className="font-body-lg text-body-lg text-surface-container-high/90 max-w-xl mb-8 leading-relaxed font-light">
            Check availability and reserve your exclusive stay at Garden Villa.
          </p>
          <a
            href="/availability"
            className="bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed px-8 py-3.5 rounded-lg font-label-lg text-label-lg shadow-md transition-all"
          >
            Check Availability
          </a>
        </div>
      </section>
    </div>
  );
}
