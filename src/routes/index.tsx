import { createFileRoute } from "@tanstack/react-router";
import nicolasPhoto from "@/assets/nicolas.jpg";
import {
  CircleSlash,
  Smile,
  Timer,
  ShieldCheck,
  Check,
  UserPlus,
  Settings,
  MapPin,
  CalendarCheck,
  Star,
  Mail,
  ExternalLink,
} from "lucide-react";

const SITE_URL = "https://autoecolearrasboiteautomatique.com";
const ORNIKAR_LINK = "https://www.ornikar.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: "Auto École Arras Boîte Automatique - Nicolas",
  description:
    "Auto école à Arras spécialisée en boîte automatique. Nicolas, moniteur indépendant certifié, partenaire Ornikar. Permis boîte auto rapide et sans stress.",
  url: SITE_URL,
  image: `${SITE_URL}/nicolas.jpg`,
  areaServed: { "@type": "City", name: "Arras" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Arras",
    addressRegion: "Hauts-de-France",
    postalCode: "62000",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 50.291, longitude: 2.7777 },
  founder: { "@type": "Person", name: "Nicolas" },
  knowsAbout: [
    "permis boîte automatique Arras",
    "moniteur indépendant Arras",
    "conduite sans stress Arras",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Auto Ecole Arras Boite Automatique | Nicolas, Moniteur Ornikar",
      },
      {
        name: "description",
        content:
          "Auto ecole Arras boite automatique : apprenez à conduire avec Nicolas, moniteur indépendant Ornikar. Permis boîte auto rapide, facile et sans stress à Arras.",
      },
      {
        name: "keywords",
        content:
          "auto ecole arras boite automatique, permis boîte automatique Arras, moniteur indépendant Arras, conduite sans stress Arras, permis rapide boite auto Arras, Ornikar Arras",
      },
      { property: "og:title", content: "Auto Ecole Arras Boite Automatique | Nicolas, Moniteur Ornikar" },
      {
        property: "og:description",
        content:
          "Permis boîte automatique à Arras avec Nicolas, moniteur indépendant certifié Ornikar. Rapide, facile et sans stress.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/nicolas.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/nicolas.jpg` },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: Index,
});

function CTAButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={ORNIKAR_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-orange-foreground shadow-lg shadow-orange/30 transition-transform hover:scale-105 ${className}`}
    >
      {children}
      <ExternalLink className="h-4 w-4" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="font-heading text-lg font-bold text-teal">
            Auto École Arras <span className="text-orange">Boîte Auto</span>
          </span>
          <CTAButton className="hidden px-6 py-2.5 text-sm sm:inline-flex">
            Réserver sur Ornikar
          </CTAButton>
        </div>
      </header>

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
              Moniteur indépendant • Partenaire Ornikar
            </span>
            <h1 className="mt-5 font-heading text-3xl font-extrabold leading-tight md:text-5xl">
              Apprenez à conduire en boîte automatique à Arras avec Nicolas,
              enseignant Ornikar.
            </h1>
            <h2 className="mt-5 text-lg font-medium text-muted-foreground md:text-xl">
              Le permis facile, rapide et sans stress. Votre moniteur indépendant
              certifié pour la réussite.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Auto école Arras boîte automatique : profitez d'un{" "}
              <strong>permis boîte automatique à Arras</strong> avec un{" "}
              <strong>moniteur indépendant à Arras</strong> à votre écoute.
            </p>
            <div className="mt-8">
              <CTAButton>Me réserver sur Ornikar</CTAButton>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-teal/20 to-orange/20 blur-2xl" />
              <img
                src={nicolasPhoto}
                alt="Nicolas, moniteur boite auto Arras"
                width={768}
                height={768}
                className="relative w-72 rounded-3xl object-cover shadow-2xl md:w-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Meet Nicolas */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[auto,1fr]">
          <div className="mx-auto">
            <img
              src={nicolasPhoto}
              alt="Nicolas, enseignant de la conduite Arras boîte automatique"
              width={768}
              height={768}
              loading="lazy"
              className="h-56 w-56 rounded-full border-8 border-secondary object-cover shadow-xl"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Bonjour, je m'appelle Nicolas.
            </h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>
                J'ai 30 ans et je suis passionné par l'enseignement de la
                conduite sûre et sereine.
              </p>
              <p>
                Spécialisé en <strong>boîte automatique</strong>, j'ai créé mon
                auto-école pour vous accompagner de A à Z avec Ornikar, en tant
                qu'<strong>enseignant de la conduite à Arras</strong>{" "}
                <strong>indépendant</strong>.
              </p>
              <p>
                Mon objectif : que vous soyez un conducteur confiant, dans la
                bonne humeur. Oubliez l'embrayage et concentrez-vous sur la route !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pourquoi la boîte auto */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
            Les avantages de la Boîte Auto à Arras.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Une conduite sans stress à Arras pour un permis rapide en boîte auto.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: CircleSlash,
                title: "Plus Simple",
                text: "Fini le calage, fini l'embrayage. Apprentissage accéléré.",
              },
              {
                icon: Smile,
                title: "Moins de Stress",
                text: "Concentration totale sur le trafic et la sécurité. Moins de fatigue.",
              },
              {
                icon: Timer,
                title: "Plus Rapide",
                text: "Nombre d'heures moyen réduit par rapport à la manuelle. Permis obtenu plus vite.",
              },
              {
                icon: ShieldCheck,
                title: "Focus Sécurité",
                text: "La conduite est plus intuitive, vous réagissez mieux.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl bg-card p-6 text-center shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold">
                  {title}
                </h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tarifs */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
          Combien ça coûte ? Les tarifs Ornikar (Offre Boîte Automatique).
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          En tant que partenaire Ornikar, je propose leurs offres transparentes,
          adaptées à la boîte automatique.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Code de la Route",
              text: "Inclus gratuitement avec votre inscription Ornikar.",
              price: "0 €",
              highlight: false,
            },
            {
              title: "Heure d'Évaluation",
              text: "La première heure pour définir votre parcours.",
              price: "Tarif Ornikar",
              highlight: false,
            },
            {
              title: "Packs Permis Boîte Auto (20h/25h/30h)",
              text: "Le pack complet d'heures de conduite spécifique à la boîte automatique. Vérifiez les tarifs officiels sur Ornikar pour le pack automatique actuel.",
              price: "Dès … €",
              highlight: true,
              note: "Me sélectionner (Nicolas) comme moniteur à Arras.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`flex flex-col rounded-2xl border p-7 shadow-sm ${
                card.highlight
                  ? "border-orange bg-accent"
                  : "border-border bg-card"
              }`}
            >
              <h3 className="font-heading text-xl font-semibold">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {card.text}
              </p>
              <p className="mt-5 font-heading text-3xl font-extrabold text-teal">
                {card.price}
              </p>
              {card.note && (
                <p className="mt-3 text-sm font-medium text-orange">
                  {card.note}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Les prix Ornikar sont parmi les plus compétitifs pour la formation au
          permis boîte automatique à Arras.
        </p>
        <div className="mt-8 text-center">
          <CTAButton>Découvrir et réserver sur Ornikar</CTAButton>
        </div>
      </section>

      {/* 5. Comment ça marche */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
            Obtenir mon permis avec Nicolas et Ornikar à Arras.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: UserPlus, text: "S'inscrire sur Ornikar.fr." },
              {
                icon: Settings,
                text: "Activer mon compte et choisir le pack Auto.",
              },
              {
                icon: MapPin,
                text: "Me sélectionner comme moniteur indépendant (Nicolas) à Arras.",
              },
              {
                icon: CalendarCheck,
                text: "Réserver mes heures et me lancer !",
              },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={text}
                className="relative rounded-2xl bg-card p-6 shadow-sm"
              >
                <span className="absolute -top-3 -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-orange font-heading text-sm font-bold text-orange-foreground">
                  {i + 1}
                </span>
                <Icon className="h-8 w-8 text-teal" />
                <p className="mt-4 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Témoignages */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
          Ils ont obtenu leur permis boîte auto avec Nicolas à Arras.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Clara d'Arras",
              quote:
                "Nicolas est super pédagogue et patient. Permis en 2 mois ! La boîte auto, c'est vraiment plus simple.",
            },
            {
              name: "Léo d'Arras",
              quote:
                "Apprentissage sans stress et dans la bonne humeur. Je recommande ce moniteur indépendant à Arras.",
            },
            {
              name: "Inès d'Arras",
              quote:
                "Réservation facile via Ornikar et des cours adaptés. Obtenu du premier coup en boîte automatique !",
            },
          ].map((t) => (
            <div key={t.name} className="rounded-2xl bg-card p-7 shadow-sm">
              <div className="flex gap-1 text-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-muted-foreground">“{t.quote}”</p>
              <p className="mt-4 font-heading font-semibold text-teal">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Me trouver */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Moniteur Indépendant à Arras.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Enseignement de la conduite en boîte automatique sur tout Arras et
              les environs. Permis de conduire boîte auto Arras.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:contact@autoecolearrasboiteautomatique.com"
                className="flex items-center gap-3 font-medium"
              >
                <Mail className="h-5 w-5 text-teal" />
                contact@autoecolearrasboiteautomatique.com
              </a>
              <a
                href={ORNIKAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-medium text-teal"
              >
                <ExternalLink className="h-5 w-5" />
                Voir mon profil Ornikar
              </a>
            </div>
            <div className="mt-8">
              <CTAButton>Me réserver sur Ornikar</CTAButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <iframe
              title="Carte Arras - moniteur boîte automatique"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.7%2C50.26%2C2.86%2C50.32&layer=mapnik&marker=50.291%2C2.7777"
              className="h-80 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-foreground py-12 text-background">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="font-heading text-lg font-bold">
            Auto École Arras Boîte Automatique — Nicolas
          </p>
          <p className="mt-3 text-sm text-background/70">
            Enseignant indépendant Ornikar. Auto école Arras boîte automatique,
            permis boîte auto Arras rapide pour tous.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-5 text-sm text-background/70">
            <a href="#" className="hover:text-background">
              Mentions légales
            </a>
            <a href="#" className="hover:text-background">
              Conditions Générales
            </a>
            <a href="#" className="hover:text-background">
              Politique de confidentialité
            </a>
          </div>
          <p className="mt-6 text-xs text-background/50">
            © {new Date().getFullYear()} Auto École Arras Boîte Automatique — Tous
            droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
