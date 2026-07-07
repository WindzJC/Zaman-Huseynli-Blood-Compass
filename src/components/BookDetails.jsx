import SectionShell from './SectionShell.jsx'

const details = [
  ['Title', 'Blood Compass'],
  ['Author', 'Zaman Huseynli / Zamanhuseyinli'],
  ['Format', 'eBook / ePUB'],
  ['ISBN / EAN', '9798231453658'],
  ['Publisher / Listing', 'Zamanhuseyinli'],
  ['Release', 'April 2025'],
  ['Language', 'English'],
]

export default function BookDetails() {
  return (
    <SectionShell id="details" eyebrow="Book details" title="Book details at a glance." className="pt-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {details.map(([label, value]) => (
          <div key={label} className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-copper/82">{label}</p>
            <p className="mt-3 text-base font-semibold leading-6 text-bone">{value}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
