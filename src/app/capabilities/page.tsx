import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CapabilityCard from '@/components/CapabilityCard'
import RequestPathVisual from '@/components/RequestPathVisual'
import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import CTA from '@/components/CTA'
import { capabilities } from '@/content/capabilities'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Capabilities',
  description: 'AI application security capabilities: threat modeling, AI red teaming, RAG security, and agent guardrails.'
}

export default function CapabilitiesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex flex-col min-h-screen bg-background">
        <section className="pt-32 pb-16 px-6 max-w-[1200px] mx-auto w-full">
          <ScrollReveal>
            <SectionLabel>Capabilities</SectionLabel>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-text font-display">
              What we secure.
            </h1>
            <p className="text-xl text-text-muted max-w-2xl">
              We focus on the specific points where AI systems fail: prompts, retrieval pipelines, model behavior, and agent tool execution.
            </p>
          </ScrollReveal>
        </section>

        <section className="py-12 px-6 max-w-[1200px] mx-auto w-full flex flex-col gap-24">
          {capabilities.map((cap, i) => (
            <div key={cap.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal delay={i * 0.1}>
                <CapabilityCard capability={cap} variant="expanded" />
              </ScrollReveal>
              <ScrollReveal delay={i * 0.1 + 0.1}>
                <RequestPathVisual variant="compact" highlightHop={cap.hopIndex} />
              </ScrollReveal>
            </div>
          ))}
        </section>

        <section className="py-24 px-6 bg-surface-elevated border-t border-border w-full text-center mt-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-8 font-display">
              Ready to secure your AI application?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTA href="/contact" variant="primary">
                Talk to Us
              </CTA>
              <CTA href="/projects" variant="secondary">
                View Projects
              </CTA>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  )
}
