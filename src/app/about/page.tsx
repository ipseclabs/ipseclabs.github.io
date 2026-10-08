import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import CTA from '@/components/CTA'
import { siteConfig } from '@/content/site'

export const metadata: Metadata = {
  title: 'About',
  description: 'Who we are. IP Security Labs builds and teaches AI application security.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 pt-32 pb-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <SectionLabel>About</SectionLabel>
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-text mb-12">
                Who we are.
              </h1>
              
              <div className="space-y-6 text-lg text-text-muted mb-16 leading-relaxed">
                <p>
                  We are IP Security Labs. We build and teach AI application security, helping teams ship LLM apps, RAG systems, and AI agents that hold up against real attacks.
                </p>
                <p>
                  We believe security knowledge should be shared, and AI systems should be tested before they are trusted.
                </p>
                <p>
                  We are building tools and open learning resources focused entirely on the AI request path: from prompts and retrieval pipelines to models and tool calls.
                </p>
                <p>
                  AI applications introduce an attack surface that traditional application security was never built for. Prompts can be injected, retrieval stores poisoned, and autonomous tool calls exploited. Securing this pipeline requires an AI-native approach.
                </p>
                <blockquote className="border-l-2 border-accent pl-4 py-1 italic text-text font-medium text-base">
                  &ldquo;{siteConfig.motto}&rdquo;
                </blockquote>
              </div>

              <div className="border border-border bg-surface-elevated rounded-2xl p-8 text-center mt-12">
                <h2 className="text-2xl font-display font-bold text-text mb-4">
                  Connect with us
                </h2>
                <p className="text-text-muted mb-6 max-w-lg mx-auto text-sm">
                  Whether you are shipping an AI system or learning AI red teaming, we invite you to reach out.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <CTA href="/contact" variant="primary">
                    Contact Us
                  </CTA>
                  <CTA href="/capabilities" variant="secondary">
                    Our Capabilities
                  </CTA>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
