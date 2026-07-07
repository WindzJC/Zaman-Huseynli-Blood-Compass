import SectionShell from './SectionShell.jsx'

export default function WhyPresentationMatters() {
  return (
    <SectionShell id="presentation" eyebrow="Why presentation matters" title="A clearer path into Blood Compass.">
      <div className="grid gap-5 md:grid-cols-3">
        {[
          'Understand the story quickly.',
          'Feel the atmosphere before opening the book.',
          'Know where to continue.',
        ].map((line) => (
          <div key={line} className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
            <p className="font-display text-2xl leading-tight text-bone">{line}</p>
          </div>
        ))}
      </div>
      <p className="mt-7 max-w-4xl text-lg leading-8 text-bone/74">
        For readers entering the world of Blood Compass, the path should be simple: understand the story, feel the
        atmosphere, and know where to continue.
      </p>
    </SectionShell>
  )
}
