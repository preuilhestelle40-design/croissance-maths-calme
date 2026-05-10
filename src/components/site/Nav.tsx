import { useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { href: "#methode", label: "Méthode" },
  { href: "#offres", label: "Cours" },
  { href: "#expertise", label: "A propos" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <nav className="mx-auto max-w-6xl px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-xl md:text-2xl text-primary">Croissance</span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground hidden sm:inline">
            Mathématiques
          </span>
        </Link>

        {/* Desktop nav */}
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
          className="hidden md:inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm hover:opacity-90 transition"
        >
          Cours offert
        </a>

        {/* Mobile: hamburger + CTA */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-xs"
          >
            Cours offert
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
            aria-label="Menu"
          >
            <span
              className={`block h-[2px] w-5 bg-primary transition-all origin-center ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-primary transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-primary transition-all origin-center ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col px-4 py-3 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
