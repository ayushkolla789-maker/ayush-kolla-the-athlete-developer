const links = [
  { label: "LinkedIn", sub: "ayush-kolla", href: "https://www.linkedin.com/in/ayush-kolla-07742837a" },
  { label: "Instagram", sub: "@ayush_kolla", href: "https://instagram.com/ayush_kolla" },
  {
    label: "Instagram",
    sub: "@calloftruth1 — facts & knowledge drops",
    href: "https://instagram.com/calloftruth1",
  },
];

export function Connect() {
  return (
    <section id="connect" className="bg-brand py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="eyebrow text-cream/70">Say hello</p>
        <h2 className="mt-4 text-4xl text-cream sm:text-5xl">Let's connect</h2>
        <div className="mt-12 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-cream/25 px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:bg-cream"
            >
              <span className="min-w-0">
                <span className="block font-display text-3xl text-cream transition-colors group-hover:text-brand">
                  {l.label}
                </span>
                <span className="mt-1 block truncate font-mono text-[0.65rem] tracking-[0.18em] uppercase text-cream/70 transition-colors group-hover:text-brand/70">
                  {l.sub}
                </span>
              </span>
              <span className="shrink-0 font-mono text-sm text-cream/80 transition-colors group-hover:text-brand">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}