import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionLabel from '@/components/SectionLabel';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for IP Security Labs.',
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-background text-text pt-32 pb-24">
        <ScrollReveal>
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-warning/10 border border-warning/30 text-warning p-4 rounded-lg mb-12">
              <p className="font-mono text-sm uppercase font-bold text-center">
                DRAFT — This terms of service is a placeholder and must be reviewed by legal counsel before launch.
              </p>
            </div>
            
            <div className="mb-12">
              <SectionLabel>Legal</SectionLabel>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight font-display text-text">Terms of Service</h1>
            </div>
            
            <div className="space-y-8 text-text-muted leading-relaxed">
              <p>Last updated: [Date]</p>
              
              <section>
                <h2 className="text-2xl font-bold text-text mb-4">1. Acceptance of Terms</h2>
                <p>By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-text mb-4">2. Use of the Website</h2>
                <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-text mb-4">3. Intellectual Property</h2>
                <p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-text mb-4">4. No Warranties</h2>
                <p>This website and its content are provided &quot;as is&quot; without any representations or warranties, express or implied. IP Security Labs makes no representations or warranties in relation to this website or the information and materials provided on this website.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-text mb-4">5. Limitation of Liability</h2>
                <p>IP Security Labs will not be liable to you in relation to the contents of, or use of, or otherwise in connection with, this website for any indirect, special, or consequential loss.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-text mb-4">6. Contact Us</h2>
                <p>If you have any questions regarding these terms, you may contact us at:</p>
                <p className="font-mono mt-4 text-accent">contact@ipseclabs.com</p>
              </section>
            </div>
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
