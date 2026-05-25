import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Virtual CFO Services Pakistan | MNSAI (SMC-Private) Limited",
  description:
    "Outsource your entire finance function to Big Four-trained CFOs. MNSAI delivers Virtual CFO services — management accounts, cash flow, reporting, and financial leadership — for SMEs across Pakistan.",
  keywords:
    "virtual CFO Pakistan, outsourced CFO Lahore, managed finance Pakistan, CFO services SME Pakistan",
};

const whyNeeds = [
  {
    title: "You're scaling but lack a finance team",
    desc: "Revenue is growing but your books are behind and decisions are made on gut feel — not numbers.",
  },
  {
    title: "Your investor wants IFRS-compliant reports",
    desc: "Banks, PE firms, and international investors require structured financials. We deliver them on time, every time.",
  },
  {
    title: "Cash flow surprises you every month",
    desc: "You earn well but never know where the money is. A Virtual CFO builds the visibility and controls to fix that.",
  },
  {
    title: "You need a finance head but can't justify the salary",
    desc: "A full-time CFO in Pakistan costs PKR 4–8M per year. Our Virtual CFO retainer starts at a fraction of that.",
  },
];

const included = [
  { label: "Virtual CFO Retainer", detail: "Dedicated senior advisor as your finance lead" },
  { label: "Monthly Management Accounts", detail: "P&L, balance sheet, and cash flow on time, every month" },
  { label: "KPI Dashboards", detail: "Custom metrics that track what actually moves your business" },
  { label: "Cash Flow Forecasting", detail: "13-week rolling forecasts and liquidity management" },
  { label: "Payroll & Payables", detail: "End-to-end payroll processing and vendor payments" },
  { label: "Financial Controls", detail: "SOPs, approval workflows, and internal controls that scale" },
  { label: "Board & Investor Reporting", detail: "Investor-ready packs and lender reporting prepared for you" },
  { label: "Budget vs Actual Analysis", detail: "Monthly variance reviews with commentary and recommendations" },
];

const faqs = [
  {
    q: "How is a Virtual CFO different from a bookkeeper?",
    a: "A bookkeeper records transactions. A Virtual CFO interprets what those transactions mean, builds forecasts, manages your finance team, and gives you the financial leadership to make better decisions.",
  },
  {
    q: "What size of company benefits most?",
    a: "SMEs and growing businesses with PKR 50M–2B in revenue get the most value — large enough to need structured finance, not yet large enough to justify a full-time CFO.",
  },
  {
    q: "Do you work with international businesses?",
    a: "Yes. We work with international organizations operating in Pakistan and Pakistani businesses with overseas investors or reporting requirements.",
  },
  {
    q: "Can you take over from our existing accountant?",
    a: "Absolutely. We handle the transition professionally, review existing records, and onboard cleanly without disruption to your operations.",
  },
];

export default function VirtualCFOPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-800 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&q=80"
            alt="CFO reviewing financial dashboards"
            fill
            className="object-cover object-center opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Virtual CFO Services
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              CFO-Level Leadership.{" "}
              <span className="text-gold-400">Without the Full-Time Cost.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Big Four-trained professionals take ownership of your entire finance function —
              delivering the financial clarity, reporting, and strategic insight that growing
              businesses need to scale with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book a Free Discovery Call</Link>
              <Link href="/services" className="btn-outline">View All Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs This */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">Is This You?</p>
            <h2 className="section-heading">Who Needs a Virtual CFO?</h2>
            <p className="section-subheading">
              You don't need to be struggling to need a CFO. You need one when you're growing faster than your finance function.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyNeeds.map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-navy-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">The Service</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">What's Included</h2>
            <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
              A comprehensive finance function — not just a monthly report.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {included.map((item) => (
              <div key={item.label} className="bg-navy-700 rounded-xl p-5">
                <div className="w-6 h-6 bg-gold-500 rounded mb-3 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-semibold text-white text-sm mb-1">{item.label}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credential Strip */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center text-center">
            <div>
              <p className="font-heading text-4xl font-bold text-navy-800 mb-1">12+</p>
              <p className="text-gray-500 text-sm">Years delivering CFO-level work</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-navy-800 mb-1">Big Four</p>
              <p className="text-gray-500 text-sm">Trained — KPMG & PwC background</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-navy-800 mb-1">200+</p>
              <p className="text-gray-500 text-sm">Businesses served across Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">Questions</p>
            <h2 className="section-heading">Frequently Asked</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-navy-800 mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Upgrade Your Finance Function?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Book a free 30-minute discovery call. No obligation — just clarity on what a Virtual CFO can do for your business.
          </p>
          <Link href="/contact" className="btn-primary inline-block text-base px-8 py-4">
            Book a Free Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
