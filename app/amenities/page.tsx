export default function AmenitiesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <div className="w-full max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-xl pb-space-lg">
        <div className="space-y-space-xs max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest">
            <span className="material-symbols-outlined text-[14px]">home_work</span>
            Thoughtful Inclusions
          </div>
          <h1 className="font-display-hero text-headline-xl md:text-display-hero text-primary tracking-tight font-normal">
            Amenities &amp; Grounds
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Every detail of Garden Villa has been considered for comfort, privacy,
            and the pleasure of unhurried tropical living.
          </p>
        </div>
      </div>

      {/* Amenities Icon Grid */}
      <section className="w-full bg-surface-container py-space-2xl">
        <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest text-secondary">
              At a Glance
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-2">Villa Amenities</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { icon: "pool", label: "Private Pool" },
              { icon: "wifi", label: "High-Speed Wi-Fi" },
              { icon: "mode_fan", label: "Air Conditioning" },
              { icon: "skillet", label: "Full Kitchen" },
              { icon: "deck", label: "Outdoor Seating" },
              { icon: "outdoor_grill", label: "BBQ Grill Area" },
              { icon: "garage_home", label: "Gated Parking" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center p-4 rounded-xl bg-surface-container-lowest shadow-sm">
                <span className="material-symbols-outlined text-primary mb-2 text-[28px]">{icon}</span>
                <span className="font-label-sm text-label-sm text-on-surface">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villa Highlights — 4 Cards */}
      <section className="w-full py-space-3xl max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest text-secondary">
            Key Features
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-2">
            What Makes Garden Villa Special
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "pool",
              title: "Private Plunge Pool & Garden",
              body: "Immaculately tiled pool framed by sun sails, potted tropical flora, and smooth pebble decks for cool afternoon dips.",
              tag: "Poolside Solace",
            },
            {
              icon: "chair",
              title: "Spacious Living & Dining",
              body: "Sun-drenched salon with custom fluted wood walls, cozy lounge seating, big-screen entertainment, and family dining.",
              tag: "Gather & Unwind",
            },
            {
              icon: "restaurant",
              title: "Fully-Equipped Kitchen",
              body: "Cook your favorite feasts with a modern breakfast counter, refrigerator, stovetop, cookware, and serveware.",
              tag: "Home-Cooked Joy",
            },
            {
              icon: "vpn_key",
              title: "Exclusive Sanctuary",
              body: "No shared corridors or strangers. Complete private access to the entire gated property for uninterrupted privacy.",
              tag: "Total Seclusion",
            },
          ].map(({ icon, title, body, tag }) => (
            <div key={title} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-2xl">{icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{body}</p>
              </div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mt-6 font-semibold">{tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Spaces Detail */}
      <section className="w-full bg-surface-container-low py-space-3xl">
        <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-caption-eyebrow text-caption-eyebrow uppercase tracking-widest text-secondary">
                The Interior Architecture
              </span>
              <h2 className="font-headline-xl text-headline-xl text-primary mt-2">
                Designed for Warm Togetherness
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Organic wood finishes, airy tray ceilings, and fluid transitions
              between lounging, cooking, and garden patio views.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Spacious open living room with dining table and fluted wood feature wall at Garden Villa"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMNmbnCKXY7JIaHbrB3eF2SNhoAfHxbES3q6lUUPcIaryOxuBvDsxPqIFh0sazE3RjTc14OS5q-igR9w9Gwhh0H-Xirm6LbgZ24KkAl4w2Iwj1IFVYsYv_opqwjyuNTev1hwKzgWsXQU_y0QjxRLJwUR-zVxZm7970K8S3vBhjIYGB5CsMtPkr56WxMjom2O7PPIx6GpRxnPzbuwA7Zr-puTfOOo100ZpXh_b8zTdcReAeQzQlUEckO5i2exGQ1R91bjk"
                />
                <span className="absolute top-4 left-4 bg-surface-bright/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-primary uppercase tracking-wider">
                  Living &amp; Dining Hall
                </span>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-headline-md text-headline-md text-primary">Grand Open-Plan Great Room</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Featuring a statement warm timber slat accent wall, expansive glass doors
                    facing the landscaped garden, plush sofas, high-speed Wi-Fi, and a large
                    dining centerpiece tailored for hearty group meals and late-night board games.
                  </p>
                </div>
                <div className="pt-6 flex items-center gap-6 font-body-sm text-body-sm text-outline">
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">tv</span>Smart TV</span>
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">ac_unit</span>Full AC</span>
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">table_restaurant</span>8-Seat Dining</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Warm wooden kitchen and modern island bar at Garden Villa"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFALqFNXdo3dSJjDRt2AWVFYN53smO5OR8CNkcXw_n7r4Sq6EgCFzj0feFhsXu8f4NRJ7LHUz-Vv4HwgzVgfVbujRVeMshYGV-bclVeiJTvA_tHLic3ztCqwJf07PjRkuSETjVYlWwDL-RxwziXJGJXnUz0Gfz0g7LIDJ1Eqsl1XdQ0iW9E86SXHbjH5Z6Z2HWFN23Vec70q86SHyEt1rzzs2zI2WUs7d1PtkhYT_60O2z7GYLeSn9j4ZtqZkxiMNw6DY"
                />
                <span className="absolute top-4 left-4 bg-surface-bright/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-primary uppercase tracking-wider">
                  Culinary Space
                </span>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-headline-md text-headline-md text-primary">Warm Wooden Island Bar &amp; Kitchen</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Craft breakfast smoothies or assemble evening tapas at the counter. Fitted
                    with warm cabinetry, refrigerator, cooking essentials, and bar stool seating
                    for seamless socializing with the chef.
                  </p>
                </div>
                <div className="pt-6 flex items-center gap-6 font-body-sm text-body-sm text-outline">
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">kitchen</span>Refrigerator</span>
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">countertops</span>Island Bar</span>
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">coffee</span>Kettle &amp; Prep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-space-3xl max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="bg-surface-container-high rounded-xl p-8 lg:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3">
            <h2 className="font-headline-lg text-headline-lg text-primary">Ready to experience it in person?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
              Check available dates and reserve the entire villa exclusively for your group.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="/availability"
              className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-label-lg text-label-lg px-8 py-3.5 rounded-lg shadow-sm hover:bg-primary-container transition-all"
            >
              Check Availability
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
            <a
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 bg-surface-container-lowest text-primary font-label-lg text-label-lg px-8 py-3.5 rounded-lg shadow-sm hover:bg-surface-container transition-all"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
