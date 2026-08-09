import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Court & Field", href: "#court" },
  { label: "Work", href: "#work" },
  { label: "Connect", href: "#connect" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="font-display text-2xl leading-none text-brand">
          AK
        </a>
        <nav className="ml-auto hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-ink/70 transition-colors hover:text-accent-red"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#connect"
            className="rounded-full bg-brand px-4 py-2 font-mono text-[0.7rem] tracking-[0.18em] uppercase text-cream transition-colors hover:bg-accent-red"
          >
            Let's talk
          </a>
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto text-brand md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-cream px-5 pb-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-xs tracking-[0.18em] uppercase text-ink/75"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-brand px-4 py-2 text-center font-mono text-[0.7rem] tracking-[0.18em] uppercase text-cream"
          >
            Let's talk
          </a>
        </nav>
      )}
    </header>
  );
}