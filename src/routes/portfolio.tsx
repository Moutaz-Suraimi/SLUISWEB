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
              className="group relative flex flex-col overflow-hidden rounded-[32px] border border-border/80 bg-card/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Visual Card Header / Mockup Banner */}
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between relative z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                    <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                    {item.categoryLabel}
                  </span>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3.5 py-1 text-xs font-black text-emerald-300 backdrop-blur-md shadow-sm">
                    {item.stats}
                  </span>
                </div>

                {/* 3D Stylized Graphic Placeholder */}
                <div className="relative flex items-center justify-center my-auto">
                  <div className="h-32 w-52 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 flex flex-col justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      <div className="ml-auto h-2 w-20 rounded bg-white/20" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2.5 w-3/4 rounded bg-gradient-to-r from-blue-400 to-cyan-300" />
                      <div className="h-2 w-1/2 rounded bg-cyan-300/50" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-white/70 relative z-10">
                  <span>{lang === "nl" ? "Klant Showcase" : "Client Showcase"}</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white" />
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-2xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
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
                      className="rounded-full border border-border/80 bg-secondary/80 px-3.5 py-1 text-xs font-semibold text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-500">
                    <CheckCircle2 className="h-4 w-4" /> {lang === "nl" ? "Live Operationeel" : "Live Operational"}
                  </span>
                  <Button asChild variant="soft" size="sm" className="rounded-full gap-1">
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
