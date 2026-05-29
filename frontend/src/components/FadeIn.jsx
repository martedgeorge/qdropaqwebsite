import useInView from "@/hooks/useInView";

// Gentle, restrained reveal — opacity + 8px translate, single pass, no springs.
export default function FadeIn({ children, delay = 0, as: Tag = "div", className = "" }) {
  const { ref, visible } = useInView({ delay });
  return (
    <Tag ref={ref} className={`fade-in ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
