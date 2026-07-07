export default function SectionShell({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`px-5 py-16 sm:px-7 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-copper">{eyebrow}</p> : null}
          {title ? <h2 className="font-display text-3xl leading-tight text-bone sm:text-5xl">{title}</h2> : null}
        </div>
        {children}
      </div>
    </section>
  )
}
