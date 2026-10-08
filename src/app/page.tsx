import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CapabilityCard from "@/components/CapabilityCard";
import ProjectCard from "@/components/ProjectCard";
import CommunityBand from "@/components/CommunityBand";
import Differentiator from "@/components/Differentiator";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import CTA from "@/components/CTA";
import { capabilities } from "@/content/capabilities";
import { projects } from "@/content/projects";
import { generateOrganizationJsonLd } from "@/lib/jsonld";

export default function Home() {
  const jsonLd = generateOrganizationJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="flex min-h-screen flex-col bg-background">
        <Hero />

        {/* What We Do */}
        <section className="mx-auto w-full max-w-[1200px] px-6 py-24">
          <ScrollReveal>
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="mb-12 mt-4 font-display text-3xl font-bold text-text md:text-4xl">
              Four areas. One attack surface.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.id} delay={i * 0.1}>
                <CapabilityCard capability={cap} variant="compact" />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Differentiator */}
        <Differentiator />

        {/* What We're Building */}
        <section className="mx-auto w-full max-w-[1200px] px-6 py-24">
          <ScrollReveal>
            <SectionLabel>What We&apos;re Building</SectionLabel>
            <h2 className="mb-12 mt-4 font-display text-3xl font-bold text-text md:text-4xl">
              Projects in progress.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((proj, i) => (
              <ScrollReveal key={proj.id} delay={i * 0.1}>
                <ProjectCard project={proj} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Community Band */}
        <CommunityBand />

        {/* Engineering Principles */}
        <section className="mx-auto w-full max-w-[1200px] px-6 py-24">
          <ScrollReveal>
            <SectionLabel>Engineering Principles</SectionLabel>
            <h2 className="mb-12 mt-4 font-display text-3xl font-bold text-text md:text-4xl">
              Built with security as a foundation.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Least privilege by default",
                desc: "Components operate with minimal necessary access rights.",
              },
              {
                title: "Human oversight at every boundary",
                desc: "Critical decisions always involve human confirmation.",
              },
              {
                title: "Evaluation before claims",
                desc: "Rigorous testing validates security assertions before use.",
              },
              {
                title: "Explainable findings",
                desc: "Security events are documented clearly and concisely.",
              },
              {
                title: "Responsible disclosure",
                desc: "Vulnerabilities are handled ethically and transparently.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="rounded-lg border border-border bg-surface p-6">
                  <h3 className="mb-2 text-lg font-bold text-text">
                    {item.title}
                  </h3>
                  <p className="text-text-muted">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="w-full border-t border-border bg-surface-elevated py-24 text-center">
          <ScrollReveal>
            <h2 className="mx-auto mb-8 max-w-2xl font-display text-3xl font-bold text-text md:text-4xl">
              Shipping an AI feature and not sure how it fails?
            </h2>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTA href="/contact" variant="primary">
                Talk to Us
              </CTA>
              <CTA href="/capabilities" variant="secondary">
                Explore Our Work
              </CTA>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
