"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormProps {
  defaultTopic?: "Project" | "Community" | "Other";
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm({ defaultTopic }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<"Project" | "Community" | "Other">(
    defaultTopic ?? "Project"
  );
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, topic, message }),
      });

      const data = (await res.json()) as { success?: boolean; message?: string; error?: string };

      if (res.ok && data.success) {
        setStatus("success");
        setResponseMessage(
          data.message ?? "Your message has been received."
        );
        setName("");
        setEmail("");
        setTopic(defaultTopic ?? "Project");
        setMessage("");
      } else {
        setStatus("error");
        setResponseMessage(
          data.error ?? "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setResponseMessage(
        "Could not connect to the server. Please try again later."
      );
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-border bg-surface px-4 py-3 text-text placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block font-mono text-xs font-medium uppercase tracking-wider text-text-muted"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          minLength={2}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={inputClasses}
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block font-mono text-xs font-medium uppercase tracking-wider text-text-muted"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={inputClasses}
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label
          htmlFor="contact-topic"
          className="mb-2 block font-mono text-xs font-medium uppercase tracking-wider text-text-muted"
        >
          Topic
        </label>
        <select
          id="contact-topic"
          value={topic}
          onChange={(e) =>
            setTopic(e.target.value as "Project" | "Community" | "Other")
          }
          className={inputClasses}
          disabled={status === "submitting"}
        >
          <option value="Project">Project</option>
          <option value="Community">Community</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block font-mono text-xs font-medium uppercase tracking-wider text-text-muted"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          required
          minLength={10}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project or question..."
          className={`${inputClasses} resize-y`}
          disabled={status === "submitting"}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
      >
        {status === "submitting" ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="h-4 w-4 rounded-full border-2 border-white border-t-transparent"
            />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>

      <AnimatePresence mode="wait">
        {(status === "success" || status === "error") && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`flex items-start gap-3 rounded-lg border p-4 ${
              status === "success"
                ? "border-green-500/30 bg-green-500/10 text-green-400"
                : "border-warning/30 bg-warning/10 text-warning"
            }`}
          >
            {status === "success" ? (
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
            ) : (
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
            )}
            <p className="text-sm">{responseMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
