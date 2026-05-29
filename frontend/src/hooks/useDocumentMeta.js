import { useEffect } from "react";

const DEFAULT_TITLE = "QDROPAQ — Pension Valuations & QDRO Drafting";
const DEFAULT_DESCRIPTION =
  "QDROPAQ prepares pension valuations and Qualified Domestic Relations Orders for pro se parties, mediators, and attorneys. 30+ years; 40,000+ matters; flat $495 QDRO fee.";

const setMeta = (name, content) => {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

/**
 * useDocumentMeta — set `<title>` and `<meta name="description">` on mount,
 * restore defaults on unmount. Per-route SEO without adding a helmet dep.
 */
export default function useDocumentMeta({ title, description } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} — QDROPAQ` : DEFAULT_TITLE;
    document.title = fullTitle;
    setMeta("description", description || DEFAULT_DESCRIPTION);
    return () => {
      document.title = DEFAULT_TITLE;
      setMeta("description", DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
}
