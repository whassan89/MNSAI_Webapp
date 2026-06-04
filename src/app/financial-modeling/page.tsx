import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView";

export const metadata: Metadata = {
  title: "Financial Modeling & Valuation Pakistan | MNSAI (SMC-Private) Limited",
  description:
    "Professional financial models for fundraising, M&A, business planning, and investor presentations. MNSAI builds DCF, LBO, and 3-statement models for businesses across Pakistan.",
  keywords:
    "financial modeling Pakistan, business valuation Pakistan, DCF model Pakistan, fundraising financial model, investor deck model Pakistan, LBO model Pakistan",
};

const modelTypes = [
  {
    title: "3-Statement Model",
    tag: "Foundation",
    desc: "Integrated P&L, balance sheet, and cash flow — the backbone of any serious financial analysis or investor data room.",
  },
  {
    title: "DCF Valuation",
    tag: "Valuation",
    desc: "Discounted cash flow with scenario analysis, sensitivity tables, and WACC computation for equity valuation and investment decisions.",
  },
  {
    title: "Fundraising Model",
    tag: "Fundraising",
    desc: "Purpose-built for seed, Series A, and growth rounds — with cap table, use of funds, and return projections that investors expect.",
  },
  {
    title: "Business Plan Model",
    tag: "Planning",
    desc: "5-year financial projections with driver-based assumptions, headcount planning, and scenario modelling for strategic planning.",
  },
  {
    title: "M&A / Acquisition Model",
    tag: "M&A",
    desc: "Accretion/dilution analysis, purchase price allocation, combined entity projections, and deal structure modelling.",
  },
  {
    title: "LBO Model",
    tag: "Private Equity",
    desc: "Leveraged buyout models with debt waterfall, IRR analysis, and equity bridge — built to PE firm standards.",
  },
  {
    title: "Project Finance Model",
    tag: "Infrastructure",
    desc: "Infrastructure and energy project models with DSCR, IRR, and sensitivity analysis for lenders and sponsors.",
  },
  {
    title: "SaaS / Startup Model",
    tag: "Startups",
    desc: "Cohort-based MRR model with CAC, LTV, churn, and unit economics — the metrics VCs actually interrogate.",
  },
];

const useCases = [
  {
    who: "Founders Raising Capital",
    need: "Your investor will stress-test your numbers. We build models that hold up under scrutiny — with defensible assumptions and clean logic.",
  },
  {
    who: "Banks & Lenders Evaluating Projects",
    need: "Structured project finance and credit models with the debt service coverage ratios and covenants banks require.",
  },
  {
    who: "Business Owners Planning Acquisitions",
    need: "M&A models that show whether the deal creates value — with sensitivity analysis on purchase price and synergy assumptions.",
  },
  {
    who: "CFOs Preparing Board Presentations",
    need: "Board-ready scenario models with clear visuals, dashboards, and commentary that non-finance directors can actually use.",
  },
];

const process = [
  { step: "01", title: "Scoping Call", desc: "We understand your purpose, audience, timeline, and the decisions the model needs to support." },
  { step: "02", title: "Data & Assumptions", desc: "We collect your historical data, agree on key assumptions, and benchmark against industry comparables." },
  { step: "03", title: "Model Build", desc: "We build in Excel with clear structure, error checks, and colour-coded logic — no black boxes." },
  { step: "04", title: "Review & Scenarios", desc: "We walk you through the model, run scenario and sensitivity analysis, and refine based on your feedback." },
  { step: "05", title: "Handover & Training", desc: "You receive the fully unlocked model with a user guide — and we train your team to update it going forward." },
];

export default function FinancialModelingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-800 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80"
            alt="Financial modeling and analysis charts"
            fill
            className="object-cover object-center opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Financial Modeling & Valuation
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Models That{" "}
              <span className="text-gold-400">Drive Decisions.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Whether you're raising capital, planning a acquisition, or presenting to your board —
              we build the financial models that give your numbers credibility and your decisions a
              foundation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Request a Model</Link>
              <Link href="/services" className="btn-outline">View All Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Model Types */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">What We Build</p>
            <h2 className="section-heading">Types of Financial Models</h2>
            <p className="section-subheading">
              Every model is purpose-built — not templated. Built in Excel, fully documented, fully unlocked.
            </p>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {modelTypes.map((m, i) => (
              <AnimateOnView key={m.title} delay={i * 0.06}>
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow h-full">
                  <span className="bg-navy-800 text-gold-400 text-xs font-semibold px-2.5 py-1 rounded-full">{m.tag}</span>
                  <h3 className="font-heading font-semibold text-navy-800 mt-3 mb-2">{m.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{m.desc}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-[120px] bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">Use Cases</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Who We Build For</h2>
            <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
              Our models are used by founders, CFOs, lenders, and PE investors across Pakistan.
            </p>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <AnimateOnView key={uc.who} delay={i * 0.08}>
                <div className="bg-navy-700 rounded-xl p-6 h-full">
                  <h3 className="font-heading font-semibold text-gold-400 text-lg mb-3">{uc.who}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{uc.need}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 lg:py-[120px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">How It Works</p>
            <h2 className="section-heading">Our Process</h2>
            <p className="section-subheading">
              From scoping call to handover — a structured engagement, every time.
            </p>
          </AnimateOnView>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <AnimateOnView key={p.step} delay={i * 0.08} className="text-center">
                <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold-400 font-bold text-sm">{p.step}</span>
                </div>
                <h3 className="font-semibold text-navy-800 text-sm mb-2">{p.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Marks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { label: "Excel-Native", detail: "No proprietary software — just clean, structured Excel workbooks you can update yourself." },
              { label: "Fully Unlocked", detail: "No hidden sheets, no protected cells. You own the model completely." },
              { label: "Audit-Trailable", detail: "Every assumption is documented and every formula is traceable — built to withstand investor due diligence." },
            ].map((q, i) => (
              <AnimateOnView key={q.label} delay={i * 0.1}>
                <div className="py-6 px-4 border border-gray-100 rounded-xl h-full">
                  <p className="font-heading font-bold text-navy-800 text-lg mb-2">{q.label}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{q.detail}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-800">
        <AnimateOnView className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Model That Investors Trust?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Tell us what you're building and why — we'll scope the right model for your purpose and budget.
          </p>
          <Link href="/contact" className="btn-primary inline-block text-base px-8 py-4">
            Request a Financial Model
          </Link>
        </AnimateOnView>
      </section>
    </>
  );
}
