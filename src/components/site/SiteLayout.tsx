import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { Sparkles } from "lucide-react";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export function PageHero({ title, subtitle, eyebrow }: { title: string; subtitle: string; eyebrow?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-slate-950/5 dark:bg-slate-950 py-20 md:py-28">
      {/* 3D Ambient Glowing Orbs Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/20 blur-[120px] dark:bg-blue-600/25" />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-600/15 blur-[100px]" />

      {/* Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="section-shell relative z-10 text-center">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md shadow-sm mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            {eyebrow}
          </div>
        )}
        <h1 className="reveal-up text-4xl font-black tracking-tight text-foreground md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
            {title}
          </span>
        </h1>
        <p className="reveal-up mx-auto mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}