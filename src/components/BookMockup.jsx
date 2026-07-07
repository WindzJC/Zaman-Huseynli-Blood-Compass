export default function BookMockup() {
  return (
    <div className="slow-drift mx-auto w-full max-w-[21rem]">
      <div className="relative aspect-[0.66] overflow-hidden rounded-[0.65rem] border border-copper/35 bg-gradient-to-br from-[#21070b] via-[#111722] to-[#030407] p-7 shadow-ember">
        <div className="absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-black/55 to-transparent" />
        <div className="absolute inset-5 rounded-full border border-copper/20" />
        <div className="absolute inset-12 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-1/2 h-[78%] w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-copper/32" />
        <div className="absolute left-1/2 top-1/2 h-[78%] w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-ember/30" />
        <div className="absolute inset-x-7 top-8 h-28 rounded-full border border-copper/25 opacity-70" />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="text-xs uppercase tracking-[0.38em] text-copper/85">Zaman Huseynli</div>
          <div>
            <div className="mb-5 h-px w-20 bg-gradient-to-r from-copper to-transparent" />
            <h2 className="font-display text-5xl leading-none text-bone sm:text-6xl">
              Blood
              <span className="block text-copper">Compass</span>
            </h2>
          </div>
          <div className="max-w-48 text-sm leading-6 text-bone/68">
            A dark science-fantasy voyage through strange seas and cursed worlds.
          </div>
        </div>
      </div>
    </div>
  )
}
