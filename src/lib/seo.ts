/**
 * SluisWeb SEO utility – injects per-page <title>, <meta> and JSON-LD
 * without modifying the 3D design or existing components.
 */

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  schema?: object | object[];
  breadcrumbs?: Array<{ name: string; item: string }>;
}

/** Update document.title and all standard meta elements */
export function applySeoMeta(meta: SeoMeta): void {
  if (typeof document === "undefined") return;

  // Title
  document.title = meta.title;

  // Helper to set or create a <meta> tag
  const setMeta = (selector: string, attr: string, value: string) => {
    let el = document.querySelector<HTMLMetaElement>(selector);
    if (!el) {
      el = document.createElement("meta");
      document.head.appendChild(el);
    }
    (el as HTMLElement).setAttribute(attr, value);
  };

  const setLink = (rel: string, href: string) => {
    let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement("link");
      el.rel = rel;
      document.head.appendChild(el);
    }
    el.href = href;
  };

  setMeta('meta[name="description"]', "content", meta.description);
  setLink("canonical", meta.canonical);

  // Open Graph
  setMeta('meta[property="og:title"]', "content", meta.ogTitle ?? meta.title);
  setMeta('meta[property="og:description"]', "content", meta.ogDescription ?? meta.description);
  setMeta('meta[property="og:url"]', "content", meta.canonical);
  if (meta.ogImage) {
    setMeta('meta[property="og:image"]', "content", meta.ogImage);
  }

  // Twitter
  setMeta('meta[name="twitter:title"]', "content", meta.ogTitle ?? meta.title);
  setMeta('meta[name="twitter:description"]', "content", meta.ogDescription ?? meta.description);
  setMeta('meta[name="twitter:url"]', "content", meta.canonical);
  if (meta.ogImage) {
    setMeta('meta[name="twitter:image"]', "content", meta.ogImage);
  }

  // Inject / replace page-specific JSON-LD schemas
  injectSchema(meta.schema, meta.breadcrumbs);
}

function injectSchema(schema?: object | object[], breadcrumbs?: Array<{ name: string; item: string }>) {
  // Remove any previously injected per-page schema
  document.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"][data-page]').forEach((s) => s.remove());

  const schemas: object[] = [];

  if (schema) {
    if (Array.isArray(schema)) schemas.push(...schema);
    else schemas.push(schema);
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: b.item,
      })),
    });
  }

  schemas.forEach((s) => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-page", "true");
    el.textContent = JSON.stringify(s);
    document.head.appendChild(el);
  });
}
