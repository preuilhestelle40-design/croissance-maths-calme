import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/avis")({
  head: () => ({
    meta: [
      { title: "Croissance — Témoignages" },
      { name: "description", content: "Témoignages de familles et d'élèves accompagnés par Croissance." },
    ],
  }),
  component: AvisPage,
});

const quotes = [
  {
    t: "Estelle est top. Ma fille avait une moyenne en maths basse en 3eme. Elle se faisait du soucis pour son brevet. Grâce aux cours Estelle elle a eu 16 en maths et a obtenu son brevet avec mention très bien! Je recommande à 100%.",
    a: "Suzanne",
    r: "Parent — 3ème",
  },
  {
    t: "Je recommande vivement Estelle, c'est une super prof de maths. Elle m'a donné des cours de maths pendant mon année de seconde et ça c'est très bien passé, grâce à elle, je comprenais beaucoup mieux qu'avec mon prof en classe. Les notes remontent, et je comprends tout ce qu'elle m'explique. Je continue avec Estelle pour la classe de 1ère.",
    a: "Chayma",
    r: "Élève — 2nd",
  },
  {
    t: "Estelle est une professeure en or! Elle a sauvé l'année de seconde et de première de ma fille en mathématiques. Elle sait s'adapter aux particularités des élèves ( ma fille est dys) sans jugement et avec beaucoup de bienveillance. Sa communication avec les parents est agréable et constructive.",
    a: "Emelyne",
    r: "Parent — 1ère",
  },
];

function AvisPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <section className="bg-muted/50 border-y border-border/60">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-24">
            <div className="max-w-2xl">
              <p className="text-[10px] md:text-sm uppercase tracking-[0.30em] text-terracotta">Ils témoignent</p>
              <h2 className="mt-1.5 md:mt-3 font-serif text-2xl sm:text-5xl text-primary text-balance">
                La confiance des familles, le progrès des élèves.
              </h2>
            </div>
            <div className="mt-4 md:mt-12 grid md:grid-cols-3 gap-3 md:gap-6">
              {quotes.map((q) => (
                <figure
                  key={q.a}
                  className="rounded-2xl md:rounded-3xl bg-card border border-border p-4 md:p-8 flex flex-col"
                >
                  <span className="font-serif text-3xl md:text-5xl leading-none text-terracotta">"</span>
                  <blockquote className="mt-1 md:mt-2 text-[11px] md:text-base text-foreground/80 leading-relaxed">{q.t}</blockquote>
                  <figcaption className="mt-3 md:mt-6 pt-3 md:pt-6 border-t border-border/60">
                    <p className="font-serif text-xs md:text-base text-primary">{q.a}</p>
                    <p className="text-[10px] md:text-sm text-muted-foreground mt-0.5 md:mt-1">{q.r}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
