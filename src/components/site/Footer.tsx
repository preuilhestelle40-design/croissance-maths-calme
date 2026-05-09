export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3 text-sm text-muted-foreground">
        <div>
          <p className="font-serif text-2xl text-primary">Croissance</p>
          <p className="mt-2">Accompagnement en mathématiques</p>
          <p> — Du collège à la Terminale.</p>
        </div>
        <div>
          <p className="text-foreground font-medium mb-2">Zone d'intervention</p>
          <p>Hossegor · Capbreton · Labenne · Ondres · Boucau · Tarnos</p>
          <p className="mt-1">& Visioconférence partout en France</p>
        </div>
        <div>
          <p className="text-foreground font-medium mb-2">Contact</p>
          <p>Estelle — Capbreton (40)</p>
          <p className="mt-1">contact@croissance-maths.fr</p>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Croissance. Tous droits réservés.
      </div>
    </footer>
  );
}
