import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/methode")({
  head: () => ({
    meta: [
      { title: "Croissance — La méthode" },
      { name: "description", content: "Une méthode structurée en 3 étapes pour une progression mesurable en mathématiques." },
    ],
  }),
  component: MethodePage,
});

const steps = [
  {
    n: "01",
    title: "Rituel",
    lead: "Quelques questions simples sur les chapitres déjà étudiés.",
    body:
      "L'élève entretient ses compétences acquises, travaille ses automatismes et gagne en confiance.",
  },
  {
    n: "02",
    title: "Point leçon",
    lead: "Les questions de l'élève trouvent enfin une réponse claire.",
    body:
      "Formules et méthodes sont revues à travers des exemples concrets. Un pense-bête est mis en place pour mémoriser durablement.",
  },
  {
    n: "03",
    title: "Entraînement",
    lead: "Pratique active : exercices, problèmes, jeux et annales.",
    body:
      "Difficulté progressive, et travail régulier sur les annales pour les classes à examens — découvrir les attendus, sereinement.",
  },
];

function MethodePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-24">
          <div className="grid lg:grid-cols-12 gap-4 md:gap-12 items-end mb-6 md:mb-14">
            <div className="lg:col-span-7">
              <p className="text-[10px] md:text-sm uppercase tracking-[0.30em] text-terracotta">La méthode Croissance</p>
              <h2 className="mt-1.5 md:mt-3 font-serif text-2xl sm:text-5xl text-primary text-balance">
                Une méthode structurée pour une progression mesurable.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-xs md:text-base text-foreground/70 leading-relaxed">
                Chaque cours suit un déroulé pensé pour ancrer les acquis, lever les
                blocages et construire l'autonomie. Une disponibilité par message
                entre les séances complète l'accompagnement.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-3 md:gap-6">
            {steps.map((s) => (
              <article
                key={s.n}
                className="group rounded-2xl md:rounded-3xl bg-card border border-border/70 p-4 md:p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div className="flex items-baseline gap-3 md:flex-col md:gap-0">
                  <span className="font-serif text-2xl md:text-5xl text-sand group-hover:text-terracotta transition-colors">
                    {s.n}
                  </span>
                  <h3 className="font-serif text-base md:text-2xl text-primary">{s.title}</h3>
                </div>
                <p className="mt-1.5 md:mt-3 text-xs md:text-base font-medium text-foreground/80">{s.lead}</p>
                <p className="mt-1.5 md:mt-3 text-[11px] md:text-m text-muted-foreground leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>

          {/* CTA button */}
          <div className="mt-8 md:mt-14 text-center">
            <a
              href="/cours"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm font-medium tracking-wide hover:bg-primary/90 transition shadow-[0_10px_30px_-12px_oklch(0.36_0.05_200/0.6)]"
            >
              Découvrir les cours
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
