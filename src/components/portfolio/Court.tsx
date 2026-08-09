import { useRef } from "react";
import { Dumbbell, Footprints, Target, Trophy, Zap } from "lucide-react";

import badminton from "@/assets/ayush_badminton.png.asset.json";
import cricket from "@/assets/cricket_ayush.png.asset.json";
import gym from "@/assets/ayush_with_bumble.png.asset.json";
import basketball from "@/assets/ayush_basketball.png.asset.json";
import running from "@/assets/ayush_running.png.asset.json";

const items = [
  {
    icon: Trophy,
    title: "Basketball",
    line: "Court sessions, pickup games, endless jump shots.",
    img: basketball.url,
    wide: true,
    pos: "object-center",
  },
  {
    icon: Target,
    title: "Cricket",
    line: "Weekend matches — batting order optional.",
    img: cricket.url,
    pos: "object-top",
  },
  {
    icon: Zap,
    title: "Badminton",
    line: "Fast rallies and sharper reflexes.",
    img: badminton.url,
    pos: "object-top",
  },
  {
    icon: Dumbbell,
    title: "Gym",
    line: "Strength work, logged and progressive.",
    img: gym.url,
    pos: "object-top",
  },
  {
    icon: Footprints,
    title: "Running",
    line: "Morning kilometres to clear the head.",
    img: running.url,
    pos: "object-top",
  },
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
      className={`group relative overflow-hidden rounded-2xl border border-ink/10 bg-cream-dim/60 transition-transform duration-200 will-change-transform hover:border-brand/40 ${
        item.wide ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${item.wide ? "aspect-4/3 lg:aspect-3/4" : "aspect-4/5"}`}
      >
        <img
          src={item.img}
          alt={`Ayush Kolla — ${item.title}`}
          loading="lazy"
          className={`h-full w-full object-cover ${item.pos} scale-105 grayscale-[35%] contrast-115 transition-transform duration-700 group-hover:scale-110`}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-70 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40"
          style={{ background: "var(--gradient-red)" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-red/80 via-transparent to-transparent" />
        <span className="eyebrow absolute left-5 top-5 rounded-full bg-cream/85 px-3 py-1 text-deep-red">
          {String(items.indexOf(item) + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative p-6">
        <Icon className="h-6 w-6 text-brand" strokeWidth={1.5} />
        <h3 className="mt-4 text-2xl text-ink">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.line}</p>
      </div>
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