import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, MessageSquare, Send, Sparkles, User, Briefcase, ChevronRight } from "lucide-react";
import { z } from "zod";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { useI18n } from "@/lib/i18n";
import { toast } from "sonner";
import { Contact3DScene } from "@/components/contact/Contact3DScene";

const title = "Contact | Website laten maken | SluisWeb";
const description =
  "Klaar voor een website die wél presteert? Neem contact op met SluisWeb in Heemskerk. Vrijblijvend adviesgesprek en offerte.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://sluisweb.nl/contact" },
      { property: "og:image", content: "https://sluisweb.nl/hero-3d-artwork.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://sluisweb.nl/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": "https://sluisweb.nl/contact#webpage",
          url: "https://sluisweb.nl/contact",
          name: title,
          description,
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://sluisweb.nl/" },
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://sluisweb.nl/contact" },
            ],
          },
          mainEntity: { "@id": "https://sluisweb.nl/#organization" },
          inLanguage: "nl-NL",
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, lang } = useI18n();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = z.object({
    name: z.string().trim().min(1, t.contactPage.required).max(100),
    email: z.string().trim().min(1, t.contactPage.required).email(t.contactPage.invalidEmail).max(255),
    company: z.string().trim().max(120).optional(),
    message: z.string().trim().min(1, t.contactPage.required).max(1500),
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(form));
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    e.currentTarget.reset();
    toast.success(t.contactPage.success);
  };

  return (
    <SiteLayout>
      <PageHero title={t.contactPage.title} subtitle={t.contactPage.subtitle} />

      <section className="section-shell py-12 max-w-6xl mx-auto space-y-8">
        {/* Top Quick Contact Action Cards (WhatsApp & Email) */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* WhatsApp Direct Action Button */}
          <a
            href="https://wa.me/31684683760"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#10B981] text-white shadow-md shadow-emerald-500/20">
                <MessageSquare className="h-7 w-7" />
              </div>
              <div>
                <span className="flex items-center gap-1 text-[0.7rem] font-extrabold text-[#10B981] uppercase tracking-wider">
                  <Sparkles className="h-3 w-3" /> Direct Contact
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {t.contactPage.whatsappBtn}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">{t.contactPage.whatsappSub}</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Email Direct Action Button */}
          <a
            href="mailto:info@sluisweb.nl"
            className="group flex items-center justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/20">
                <Mail className="h-7 w-7" />
              </div>
              <div>
                <span className="flex items-center gap-1 text-[0.7rem] font-extrabold text-blue-500 uppercase tracking-wider">
                  <Send className="h-3 w-3" /> Officieel E-mail
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {t.contactPage.emailBtn}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">{t.contactPage.emailSub}</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Main Form & Sidebar Section */}
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Left Form Box */}
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-card p-8 md:p-10 shadow-soft flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Form Title Header with Icon */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                    <Send className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-foreground">
                    {lang === "nl" ? "Stuur ons een bericht" : "Send us a message"}
                  </h2>
                </div>
                <p className="text-xs text-muted-foreground pl-13">
                  {lang === "nl"
                    ? "Vul het formulier in en wij nemen zo snel mogelijk contact met u op."
                    : "Fill out the form and we will contact you as soon as possible."}
                </p>
              </div>

              {/* Form Inputs Grid */}
              <div className="grid gap-5 sm:grid-cols-2 pt-2">
                {/* Naam */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">
                    {t.contactPage.name}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="name"
                      name="name"
                      maxLength={100}
                      placeholder={lang === "nl" ? "Uw naam" : "Your name"}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-background pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary transition-all"
                      aria-invalid={!!errors['name']}
                    />
                  </div>
                  {errors['name'] && <p className="text-xs text-destructive">{errors['name']}</p>}
                </div>

                {/* E-mailadres */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    {t.contactPage.email}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      maxLength={255}
                      placeholder={lang === "nl" ? "Uw e-mailadres" : "Your email address"}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-background pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary transition-all"
                      aria-invalid={!!errors['email']}
                    />
                  </div>
                  {errors['email'] && <p className="text-xs text-destructive">{errors['email']}</p>}
                </div>
              </div>

              {/* Bedrijf */}
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-semibold text-foreground">
                  {t.contactPage.company}
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    id="company"
                    name="company"
                    maxLength={120}
                    placeholder={lang === "nl" ? "Uw bedrijfsnaam" : "Your company name"}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-background pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              {/* Uw bericht */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  {t.contactPage.message}
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={1500}
                    placeholder={lang === "nl" ? "Typ hier uw bericht..." : "Type your message here..."}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-background pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary transition-all resize-y"
                    aria-invalid={!!errors['message']}
                  />
                </div>
                {errors['message'] && <p className="text-xs text-destructive">{errors['message']}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-8 w-full rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 hover:from-blue-700 hover:to-indigo-900 text-white font-bold py-4 text-base shadow-lg shadow-blue-500/20 transition-all duration-300 hover:opacity-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="h-4 w-4" /> {t.contactPage.submit}
            </button>
          </form>

          {/* Right Sidebar: 3D Scene + Direct Contact Box */}
          <aside className="space-y-6 flex flex-col">
            {/* 3D Scene Canvas Box */}
            <Contact3DScene />

            {/* Direct Contact Info Card matching image */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-card p-8 shadow-soft flex-1 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-5">{t.contactPage.infoTitle}</h3>
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600">
                      <Mail className="h-4 w-4" />
                    </div>
                    <a href="mailto:info@sluisweb.nl" className="hover:text-primary transition-colors">
                      info@sluisweb.nl
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600">
                      <Phone className="h-4 w-4" />
                    </div>
                    <a href="tel:+31684683760" className="hover:text-primary transition-colors">
                      +31 6 8468 3760
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <span>Bartokstraat, Heemskerk</span>
                  </li>
                </ul>
              </div>

              {/* Divider & Opening Hours */}
              <div className="pt-5 border-t border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>{t.contactPage.hoursTitle}</span>
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">{t.contactPage.hours}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}