import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}


export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-soft">
      <div className="section-shell py-20 text-center md:py-28">
        <h1 className="reveal-up text-4xl font-extrabold md:text-6xl">{title}</h1>
        <p className="reveal-up mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
      </div>
    </section>
  );
}