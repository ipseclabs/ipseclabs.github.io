import { siteConfig } from "@/content/site";

export function generateOrganizationJsonLd() {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.domain,
    email: siteConfig.email,
    description: siteConfig.positioning,
  };

  const sameAs: string[] = [];
  if (siteConfig.linkedin) sameAs.push(siteConfig.linkedin);
  if (siteConfig.github) sameAs.push(siteConfig.github);
  if (siteConfig.x) sameAs.push(siteConfig.x);
  if (sameAs.length > 0) jsonLd.sameAs = sameAs;

  return jsonLd;
}
