import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/pexels-mart-production-8472919_(1).jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Croissance — Cours de maths à Capbreton & en visio" },
      {
        name: "description",
        content:
          "Cours particuliers de mathématiques de la 3ème à la Terminale à Capbreton, Hossegor, Labenne et en visio. Méthode structurée, première séance offerte.",
      },
      { property: "og:title", content: "Croissance — Cours de maths à Capbreton" },
      {
        property: "og:description",
        content:
          "Redonner le goût des mathématiques et assurer une progression rapide, de la 3ème à la Terminale.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grain absolute inset-0 opacity-60 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 md:px-6 pt-8 pb-10 md:pt-16 md:pb-20 lg:pt-24 lg:pb-28 relative">
        {/* Mobile: image top-right beside title */}
        <div className="flex gap-4 md:contents">
          <div className="flex-1 min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-2.5 py-0.5 text-[10px] md:text-sm uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              Capbreton · Côte sud landaise · Visio
            </span>
            <h1 className="mt-3 md:mt-6 font-serif text-3xl sm:text-6xl lg:text-7xl leading-[1.05] text-primary text-balance">
              Transformez les difficultés en réussite&nbsp;:
              <span className="block italic text-terracotta/90 mt-1 md:mt-2">
                les maths en toute confiance.
              </span>
            </h1>
          </div>
          {/* Mobile: small image beside title */}
          <div className="md:hidden flex-shrink-0 w-28 self-start mt-8">
            <div className="relative">
              <img
                src={heroImg}
                alt="Élèves en cours de mathématiques"
                width={1600}
                height={1400}
                className="rounded-2xl object-cover aspect-[4/5] w-full shadow-xl shadow-primary/10"
              />
              <div className="absolute -bottom-2 -left-1 rounded-xl bg-card border border-border px-2 py-1.5 shadow-lg max-w-[120px]">
                <p className="text-[8px] uppercase tracking-widest text-bronze">Première séance</p>
                <p className="font-serif text-xs text-primary mt-0.5">30 min offertes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: image in grid column */}
        <div className="hidden md:block lg:grid lg:grid-cols-12 lg:gap-12 items-center mt-0">
          <div className="lg:col-span-7" />
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sand/60 to-terracotta/20 blur-2xl" />
              <img
                src={heroImg}
                alt="Élèves travaillant ensemble en groupe sur des exercices de mathématiques avec cahiers, calculatrice et outils de géométrie"
                width={1600}
                height={1400}
                className="relative rounded-3xl object-cover aspect-[4/5] w-full shadow-2xl shadow-primary/10"
              />
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card border border-border px-5 py-4 shadow-xl shadow-primary/10 max-w-[220px]">
                <p className="text-sm uppercase tracking-widest text-bronze">Première séance</p>
                <p className="font-serif text-xl text-primary mt-1">30 min offertes</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Sans engagement, en présentiel ou visio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Description text full width on mobile */}
        <p className="mt-3 md:mt-7 text-sm md:text-lg text-foreground/75 max-w-xl text-pretty leading-relaxed">
          De la 3ème à la Terminale, je redonne le goût des mathématiques à mes élèves et
          assure une progression rapide. Basée à Capbreton, j'accompagne votre
          enfant vers le progrès et améliore sa confiance en soi.
        </p>

        <div className="mt-4 md:mt-9 flex flex-wrap items-center gap-3 md:gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 md:px-7 md:py-4 text-xs md:text-sm font-medium tracking-wide hover:bg-primary/90 transition shadow-[0_10px_30px_-12px_oklch(0.36_0.05_200/0.6)]"
          >
            Réserver mon premier cours offert
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/methode"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2.5 text-xs md:text-sm text-foreground/80 hover:border-primary/40 hover:text-primary transition"
          >
            Découvrir la méthode
          </a>
        </div>

        <dl className="mt-6 md:mt-12 grid grid-cols-3 gap-4 md:gap-6 max-w-xs md:max-w-md">
          {[
            { k: "10+", v: "ans d'expérience" },
            { k: "6ᵉ → Tᵉ", v: "tous niveaux" },
            { k: "100%", v: "personnalisé" },
          ].map((s) => (
            <div key={s.v}>
              <dt className="font-serif text-lg md:text-2xl text-primary">{s.k}</dt>
              <dd className="text-[10px] md:text-sm text-muted-foreground mt-0.5 md:mt-1">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
