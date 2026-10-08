import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The requested page could not be found.',
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-background flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-8xl md:text-[12rem] font-display font-black text-surface-elevated/50 mb-4 select-none leading-none">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Page not found</h2>
            <p className="text-text-muted max-w-md mx-auto mb-10 text-lg">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <div className="flex justify-center">
              <CTA href="/">
                Return to Home
              </CTA>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
