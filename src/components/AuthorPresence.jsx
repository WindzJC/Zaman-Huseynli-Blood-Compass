import SectionShell from './SectionShell.jsx'

export default function AuthorPresence() {
  return (
    <SectionShell id="author" eyebrow="Author presence" title="A sharper public-facing home for the work.">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.05] p-6 shadow-glass sm:p-8">
          <p className="text-lg leading-8 text-bone/78">
            Zaman Huseynli is the author presented with Blood Compass. This concept direction gives the book and author
            one focused public-facing home, helping readers understand the story, the creative world, and where related
            media or future work could live.
          </p>
        </div>
        <div className="rounded-lg border border-copper/20 bg-gradient-to-br from-oxblood/28 to-white/[0.04] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-copper">Positioning</p>
          <p className="mt-5 text-2xl font-display leading-tight text-bone">
            Fiction first. Systems thinking beneath the surface. A platform that can grow without pretending to be more
            than it is.
          </p>
        </div>
      </div>
    </SectionShell>
  )
}
