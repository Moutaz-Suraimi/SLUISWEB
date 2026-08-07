import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { CallToAction } from "@/components/home/HomeSections";

const title = "Portfolio — Recent Opgeleverde Projecten | SLUISWEB";
const description =
  "Bekijk ons portfolio met maatwerk websites, webshops en webapplicaties voor Nederlandse bedrijven. Hoge conversie en snelde laadtijden.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const { t, lang } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: t.portfolio.all },
    { id: "websites", label: t.portfolio.websites },
    { id: "webshops", label: t.portfolio.webshops },
    { id: "applications", label: t.portfolio.applications },
  ];

  const filteredItems =
    activeCategory === "all"
      ? t.portfolio.items
      : t.portfolio.items.filter((item) => item.category === activeCategory);

  return (
    <SiteLayout>
      <PageHero title={t.portfolio.title} subtitle={t.portfolio.subtitle} />

      <section className="section-shell py-16">
        {/* Category Filter Tabs */}
        <div className="mx-auto mb-14 flex flex-wrap justify-center gap-2 rounded-full border border-border bg-card p-1.5 shadow-soft w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-brand text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float"
            >
              {/* Visual Card Header / Mockup Banner */}
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white">
                    <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                    {item.categoryLabel}
                  </span>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-300">
                    {item.stats}
                  </span>
                </div>

                {/* 3D Stylized Graphic Placeholder */}
                <div className="relative flex items-center justify-center my-auto">
                  <div className="h-28 w-44 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-lg p-4 shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 flex flex-col justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                      <div className="ml-auto h-2 w-16 rounded bg-white/20" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 w-3/4 rounded bg-blue-400/60" />
                      <div className="h-2 w-1/2 rounded bg-cyan-300/40" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>{lang === "nl" ? "Klant Showcase" : "Client Showcase"}</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white" />
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground flex-1">
                  {item.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 pt-4 border-t border-border flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" /> {lang === "nl" ? "Live Operationeel" : "Live Operational"}
                  </span>
                  <Button asChild variant="soft" size="sm" className="gap-1">
                    <Link to="/contact">
                      {t.portfolio.viewProject} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CallToAction />
    </SiteLayout>
  );
}
