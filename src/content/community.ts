export type CommunityItemStatus = "Planned" | "Open" | "Coming Soon";

export interface CommunityItem {
  id: string;
  title: string;
  description: string;
  format: string;
  status: CommunityItemStatus;
  hopIndex?: number; // Optional link to the request path diagram
}

export const communityIntro = {
  headline: "Learn AI Security Together",
  description:
    "A space for learning AI and cybersecurity together — sharing what we build, what we break, and what we find along the way. Whether you are just getting started or already shipping AI features, there is something here for you.",
};

export const communityTopics = [
  {
    title: "Prompt Injection",
    description:
      "How attackers manipulate prompts to override instructions, extract data, or change model behavior.",
    hopIndex: 1,
  },
  {
    title: "Retrieval Poisoning",
    description:
      "How malicious content in document stores can influence RAG outputs and compromise retrieval integrity.",
    hopIndex: 2,
  },
  {
    title: "Agent Permissions",
    description:
      "How over-permissioned tool calls let agents take actions they were never meant to, and how to constrain them.",
    hopIndex: 4,
  },
  {
    title: "Evaluation Basics",
    description:
      "How to measure whether your AI system's security controls actually work — before and after deployment.",
    hopIndex: 3,
  },
];

// PLACEHOLDER: These are planned community activities. Replace with real items as they launch.
export const communityItems: CommunityItem[] = [
  {
    // PLACEHOLDER
    id: "workshop-prompt-injection",
    title: "Prompt Injection Workshop",
    description:
      "Hands-on session covering direct and indirect prompt injection techniques, detection methods, and defense patterns.",
    format: "Workshop",
    status: "Planned",
    hopIndex: 1,
  },
  {
    // PLACEHOLDER
    id: "guide-rag-security",
    title: "Securing RAG Pipelines",
    description:
      "A written guide covering document validation, embedding integrity, and retrieval-layer defenses for RAG systems.",
    format: "Written Guide",
    status: "Planned",
    hopIndex: 2,
  },
  {
    // PLACEHOLDER
    id: "exercise-agent-permissions",
    title: "Agent Permission Exercises",
    description:
      "Open exercises where you audit agent tool-call configurations and practice applying least-privilege principles.",
    format: "Open Exercise",
    status: "Planned",
    hopIndex: 4,
  },
  {
    // PLACEHOLDER
    id: "discussion-channel",
    title: "Community Discussion",
    description:
      "An open channel for discussing AI security topics, sharing findings, and connecting with others working on these problems.",
    format: "Discussion Channel",
    status: "Planned",
  },
];
