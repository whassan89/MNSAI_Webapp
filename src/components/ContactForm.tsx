"use client";

import { useState } from "react";

const services = [
  "Audit & Assurance",
  "Accounting & Bookkeeping",
  "Taxation & Corporate Advisory",
  "Financial Services",
  "Business Advisory",
  "ERP Implementation",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center text-center min-h-[420px]">
        <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mb-5">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-bold text-navy-800 mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-6">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-primary text-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-5"
    >
      <h3 className="font-heading text-xl font-bold text-navy-800 mb-2">Send Us a Message</h3>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-gray-600 text-sm font-medium block mb-1.5">
            Full Name <span className="text-gold-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full border border-gray-200 text-gray-800 placeholder-gray-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
          />
        </div>
        <div>
          <label className="text-gray-600 text-sm font-medium block mb-1.5">
            Email Address <span className="text-gold-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="w-full border border-gray-200 text-gray-800 placeholder-gray-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="text-gray-600 text-sm font-medium block mb-1.5">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+92 XXX XXXXXXX"
          className="w-full border border-gray-200 text-gray-800 placeholder-gray-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
        />
      </div>

      <div>
        <label className="text-gray-600 text-sm font-medium block mb-1.5">Service Required</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full border border-gray-200 text-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors bg-white"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-gray-600 text-sm font-medium block mb-1.5">
          Message <span className="text-gold-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your requirements..."
          required
          className="w-full border border-gray-200 text-gray-800 placeholder-gray-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full btn-primary text-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
