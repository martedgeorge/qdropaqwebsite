import { useEffect } from "react";

const DEFAULT_TITLE = "QDROPAQ — Pension Valuations & QDRO Drafting";
const DEFAULT_DESCRIPTION =
  "QDROPAQ prepares pension valuations and Qualified Domestic Relations Orders for pro se parties, mediators, and attorneys. 30+ years; 40,000+ matters; flat $495 QDRO fee.";
const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80";

const setNamedMeta = (name, content, attr = "name") => {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href) => {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/**
 * useDocumentMeta — set <title>, meta description, Open Graph + Twitter card tags,
 * and canonical URL per route. Restores defaults on unmount.
 */
export default function useDocumentMeta({ title, description, image } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} — QDROPAQ` : DEFAULT_TITLE;
    const desc = description || DEFAULT_DESCRIPTION;
    const img = image || DEFAULT_OG_IMAGE;
    const url = typeof window !== "undefined" ? window.location.href : "";

    document.title = fullTitle;
    setNamedMeta("description", desc);

    // Open Graph
    setNamedMeta("og:title", fullTitle, "property");
    setNamedMeta("og:description", desc, "property");
    setNamedMeta("og:type", "website", "property");
    setNamedMeta("og:image", img, "property");
    setNamedMeta("og:site_name", "QDROPAQ", "property");
    if (url) setNamedMeta("og:url", url, "property");

    // Twitter card
    setNamedMeta("twitter:card", "summary_large_image");
    setNamedMeta("twitter:title", fullTitle);
    setNamedMeta("twitter:description", desc);
    setNamedMeta("twitter:image", img);

    if (url) setCanonical(url);

    return () => {
      document.title = DEFAULT_TITLE;
      setNamedMeta("description", DEFAULT_DESCRIPTION);
      setNamedMeta("og:title", DEFAULT_TITLE, "property");
      setNamedMeta("og:description", DEFAULT_DESCRIPTION, "property");
      setNamedMeta("og:image", DEFAULT_OG_IMAGE, "property");
      setNamedMeta("twitter:title", DEFAULT_TITLE);
      setNamedMeta("twitter:description", DEFAULT_DESCRIPTION);
      setNamedMeta("twitter:image", DEFAULT_OG_IMAGE);
    };
  }, [title, description, image]);
}
