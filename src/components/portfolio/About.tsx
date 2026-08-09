const stats = [
  { value: "2", label: "Core languages: Java · Python" },
  { value: "5", label: "Sports & training disciplines" },
  { value: "100%", label: "Projects shipped to GitHub" },
];

export function About() {
  return (
    <section id="about" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow text-brand">Who's Ayush</p>
            <h2 className="mt-4 text-4xl leading-[0.95] text-ink sm:text-5xl lg:text-6xl">
              Code by day.
              <br />
              Court by evening.
            </h2>
          </div>
          <div className="space-y-5 text-[0.95rem] leading-relaxed text-ink/75">
            <p>
              I build full-stack applications in Java and Python — real projects, pushed to GitHub,
              from database layer to interface. I care about software that actually gets used.
            </p>
            <p>
              Off the keyboard I train consistently: basketball, cricket, badminton, gym sessions
              and running. The discipline is the same as shipping — show up, repeat, improve.
            </p>
            <p>
              I also create content, sharing intellectual facts and knowledge drops for people who
              like learning something new every day.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-ink/10 pt-10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl text-brand sm:text-6xl">{s.value}</p>
              <p className="mt-2 font-mono text-[0.65rem] tracking-[0.18em] uppercase text-ink/55">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}