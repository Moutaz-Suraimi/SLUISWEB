import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Globe, ShoppingCart, ServerCog, Palette, ArrowRight, Sparkles } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { CallToAction } from "@/components/home/HomeSections";
import { Services3DGrid } from "@/components/home/Services3DGrid";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

const title = "Diensten — Webdesign, webshops & SEO | SLUISWEB";
const description =
  "Website development, webshops, maatwerk applicaties, UI/UX design, SEO, hosting en onderhoud. Bekijk alle diensten van SLUISWEB.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const serviceDetailIcons = [Globe, ShoppingCart, ServerCog, Palette];

function ServicesPage() {
  const { t, lang } = useI18n();
  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.services.eyebrow}
        title={t.servicesPage.title}
        subtitle={t.servicesPage.subtitle}
      />

      {/* 3D Interactive Services Grid */}
      <Services3DGrid />

      {/* Featured Deep-Dive Service Cards */}
      <section className="section-shell py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5" /> {lang === "nl" ? "Core Specialisaties" : "Core Specializations"}
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground md:text-5xl">
            {lang === "nl" ? "Wat wij voor uw organisatie realiseren" : "What we build for your organization"}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {t.servicesPage.details.map((detail, idx) => {
            const Icon = serviceDetailIcons[idx % serviceDetailIcons.length]!;
            return (
              <article
                key={detail.title}
                className="group relative flex flex-col justify-between rounded-[32px] border border-border/80 bg-card/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/30 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20">0{idx + 1}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">{detail.title}</h3>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">{detail.desc}</p>

                  <ul className="mt-6 space-y-3">
                    {detail.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-sm font-semibold text-foreground/90">
                        <Check className="h-4 w-4 shrink-0 text-cyan-500" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                  <Button asChild size="sm" className="rounded-full gap-2 font-bold px-6 shadow-md shadow-primary/20">
                    <Link to="/contact">
                      {lang === "nl" ? "Aanvraag starten" : "Start request"} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Complete Capabilities Grid */}
      <section className="border-t border-border bg-gradient-soft py-20">
        <div className="section-shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold md:text-3xl">
              {lang === "nl" ? "Alle Diensten & Capabilities" : "All Services & Capabilities"}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {lang === "nl"
                ? "Een compleet overzicht van onze expertise en oplossingen."
                : "A complete overview of our expertise and solutions."}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.servicesPage.list.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3.5 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-float"
              >
                <span className="bg-gradient-brand flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-primary-foreground">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-base font-semibold">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </SiteLayout>
  );
}