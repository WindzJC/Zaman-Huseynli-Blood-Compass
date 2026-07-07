import SectionShell from './SectionShell.jsx'

export default function WorldBehindWork() {
  return (
    <SectionShell id="world" eyebrow="The world behind the work" title="Book first, author second, platform third.">
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-charcoal/82 p-6 shadow-glass sm:p-8">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-copper/20" />
        <div className="relative grid gap-8 lg:grid-cols-[0.75fr_1fr]">
          <div className="min-h-56 rounded-lg border border-copper/20 bg-[linear-gradient(135deg,rgba(100,26,34,0.36),rgba(16,19,26,0.72)),linear-gradient(90deg,rgba(244,234,220,0.08)_1px,transparent_1px),linear-gradient(rgba(244,234,220,0.08)_1px,transparent_1px)] bg-[length:auto,38px_38px,38px_38px] p-5">
            <div className="h-full rounded-full border border-copper/35" />
          </div>
          <p className="self-center text-lg leading-8 text-bone/76">
            The work connects fiction, systems thinking, technology, and a broader digital world the author has been
            building. The website should give that world a clearer public structure: book first, author second, platform
            third.
          </p>
        </div>
      </div>
    </SectionShell>
  )
}
