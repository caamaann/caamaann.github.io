"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

// Public Web3Forms access key. Safe to expose in client code by design.
// Set NEXT_PUBLIC_WEB3FORMS_KEY in the environment / GitHub Actions.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const { t } = useLanguage();
  const f = t.contact.form;

  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState<string>("");

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm bg-(--bg-card-hover) border border-(--border) text-(--text-primary) placeholder:text-(--text-muted) outline-none transition-colors duration-200 focus:border-(--accent) focus:shadow-[0_0_0_3px_var(--accent-glow)]";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill this hidden field.
    if ((data.get("botcheck") as string)?.length) return;

    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setFeedback(f.required);
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setFeedback(f.invalidEmail);
      return;
    }
    if (!ACCESS_KEY) {
      setStatus("error");
      setFeedback(f.unavailable);
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio contact from ${name}`,
          from_name: "Portfolio Contact Form",
          name,
          email,
          message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setFeedback(f.success);
        form.reset();
      } else {
        setStatus("error");
        setFeedback(f.error);
      }
    } catch {
      setStatus("error");
      setFeedback(f.error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
      <p className="text-sm font-medium text-(--text-secondary) mb-2">
        {f.heading}
      </p>

      {/* Honeypot field — hidden from users, visible to bots */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="sr-only">
            {f.name}
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={f.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="sr-only">
            {f.email}
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={f.emailPlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="sr-only">
          {f.message}
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder={f.messagePlaceholder}
          className={`${inputClass} resize-y`}
        />
      </div>

      {feedback && (
        <div
          role="status"
          aria-live="polite"
          className={`flex items-center gap-2 text-sm ${
            status === "success" ? "text-emerald-500" : "text-red-500"
          }`}
        >
          {status === "success" ? (
            <CheckCircle2 size={16} />
          ) : (
            <AlertCircle size={16} />
          )}
          <span>{feedback}</span>
        </div>
      )}

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white bg-(--accent) transition-all duration-200 hover:bg-(--accent-hover) disabled:opacity-60 disabled:cursor-not-allowed"
        whileHover={status === "submitting" ? undefined : { scale: 1.02 }}
        whileTap={status === "submitting" ? undefined : { scale: 0.98 }}
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {f.sending}
          </>
        ) : (
          <>
            <Send size={16} />
            {f.send}
          </>
        )}
      </motion.button>
    </form>
  );
}
