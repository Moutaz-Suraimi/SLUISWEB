import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/services", label: t.nav.services },
    { to: "/portfolio", label: t.nav.portfolio },
    { to: "/pricing", label: t.nav.pricing },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header className="fixed inset-x-0 top-3 md:top-5 z-50 px-4 md:px-6 max-w-7xl mx-auto transition-all duration-300">
      <nav
        className={`flex items-center justify-between px-5 md:px-7 py-3 rounded-[26px] md:rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-slate-900/95 shadow-xl shadow-blue-600/10 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl"
            : "bg-white/85 dark:bg-slate-900/85 shadow-lg shadow-blue-500/5 border border-white/60 dark:border-slate-800/60 backdrop-blur-xl"
        }`}
        aria-label="Hoofdnavigatie"
      >
        {/* Left: Brand Logo */}
        <Logo />

        {/* Center: Desktop Navigation Links matching screenshot */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative py-1 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:text-blue-600 dark:hover:text-blue-400 [&.active]:font-bold [&.active]:text-blue-600 dark:[&.active]:text-blue-400 [&.active]:after:absolute [&.active]:after:-bottom-1 [&.active]:after:left-0 [&.active]:after:right-0 [&.active]:after:h-[2.5px] [&.active]:after:bg-blue-600 [&.active]:after:rounded-full"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: Language Toggle & Primary CTA matching screenshot */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Language Switcher Pill */}
          <div
            className="flex items-center rounded-full bg-slate-100/90 dark:bg-slate-800/90 p-1 border border-slate-200/80 dark:border-slate-700/80 shadow-inner"
            role="group"
            aria-label="Language"
          >
            {(["nl", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-3 py-1 text-xs font-bold uppercase transition-all duration-200 ${
                  lang === l
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Primary Strategy CTA Pill Button */}
          <Button
            asChild
            size="lg"
            className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold px-6 py-2.5 text-sm shadow-md shadow-blue-600/30 hover:shadow-lg hover:shadow-blue-600/40 transition-all gap-1.5 border-0"
          >
            <Link to="/contact">
              {t.nav.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-800/80 text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Sluit menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {open && (
        <div className="mt-2 rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl backdrop-blur-2xl md:hidden p-5">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors [&.active]:bg-blue-50 dark:[&.active]:bg-blue-950/40 [&.active]:text-blue-600"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 text-sm shadow-md"
              >
                <Link to="/contact" onClick={() => setOpen(false)}>
                  {t.nav.cta} <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}