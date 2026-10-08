export interface Capability {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  whatWeExamine: string[];
  whatYouGet: string[];
  hopIndex: number; // Index on the request path (0-5)
  hopLabel: string;
}

export const capabilities: Capability[] = [
  {
    id: "threat-modeling",
    title: "Threat Modeling for LLM Apps",
    shortDescription:
      "Map how prompts, context, and data flow through your AI system to find where things break.",
    description:
      "AI applications introduce attack surfaces that traditional threat models miss. We map how prompts, context windows, and retrieved data flow through your system, identifying where inputs can be manipulated, where context can be poisoned, and where outputs might leak sensitive information.",
    whatWeExamine: [
      "Prompt construction and template injection points",
      "Context window composition and overflow behavior",
      "Data flow between retrieval, model, and downstream systems",
      "Trust boundaries between user input and system instructions",
    ],
    whatYouGet: [
      "A threat model specific to your AI architecture",
      "Prioritized list of attack surfaces with severity ratings",
      "Recommended mitigations for each identified risk",
      "Documentation of trust boundaries and data flows",
    ],
    hopIndex: 1,
    hopLabel: "Prompt",
  },
  {
    id: "ai-red-teaming",
    title: "AI Red Teaming",
    shortDescription:
      "Test your AI system the way an attacker would — with adversarial prompts, jailbreaks, and edge cases.",
    description:
      "We test AI systems the way an attacker would. This means adversarial prompts, jailbreak attempts, prompt injection chains, and edge cases that expose unintended behaviors. The goal is to find failures before users do.",
    whatWeExamine: [
      "Direct and indirect prompt injection resistance",
      "Jailbreak and guardrail bypass techniques",
      "Output manipulation and hallucination exploitation",
      "Multi-turn attack chains and context poisoning",
    ],
    whatYouGet: [
      "A structured red team report with reproducible test cases",
      "Classification of failures by type and severity",
      "Evidence of successful and unsuccessful attack attempts",
      "Remediation guidance for each finding",
    ],
    hopIndex: 3,
    hopLabel: "Model",
  },
  {
    id: "rag-security",
    title: "RAG & Retrieval Security",
    shortDescription:
      "Secure the retrieval layer — where poisoned documents, manipulated embeddings, and data leakage hide.",
    description:
      "Retrieval-Augmented Generation systems are only as trustworthy as their data sources. We examine how documents are ingested, embedded, retrieved, and injected into prompts — looking for poisoned content, manipulated rankings, and information that should never reach the model.",
    whatWeExamine: [
      "Document ingestion pipelines and content validation",
      "Embedding integrity and retrieval manipulation",
      "Chunk selection logic and relevance poisoning",
      "Data leakage through retrieved context",
    ],
    whatYouGet: [
      "Assessment of your retrieval pipeline security posture",
      "Identified poisoning vectors and data leakage paths",
      "Recommendations for content validation and filtering",
      "Secure retrieval architecture guidance",
    ],
    hopIndex: 2,
    hopLabel: "Retrieval",
  },
  {
    id: "agent-guardrails",
    title: "Agent & Tool-Use Guardrails",
    shortDescription:
      "Constrain what AI agents can do — because an over-permissioned tool call is an exploit waiting to happen.",
    description:
      "AI agents that call tools, execute code, or take actions in the real world need constraints. We analyze permission models, tool call validation, and action boundaries to ensure agents cannot be manipulated into performing unintended operations.",
    whatWeExamine: [
      "Tool call permission models and scope boundaries",
      "Input validation on tool parameters",
      "Action confirmation and human-in-the-loop controls",
      "Escalation paths and privilege boundaries",
    ],
    whatYouGet: [
      "A permission audit of your agent's tool access",
      "Identified over-permission and escalation risks",
      "Guardrail design recommendations",
      "Human-in-the-loop integration guidance",
    ],
    hopIndex: 4,
    hopLabel: "Tool Call",
  },
];
