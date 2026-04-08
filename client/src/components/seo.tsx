import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  schema?: Record<string, any> | Record<string, any>[];
  noindex?: boolean;
  canonical?: string;
}

const SITE_URL = "https://www.queenswaymobiletyres.co.uk";
const DEFAULT_IMAGE = `${SITE_URL}/opengraph.jpg`;

export function SEO({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  type = "website",
  schema,
  noindex = false,
  canonical,
}: SEOProps) {
  const [location] = useLocation();
  const fullUrl = canonical || `${SITE_URL}${location}`;
  const siteTitle = title.includes("Queensway") ? title : `${title} | Queensway Mobile Tyres`;
  const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  useEffect(() => {
    // Title
    document.title = siteTitle;

    // Helper to update/create meta tags
    const updateMeta = (key: string, content: string, attr: "name" | "property" = "name") => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMeta("description", description);
    if (keywords) updateMeta("keywords", keywords);
    updateMeta("robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1");

    // Open Graph
    updateMeta("og:title", siteTitle, "property");
    updateMeta("og:description", description, "property");
    updateMeta("og:type", type, "property");
    updateMeta("og:url", fullUrl, "property");
    updateMeta("og:image", ogImage, "property");
    updateMeta("og:site_name", "Queensway Mobile Tyres", "property");
    updateMeta("og:locale", "en_GB", "property");

    // Twitter
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", siteTitle);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", ogImage);

    // Canonical
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", fullUrl);

    // JSON-LD Schema — target a dedicated tag so we don't clobber the baked-in LocalBusiness schema
    if (schema) {
      const SCHEMA_ID = "page-schema-jsonld";
      let script = document.getElementById(SCHEMA_ID) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.id = SCHEMA_ID;
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }
  }, [
    siteTitle,
    description,
    keywords,
    ogImage,
    type,
    fullUrl,
    schema,
    noindex,
  ]);

  return null;
}
