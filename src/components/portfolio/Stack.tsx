import { useRef } from "react";
import { useInView } from "./use-reduced-motion";

const skills = [
  { name: "Java", value: 92 },
  { name: "Python", value: 90 },
  { name: "Full-Stack Development", value: 85 },
  { name: "Git & GitHub Workflow", value: 80 },
];

export function Stack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section id="stack" className="bg-ink py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-4xl px-5 sm:px-8">
        <p className="eyebrow text-accent-red">Toolkit</p>
        <h2 className="mt-4 text-4xl text-cream sm:text-5xl">What I build with</h2>
        <div className="mt-12 space-y-8">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex items-baseline justify-between font-mono text-[0.7rem] tracking-[0.18em] uppercase">
                <span className="text-cream-dim/80">{s.name}</span>
                <span className="text-accent-red">{s.value}%</span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-ink-soft">
                <div
                  className="h-full rounded-full transition-[width] duration-1000 ease-out"
                  style={{
                    width: inView ? `${s.value}%` : "0%",
                    background: "var(--gradient-red)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}