"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initial: FormState = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(initial);
    }, 3500);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border-2 border-sunday-red bg-sunday-red/10 p-10 text-center"
      >
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-sunday-red text-white">
          <CheckCircle2 className="h-8 w-8" strokeWidth={2.25} />
        </div>
        <h3 className="font-[family-name:var(--font-display)] font-black text-3xl mb-2">
          Message sent.
        </h3>
        <p className="text-sunday-text/80">
          We&apos;ll get back to you faster than a Sunday brunch order.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border-2 border-sunday-line bg-sunday-surface p-6 md:p-10 space-y-5"
    >
      <Field
        label="Name"
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="Your name"
        required
      />
      <Field
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={onChange}
        placeholder="hello@yourbrand.com"
        required
      />
      <Field
        label="Subject"
        name="subject"
        value={form.subject}
        onChange={onChange}
        placeholder="What's the vibe?"
        required
      />
      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-accent)] text-sunday-text-muted mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={onChange}
          placeholder="Tell us about your project, your dream, your chaos…"
          className="w-full resize-none rounded-2xl border-2 border-sunday-line bg-sunday-dark px-5 py-4 text-base placeholder:text-sunday-text-muted/60 focus:border-sunday-red focus:outline-none"
        />
      </div>
      <div className="pt-2">
        <Button size="lg">Send it →</Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-accent)] text-sunday-text-muted mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border-2 border-sunday-line bg-sunday-dark px-5 py-4 text-base placeholder:text-sunday-text-muted/60 focus:border-sunday-red focus:outline-none"
      />
    </div>
  );
}
