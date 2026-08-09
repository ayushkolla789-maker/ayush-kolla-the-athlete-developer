import { useRef } from "react";
import { Dumbbell, Footprints, Target, Trophy, Zap } from "lucide-react";

const items = [
  { icon: Trophy, title: "Basketball", line: "Court sessions, pickup games, endless jump shots." },
  { icon: Target, title: "Cricket", line: "Weekend matches — batting order optional." },
  { icon: Zap, title: "Badminton", line: "Fast rallies and sharper reflexes." },
  { icon: Dumbbell, title: "Gym", line: "Strength work, logged and progressive." },
  { icon: Footprints, title: "Running", line: "Morning kilometres to clear the head." },
];

function TiltCard({ item }: { item: (typeof items)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = item.icon;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "perspective(700px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="rounded-2xl border border-ink/10 bg-cream-dim/60 p-6 transition-transform duration-200 will-change-transform hover:border-brand/40"
    >
      <Icon className="h-6 w-6 text-brand" strokeWidth={1.5} />
      <h3 className="mt-5 text-2xl text-ink">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.line}</p>
    </div>
  );
}

export function Court() {
  return (
    <section id="court" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow text-brand">Off-duty</p>
        <h2 className="mt-4 text-4xl text-ink sm:text-5xl">Court &amp; field</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <TiltCard key={i.title} item={i} />
          ))}
        </div>
      </div>
    </section>
  );
}