import { useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { href: "/methode", label: "Méthode" },
  { href: "/cours", label: "Cours" },
  { href: "/a-propos", label: "A propos" },
  { href: "/avis", label: "Avis" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <nav className="mx-auto max-w-6xl px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
        <Link to="/" className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
          <span className="font-serif text-xl md:text-2xl text-primary leading-tight">Croissance</span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            Mathématiques
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          {links.map((l) => (
            <li key={l.href}>
              <Link to={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm hover:opacity-90 transition"
        >
          Cours offert
        </Link>

        {/* Mobile: hamburger + CTA */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-xs"
          >
            Cours offert
          </Link>
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
                <Link
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
