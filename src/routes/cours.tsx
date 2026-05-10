import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/cours")({
  head: () => ({
    meta: [
      { title: "Croissance — Cours & Formules" },
      { name: "description", content: "Cours individuels et en petit groupe, formules d'accompagnement annuel, stages intensifs et préparation aux examens." },
    ],
  }),
  component: CoursPage,
});

const blocs = [
  {
    title: "Cours individuels",
    subtitle: "L'excellence personnalisée",
    hook: "L'attention totale pour une progression éclair.",
    maths: [
      "Diagnostic immédiat des blocages",
      "Programme 100% sur-mesure",
      "Rythme adapté à chaque élève",
    ],
    psy: [
      { k: "Organisation", v: "Planification pour alléger la charge mentale." },
      { k: "Mindset", v: "Transformer le doute en stratégie de réussite." },
      { k: "Stress", v: "Rester serein devant sa copie." },
    ],
    cta: "Réserver mon premier cours",
  },
  {
    title: "Cours en petit groupe",
    subtitle: "L'énergie collective",
    hook: "L'émulation du groupe, la précision du suivi.",
    maths: [
      "Format dynamique (2 à 4 élèves)",
      "L'aspect « classe » sans la foule",
      "Tarif accessible",
    ],
    psy: [
      { k: "Collaboration", v: "Expliquer aux autres pour mieux comprendre." },
      { k: "Oral", v: "Oser prendre la parole sans peur du jugement." },
      { k: "Entraide", v: "L'erreur collective comme levier d'apprentissage." },
    ],
    cta: "Rejoindre un groupe",
  },
];

const cards = [
  {
    title: "Accompagnement annuel",
    price: "Suivi hebdomadaire",
    bullets: [
      "Séance d'1h",
      "Individuel ou groupe restreint",
      "Plan de progression sur le trimestre",
    ],
    featured: false,
  },
  {
    title: "Stages intensifs",
    price: "Vacances scolaires",
    bullets: [
      "Remise à niveau stratégique",
      "Approfondissement des chapitres",
      "Format souple : 2 à 5 jours",
    ],
    featured: false,
  },
  {
    title: "Préparation examens",
    price: "Brevet & Bac",
    bullets: [
      "Coaching méthodologie",
      "Gestion du temps et du stress",
      "Travail régulier sur les annales",
    ],
    featured: true,
  },
];

function CoursPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        {/* Formats */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[10px] md:text-sm uppercase tracking-[0.30em] text-terracotta">
              Nos formats d'accompagnement
            </p>
            <h2 className="mt-1.5 md:mt-3 font-serif text-2xl sm:text-5xl text-primary text-balance">
              Deux manières de progresser, une même exigence.
            </h2>
            <p className="mt-2 md:mt-5 text-xs md:text-base text-foreground/70 leading-relaxed">
              Au-delà des mathématiques, chaque format développe les compétences
              psychosociales qui servent toute une scolarité — et bien plus.
            </p>
          </div>

          <div className="mt-4 md:mt-14 grid lg:grid-cols-2 gap-3 md:gap-6">
            {blocs.map((b) => (
              <article
                key={b.title}
                className="relative rounded-2xl md:rounded-3xl border p-4 md:p-8 sm:p-10 transition-all bg-card border-primary/30 shadow-2xl shadow-primary/10"
              >
                <h3 className="font-serif text-lg md:text-3xl text-primary">{b.title}</h3>
                <p className="mt-0.5 md:mt-1 font-serif italic text-xs md:text-base text-terracotta/90">{b.subtitle}</p>
                <p className="mt-2 md:mt-5 text-xs md:text-base text-foreground/80 leading-relaxed">{b.hook}</p>

                <div className="mt-3 md:mt-8">
                  <p className="text-[9px] md:text-[11px] uppercase tracking-[0.30em] text-muted-foreground">
                    Bénéfices maths
                  </p>
                  <ul className="mt-1.5 md:mt-3 space-y-1 md:space-y-2">
                    {b.maths.map((m) => (
                      <li key={m} className="flex gap-2 md:gap-3 text-[11px] md:text-sm text-foreground/80">
                        <span className="mt-1.5 md:mt-2 h-1 md:h-1.5 w-1 md:w-1.5 rounded-full bg-terracotta shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3 md:mt-8 pt-3 md:pt-6 border-t border-border/60">
                  <p className="text-[9px] md:text-[11px] uppercase tracking-[0.30em] text-muted-foreground">
                    Compétences psychosociales
                  </p>
                  <dl className="mt-1.5 md:mt-4 space-y-1.5 md:space-y-4">
                    {b.psy.map((p) => (
                      <div key={p.k}>
                        <dt className="text-[11px] md:text-m font-serif text-primary">{p.k}</dt>
                        <dd className="text-[10px] md:text-sm text-foreground/75 mt-0.5 md:mt-1 leading-relaxed">{p.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <a
                  href="/contact"
                  className="mt-4 md:mt-9 inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 md:px-6 md:py-3.5 text-xs md:text-sm hover:bg-primary/90 transition"
                >
                  {b.cta} →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Offres / Formules */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 pb-10 md:pb-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[10px] md:text-sm uppercase tracking-[0.30em] text-terracotta">Les formules</p>
            <h2 className="mt-1.5 md:mt-3 font-serif text-2xl sm:text-5xl text-primary text-balance">
              Trois manières d'avancer, au rythme de l'élève.
            </h2>
          </div>

          {/* Mobile: stacked vertically, Desktop: 3 columns */}
          <div className="mt-4 md:mt-14 grid md:grid-cols-3 gap-3 md:gap-6">
            {cards.map((c) => (
              <article
                key={c.title}
                className={`relative rounded-2xl md:rounded-3xl p-4 md:p-8 border transition-all ${
                  c.featured
                    ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/30 md:-translate-y-3"
                    : "bg-card border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                }`}
              >
                {c.featured && (
                  <span className="absolute -top-2 left-3 md:-top-3 md:left-8 rounded-full bg-bronze text-primary-foreground text-[8px] md:text-[10px] uppercase tracking-widest px-2 py-0.5 md:px-3 md:py-1">
                    Le plus demandé
                  </span>
                )}
                <h3 className="font-serif text-sm md:text-2xl">{c.title}</h3>
                <p
                  className={`mt-0.5 md:mt-1 text-[10px] md:text-sm ${
                    c.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {c.price}
                </p>
                <ul className="mt-2 md:mt-6 space-y-1 md:space-y-3">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-1.5 md:gap-3">
                      <span
                        className={`mt-1 md:mt-2 h-1 md:h-1.5 w-1 md:w-1.5 rounded-full shrink-0 ${
                          c.featured ? "bg-bronze" : "bg-terracotta"
                        }`}
                      />
                      <span className={`text-[10px] md:text-sm ${c.featured ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`mt-3 md:mt-8 inline-flex items-center gap-1 md:gap-2 rounded-full px-3 py-1.5 md:px-5 md:py-3 text-[10px] md:text-sm transition ${
                    c.featured
                      ? "bg-cream text-primary hover:bg-cream/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  En savoir plus →
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
