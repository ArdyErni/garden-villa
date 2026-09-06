import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Phone,
  Lock,
  TowelRack,
  ArrowRight,
} from "lucide-react";

export default function AvailabilityPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <div className="w-full max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-xl pb-space-lg">
        <div className="space-y-space-xs max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest">
            <Calendar className="h-5 w-5 text-primary" />
            Instant Booking Inquiries
          </div>
          <h1 className="font-display-hero text-headline-xl md:text-display-hero text-primary tracking-tight font-normal">
            Rates &amp; Availability
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Due to our exclusive single-booking privacy policy, dates fill
            quickly during weekends and national holidays. Select your desired
            timeframe to check villa availability.
          </p>
        </div>
      </div>

      {/* Main Booking Card */}
      <section className="w-full py-space-xl max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="bg-surface-container-lowest rounded-xl shadow-md p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Policy & Inclusions */}
            <div className="lg:col-span-5 space-y-5">
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Check Dates &amp; Reserve Your Escape
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Select your desired timeframe below to check real-time villa
                availability. We respond to all inquiries within 24 hours.
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

              {/* Contact CTA */}
              <div className="pt-4 border-t border-surface-container-highest space-y-3">
                <p className="font-label-md text-label-md text-outline uppercase tracking-wider">
                  Prefer to inquire directly?
                </p>
                <a
                  href="mailto:stay@gardenvillabataan.ph"
                  className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-primary-container font-semibold transition-colors"
                >
                  <span className="material-symbols-outlined text-base">
                    mail
                  </span>
                  stay@gardenvillabataan.ph
                </a>
                <br />
                <a
                  href="tel:+639178008455"
                  className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-primary-container font-semibold transition-colors"
                >
                  <span className="material-symbols-outlined text-base">
                    call
                  </span>
                  +63 (917) 800-VILLA
                </a>
              </div>
            </div>

            {/* Right: Calendar Widget */}
            <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-surface-container-highest">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-headline-sm text-headline-sm text-primary">
                    Select Desired Dates
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-outline font-label-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block" />
                  Selected
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim inline-block ml-2" />
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
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-3 rounded-lg shadow-sm">
                  <label className="block font-label-sm text-label-sm text-outline uppercase tracking-wider mb-1">
                    Check-out
                  </label>
                  <div className="font-label-lg text-label-lg text-primary font-semibold flex items-center justify-between">
                    <span>Oct 20, 2025</span>
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-3 rounded-lg shadow-sm">
                  <label className="block font-label-sm text-label-sm text-outline uppercase tracking-wider mb-1">
                    Total Guests
                  </label>
                  <div className="font-label-lg text-label-lg text-primary font-semibold flex items-center justify-between">
                    <span>8 Guests</span>
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Mock Calendar Grid */}
              <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label-md text-label-md text-primary font-semibold">
                    October 2025
                  </span>
                  <div className="flex gap-1 text-on-surface-variant">
                    <button
                      className="p-1 rounded hover:bg-surface-container"
                      type="button"
                    >
                      <ChevronLeft className="h-5 w-5 text-primary" />
                    </button>
                    <button
                      className="p-1 rounded hover:bg-surface-container"
                      type="button"
                    >
                      <ChevronRight className="h-5 w-5 text-primary" />
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
                  {[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                  ].map((d) => (
                    <span
                      key={d}
                      className="p-1.5 rounded hover:bg-surface-container text-on-surface"
                    >
                      {d}
                    </span>
                  ))}
                  <span className="p-1.5 rounded-l bg-primary text-surface-bright font-semibold">
                    18
                  </span>
                  <span className="p-1.5 bg-primary/80 text-surface-bright font-semibold">
                    19
                  </span>
                  <span className="p-1.5 rounded-r bg-primary text-surface-bright font-semibold">
                    20
                  </span>
                  {[21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((d) => (
                    <span
                      key={d}
                      className="p-1.5 rounded hover:bg-surface-container text-on-surface"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <a
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-surface-bright py-3.5 rounded-lg font-label-lg text-label-lg transition-all shadow-sm"
                href="mailto:stay@gardenvillabataan.ph"
              >
                <span>Send Reservation Inquiry</span>
                <ArrowRight className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity & Rates Info */}
      <section className="w-full py-space-xl max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary mb-3">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
              Guest Capacity
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Up to 15 guests for day use. Overnight capacity subject to
              confirmation.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary mb-3">
              <Lock className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
              Exclusive Access
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              The entire villa and grounds are reserved exclusively for your
              party — no shared spaces.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary mb-3">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
              Booking Process
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Send an inquiry with your preferred dates. We confirm availability
              and provide rates within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-primary text-on-primary py-space-3xl mt-space-2xl">
        <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop text-center flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-secondary-fixed mb-4">
            <TowelRack className="h-5 w-5 text-primary" />
          </div>
          <h2 className="font-headline-xl text-headline-xl text-surface-bright max-w-2xl mb-4">
            Your Private Tropical Sanctuary Awaits
          </h2>
          <p className="font-body-lg text-body-lg text-surface-container-high/90 max-w-xl mb-8 leading-relaxed font-light">
            Book early for the best weekend selection. We provide prompt
            assistance for special celebrations, custom stays, and family
            vacations.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              className="bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed px-8 py-3.5 rounded-lg font-label-lg text-label-lg shadow-md transition-all"
              href="mailto:stay@gardenvillabataan.ph"
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
