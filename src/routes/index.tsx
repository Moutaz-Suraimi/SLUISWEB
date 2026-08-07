import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  CallToAction,
  Faq,
  Hero,
  PortfolioShowcase,
  Process,
  Services,
  Stats,
  TechStack,
  Testimonials,
  WhyUs,
} from "@/components/home/HomeSections";

const title = "SLUISWEB — Premium webdevelopment uit Nederland";
const description =
  "SLUISWEB bouwt premium websites, webshops en webapplicaties voor Nederlandse ondernemers. Vaste prijs, razendsnelle performance en meetbaar resultaat.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "SLUISWEB",
          description,
          areaServed: "NL",
          address: { "@type": "PostalAddress", addressLocality: "Amsterdam", addressCountry: "NL" },
          email: "info@sluisweb.nl",
          telephone: "+31201234567",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Stats />
      <Services />
      <PortfolioShowcase />
      <WhyUs />
      <Process />
      <TechStack />
      <Testimonials />
      <Faq />
      <CallToAction />
    </SiteLayout>
  );
}
