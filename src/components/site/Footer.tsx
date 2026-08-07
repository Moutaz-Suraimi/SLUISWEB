import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-base text-muted-foreground">{t.footer.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t.footer.company}
          </h3>
          <ul className="mt-4 space-y-3 text-base">
            <li>
              <Link to="/" className="text-foreground/80 transition-colors hover:text-primary">
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-foreground/80 transition-colors hover:text-primary">
                {t.nav.services}
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-foreground/80 transition-colors hover:text-primary">
                {t.nav.portfolio}
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-foreground/80 transition-colors hover:text-primary">
                {t.nav.pricing}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-foreground/80 transition-colors hover:text-primary">
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t.footer.contactTitle}
          </h3>
          <ul className="mt-4 space-y-3 text-base text-foreground/80">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:info@sluisweb.nl" className="hover:text-primary">
                info@sluisweb.nl
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+31684683760" className="hover:text-primary">
                +31 6 8468 3760
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Bartokstraat, Heemskerk
            </li>

            <li className="text-muted-foreground">{t.footer.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="section-shell flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SLUISWEB. {t.footer.rights}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              {t.footer.privacy}
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              {t.footer.terms}
            </Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              {t.footer.cookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}