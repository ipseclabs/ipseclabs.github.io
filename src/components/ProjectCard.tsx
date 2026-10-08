'use client';

import { motion } from 'framer-motion';
import { Project } from '@/content/projects';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const cardBody = (
    <motion.div
      whileHover={{ y: -2 }}
      className={cn(
        "bg-surface border border-border p-6 rounded-lg h-full flex flex-col shadow-sm hover:shadow-md",
        project.link ? "hover:border-accent/50 cursor-pointer" : "",
        className
      )}
    >
      <div className="flex justify-between items-start mb-4 gap-4">
        <div>
          <h3 className="text-xl font-bold text-text flex items-center">
            {project.name}
            {project.link && <ExternalLink className="w-4 h-4 ml-2 text-text-muted" />}
          </h3>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <StatusBadge status={project.status} />
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted border border-border px-2 py-0.5 rounded">
            {project.category}
          </span>
        </div>
      </div>
      <p className="text-text-muted text-sm mt-auto">
        {project.description}
      </p>
    </motion.div>
  );

  if (project.link) {
    return (
      <Link href={project.link} className="block h-full no-underline">
        {cardBody}
      </Link>
    );
  }

  return cardBody;
}

function StatusBadge({ status }: { status: Project['status'] }) {
  const getStyles = () => {
    switch (status) {
      case 'Concept':
        return 'text-text-muted border-border';
      case 'Prototype':
        return 'text-accent/80 border-accent/30';
      case 'In Development':
        return 'text-accent border-accent/50';
      case 'Coming Soon':
        return 'text-text-muted border-border';
      default:
        return 'text-text-muted border-border';
    }
  };

  return (
    <span
      className={cn(
        "font-mono text-[10px] uppercase tracking-wider border px-2 py-0.5 rounded",
        getStyles()
      )}
    >
      {status}
    </span>
  );
}
