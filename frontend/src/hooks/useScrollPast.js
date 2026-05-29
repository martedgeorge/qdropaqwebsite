import { useEffect, useState } from "react";

/**
 * useScrollPast — true once `window.scrollY` exceeds `threshold`.
 * The handler is defined inside the effect so it has no outer-scope
 * dependencies and the effect runs exactly once per mount.
 */
export default function useScrollPast(threshold) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return past;
}
