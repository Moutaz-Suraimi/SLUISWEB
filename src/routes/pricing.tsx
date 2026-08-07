import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Faq } from "@/components/home/HomeSections";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const title = "Tarieven — Vaste prijzen voor websites | SLUISWEB";
const description =
  "Transparante tarieven voor websites, webshops en maatwerk. Vaste prijs vooraf, inclusief hosting-setup, SSL en support.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  const { t } = useI18n();
  const [monthly, setMonthly] = useState(false);

  return (
    <SiteLayout>
      <PageHero title={t.pricingPage.title} subtitle={t.pricingPage.subtitle} />

      <section className="section-shell py-20">
        <div className="mx-auto mb-12 flex w-fit rounded-full border border-border bg-card p-1 shadow-soft">
          {[
            { key: false, label: t.pricingPage.oneTime },
            { key: true, label: t.pricingPage.monthly },
          ].map((opt) => (
            <button
              key={String(opt.key)}
              onClick={() => setMonthly(opt.key)}
              aria-pressed={monthly === opt.key}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                monthly === opt.key
                  ? "bg-gradient-brand text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {t.pricingPage.plans.map((plan, i) => {
            const featured = i === 1;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border p-8 transition-all ${
                  featured
                    ? "border-primary/40 bg-card shadow-float lg:-translate-y-4"
                    : "border-border bg-card shadow-soft"
                }`}
              >
                {featured && (
                  <span className="bg-gradient-brand absolute -top-3 left-8 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                    {t.pricingPage.popular}
                  </span>
                )}
                <h2 className="text-xl font-bold">{plan.name}</h2>
                <p className="mt-2 text-base text-muted-foreground">{plan.text}</p>
                <p className="text-gradient mt-6 text-4xl font-extrabold">
                  {monthly ? plan.month : plan.once}
                </p>
                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-base">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant={featured ? "brand" : "soft"} size="lg" className="mt-8">
                  <Link to="/contact">{t.pricingPage.cta}</Link>
                </Button>
              </div>
            );
          })}
        </div>
      </section>

      <Faq />
    </SiteLayout>
  );
}