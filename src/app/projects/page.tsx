import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import CTA from '@/components/CTA'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/content/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Concept-stage security projects for LLM applications, RAG pipelines, and AI agents.',
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 pt-32 pb-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <SectionLabel>Projects</SectionLabel>
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-text mb-6">
                What we are building.
              </h1>
              <p className="text-lg text-text-muted">
                Early-stage security tooling concepts designed specifically for the AI application attack surface. All projects below are concepts in active formulation.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-sm font-mono text-text-muted text-center mb-24 max-w-2xl mx-auto border border-border bg-surface p-4 rounded-lg">
              [PLACEHOLDER] These projects are early concepts. We do not claim active adoption or production deployments.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="border border-border bg-surface-elevated rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-text mb-4">
                Want to collaborate on AI security tools?
              </h2>
              <p className="text-text-muted mb-8 max-w-xl mx-auto">
                Reach out if you are exploring threat testing harnesses, permission analyzers, or retrieval safeguards for your stack.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTA href="/contact?topic=Project" variant="primary">
                  Talk to Us
                </CTA>
                <CTA href="/capabilities" variant="secondary">
                  Explore Capabilities
                </CTA>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
