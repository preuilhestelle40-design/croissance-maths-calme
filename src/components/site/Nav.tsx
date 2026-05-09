import { Link } from "@tanstack/react-router";

const links = [
  { href: "#methode", label: "Méthode" },
  { href: "#offres", label: "Cours" },
  { href: "#expertise", label: "A propos" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl text-primary">Croissance</span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground hidden sm:inline">
            Mathématiques
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm hover:opacity-90 transition"
        >
          Cours offert
        </a>
      </nav>
    </header>
  );
}
