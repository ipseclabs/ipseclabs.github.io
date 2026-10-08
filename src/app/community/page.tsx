import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import CTA from '@/components/CTA'
import RequestPathVisual from '@/components/RequestPathVisual'
import CommunityCard from '@/components/CommunityCard'
import { communityIntro, communityTopics, communityItems } from '@/content/community'

export const metadata: Metadata = {
  title: 'Community',
  description: 'Learn AI security together. Open learning, shared exercises, and discussions on securing AI applications.',
}

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 pt-32 pb-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mb-24">
              <SectionLabel>Community</SectionLabel>
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-text mb-6">
                Learn AI security together.
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                {communityIntro.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="mb-32">
            <ScrollReveal>
              <SectionLabel>Curriculum</SectionLabel>
              <h2 className="text-3xl font-display font-bold text-text mt-2 mb-8">
                What we teach
              </h2>
              <p className="text-text-muted max-w-2xl mb-12">
                Every topic maps directly to a hop in the AI request path. We deconstruct real vulnerabilities and examine defenses at each stage.
              </p>
              <div className="mb-12">
                <RequestPathVisual variant="compact" />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {communityTopics.map((topic, index) => (
                <ScrollReveal key={topic.title} delay={index * 0.1}>
                  <div className="p-6 rounded-xl bg-surface border border-border h-full flex flex-col justify-between hover:border-border/80 transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-text">{topic.title}</h3>
                        <span className="text-xs font-mono uppercase bg-accent/10 border border-accent/20 text-accent px-2 py-1 rounded">
                          Hop {topic.hopIndex}
                        </span>
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed">{topic.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <ScrollReveal>
              <SectionLabel>Participation</SectionLabel>
              <h2 className="text-3xl font-display font-bold text-text mt-2 mb-8">
                Ways to take part
              </h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {communityItems.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 0.1}>
                  <CommunityCard item={item} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal>
            <div className="border border-border bg-surface-elevated rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-text mb-4">
                Want to learn or contribute?
              </h2>
              <p className="text-text-muted mb-8 max-w-xl mx-auto">
                Join our open learning track. Reach out to collaborate on exercises, suggest topics, or share your security research.
              </p>
              <CTA href="/contact?topic=Community" variant="primary">
                Join Community
              </CTA>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
