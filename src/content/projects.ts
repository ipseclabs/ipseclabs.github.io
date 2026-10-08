export type ProjectStatus =
  | "Concept"
  | "Prototype"
  | "In Development"
  | "Coming Soon";

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  category: string;
  link?: string;
}

// PLACEHOLDER: These are concept-stage project ideas. Replace with real projects.
export const projects: Project[] = [
  {
    // PLACEHOLDER
    id: "prompt-injection-harness",
    name: "Prompt Injection Test Harness",
    description:
      "An automated testing framework that probes LLM applications for direct and indirect prompt injection vulnerabilities using structured attack patterns.",
    status: "Concept",
    category: "Testing Tool",
  },
  {
    // PLACEHOLDER
    id: "agent-permission-analyzer",
    name: "Agent Permission Analyzer",
    description:
      "A static analysis tool that maps agent tool-call permissions, identifies over-privileged configurations, and suggests least-privilege boundaries.",
    status: "Concept",
    category: "Analysis Tool",
  },
  {
    // PLACEHOLDER
    id: "rag-poisoning-checker",
    name: "RAG Poisoning Checker",
    description:
      "A validation layer for RAG pipelines that detects poisoned documents, manipulated embeddings, and suspicious retrieval patterns before they reach the model.",
    status: "Concept",
    category: "Defense Tool",
  },
];
