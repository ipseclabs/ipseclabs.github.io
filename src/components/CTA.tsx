import * as React from 'react';
import Link from 'next/link';

interface CTAProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function CTA({
  href,
  children,
  variant = 'primary',
  className = '',
}: CTAProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover",
    secondary: "bg-transparent border border-accent text-accent hover:bg-accent/10",
  };

  return (
    <Link 
      href={href} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
