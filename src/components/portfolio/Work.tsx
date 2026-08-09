const projects = [
  {
    title: "Farmer Forward",
    desc: "An agricultural platform for farmers, connecting them with resources, market information, and tools to plan, grow, and sell smarter.",
  },
  {
    title: "Awaaz",
    desc: "A public welfare platform where people can raise their voice against injustice, report issues, and push for accountability.",
  },
  {
    title: "B-Trade",
    desc: "A peer-to-peer marketplace where everyday people trade books directly with each other instead of buying new.",
  },
];

export function Work() {
  return (
    <section id="work" className="bg-cream-dim/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow text-brand">Selected builds</p>
        <h2 className="mt-4 text-4xl text-ink sm:text-5xl">Featured work</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-ink/10 bg-cream p-7 transition-shadow hover:shadow-[var(--shadow-cinema)]"
            >
              <h3 className="text-3xl leading-none text-ink">{p.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">{p.desc}</p>
              <p className="mt-6 font-mono text-[0.62rem] tracking-[0.2em] uppercase text-brand">
                Java · Python · Full-Stack
              </p>
              <a
                href="#work"
                className="mt-4 font-mono text-[0.68rem] tracking-[0.18em] uppercase text-ink/70 transition-colors hover:text-accent-red"
              >
                View on GitHub →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}