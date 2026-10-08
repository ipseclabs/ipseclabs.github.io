import * as React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span className={`font-mono text-xs uppercase tracking-widest text-accent font-semibold ${className}`}>
      {children}
    </span>
  );
}
