import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight } from "lucide-react";

export default function CommunityBand() {
  return (
    <section className="border-y border-border bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <SectionLabel className="mb-3">Learn With Us</SectionLabel>
            <h2 className="mb-3 font-display text-2xl font-bold tracking-tight md:text-3xl">
              AI security is a shared problem.
            </h2>
            <p className="text-text-muted">
              We learn in the open — sharing techniques, building exercises, and
              breaking things together so everyone ships safer AI.
            </p>
          </div>
          <Link
            href="/community"
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-accent px-6 py-3 font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Explore the Community
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
