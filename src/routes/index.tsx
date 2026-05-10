import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/pexels-mart-production-8472919_(1).jpg";
import estelleImg from "@/assets/IMG_1324_2.jpg";

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
  component: Index,
});

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grain absolute inset-0 opacity-60 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 md:px-6 pt-8 pb-10 md:pt-16 md:pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-12 gap-6 md:gap-12 items-center relative">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-2.5 py-0.5 text-[10px] md:text-sm uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Capbreton · Côté sud landaise · Visio
          </span>
          <h1 className="mt-3 md:mt-6 font-serif text-3xl sm:text-6xl lg:text-7xl leading-[1.05] text-primary text-balance">
            Transformez les difficultés en réussite&nbsp;:
            <span className="block italic text-terracotta/90 mt-1 md:mt-2">
              les maths en toute confiance.
            </span>
          </h1>
          <p className="mt-3 md:mt-7 text-sm md:text-lg text-foreground/75 max-w-xl text-pretty leading-relaxed">
            De la 3ème à la Terminale, je redonne le goût des mathématiques à mes élèves et
            assure une progression rapide. Basée à Capbreton, j'accompagne votre
            enfant vers le progrès et améliore sa confiance en soit.
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
              href="#methode"
              className="text-xs md:text-sm text-foreground/70 hover:text-primary transition underline-offset-4 hover:underline"
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

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sand/60 to-terracotta/20 blur-2xl" />
            <img
              src={heroImg}
              alt="Élèves travaillant ensemble en groupe sur des exercices de mathématiques avec cahiers, calculatrice et outils de géométrie"
              width={1600}
              height={1400}
              className="relative rounded-2xl md:rounded-3xl object-cover aspect-[4/5] w-full max-h-[45vh] lg:max-h-none shadow-2xl shadow-primary/10"
            />
            <div className="absolute -bottom-3 -left-2 md:-bottom-6 md:-left-6 rounded-xl md:rounded-2xl bg-card border border-border px-3 py-2 md:px-5 md:py-4 shadow-xl shadow-primary/10 max-w-[160px] md:max-w-[220px]">
              <p className="text-[9px] md:text-sm uppercase tracking-widest text-bronze">Première séance</p>
              <p className="font-serif text-sm md:text-xl text-primary mt-0.5 md:mt-1">30 min offertes</p>
              <p className="text-[9px] md:text-sm text-muted-foreground mt-0.5 md:mt-1">
                Sans engagement, en présentiel ou visio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Methode() {
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

  return (
    <section id="methode" className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-24">
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
            <div className="flex items-baseline justify-between">
              <span className="font-serif text-3xl md:text-5xl text-sand group-hover:text-terracotta transition-colors">
                {s.n}
              </span>
              <span className="h-px w-8 md:w-12 bg-border" />
            </div>
            <h3 className="mt-2 md:mt-6 font-serif text-lg md:text-2xl text-primary">{s.title}</h3>
            <p className="mt-1.5 md:mt-3 text-xs md:text-base font-medium text-foreground/80">{s.lead}</p>
            <p className="mt-1.5 md:mt-3 text-[11px] md:text-m text-muted-foreground leading-relaxed">{s.body}</p>
          </article>
        ))}
      </div>

    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="bg-muted/50 border-y border-border/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-24 grid lg:grid-cols-12 gap-6 md:gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-3 rounded-3xl bg-bronze/20 blur-2xl" />
          <img
            src={estelleImg}
            alt="Estelle, professeure de mathématiques"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative rounded-2xl md:rounded-3xl object-cover aspect-[4/5] w-full max-h-[35vh] lg:max-h-none shadow-xl shadow-primary/10"
          />
        </div>
        <div className="lg:col-span-7">
          <p className="text-[10px] md:text-sm uppercase tracking-[0.30em] text-bronze">Qui suis-je ?</p>
          <h2 className="mt-1.5 md:mt-3 font-serif text-2xl sm:text-5xl text-primary text-balance">
            Pédagogie & Bienveillance.
          </h2>
          <p className="mt-2 md:mt-4 font-serif italic text-sm md:text-xl text-terracotta/90">
            Estelle, votre professeure de mathématiques.
          </p>
          <div className="mt-3 md:mt-6 space-y-2 md:space-y-5 text-foreground/75 leading-relaxed text-xs md:text-m max-w-2xl">
            <p>
              Ancienne Data Analyst en entreprise, diplômée d'un Master en
              Statistiques et Informatique, j'ai choisi de quitter les écrans
              pour revenir à l'humain. Après avoir enseigné en collège, j'ai
              constaté une réalité frappante : en classe, le nombre d'élèves
              étouffe souvent la curiosité. Beaucoup n'osent pas poser de
              questions par peur du jugement ou par manque de temps.
            </p>
            <p>
              <span className="font-serif italic text-terracotta/90">Ma mission :</span>{" "}
              je suis convaincue que chaque élève possède les capacités de
              réussir avec le bon cadre. Chez Croissance, je propose un
              accompagnement où la rigueur scientifique rencontre
              la bienveillance. Ici, on ose poser ses questions. On ne travaille
              pas seulement les mathématiques : on construit un raisonnement logique, on améliore l'autonomie, la
              persévérance et la confiance qui serviront toute la vie.
            </p>
          </div>
          <div className="mt-4 md:mt-8 flex flex-wrap gap-2 md:gap-4">
            {[
              { k: "Master", v: "Statistiques & Informatique" },
              { k: "Data Analyst", v: "Expérience en entreprise" },
              { k: "Enseignante", v: "Collège & particuliers" },
            ].map((b) => (
              <div key={b.k} className="rounded-xl md:rounded-2xl border border-border bg-card px-3 py-2 md:p-4">
                <p className="font-serif text-xs md:text-base text-primary">{b.k}</p>
                <p className="text-[10px] md:text-sm text-muted-foreground mt-0.5 md:mt-1">{b.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Formats() {
  const blocs = [
    {
      tag: "",
      title: "Cours individuels",
      subtitle: "L'excellence personnalisée",
      hook: "L'attention totale pour une progression éclair.",
      maths: [
        "Diagnostic immédiat des blocages",
        "Programme 100% sur-mesure",
        "Rythme adapté à chaque élève",
      ],
      psy: [
        { k: "Organisation", v: "Méthodes de planification pour alléger la charge mentale." },
        { k: "Mindset", v: "Transformer le « je n'y arriverai pas » en stratégie de réussite." },
        { k: "Gestion du stress", v: "Apprendre à rester serein devant sa copie." },
      ],
      cta: "Réserver mon premier cours",
      featured: true,
    },
    {
      tag: "",
      title: "Cours en petit groupe",
      subtitle: "L'énergie collective",
      hook: "L'émulation du groupe, la précision du suivi.",
      maths: [
        "Format dynamique (2 à 4 élèves)",
        "L'aspect « classe » sans la foule",
        "Tarif accessible",
      ],
      psy: [
        { k: "Collaboration", v: "Expliquer aux autres pour mieux comprendre soi-même." },
        { k: "Oral", v: "Oser prendre la parole et argumenter sans peur du jugement." },
        { k: "Entraide", v: "Utiliser l'erreur collective comme un levier d'apprentissage." },
      ],
      cta: "Rejoindre un groupe",
      featured: true,
    },
  ];

  return (
    <section id="formats" className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-24">
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
            key={b.tag}
            className={`relative rounded-2xl md:rounded-3xl border p-4 md:p-8 sm:p-10 transition-all ${
              b.featured
                ? "bg-card border-primary/30 shadow-2xl shadow-primary/10"
                : "bg-card border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            }`}
          >
            <p className="text-[9px] md:text-sm uppercase tracking-[0.30em] text-bronze">{b.tag}</p>
            <h3 className="mt-1 md:mt-3 font-serif text-lg md:text-3xl text-primary">{b.title}</h3>
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
              href="#contact"
              className="mt-4 md:mt-9 inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 md:px-6 md:py-3.5 text-xs md:text-sm hover:bg-primary/90 transition"
            >
              {b.cta} →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Offres() {
  const cards = [
    {
      tag: "",
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
      tag: "",
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
      tag: "",
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

  return (
    <section id="offres" className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-[10px] md:text-sm uppercase tracking-[0.30em] text-terracotta">Les formules</p>
        <h2 className="mt-1.5 md:mt-3 font-serif text-2xl sm:text-5xl text-primary text-balance">
          Trois manières d'avancer, au rythme de l'élève.
        </h2>
      </div>

      <div className="mt-4 md:mt-14 grid grid-cols-3 gap-2 md:gap-6">
        {cards.map((c) => (
          <article
            key={c.tag}
            className={`relative rounded-2xl md:rounded-3xl p-3 md:p-8 border transition-all ${
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
            <p
              className={`text-[8px] md:text-sm uppercase tracking-[0.2em] ${
                c.featured ? "text-bronze" : "text-terracotta"
              }`}
            >
              {c.tag}
            </p>
            <h3 className="mt-1 md:mt-3 font-serif text-xs md:text-2xl">{c.title}</h3>
            <p
              className={`mt-0.5 md:mt-1 text-[9px] md:text-sm ${
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
                  <span className={`text-[9px] md:text-sm ${c.featured ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
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
  );
}

function Avis() {
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
  return (
    <section id="avis" className="bg-muted/50 border-y border-border/60">
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
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 md:px-6 py-6 md:py-24">
      <div className="rounded-2xl md:rounded-3xl bg-primary text-primary-foreground p-5 md:p-10 sm:p-14 lg:p-20 relative overflow-hidden">
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
            <div className="mt-3 md:mt-8 flex flex-wrap gap-2 md:gap-3">
              <a
                href="tel:+33687271470"
                className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-cream text-primary px-4 py-2 md:px-6 md:py-3.5 text-xs md:text-sm font-medium hover:bg-cream/90 transition"
              >
                Appeler maintenant
              </a>
              <a
                href="https://calendly.com/contact-cours-croissance/30min?primary_color=164547"
                className="inline-flex items-center gap-1.5 md:gap-2 rounded-full border border-cream/30 px-4 py-2 md:px-6 md:py-3.5 text-xs md:text-sm hover:bg-cream/10 transition"
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
  );
}

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main>
        <Hero />
        <Methode />
        <Formats />
        <Offres />
        <Expertise />
        <Avis />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
