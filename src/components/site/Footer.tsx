import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Linkedin, Instagram, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/services", label: t.nav.services },
    { to: "/portfolio", label: t.nav.portfolio },
    { to: "/pricing", label: t.nav.pricing },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  const serviceLinks = [
    "Website development",
    "Webshop development",
    "Web applications",
    "SEO & visibility",
    "Hosting & onderhoud",
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80">
      {/* Main 4-column Footer Grid matching screenshot */}
      <div className="section-shell py-14 grid gap-10 md:grid-cols-4">
        {/* Column 1: Logo + tagline + social icons */}
        <div className="space-y-5">
          <Logo />
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[220px]">
            Premium websites, webshops en webapplicaties voor ambitieuze Nederlandse ondernemers.
          </p>
          {/* Social Icons matching screenshot */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-500 hover:border-pink-500 hover:text-white transition-all"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation links matching screenshot */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-sm bg-blue-500/20 flex items-center justify-center">
              <div className="h-2 w-2 rounded-sm bg-blue-500" />
            </div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
              Navigatie
            </h3>
          </div>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.to} className="flex items-center gap-2">
                <span className="text-blue-400 text-xs">›</span>
                <Link
                  to={l.to}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services matching screenshot */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-sm bg-blue-500/20 flex items-center justify-center">
              <div className="h-2 w-2 rounded-sm bg-blue-500" />
            </div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
              Diensten
            </h3>
          </div>
          <ul className="space-y-2.5">
            {serviceLinks.map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="text-blue-400 text-xs">›</span>
                <Link
                  to="/services"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact details matching screenshot */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-sm bg-blue-500/20 flex items-center justify-center">
              <div className="h-2 w-2 rounded-sm bg-blue-500" />
            </div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
              Contact
            </h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-blue-500 shrink-0" />
              <a
                href="mailto:info@sluisweb.nl"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
              >
                info@sluisweb.nl
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-blue-500 shrink-0" />
              <a
                href="tel:+31684683760"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
              >
                +31 6 8468 3760
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-blue-500 shrink-0" />
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Bartokstraat, Heemskerk
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-blue-500 shrink-0" />
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Ma – Vr 09:00 – 17:30
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar: copyright + legal links */}
      <div className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/80">
        <div className="section-shell flex flex-col items-center justify-between gap-3 py-5 text-xs text-slate-500 dark:text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} SLUISWEB. {t.footer.rights}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">
              {t.footer.privacy}
            </Link>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">
              {t.footer.terms}
            </Link>
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">
              {t.footer.cookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}