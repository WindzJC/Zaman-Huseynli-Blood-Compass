import SectionShell from './SectionShell.jsx'

export default function WhyPresentationMatters() {
  return (
    <SectionShell id="presentation" eyebrow="Why presentation matters" title="A stronger first impression for readers.">
      <div className="grid gap-5 md:grid-cols-3">
        {[
          'Understand the story quickly.',
          'Feel the tone before opening the book.',
          'Know where to go next.',
        ].map((line) => (
          <div key={line} className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
            <p className="font-display text-2xl leading-tight text-bone">{line}</p>
          </div>
        ))}
      </div>
      <p className="mt-7 max-w-4xl text-lg leading-8 text-bone/74">
        When readers discover Blood Compass or Zaman Huseynli online, they should immediately understand the story, feel
        the tone, and know where to go next. A polished website gives the book a stronger first impression than a
        scattered platform link or plain retailer listing.
      </p>
    </SectionShell>
  )
}
