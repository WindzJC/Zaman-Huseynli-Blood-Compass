import BookMockup from './BookMockup.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-7 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="absolute left-1/2 top-16 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-copper/10 opacity-70" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative z-10">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-copper">Zaman Huseynli</p>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.96] text-bone sm:text-6xl lg:text-7xl">
            Blood Compass
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-semibold leading-tight text-bone sm:text-3xl">
            A dark science-fantasy voyage of survival, mystery, and cursed worlds.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-bone/72 sm:text-lg">
            A mysterious map. A blood-scented compass. Unknown islands. Cursed skeletal beings. Blood Compass
            introduces a cinematic world where survival, betrayal, and inner power collide.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="rounded-full bg-copper px-6 py-3 text-center text-sm font-bold text-night shadow-ember transition hover:-translate-y-0.5 hover:bg-[#dfa05f]"
            >
              Explore Blood Compass
            </a>
            <a
              href="#author"
              className="rounded-full border border-white/16 bg-white/[0.04] px-6 py-3 text-center text-sm font-bold text-bone transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              About the Author
            </a>
          </div>
        </div>
        <div className="relative z-10">
          <BookMockup />
        </div>
      </div>
    </section>
  )
}
