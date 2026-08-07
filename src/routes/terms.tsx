import { createFileRoute, Link } from "@tanstack/react-router";
import { FileCheck, Shield, Scale, HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

const title = "Algemene Voorwaarden — SLUISWEB Digital Agency";
const description =
  "De Algemene Voorwaarden van SLUISWEB. Transparante afspraken over webdevelopment, prijzen, intellectueel eigendom, oplevering en hosting.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  const { lang } = useI18n();

  return (
    <SiteLayout>
      <PageHero
        title={lang === "nl" ? "Algemene Voorwaarden" : "Terms of Service"}
        subtitle={
          lang === "nl"
            ? "Heldere en transparante voorwaarden voor al onze webdevelopment, webshop en hostingdiensten."
            : "Clear and transparent terms for all our web development, e-commerce, and hosting services."
        }
      />

      <section className="section-shell py-16 max-w-4xl mx-auto space-y-12">
        {/* Core Principles */}
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
            <FileCheck className="h-8 w-8 text-primary mx-auto" />
            <h3 className="mt-3 font-bold">{lang === "nl" ? "Vaste Prijsafspraak" : "Fixed Price"}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {lang === "nl" ? "Vooraf duidelijke offerte zonder onverwachte kosten." : "Clear upfront quotes with no unexpected fees."}
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
            <Shield className="h-8 w-8 text-primary mx-auto" />
            <h3 className="mt-3 font-bold">{lang === "nl" ? "Volledig Eigendom" : "Full Code Ownership"}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {lang === "nl" ? "100% eigendom van de broncode na volledige betaling." : "You own 100% of the custom code upon full payment."}
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
            <Scale className="h-8 w-8 text-primary mx-auto" />
            <h3 className="mt-3 font-bold">{lang === "nl" ? "Nederlands Recht" : "Dutch Law"}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {lang === "nl" ? "Opgesteld conform het Nederlands handelsrecht." : "Governed under Dutch corporate law."}
            </p>
          </div>
        </div>

        {/* Legal Terms Content */}
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-soft space-y-8 text-foreground/90 leading-relaxed">
          {/* Artikel 1 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">Artikel 1. Definities en Toepasselijkheid</h2>
            <p>
              1.1. Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en leveringen van diensten door SLUISWEB Digital Agency, gevestigd te Heemskerk.
            </p>
            <p>
              1.2. Afwijkingen van deze voorwaarden zijn alleen geldig indien deze uitdrukkelijk en schriftelijk met SLUISWEB zijn overeengekomen.
            </p>
          </section>

          {/* Artikel 2 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">Artikel 2. Offertes en Tarieven</h2>
            <p>
              2.1. Alle offertes van SLUISWEB zijn vrijblijvend en 30 dagen geldig, tenzij anders vermeld op de offerte.
            </p>
            <p>
              2.2. Tarieven worden gecommuniceerd in Euro's (€) exclusief btw, conform de vaste pakketprijzen (Starter €399, Business €699, Professional €1,499, Maatwerk vanaf €2,500).
            </p>
            <p>
              2.3. Indien de opdrachtgever wijzigingen of aanvullingen in de scope wenst (meerwerk), zal SLUISWEB hiervoor vooraf een aanvullende prijsopgave verstrekken.
            </p>
          </section>

          {/* Artikel 3 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">Artikel 3. Uitvoering van de Overeenkomst</h2>
            <p>
              3.1. SLUISWEB zal de overeenkomst naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap uitvoeren.
            </p>
            <p>
              3.2. De opdrachtgever draagt er zorg voor dat alle gegevens, teksten en afbeeldingen die SLUISWEB nodig heeft tijdig worden verstrekt.
            </p>
          </section>

          {/* Artikel 4 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">Artikel 4. Oplevering en Intellectueel Eigendom</h2>
            <p>
              4.1. Na afronding van de ontwikkelingsfase wordt het project ter controle en testen voorgelegd aan de opdrachtgever.
            </p>
            <p>
              4.2. Alle uit de opdracht voortkomende rechten van intellectueel eigendom (waaronder broncode, ontwerpen en scripts) gaan over op de opdrachtgever zodra de gehele factuursom is voldaan.
            </p>
          </section>

          {/* Artikel 5 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">Artikel 5. Hosting en Onderhoud (SLA)</h2>
            <p>
              5.1. SLUISWEB spant zich in voor een optimale beschikbaarheid van haar hostingdiensten en streeft naar een uptime van 99.9%.
            </p>
            <p>
              5.2. SLUISWEB is niet aansprakelijk voor uitval veroorzaakt door overmacht of storingen bij toeleveranciers (zoals datacenterstoringen of externe cloudproviders).
            </p>
          </section>

          {/* Artikel 6 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">Artikel 6. Betalingsvoorwaarden</h2>
            <p>
              6.1. Betaling dient te geschieden binnen 14 dagen na factuurdatum, op een door SLUISWEB aan te wijzen bankrekening in Euro's.
            </p>
            <p>
              6.2. Bij projecten wordt standaard een aanbetaling van 50% gehanteerd voor de start van de werkzaamheden, en 50% bij oplevering van de website of applicatie.
            </p>
          </section>

          {/* Artikel 7 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">Artikel 7. Aansprakelijkheid en Toepasselijk Recht</h2>
            <p>
              7.1. De totale aansprakelijkheid van SLUISWEB is beperkt tot vergoeding van directe schade tot maximaal het bedrag van de voor die opdracht bedongen prijs.
            </p>
            <p>
              7.2. Op alle rechtsbetrekkingen waarbij SLUISWEB partij is, is uitsluitend het Nederlands recht van toepassing.
            </p>
          </section>
        </div>

        {/* Footer Support Banner */}
        <div className="rounded-3xl border border-border bg-gradient-soft p-8 text-center space-y-4">
          <h3 className="flex items-center justify-center gap-2 text-xl font-bold">
            <HelpCircle className="h-5 w-5 text-primary" /> Vragen over onze voorwaarden?
          </h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Wilt u specifieke afspraken maken of heeft u vragen over een offerte? Wij staan voor u klaar.
          </p>
          <Button asChild variant="brand" size="lg" className="gap-2">
            <Link to="/contact">
              Neem contact op <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
