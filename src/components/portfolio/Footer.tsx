export function Footer() {
  return (
    <footer className="bg-deep-red py-8 text-center">
      <p className="font-mono text-[0.65rem] tracking-[0.22em] uppercase text-cream/70">
        Ayush Kolla — © {new Date().getFullYear()}
      </p>
    </footer>
  );
}