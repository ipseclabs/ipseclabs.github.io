import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionLabel from '@/components/SectionLabel';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for IP Security Labs.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-background text-text pt-32 pb-24">
        <ScrollReveal>
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-warning/10 border border-warning/30 text-warning p-4 rounded-lg mb-12">
              <p className="font-mono text-sm uppercase font-bold text-center">
                DRAFT — This privacy policy is a placeholder and must be reviewed by legal counsel before launch.
              </p>
            </div>
            
            <div className="mb-12">
              <SectionLabel>Legal</SectionLabel>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight font-display text-text">Privacy Policy</h1>
            </div>
            
            <div className="space-y-8 text-text-muted leading-relaxed">
              <p>Last updated: [Date]</p>
              
              <section>
                <h2 className="text-2xl font-bold text-text mb-4">1. Information We Collect</h2>
                <p className="mb-4">We collect information you provide directly to us through our contact form. This includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Inquiry topic</li>
                  <li>Message content</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-text mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to respond to your inquiries and communicate with you about our services. We do not use this information for marketing purposes without your explicit consent.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-text mb-4">3. Information Sharing</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, as long as those parties agree to keep this information confidential.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-text mb-4">4. Cookies</h2>
                <p>We may use basic analytics tools that utilize cookies to understand how visitors interact with our website. These tools do not collect personally identifiable information.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-text mb-4">5. Contact Us</h2>
                <p>If you have any questions regarding this privacy policy, you may contact us at:</p>
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
