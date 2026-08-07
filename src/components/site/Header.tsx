import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel shadow-soft" : "border-b border-transparent"
      }`}
    >
      <nav className="section-shell flex h-18 items-center justify-between py-4" aria-label="Hoofdnavigatie">
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground [&.active]:text-foreground"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div
            className="hidden rounded-full border border-border bg-card p-0.5 sm:flex"
            role="group"
            aria-label="Language"
          >
            {(["nl", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase transition-colors ${
                  lang === l ? "bg-gradient-brand text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <Button asChild variant="brand" size="lg" className="hidden lg:inline-flex">
            <Link to="/contact">{t.nav.cta}</Link>
          </Button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Sluit menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-panel border-t border-border md:hidden">
          <div className="section-shell flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              {(["nl", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`flex-1 rounded-xl border border-border px-3 py-2 text-sm font-semibold uppercase ${
                    lang === l ? "bg-gradient-brand text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}