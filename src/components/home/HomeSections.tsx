import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ThreeScene } from "./ThreeScene";
import {
  ArrowRight,
  BadgeCheck,
  Gauge,
  Globe,
  LineChart,
  Palette,
  Quote,
  Search,
  ServerCog,
  ShoppingCart,
  Sparkles,
  Star,
  Users,
  Play,
  Rocket,
  Smile,
  Zap,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries[0]?.isIntersecting && setInView(true),
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export function Hero() {
  const { t, lang } = useI18n();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-slate-900/5 to-background dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-10 pb-20 md:pb-28">
      {/* Background Aurora / Ambient Glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      />
      <div className="pointer-events-none absolute right-10 top-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute left-10 bottom-10 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />

      <div className="section-shell relative z-10">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-12">
          {/* Left Column: Text & Hero Details */}
          <div className="lg:col-span-7 text-left space-y-7 z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {t.hero.badge}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08]">
              {t.hero.title}{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                {t.hero.titleAccent}
              </span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons Row matching screenshot */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                asChild
                size="xl"
                className="rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white"
              >
                <Link to="/contact">
                  {t.hero.primary} <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="xl"
                className="rounded-full px-7 py-6 text-base font-bold border-border/80 bg-card/80 backdrop-blur-md hover:bg-card hover:border-primary/50 transition-all gap-2.5 text-foreground shadow-sm"
              >
                <Link to="/services">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                  </div>
                  {t.hero.secondary}
                </Link>
              </Button>
            </div>

            {/* Trust Proof / Avatar Row matching screenshot */}
            <div className="flex items-center gap-4 pt-4 border-t border-border/40">
              <div className="flex -space-x-3">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Client Avatar 1"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Client Avatar 2"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Client Avatar 3"
                />
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-xs text-white ring-2 ring-background shadow-md">
                  +50
                </div>
              </div>
              <p className="text-xs md:text-sm font-semibold text-muted-foreground">
                {lang === "nl"
                  ? "Meer dan 180+ ondernemers vertrouwen op SluisWeb"
                  : "More than 180+ business owners trust SluisWeb"}
              </p>
            </div>
          </div>

          {/* Right Column: 3D Pedestal Centerpiece */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glowing Backdrop Circle behind 3D Pedestal */}
            <div className="absolute h-80 w-80 rounded-full bg-gradient-to-tr from-blue-600/30 to-cyan-400/30 blur-3xl pointer-events-none" />
            <ThreeScene />
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ value }: { value: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) return;
    let frame = 0;
    const total = 48;
    const id = window.setInterval(() => {
      frame += 1;
      setDisplay(Number(((numeric * frame) / total).toFixed(numeric % 1 ? 1 : 0)));
      if (frame >= total) window.clearInterval(id);
    }, 16);
    return () => window.clearInterval(id);
  }, [inView, numeric]);

  const rendered = Number.isNaN(numeric) ? value : value.replace(String(numeric), String(display));
  return (
    <span ref={ref} className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-3xl font-black md:text-4xl">
      {rendered}
    </span>
  );
}

const statIcons = [Rocket, Smile, Zap, Trophy];

