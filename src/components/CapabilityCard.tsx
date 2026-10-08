'use client';

import { motion } from 'framer-motion';
import { Capability } from '@/content/capabilities';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2, Search } from 'lucide-react';
import Link from 'next/link';

interface CapabilityCardProps {
  capability: Capability;
  variant: 'compact' | 'expanded';
  className?: string;
}

export default function CapabilityCard({ capability, variant, className }: CapabilityCardProps) {
  if (variant === 'compact') {
    return (
      <Link href="/capabilities" className="block h-full no-underline">
        <motion.div
          whileHover={{ y: -2 }}
          className={cn(
            "bg-surface border border-border p-6 rounded-lg transition-colors hover:border-accent/50 flex flex-col h-full shadow-sm hover:shadow-md cursor-pointer",
            className
          )}
        >
          <div className="flex justify-between items-start mb-4 gap-4">
            <h3 className="text-xl font-bold text-text">{capability.title}</h3>
            <span className="font-mono text-xs uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded border border-accent/20">
              {capability.hopLabel}
            </span>
          </div>
          <p className="text-text-muted text-sm flex-grow">
            {capability.shortDescription}
          </p>
          <div className="mt-6 flex items-center text-accent text-sm font-medium">
            Learn more <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={cn(
        "bg-surface border border-border p-8 rounded-lg flex flex-col shadow-sm",
        className
      )}
    >
      <div className="flex justify-between items-start mb-6 gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded border border-accent/20 mb-4 inline-block">
            {capability.hopLabel}
          </span>
          <h3 className="text-2xl font-bold text-text mb-2">{capability.title}</h3>
        </div>
      </div>
      
      <p className="text-text-muted mb-8 text-lg">
        {capability.description}
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-auto">
        <div>
          <h4 className="flex items-center text-sm font-mono uppercase tracking-wider text-text mb-4">
            <Search className="w-4 h-4 mr-2 text-accent" />
            What We Examine
          </h4>
          <ul className="space-y-3">
            {capability.whatWeExamine.map((item, idx) => (
              <li key={idx} className="flex items-start text-sm text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-border mt-1.5 mr-3 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="flex items-center text-sm font-mono uppercase tracking-wider text-text mb-4">
            <CheckCircle2 className="w-4 h-4 mr-2 text-accent" />
            What You Get
          </h4>
          <ul className="space-y-3">
            {capability.whatYouGet.map((item, idx) => (
              <li key={idx} className="flex items-start text-sm text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-border mt-1.5 mr-3 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
