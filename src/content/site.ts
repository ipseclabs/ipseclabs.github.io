export const siteConfig = {
  name: "IP Security Labs",
  domain: "https://ipseclabs.com",
  motto: "A community-driven company that teaches and provides cybersecurity solutions.",
  positioning:
    "We build and teach AI application security, helping teams ship LLM apps, RAG systems, and AI agents that hold up against real attacks.",
  email: "contact@ipseclabs.com",
  linkedin: "https://in.linkedin.com/company/ipsecuritylabs",
  github: "",
  x: "",
  communityChannel: "",
  nav: [
    { label: "Capabilities", href: "/capabilities" },
    { label: "Projects", href: "/projects" },
    { label: "Community", href: "/community" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as const,
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
