const navItems = [
  ['Book', '#book'],
  ['Author', '#author'],
  ['World', '#world'],
  ['Video', '#video'],
  ['Contact', '#contact'],
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:px-8">
        <a href="#top" className="font-display text-lg tracking-wide text-bone sm:text-xl">
          Blood Compass
        </a>
        <div className="flex w-full flex-wrap items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 sm:w-auto sm:gap-2">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-bone/72 transition hover:bg-white/10 hover:text-bone sm:px-4 sm:text-sm"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
