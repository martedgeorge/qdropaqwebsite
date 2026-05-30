// Shared navigation link definitions.
// Shared navigation link definitions.

export const NAV_LINKS = [
  { to: "/about", label: "About" },
  { to: "/our-process", label: "Process" },
  { to: "/unique", label: "Why QDROPAQ" },
  { to: "/fees-and-forms", label: "Fees & Forms" },
  { to: "/contact", label: "Contact" },
];

export const navTestId = (to) => `nav-${to.replace(/\//g, "")}`;
export const mobileNavTestId = (to) => `mobile-nav-${to.replace(/\//g, "")}`;
