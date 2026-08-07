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
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-gradient-soft">
      <div
        aria-hidden
        className="animate-aurora pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[56rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      />
      <ThreeScene />
      <div className="section-shell relative py-24 text-center md:py-32">
        <span className="reveal-up inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-soft">
          <Sparkles className="h-4 w-4 text-primary" />
          {t.hero.badge}
        </span>
        <h1 className="reveal-up mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-[1.05] md:text-6xl lg:text-[4rem]">
          {t.hero.title} <span className="text-gradient">{t.hero.titleAccent}</span>
        </h1>
        <p className="reveal-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          {t.hero.subtitle}
        </p>
        <div className="reveal-up mt-9 flex flex-wrap justify-center gap-3">
          <Button asChild variant="brand" size="xl">
            <Link to="/contact">
              {t.hero.primary} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="soft" size="xl">
            <Link to="/services">{t.hero.secondary}</Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">{t.hero.note}</p>
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
    <span ref={ref} className="text-gradient text-4xl font-extrabold md:text-5xl">
      {rendered}
    </span>
  );
}

export function Stats() {
  const { t } = useI18n();
  return (
    <section className="section-shell -mt-10 relative z-10">
      <div className="grid gap-6 rounded-3xl border border-border bg-card p-8 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {t.stats.map((s) => (
          <div key={s.label} className="text-center">
            <Counter value={s.value} />
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
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

const serviceIcons = [Globe, ShoppingCart, ServerCog, Palette, Search, Gauge];

export function Services() {
  const { t } = useI18n();
  return (
    <section className="section-shell py-24">
      <SectionHead
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        subtitle={t.services.subtitle}
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((item, i) => {
          const Icon = serviceIcons[i % serviceIcons.length]!;
          return (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float"
            >
              <div className="bg-gradient-brand inline-flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-base text-muted-foreground">{item.text}</p>
            </article>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <Button asChild variant="soft" size="lg">
          <Link to="/services">
            {t.hero.secondary} <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

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
    <section className="border-y border-border bg-gradient-soft py-24">
      <div className="section-shell">
        <SectionHead eyebrow={t.why.eyebrow} title={t.why.title} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => {
            const Icon = whyIcons[i % whyIcons.length]!;
            return (
              <div key={item.title} className="glass-panel rounded-3xl p-7">
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{item.text}</p>
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
    <section className="section-shell py-24">
      <SectionHead eyebrow={t.process.eyebrow} title={t.process.title} />
      <ol className="mt-14 grid gap-6 md:grid-cols-4">
        {t.process.steps.map((step, i) => (
          <li key={step.title} className="relative rounded-3xl border border-border bg-card p-7 shadow-soft">
            <span className="text-gradient text-5xl font-extrabold">0{i + 1}</span>
            <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
            <p className="mt-2 text-base text-muted-foreground">{step.text}</p>
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