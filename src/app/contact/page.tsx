import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import ContactForm from '@/components/ContactForm'
import { LinkedInIcon } from '@/components/Icons'
import { siteConfig } from '@/content/site'

import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with IP Security Labs regarding security projects, community participation, or inquiries.',
}

export default function ContactPage() {

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 pt-32 pb-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start">
            
            <ScrollReveal>
              <div className="lg:sticky lg:top-32 pr-0 lg:pr-8">
                <SectionLabel>Contact</SectionLabel>
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-text mb-6 mt-2">
                  Get in touch.
                </h1>
                <p className="text-lg text-text-muted mb-8 leading-relaxed">
                  Have questions about securing your LLM application, want to get involved in our community learning track, or have feedback? Reach out directly.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">Email</h3>
                    <a 
                      href={`mailto:${siteConfig.email}`} 
                      className="text-text hover:text-accent transition-colors font-medium text-base inline-block"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  
                  {siteConfig.linkedin && (
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">LinkedIn</h3>
                      <a 
                        href={siteConfig.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-text hover:text-accent transition-colors font-medium text-base"
                      >
                        <LinkedInIcon className="h-4 w-4" />
                        <span>IP Security Labs</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
                <Suspense fallback={<div className="p-8 text-center text-text-muted">Loading form...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
