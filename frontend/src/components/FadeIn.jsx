import React, { useEffect, useRef, useState } from "react";
import { INTERSECTION_THRESHOLD, INTERSECTION_ROOT_MARGIN } from "@/constants/ui";

// Gentle, restrained reveal — opacity + 8px translate, single pass, no springs.
export default function FadeIn({ children, delay = 0, as: Tag = "div", className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            obs.unobserve(el);
          }
        });
      },
      { threshold: INTERSECTION_THRESHOLD, rootMargin: INTERSECTION_ROOT_MARGIN }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`fade-in ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
