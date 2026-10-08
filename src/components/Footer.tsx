import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/content/site';
import { LinkedInIcon, GitHubIcon, XIcon } from '@/components/Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-16">
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="IP Security Labs Logo" width={32} height={32} className="rounded-md object-contain" />
              <span className="font-display font-bold tracking-tight text-text">IP Security Labs</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              {siteConfig.motto}
            </p>
          </div>
          
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-mono text-xs tracking-wider text-text uppercase mb-4">Navigation</h3>
              <ul className="flex flex-col gap-3">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-text-muted hover:text-accent transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-mono text-xs tracking-wider text-text uppercase mb-4">Legal</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="/privacy" className="text-sm text-text-muted hover:text-accent transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-text-muted hover:text-accent transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-mono text-xs tracking-wider text-text uppercase mb-4">Connect</h3>
              <div className="flex gap-4">
                {siteConfig.linkedin && (
                  <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
                    <LinkedInIcon className="h-5 w-5" />
                  </a>
                )}
                {siteConfig.github && (
                  <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors" aria-label="GitHub">
                    <GitHubIcon className="h-5 w-5" />
                  </a>
                )}
                {siteConfig.x && (
                  <a href={siteConfig.x} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors" aria-label="X">
                    <XIcon className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © {currentYear} IP Security Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
