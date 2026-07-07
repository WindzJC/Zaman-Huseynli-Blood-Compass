import SectionShell from './SectionShell.jsx'

export default function AuthorPresence() {
  return (
    <SectionShell id="author" eyebrow="Author presence" title="A sharper public-facing home for the work.">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.05] p-6 shadow-glass sm:p-8">
          <p className="text-lg leading-8 text-bone/78">
            Zaman Huseynli is a writer and engineering-minded creator whose public work connects fiction, software,
            open-source ideas, and digital systems. Blood Compass gives that creative direction a sharper public-facing
            home, helping readers understand the book, the author, and the world behind the work.
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
