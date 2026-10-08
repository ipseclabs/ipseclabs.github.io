'use client';

import { motion } from 'framer-motion';
import { CommunityItem } from '@/content/community';
import { cn } from '@/lib/utils';

interface CommunityCardProps {
  item: CommunityItem;
  className?: string;
}

export default function CommunityCard({ item, className }: CommunityCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={cn(
        "bg-surface border border-border p-6 rounded-lg h-full flex flex-col shadow-sm hover:shadow-md",
        className
      )}
    >
      <div className="flex justify-between items-start mb-4 gap-4">
        <h3 className="text-xl font-bold text-text">{item.title}</h3>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <StatusBadge status={item.status} />
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted border border-border px-2 py-0.5 rounded">
            {item.format}
          </span>
        </div>
      </div>
      <p className="text-text-muted text-sm mt-auto">
        {item.description}
      </p>
    </motion.div>
  );
}

function StatusBadge({ status }: { status: CommunityItem['status'] }) {
  const getStyles = () => {
    switch (status) {
      case 'Planned':
        return 'text-text-muted border-border';
      case 'Open':
        return 'text-accent border-accent bg-accent/10 font-medium';
      case 'Coming Soon':
        return 'text-text-muted border-border/50';
      default:
        return 'text-text-muted border-border';
    }
  };

  return (
    <span className={cn(
      "font-mono uppercase tracking-wider text-[10px] px-2 py-0.5 rounded border",
      getStyles()
    )}>
      {status}
    </span>
  );
}
