import SectionShell from './SectionShell.jsx'

const features = [
  ['Mysterious Map', 'A discovery that turns the shore into the threshold of a dangerous voyage.'],
  ['Blood-Scented Compass', 'An unsettling object that pulls the story toward stranger waters.'],
  ['Cursed Worlds', 'Unknown islands, nightmares, and skeletal beings shape the book’s dark atmosphere.'],
  ['Survival and Transformation', 'The journey tests will, language, power, and inner strength.'],
]

export default function AboutBook() {
  return (
    <SectionShell id="book" eyebrow="About the book" title="A compact cinematic world built around danger and will.">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-glass sm:p-8">
          <p className="text-lg leading-8 text-bone/78">
            Blood Compass follows explorer and sea captain Markus Johnly Tricker after he discovers a blood-scented
            compass on the shore. What begins as a mystery becomes a journey through strange islands, nightmares,
            cursed skeletal beings, betrayal, and battles that test his will to survive.
          </p>
          <p className="mt-5 text-lg leading-8 text-bone/78">
            The story blends dark adventure, fantasy, and science-fiction mechanics, creating a compact cinematic world
            around survival, language, power, and transformation.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map(([title, copy]) => (
            <article
              key={title}
              className="rounded-lg border border-copper/20 bg-charcoal/78 p-5 transition hover:-translate-y-1 hover:border-copper/45 hover:bg-iron"
            >
              <div className="mb-5 h-10 w-10 rounded-full border border-copper/45 bg-oxblood/40" />
              <h3 className="font-display text-2xl text-bone">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-bone/66">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
