"use client";

import { useEffect } from "react";
import { events } from "@/lib/analytics";

export function ArticleAnalytics({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) {
  useEffect(() => {
    events.articleView(slug, category);

    let fired = false;
    const onScroll = () => {
      if (fired) return;
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      if (total <= 0) return;
      const pct = window.scrollY / total;
      if (pct >= 0.75) {
        events.articleScroll75(slug);
        fired = true;
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug, category]);

  return null;
}
