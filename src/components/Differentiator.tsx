'use client';

import ScrollReveal from '@/components/ScrollReveal';
import SectionLabel from '@/components/SectionLabel';
import { cn } from '@/lib/utils';
import { Shield, Target, Wrench, Users } from 'lucide-react';

export default function Differentiator() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <SectionLabel>Why We&apos;re Different</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold text-text mt-4 mb-16 tracking-tight">
            Prompts are an attack surface. <br className="hidden md:block" />
            <span className="text-text-muted">Treat them like one.</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          <ScrollReveal delay={0.1}>
            <div className="bg-surface-elevated border border-border rounded-xl p-8">
              <h3 className="font-mono text-sm uppercase tracking-wider text-text-muted mb-8">
                The Evolution
              </h3>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 md:before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-border">
                {[
                  { title: 'Traditional AppSec', desc: 'Focuses on code vulnerabilities and standard network defenses.' },
                  { title: 'AI Features Bolted On', desc: 'Adding wrappers around APIs without securing the underlying model interactions.' },
                  { 
                    title: 'Security by Design', 
                    desc: 'Security designed around the model, retrieval, and tools.',
                    active: true 
                  }
                ].map((step, idx) => (
                  <div key={idx} className="relative flex items-start group">
                    <div className={cn(
                      "w-8 h-8 rounded-full border-2 flex items-center justify-center bg-surface shrink-0 z-10",
                      step.active ? "border-accent text-accent bg-surface" : "border-border text-text-muted"
                    )}>
                      <span className="font-mono text-xs">{idx + 1}</span>
                    </div>
                    <div className={cn(
                      "ml-6 p-4 rounded-lg border w-full",
                      step.active ? "bg-accent/5 border-accent/30" : "bg-surface border-border"
                    )}>
                      <h4 className={cn(
                        "font-bold mb-1",
                        step.active ? "text-accent" : "text-text"
                      )}>
                        {step.title}
                      </h4>
                      <p className="text-sm text-text-muted">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-6 h-full">
              {[
                { icon: Target, title: 'Understand Context', desc: 'Evaluate the whole system, not just the model in isolation.' },
                { icon: Shield, title: 'Test Adversarially', desc: 'Simulate real-world attacks to find prompt injections.' },
                { icon: Wrench, title: 'Constrain Tool Use', desc: 'Apply least privilege to agents and external integrations.' },
                { icon: Users, title: 'Keep Humans in Control', desc: 'Ensure transparency and oversight for automated actions.' }
              ].map((principle, idx) => (
                <div key={idx} className="bg-surface border border-border rounded-lg p-6 flex flex-col shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center mb-4 text-accent">
                    <principle.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-text mb-2">{principle.title}</h4>
                  <p className="text-sm text-text-muted">{principle.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
