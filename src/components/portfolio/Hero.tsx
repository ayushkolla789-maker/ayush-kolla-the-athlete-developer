import { useEffect, useRef, useState } from "react";
import heroAsset from "@/assets/ayush-hero.png.asset.json";
import { useReducedMotion } from "./use-reduced-motion";

const MARQUEE = [
  "JAVA",
  "PYTHON",
  "FULL-STACK",
  "BASKETBALL",
  "CRICKET",
  "BADMINTON",
  "GYM",
  "RUNNING",
  "SHIPPING IDEAS",
];

function Timecode() {
  const [frames, setFrames] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      setFrames(Math.floor(((now - start) / 1000) * 24));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const ff = frames % 24;
  const total = Math.floor(frames / 24);
  const p = (n: number) => String(n).padStart(2, "0");

  return (
    <span className="font-mono text-[0.65rem] tracking-[0.2em] text-accent-red">
      {p(Math.floor(total / 3600))}:{p(Math.floor(total / 60) % 60)}:{p(total % 60)}:{p(ff)}
    </span>
  );
}

export function Hero() {
  const [flipped, setFlipped] = useState(false);
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => setOffset(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  return (
    <section id="top" ref={sectionRef} className="bg-ink pb-8">
      {/* top letterbox */}
      <div className="flex items-center justify-between bg-black px-5 py-2 sm:px-8">
        <span className="font-mono text-[0.65rem] tracking-[0.2em] text-cream/60">
          AK — PORTFOLIO CUT
        </span>
        <Timecode />
      </div>

      <div className="[perspective:1600px]">
        <button
          type="button"
          onClick={() => setFlipped((v) => !v)}
          aria-label="Flip the hero frame"
          className="flip-3d relative block aspect-[4/5] w-full cursor-pointer text-left sm:aspect-[21/9] sm:max-h-[76vh]"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          {/* FRONT */}
          <div className="backface-hidden absolute inset-0 overflow-hidden bg-ink">
            <img
              src={heroAsset.url}
              alt="Ayush Kolla, full-stack developer in Hyderabad"
              width={1656}
              height={950}
              className="absolute inset-0 h-full w-full scale-110 object-cover object-[70%_center]"
              style={{ transform: `translate3d(0, ${offset * 0.12}px, 0) scale(1.12)` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,0,5,0.94),rgba(21,0,5,0.55)_55%,rgba(21,0,5,0.15))]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,0,5,0.6),transparent_40%,rgba(21,0,5,0.75))]" />

            <span className="absolute top-4 right-4 rounded-full bg-brand px-3 py-1 font-mono text-[0.6rem] tracking-[0.22em] text-cream sm:top-6 sm:right-8">
              ATHLETE MODE
            </span>

            <div
              className="absolute inset-y-0 left-0 flex max-w-2xl flex-col justify-center gap-4 px-5 sm:px-10 lg:px-16"
              style={{ transform: `translate3d(0, ${offset * -0.05}px, 0)` }}
            >
              <p className="eyebrow animate-rise text-cream-dim/80">
                Hyderabad — on the court, in the gym, in the codebase
              </p>
              <h1 className="font-display text-[15vw] leading-[0.86] sm:text-[9vw] lg:text-[7.5rem]">
                <span className="block overflow-hidden">
                  <span className="animate-rise block text-cream [animation-delay:120ms]">
                    <span className="animate-drift block">AYUSH</span>
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="animate-rise block text-accent-red [animation-delay:280ms]">
                    <span className="animate-drift-slow block">KOLLA</span>
                  </span>
                </span>
              </h1>
              <p className="animate-rise max-w-lg text-sm leading-relaxed text-cream-dim/85 [animation-delay:420ms] sm:text-base">
                Full-stack developer working in Java and Python — and just as consistent off the
                keyboard with basketball, cricket, badminton, gym and running.
              </p>
              <div className="animate-rise flex flex-wrap gap-3 [animation-delay:520ms]">
                <a
                  href="#connect"
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-full bg-brand px-5 py-3 font-mono text-[0.7rem] tracking-[0.18em] uppercase text-cream transition-colors hover:bg-accent-red"
                >
                  Get in touch
                </a>
                <a
                  href="#work"
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-full border border-cream/45 px-5 py-3 font-mono text-[0.7rem] tracking-[0.18em] uppercase text-cream transition-colors hover:border-accent-red hover:text-accent-red"
                >
                  See the work
                </a>
              </div>
            </div>

            <span className="absolute bottom-4 right-5 font-mono text-[0.6rem] tracking-[0.2em] text-cream/55 sm:right-8">
              Click frame to flip →
            </span>
          </div>

          {/* BACK */}
          <div
            className="backface-hidden absolute inset-0 overflow-hidden bg-ink-soft"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className="flex h-full flex-col justify-center gap-2 px-5 font-mono text-[0.72rem] leading-relaxed text-cream-dim/85 sm:px-10 sm:text-sm lg:px-16">
              <p className="mb-2 text-accent-red">$ ayush --dev-mode</p>
              <p>
                <span className="text-cream/50">role </span>Full-stack developer
              </p>
              <p>
                <span className="text-cream/50">languages </span>[Java, Python]
              </p>
              <p>
                <span className="text-cream/50">focus </span>Web platforms that solve real problems
              </p>
              <p>
                <span className="text-cream/50">off_duty </span>basketball · cricket · badminton ·
                gym · running
              </p>
              <p>
                <span className="text-cream/50">shipped </span>Farmer Forward, Awaaz, B-Trade
              </p>
              <p>
                <span className="text-cream/50">status </span>
                <span className="text-[#3ddc84]">online</span>
              </p>
            </div>
            <span className="absolute bottom-4 right-5 font-mono text-[0.6rem] tracking-[0.2em] text-cream/55 sm:right-8">
              Click frame to flip →
            </span>
          </div>
        </button>
      </div>

      {/* bottom letterbox marquee */}
      <div className="overflow-hidden bg-black py-2">
        <div className="animate-marquee flex w-max gap-6 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((word, i) => (
            <span
              key={`${word}-${i}`}
              className={`font-mono text-[0.65rem] tracking-[0.25em] ${
                i % 2 === 0 ? "text-cream/70" : "text-accent-red"
              }`}
            >
              {word} ·
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <span className="animate-bounce-soft font-mono text-[0.6rem] tracking-[0.25em] text-cream/50">
          ↓ SCROLL
        </span>
      </div>
    </section>
  );
}