import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import estelleImg from "@/assets/IMG_1324_2.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "Croissance — A propos" },
      { name: "description", content: "Estelle, professeure de mathématiques à Capbreton. Master en Statistiques, ancienne Data Analyst, enseignante bienveillante." },
    ],
  }),
  component: AProposPage,
});

function AProposPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <section className="bg-muted/50 border-y border-border/60">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-24">
            {/* Photo beside header */}
            <div className="flex gap-4 md:gap-8 items-start mb-6 md:mb-8">
              <img
                src={estelleImg}
                alt="Estelle, professeure de mathématiques"
                width={1024}
                height={1280}
                loading="lazy"
                className="rounded-2xl md:rounded-3xl object-cover w-24 h-24 md:w-48 md:h-48 flex-shrink-0 shadow-xl shadow-primary/10"
              />
              <div className="min-w-0">
                <p className="text-[10px] md:text-sm uppercase tracking-[0.30em] text-bronze">Qui suis-je ?</p>
                <h2 className="mt-1.5 md:mt-3 font-serif text-2xl sm:text-5xl text-primary text-balance">
                  Pédagogie & Bienveillance.
                </h2>
                <p className="mt-1 md:mt-4 font-serif italic text-sm md:text-xl text-terracotta/90">
                  Estelle, votre professeure de mathématiques.
                </p>
              </div>
            </div>

            {/* Body text — different content mobile vs desktop */}
            <div className="space-y-3 md:space-y-5 text-foreground/75 leading-relaxed text-xs md:text-lg max-w-3xl">
              {/* Mobile: shorter text */}
              <p className="md:hidden">
                Ancienne Data Analyst, diplômée d'un Master en Statistiques et
                Informatique, j'ai quitté les écrans pour revenir à l'humain.
                Après avoir enseigné en collège, j'ai constaté que le nombre
                d'élèves étouffe souvent la curiosité. Beaucoup n'osent pas
                poser de questions.
              </p>
              {/* Desktop: full text */}
              <p className="hidden md:block">
                Ancienne Data Analyst en entreprise, diplômée d'un Master en
                Statistiques et Informatique, j'ai choisi de quitter les écrans
                pour revenir à l'humain. Après avoir enseigné en collège, j'ai
                constaté une réalité frappante : en classe, le nombre d'élèves
                étouffe souvent la curiosité. Beaucoup n'osent pas poser de
                questions par peur du jugement ou par manque de temps.
              </p>
              {/* Mobile: shorter mission */}
              <p className="md:hidden">
                <span className="font-serif italic text-terracotta/90">Ma mission :</span>{" "}
                chaque élève possède les capacités de réussir avec le bon cadre.
                Chez Croissance, la rigueur scientifique rencontre la bienveillance.
                On construit un raisonnement logique, l'autonomie et la confiance.
              </p>
              {/* Desktop: full mission */}
              <p className="hidden md:block">
                <span className="font-serif italic text-terracotta/90">Ma mission :</span>{" "}
                je suis convaincue que chaque élève possède les capacités de
                réussir avec le bon cadre. Chez Croissance, je propose un
                accompagnement où la rigueur scientifique rencontre
                la bienveillance. Ici, on ose poser ses questions. On ne travaille
                pas seulement les mathématiques : on construit un raisonnement logique, on améliore l'autonomie, la
                persévérance et la confiance qui serviront toute la vie.
              </p>
            </div>

            {/* Credentials — different content mobile vs desktop */}
            <div className="mt-4 md:mt-8 flex flex-wrap gap-2 md:gap-4">
              {/* Mobile: abbreviated */}
              <div className="md:hidden rounded-xl border border-border bg-card px-3 py-1.5">
                <p className="font-serif text-[11px] text-primary leading-none">Master · Data Analyst · Enseignante</p>
              </div>
              {/* Desktop: full with sub-labels */}
              {[
                { k: "Master", v: "Statistiques et Informatique" },
                { k: "Data Analyst", v: "Expérience en entreprise" },
                { k: "Enseignante", v: "Collège & particuliers" },
              ].map((b) => (
                <div key={b.k} className="hidden md:block rounded-2xl border border-border bg-card px-4 py-3">
                  <p className="font-serif text-sm text-primary">{b.k}</p>
                  <p className="text-xs text-muted-foreground mt-1">{b.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
