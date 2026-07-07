import SectionShell from './SectionShell.jsx'

export default function VideoPreview() {
  return (
    <SectionShell id="video" eyebrow="Video" title="Future Author / Platform Video">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.86fr]">
        <div className="relative aspect-video overflow-hidden rounded-lg border border-copper/24 bg-gradient-to-br from-[#170508] via-charcoal to-night shadow-ember">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,234,220,0.07)_1px,transparent_1px),linear-gradient(rgba(244,234,220,0.05)_1px,transparent_1px)] bg-[length:46px_46px]" />
          <div className="absolute inset-6 rounded-lg border border-white/10" />
          <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-copper/50 bg-night/72 backdrop-blur">
            <span className="ml-1 block h-0 w-0 border-y-[13px] border-l-[20px] border-y-transparent border-l-copper" />
          </div>
        </div>
        <div className="self-center rounded-lg border border-white/10 bg-white/[0.045] p-6 sm:p-8">
          <p className="text-lg leading-8 text-bone/78">
            A short author/platform video can introduce the larger message behind the work, connect the book to the
            author’s broader ideas, and give readers a clearer reason to continue.
          </p>
        </div>
      </div>
    </SectionShell>
  )
}
