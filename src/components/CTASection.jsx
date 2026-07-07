export default function CTASection() {
  return (
    <section id="contact" className="px-5 py-16 sm:px-7 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-copper/25 bg-gradient-to-br from-oxblood/38 via-charcoal to-night p-7 shadow-ember sm:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-copper">Next steps</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-bone sm:text-5xl">
              Give readers a clear place to begin.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            {/* TODO: Replace #book with the real book purchase/distribution link. */}
            <a className="rounded-full bg-copper px-6 py-3 text-center text-sm font-bold text-night transition hover:bg-[#dfa05f]" href="#book">
              View the Book
            </a>
            {/* TODO: Replace #contact with the real author contact link/email. */}
            <a className="rounded-full border border-white/16 bg-white/[0.06] px-6 py-3 text-center text-sm font-bold text-bone transition hover:bg-white/12" href="#contact">
              Contact the Author
            </a>
            {/* TODO: Replace #world with the real platform/community link. */}
            <a className="rounded-full border border-white/16 bg-white/[0.06] px-6 py-3 text-center text-sm font-bold text-bone transition hover:bg-white/12" href="#world">
              Explore the Platform
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
