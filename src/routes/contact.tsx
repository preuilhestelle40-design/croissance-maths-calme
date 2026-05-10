import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Croissance — Contact" },
      { name: "description", content: "Réservez votre premier cours offert de mathématiques avec Croissance à Capbreton ou en visioconférence." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 flex items-center">
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-8 md:py-24 w-full">
          <div className="rounded-2xl md:rounded-3xl bg-primary text-primary-foreground p-6 md:p-10 sm:p-14 lg:p-20 relative overflow-hidden">
            <div className="bg-grain absolute inset-0 opacity-30" />
            <div className="relative grid lg:grid-cols-12 gap-4 md:gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="text-[9px] md:text-sm uppercase tracking-[0.30em] text-bronze">Premier cours offert</p>
                <h2 className="mt-1.5 md:mt-3 font-serif text-xl sm:text-5xl text-balance">
                  Prêts à donner un nouveau souffle aux mathématiques ?
                </h2>
                <p className="mt-2 md:mt-5 text-xs md:text-base text-primary-foreground/80 max-w-xl leading-relaxed">
                  Échangeons quelques minutes pour cerner les besoins de votre enfant
                  et planifier la première séance — sans engagement.
                </p>
                {/* Buttons side by side */}
                <div className="mt-4 md:mt-8 flex flex-row flex-wrap gap-2 md:gap-3">
                  <a
                    href="tel:+33687271470"
                    className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-cream text-primary px-4 py-2.5 md:px-6 md:py-3.5 text-xs md:text-sm font-medium hover:bg-cream/90 transition"
                  >
                    Appeler maintenant
                  </a>
                  <a
                    href="https://calendly.com/contact-cours-croissance/30min?primary_color=164547"
                    className="inline-flex items-center gap-1.5 md:gap-2 rounded-full border border-cream/30 px-4 py-2.5 md:px-6 md:py-3.5 text-xs md:text-sm hover:bg-cream/10 transition"
                  >
                    Prendre rendez-vous
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-cream/15">
                <p className="text-[9px] md:text-sm uppercase tracking-[0.30em] text-bronze">Zone d'intervention</p>
                <p className="mt-2 md:mt-4 font-serif text-sm md:text-2xl leading-snug">
                  Côte Sud Landaise — Hossegor, Capbreton, Labenne, Ondres, Tarnos.
                </p>
                <p className="mt-1 md:mt-3 text-primary-foreground/75 text-[10px] md:text-sm">
                  & visioconférence partout en France.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
