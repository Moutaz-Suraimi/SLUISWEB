import { Link } from "@tanstack/react-router";
import {
  Globe,
  ShoppingCart,
  LayoutGrid,
  PenTool,
  Search,
  Server,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

// Custom 3D Pedestal Icon Component matching screenshot's 3D stands
function Pedestal3DIcon({ icon: Icon, color = "blue" }: { icon: React.ElementType; color?: "blue" | "indigo" | "cyan" }) {
  const gradientMap = {
    blue: "from-blue-600 via-indigo-500 to-cyan-400",
    indigo: "from-indigo-600 via-blue-500 to-sky-400",
    cyan: "from-cyan-600 via-blue-500 to-indigo-400",
  };

  return (
    <div className="relative flex items-center justify-center shrink-0 w-24 h-24 select-none group-hover:scale-105 transition-transform duration-300">
      {/* Outer Glowing Ring */}
      <div className="absolute inset-x-0 bottom-1 h-8 rounded-[100%] border-2 border-primary/40 bg-primary/10 blur-[1px] shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:border-primary group-hover:shadow-[0_0_28px_rgba(37,99,235,0.7)] transition-all duration-300" />

      {/* Pedestal Top Surface */}
      <div className="absolute bottom-2.5 w-20 h-9 rounded-[100%] bg-gradient-to-b from-slate-200 via-slate-100 to-slate-300 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 border border-white/60 dark:border-white/10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_6px_12px_rgba(0,0,0,0.15)] flex items-center justify-center">
        {/* Inner Pedestal Ring */}
        <div className="w-16 h-6 rounded-[100%] border border-primary/30 bg-gradient-to-b from-primary/5 to-primary/20" />
      </div>

      {/* Floating 3D Glossy Sphere/Icon Container */}
      <div className={`relative -top-2 z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientMap[color]} text-white shadow-[0_10px_25px_-5px_rgba(37,99,235,0.5),inset_0_2px_4px_rgba(255,255,255,0.4)] border border-white/30 backdrop-blur-md group-hover:-translate-y-1.5 transition-all duration-300`}>
        <Icon className="w-7 h-7 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
      </div>
    </div>
  );
}

const serviceIcons = [
  { icon: Globe, color: "blue" as const },
  { icon: ShoppingCart, color: "indigo" as const },
  { icon: LayoutGrid, color: "cyan" as const },
  { icon: PenTool, color: "blue" as const },
  { icon: Search, color: "indigo" as const },
  { icon: Server, color: "cyan" as const },
];

export function Services3DGrid() {
  const { t, lang } = useI18n();

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-background via-slate-950/5 to-background dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Decorative Side 3D Floating Objects */}
      <div className="pointer-events-none absolute -left-16 top-12 hidden lg:block opacity-40 hover:opacity-70 transition-opacity">
        <div className="w-48 h-48 rounded-3xl border border-white/20 bg-gradient-to-br from-cyan-500/20 to-blue-600/30 backdrop-blur-xl rotate-12 shadow-2xl animate-pulse" />
      </div>
      <div className="pointer-events-none absolute -right-20 top-24 hidden lg:block opacity-40 hover:opacity-70 transition-opacity">
        <div className="w-56 h-56 rounded-full border-8 border-primary/20 bg-gradient-to-tr from-blue-600/20 to-indigo-500/30 backdrop-blur-xl -rotate-45 shadow-2xl" />
      </div>

      <div className="section-shell relative z-10">
        {/* Header matching user screenshot */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md shadow-sm mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            {t.services.eyebrow}
          </div>

          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {lang === "nl" ? (
              <>
                Alles voor uw <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]">digitale groei</span>
              </>
            ) : (
              <>
                Everything for your <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]">digital growth</span>
              </>
            )}
          </h2>

          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* 3x2 Grid of 3D Glossy Pod Cards matching user screenshot */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const config = serviceIcons[i % serviceIcons.length]!;
            return (
              <article
                key={item.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-border/80 bg-card/90 dark:bg-slate-900/90 backdrop-blur-xl p-7 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50"
              >
                {/* Top Subtle Gloss Highlight */}
                <div className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-gradient-to-br from-white/30 to-transparent blur-2xl dark:from-blue-500/10" />

                <div className="flex items-start gap-5">
                  {/* 3D Pedestal Icon Stand */}
                  <Pedestal3DIcon icon={config.icon} color={config.color} />

                  {/* Card Info */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Row with Circular Arrow Button */}
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-end">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary/80 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground shadow-sm transition-all duration-300 group-hover:scale-110">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all gap-2">
            <Link to="/services">
              {t.hero.secondary} <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
