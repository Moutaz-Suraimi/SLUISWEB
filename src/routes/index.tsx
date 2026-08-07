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

const title = "Website laten maken in Nederland | SluisWeb";
const description =
  "SluisWeb – professioneel webbureau uit Heemskerk. Website laten maken, webshop laten bouwen en webapplicaties op maat voor Nederlandse ondernemers. Snel, veilig en meetbaar.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://sluisweb.nl/" },
      { property: "og:image", content: "https://sluisweb.nl/hero-3d-artwork.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://sluisweb.nl/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://sluisweb.nl/#webpage",
          url: "https://sluisweb.nl/",
          name: title,
          description,
          isPartOf: { "@id": "https://sluisweb.nl/#website" },
          about: { "@id": "https://sluisweb.nl/#organization" },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://sluisweb.nl/" }],
          },
          primaryImageOfPage: { "@type": "ImageObject", url: "https://sluisweb.nl/hero-3d-artwork.png" },
          inLanguage: "nl-NL",
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
