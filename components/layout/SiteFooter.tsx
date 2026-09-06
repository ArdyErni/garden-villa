export default function SiteFooter() {
  return (
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
              A private villa retreat designed for slow mornings, shared meals,
              and memorable stays.
            </p>
            <div className="pt-space-xs">
              <span className="font-label-sm text-label-sm text-outline tracking-wide">
                Exclusive Private Sanctuary
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
                  href="#"
                >
                  The Villa
                </a>
              </li>
              <li className="leading-none">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors inline-block py-1"
                  href="/amenities"
                >
                  Amenities &amp; Grounds
                </a>
              </li>
              <li className="leading-none">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors inline-block py-1"
                  href="/gallery"
                >
                  Visual Journal
                </a>
              </li>
              <li className="leading-none">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors inline-block py-1"
                  href="/availability"
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
              Cupang West, Balanga City, Bataan
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              stay@gardenvillabataan.ph
              <br />
              +63 (917) 800-VILLA
            </p>
            <div className="pt-space-xs">
              <a
                className="font-label-sm text-label-sm uppercase tracking-widest text-primary hover:text-primary-container font-semibold transition-colors"
                href="/location"
              >
                View Travel &amp; Directions →
              </a>
            </div>
          </div>
        </div>
        <div className="mt-space-2xl pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
          <p>© 2025 Garden Villa Bataan. All rights reserved.</p>
          <div className="flex items-center gap-space-lg">
            <a className="hover:text-on-surface transition-colors" href="#">
              Sanctuary Protocol
            </a>
            <a className="hover:text-on-surface transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-on-surface transition-colors" href="#">
              Guest Guidelines
            </a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            Developed by{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61593952083483"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline transition-colors"
            >
              ABE Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
