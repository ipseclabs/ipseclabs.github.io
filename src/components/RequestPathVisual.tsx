'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

export interface RequestPathVisualProps {
  variant?: 'hero' | 'compact';
  highlightHop?: number;
  className?: string;
}

const NODES = [
  { id: 0, title: 'Input', risk: 'Malicious user input' },
  { id: 1, title: 'Prompt', risk: 'Prompt injection' },
  { id: 2, title: 'Retrieval', risk: 'Poisoned context' },
  { id: 3, title: 'Model', risk: 'Unsafe generation' },
  { id: 4, title: 'Tool Call', risk: 'Over-permissioned actions' },
  { id: 5, title: 'Action', risk: 'Unintended side effects' },
];

export default function RequestPathVisual({
  variant = 'hero',
  highlightHop,
  className = '',
}: RequestPathVisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredHop, setHoveredHop] = useState<number | null>(null);

  const viewBoxWidth = 1200;
  const viewBoxHeight = 260;
  const nodeWidth = 140;
  const nodeHeight = 56;
  const spacing = viewBoxWidth / NODES.length;

  const isHero = variant === 'hero';

  return (
    <div className={`relative w-full ${className}`}>
      {/* Desktop & Tablet SVG View */}
      <div className={`hidden md:block overflow-x-auto overflow-y-hidden hide-scrollbar ${!isHero ? 'rounded-xl border border-border bg-surface/50 p-4' : ''}`}>
        <div className={isHero ? 'min-w-[850px]' : 'min-w-[650px]'}>
          <svg
            viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            aria-label="AI Request Path: Input to Prompt to Retrieval to Model to Tool Call to Action"
          >
            {/* Connecting lines and flowing data dots */}
            {NODES.map((node, i) => {
              if (i === NODES.length - 1) return null;
              
              const startX = (i + 0.5) * spacing + nodeWidth / 2;
              const endX = (i + 1.5) * spacing - nodeWidth / 2;
              const centerY = viewBoxHeight / 2;

              return (
                <g key={`path-${i}`}>
                  <line
                    x1={startX}
                    y1={centerY}
                    x2={endX}
                    y2={centerY}
                    stroke="#2a2a32"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                  />
                  
                  {!shouldReduceMotion && (
                    <>
                      <motion.circle
                        r="3.5"
                        fill="#3b82f6"
                        initial={{ cx: startX, cy: centerY, opacity: 0 }}
                        animate={{
                          cx: endX,
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          ease: 'linear',
                          delay: i * 0.3,
                        }}
                      />
                      <motion.circle
                        r="3.5"
                        fill="#3b82f6"
                        initial={{ cx: startX, cy: centerY, opacity: 0 }}
                        animate={{
                          cx: endX,
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          ease: 'linear',
                          delay: i * 0.3 + 1.4,
                        }}
                      />
                    </>
                  )}
                </g>
              );
            })}

            {/* Checkpoint nodes */}
            {NODES.map((node, i) => {
              const cx = (i + 0.5) * spacing;
              const cy = viewBoxHeight / 2;
              
              const isHighlighted = highlightHop === i;
              const isHovered = hoveredHop === i;
              const isActive = isHighlighted || isHovered;
              
              return (
                <g
                  key={`node-${i}`}
                  onMouseEnter={() => setHoveredHop(i)}
                  onMouseLeave={() => setHoveredHop(null)}
                  className="cursor-pointer"
                  tabIndex={0}
                  onFocus={() => setHoveredHop(i)}
                  onBlur={() => setHoveredHop(null)}
                  role="button"
                  aria-label={`${node.title}. Potential risk: ${node.risk}`}
                >
                  {/* Subtle checkpoint pulsing halo */}
                  {!shouldReduceMotion && (
                    <motion.rect
                      x={cx - nodeWidth / 2 - 4}
                      y={cy - nodeHeight / 2 - 4}
                      width={nodeWidth + 8}
                      height={nodeHeight + 8}
                      rx={10}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth={1.5}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={
                        isActive 
                          ? { opacity: [0.6, 0], scale: [1, 1.08] }
                          : { opacity: [0.25, 0], scale: [1, 1.05] }
                      }
                      transition={{
                        duration: isActive ? 1.2 : 2.4,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                    />
                  )}

                  {/* Node Background */}
                  <rect
                    x={cx - nodeWidth / 2}
                    y={cy - nodeHeight / 2}
                    width={nodeWidth}
                    height={nodeHeight}
                    rx={8}
                    fill={isActive ? '#1c1c22' : '#141418'}
                    stroke={isActive ? '#3b82f6' : '#2a2a32'}
                    strokeWidth={isActive ? 2 : 1.5}
                    className="transition-colors duration-150"
                  />

                  {/* Small sequence step tag */}
                  <text
                    x={cx}
                    y={cy - 12}
                    textAnchor="middle"
                    fill="#8888a0"
                    fontSize={10}
                    fontFamily="monospace"
                    letterSpacing="0.05em"
                    className="pointer-events-none select-none uppercase"
                  >
                    Hop {i + 1}
                  </text>

                  {/* Node Title */}
                  <text
                    x={cx}
                    y={cy + 10}
                    textAnchor="middle"
                    fill={isActive ? '#3b82f6' : '#e8e8ed'}
                    fontSize={15}
                    fontFamily="Inter, sans-serif"
                    fontWeight="600"
                    className="transition-colors duration-150 pointer-events-none select-none"
                  >
                    {node.title}
                  </text>

                  {/* Risk Tooltip */}
                  <AnimatePresence>
                    {(isHovered || isHighlighted) && (
                      <motion.g
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="pointer-events-none"
                      >
                        <rect
                          x={cx - 105}
                          y={cy - nodeHeight / 2 - 46}
                          width={210}
                          height={34}
                          rx={6}
                          fill="#1c1c22"
                          stroke="#ef4444"
                          strokeWidth={1}
                        />
                        {/* Tooltip pointer arrow */}
                        <path
                          d={`M ${cx - 5} ${cy - nodeHeight / 2 - 12} L ${cx + 5} ${cy - nodeHeight / 2 - 12} L ${cx} ${cy - nodeHeight / 2 - 7} Z`}
                          fill="#1c1c22"
                          stroke="#ef4444"
                          strokeWidth={1}
                        />
                        <circle
                          cx={cx - 82}
                          cy={cy - nodeHeight / 2 - 29}
                          r={3}
                          fill="#ef4444"
                        />
                        <text
                          x={cx - 72}
                          y={cy - nodeHeight / 2 - 25}
                          textAnchor="start"
                          fill="#ef4444"
                          fontSize={12}
                          fontFamily="Inter, sans-serif"
                          fontWeight="500"
                        >
                          {node.risk}
                        </text>
                      </motion.g>
                    )}
                  </AnimatePresence>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
      
      {/* Mobile Stack View (<768px) */}
      <div className="md:hidden mt-6 flex flex-col items-center">
        {NODES.map((node, i) => (
          <div key={`mobile-node-${i}`} className="w-full max-w-sm flex flex-col items-center">
            <div 
              className={`w-full py-4 px-5 rounded-lg border text-center transition-colors duration-150
                ${highlightHop === i 
                  ? 'border-accent bg-surface-elevated text-text' 
                  : 'border-border bg-surface text-text'
                }`}
            >
              <div className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-1">
                Hop {i + 1}
              </div>
              <div className="font-semibold text-base mb-2">{node.title}</div>
              <div className="flex items-center justify-center gap-1.5 text-xs text-warning font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-warning shrink-0" />
                <span>{node.risk}</span>
              </div>
            </div>

            {/* Connecting line (down arrow) */}
            {i < NODES.length - 1 && (
              <div className="h-6 w-px bg-border my-2 relative">
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 border-r-2 border-b-2 border-border transform rotate-45" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
