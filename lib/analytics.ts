declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export const events = {
  articleView: (slug: string, category: string) =>
    trackEvent("article_view", { slug, category }),

  articleScroll75: (slug: string) =>
    trackEvent("article_scroll_75", { slug }),

  ctaClick: (location: string, label: string) =>
    trackEvent("cta_click", { location, label }),

  sourceClick: (slug: string, url: string, refId: string) =>
    trackEvent("source_click", { slug, url, ref_id: refId }),

  sectionView: (section: string) =>
    trackEvent("section_view", { section }),

  navClick: (label: string, destination: string) =>
    trackEvent("nav_click", { label, destination }),
};
