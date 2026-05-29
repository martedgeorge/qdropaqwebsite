import { useEffect, useRef, useState } from "react";
import { INTERSECTION_THRESHOLD, INTERSECTION_ROOT_MARGIN } from "@/constants/ui";

/**
 * useInView — attach the returned ref to an element to learn whether it has
 * scrolled into view. Fires once (single-shot) and disconnects the observer.
 *
 * Centralising the IntersectionObserver here means consumer components have
 * no useEffect dependency surface to manage.
 */
export default function useInView({ delay = 0 } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const handleIntersect = (entries, observer) => {
      const entry = entries[0];
      if (!entry || !entry.isIntersecting) return;
      window.setTimeout(() => setVisible(true), delay);
      observer.unobserve(el);
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: INTERSECTION_THRESHOLD,
      rootMargin: INTERSECTION_ROOT_MARGIN,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, setVisible]);

  return { ref, visible };
}
