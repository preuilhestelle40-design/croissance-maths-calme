export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-6 md:mt-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 md:py-12 grid gap-4 md:gap-8 md:grid-cols-3 text-[10px] md:text-sm text-muted-foreground">
        <div>
          <p className="font-serif text-base md:text-2xl text-primary">Croissance</p>
          <p className="mt-1 md:mt-2">Accompagnement en mathématiques — Du collège à la Terminale.</p>
        </div>
        <div>
          <p className="text-foreground font-medium mb-1 md:mb-2">Zone d'intervention</p>
          <p>Hossegor · Capbreton · Labenne · Ondres · Tarnos</p>
          <p className="mt-0.5 md:mt-1">& Visioconférence partout en France</p>
        </div>
        <div>
          <p className="text-foreground font-medium mb-1 md:mb-2">Contact</p>
          <p>Estelle — Capbreton (40)</p>
          <p className="mt-0.5 md:mt-1">contact@cours-croissance.fr</p>
          <p className="mt-0.5 md:mt-1">06 87 27 14 70</p>
        </div>
      </div>
      <div className="border-t border-border/60 py-3 md:py-5 text-center text-[9px] md:text-xs text-muted-foreground">
        © {new Date().getFullYear()} Croissance. Tous droits réservés.
      </div>
    </footer>
  );
}