export function Stats() {
  const { t } = useI18n();
  return (
    <section className="section-shell -mt-12 relative z-20 mb-12">
      {/* Floating 3D Glossy Pod Card matching screenshot bottom bar */}
      <div className="rounded-[32px] border border-border/80 bg-card/95 dark:bg-slate-900/95 backdrop-blur-2xl p-6 md:p-8 shadow-2xl shadow-blue-500/10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
          {t.stats.map((s, i) => {
            const Icon = statIcons[i % statIcons.length]!;
            return (
              <div key={s.label} className="flex flex-col items-center justify-center text-center pt-4 sm:pt-0 first:pt-0 sm:px-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-primary mb-3 shadow-inner">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <Counter value={s.value} />
                <p className="mt-1 text-xs md:text-sm font-semibold text-muted-foreground">{s.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export { Services3DGrid as Services } from "./Services3DGrid";

export function PortfolioShowcase() {
  const { t } = useI18n();
  return (
    <section className="border-t border-border bg-gradient-soft py-24">
      <div className="section-shell">
        <SectionHead
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {t.portfolio.items.slice(0, 2).map((item) => (
            <article
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float"
            >
              <div className="relative h-56 w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white">
                    <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                    {item.categoryLabel}
                  </span>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-300">
                    {item.stats}
                  </span>
                </div>
                <div className="flex items-center justify-center my-auto">
                  <div className="h-24 w-36 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md p-3 flex flex-col justify-between shadow-xl">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-red-400" />
                      <div className="h-2 w-2 rounded-full bg-yellow-400" />
                      <div className="h-2 w-2 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-1">
                      <div className="h-1.5 w-3/4 rounded bg-blue-400/60" />
                      <div className="h-1.5 w-1/2 rounded bg-cyan-300/40" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="brand" size="lg">
            <Link to="/portfolio">
              {t.portfolio.viewProject} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const whyIcons = [BadgeCheck, Users, Gauge, LineChart];

export function WhyUs() {
  const { t } = useI18n();
  return (
    <section className="relative border-y border-border/60 bg-gradient-to-b from-slate-950/5 via-slate-900/10 to-slate-950/5 py-24">
      <div className="section-shell">
        <SectionHead eyebrow={t.why.eyebrow} title={t.why.title} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => {
            const Icon = whyIcons[i % whyIcons.length]!;
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[28px] border border-border/80 bg-card/90 dark:bg-slate-900/90 backdrop-blur-xl p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-extrabold tracking-tight text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const { t } = useI18n();
  return (
    <section className="relative section-shell py-24">
      <SectionHead eyebrow={t.process.eyebrow} title={t.process.title} />
      <ol className="mt-14 grid gap-6 md:grid-cols-4">
        {t.process.steps.map((step, i) => (
          <li
            key={step.title}
            className="group relative overflow-hidden rounded-[32px] border border-border/80 bg-card/90 dark:bg-slate-900/90 backdrop-blur-xl p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 flex flex-col justify-between"
          >
            <div>
              {/* 3D Metallic Number Badge */}
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-b from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-900 border border-white/40 dark:border-white/10 text-xl font-black text-primary shadow-inner">
                0{i + 1}
              </div>
              <h3 className="mt-5 text-xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.text}</p>
            </div>

            {/* Bottom Glow Line */}
            <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-30 group-hover:opacity-100 transition-opacity" />
          </li>
        ))}
      </ol>
    </section>
  );
}

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Shopify",
  "WordPress",
  "Vercel",
];

export function TechStack() {
  const { t } = useI18n();
  return (
    <section className="border-y border-border bg-card py-20">
      <div className="section-shell">
        <SectionHead eyebrow={t.tech.eyebrow} title={t.tech.title} />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-background px-5 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="section-shell py-24">
      <SectionHead eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {t.testimonials.items.map((item) => (
          <figure
            key={item.name}
            className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft"
          >
            <Quote className="h-8 w-8 text-primary/40" />
            <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
              “{item.quote}”
            </blockquote>
            <div className="mt-6 flex items-center gap-1 text-primary" aria-label="5 / 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <figcaption className="mt-3">
              <span className="block font-semibold">{item.name}</span>
              <span className="block text-sm text-muted-foreground">{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Faq() {
  const { t } = useI18n();
  return (
    <section className="border-y border-border bg-gradient-soft py-24">
      <div className="section-shell max-w-3xl">
        <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <Accordion type="single" collapsible className="mt-10">
          {t.faq.items.map((item) => (
            <AccordionItem
              key={item.q}
              value={item.q}
              className="mb-3 rounded-2xl border border-border bg-card px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">{item.q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function CallToAction() {
  const { t } = useI18n();
  return (
    <section className="section-shell py-24">
      <div className="bg-gradient-brand relative overflow-hidden rounded-[2rem] px-8 py-16 text-center shadow-float">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-primary-foreground md:text-5xl">
          {t.cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/85">{t.cta.text}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button asChild size="xl" className="bg-card text-foreground hover:bg-card/90">
            <Link to="/contact">{t.cta.primary}</Link>
          </Button>
          <Button
            asChild
            size="xl"
            variant="outline"
            className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link to="/pricing">{t.cta.secondary}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}