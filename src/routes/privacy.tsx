import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Mail, Lock, Eye, FileText, ArrowRight } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

const title = "Privacybeleid — SLUISWEB Digital Agency";
const description =
  "Het privacybeleid van SLUISWEB. Lees hoe wij omgaan met uw persoonsgegevens, AVG/GDPR naleving, cookies en beveiliging.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { lang } = useI18n();

  return (
    <SiteLayout>
      <PageHero
        title={lang === "nl" ? "Privacybeleid" : "Privacy Policy"}
        subtitle={
          lang === "nl"
            ? "Wij respecteren uw privacy en beschermen uw persoonsgegevens conform de Algemene Verordening Gegevensbescherming (AVG / GDPR)."
            : "We respect your privacy and protect your personal data in compliance with GDPR regulations."
        }
      />

      <section className="section-shell py-16 max-w-4xl mx-auto space-y-12">
        {/* Quick Highlights Grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
            <ShieldCheck className="h-8 w-8 text-primary mx-auto" />
            <h3 className="mt-3 font-bold">{lang === "nl" ? "AVG / GDPR Conform" : "GDPR Compliant"}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {lang === "nl" ? "Volledige naleving van de Europese wetgeving." : "Full compliance with EU data protection laws."}
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
            <Lock className="h-8 w-8 text-primary mx-auto" />
            <h3 className="mt-3 font-bold">{lang === "nl" ? "Veilige Opslag" : "Secure Storage"}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {lang === "nl" ? "Gegevens opgeslagen op Nederlandse ISO-gecertificeerde servers." : "Data stored on ISO-certified Dutch servers."}
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
            <Eye className="h-8 w-8 text-primary mx-auto" />
            <h3 className="mt-3 font-bold">{lang === "nl" ? "Geen Verkoop" : "Zero Selling"}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {lang === "nl" ? "Wij verkopen of delen uw data nooit met derden." : "We never sell or rent your personal data."}
            </p>
          </div>
        </div>

        {/* Legal Text Document Body */}
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-soft space-y-8 text-foreground/90 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              1. Identiteit van de Verwerkingsverantwoordelijke
            </h2>
            <p>
              SLUISWEB Digital Agency, gevestigd te Bartokstraat, Heemskerk, Nederland, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
            </p>
            <p className="text-sm text-muted-foreground">
              Contact opnemen over privacy: <a href="mailto:info@sluisweb.nl" className="text-primary underline">info@sluisweb.nl</a> of telefonisch via <a href="tel:+31684683760" className="text-primary underline">+31 6 8468 3760</a>.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">2. Welke gegevens verzamelen wij?</h2>
            <p>
              Wanneer u onze diensten gebruikt (website development, webshops, hosting of advies), verwerken wij de volgende persoonsgegevens:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Voor- en achternaam</li>
              <li>Bedrijfsnaam en KVK-nummer (indien van toepassing)</li>
              <li>E-mailadres en telefoonnummer</li>
              <li>Adresgegevens en factuurgegevens</li>
              <li>IP-adres en browserkenmerken (voor beveiliging en analytische doeleinden)</li>
              <li>Informatie ingevuld op ons contactformulier of via WhatsApp</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">3. Doel en grondslag van verwerking</h2>
            <p>SLUISWEB verwerkt uw persoonsgegevens voor de volgende doelen:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Het opstellen van offertes en uitvoeren van overeenkomsten voor webdevelopment en hosting.</li>
              <li>Het afhandelen van betalingen en facturatie.</li>
              <li>Verzenden van belangrijke systeem- en beveiligingsupdates betrekkende uw website of webshop.</li>
              <li>Telefonisch of per e-mail contact opnemen indien dit nodig is om onze dienstverlening uit te voeren.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">4. Bewaartermijn</h2>
            <p>
              SLUISWEB bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld. Factuurgegevens worden conform de wettelijke fiscale bewaarplicht 7 jaar bewaard.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">5. Delen van persoonsgegevens met derden</h2>
            <p>
              SLUISWEB verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend indien dit nodig is voor de uitvoering van onze overeenkomst met u (bijvoorbeeld voor domeinnaamregistratie bij SIDN of hostinginfrastructuur) of om te voldoen aan een wettelijke verplichting.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">6. Cookies en analytische hulpmiddelen</h2>
            <p>
              SLUISWEB gebruikt uitsluitend functionele en geanonimiseerde analytische cookies die geen inbreuk maken op uw privacy. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen op uw computer, tablet of smartphone.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">7. Uw rechten (Inzage, correctie en verwijdering)</h2>
            <p>
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken. Stuur een verzoek tot inzage of verwijdering naar <a href="mailto:info@sluisweb.nl" className="text-primary font-semibold underline">info@sluisweb.nl</a>.
            </p>
          </section>
        </div>

        {/* Contact CTA */}
        <div className="rounded-3xl border border-border bg-gradient-soft p-8 text-center space-y-4">
          <h3 className="text-xl font-bold">Vragen over ons privacybeleid?</h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Neem gerust contact met ons op via e-mail of WhatsApp. Wij beantwoorden al uw vragen binnen 24 uur.
          </p>
          <Button asChild variant="brand" size="lg" className="gap-2">
            <Link to="/contact">
              <Mail className="h-4 w-4" /> Neem contact op <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
