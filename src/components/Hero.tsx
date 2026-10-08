"use client";

import { motion } from "framer-motion";
import RequestPathVisual from "@/components/RequestPathVisual";
import SectionLabel from "@/components/SectionLabel";
import CTA from "@/components/CTA";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-40">
      {/* Soft radial accent glow — the only gradient allowed */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4"
        aria-hidden="true"
      >
        <div className="h-[600px] w-[800px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <SectionLabel className="mb-4">
            Community-Driven · AI Application Security
          </SectionLabel>

          <h1 className="mb-6 font-display text-4xl font-extrabold tracking-tight text-text md:text-5xl lg:text-6xl">
            Security for the AI stack.
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">
            We build and teach AI application security: threat modeling, red
            teaming, and guardrails for LLM apps, RAG systems, and AI agents.
          </p>

          <div className="flex flex-wrap gap-4">
            <CTA href="/capabilities" variant="primary">
              Explore What We Build
            </CTA>
            <CTA href="/contact" variant="secondary">
              Talk to Us
            </CTA>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <RequestPathVisual variant="hero" />
        </motion.div>
      </div>
    </section>
  );
}
