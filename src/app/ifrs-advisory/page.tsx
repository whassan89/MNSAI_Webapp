import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView";

export const metadata: Metadata = {
  title: "IFRS Advisory & Implementation Services | MNSAI (SMC-Private) Limited",
  description:
    "Practical IFRS advisory, implementation, and compliance support for businesses in Pakistan, UAE, and beyond. Chartered Accountants helping SMEs, startups, and groups achieve audit-ready, investor-grade financial reporting.",
  keywords:
    "IFRS advisory Pakistan, IFRS implementation Pakistan, IFRS compliance UAE, IFRS gap analysis, IFRS 16 lease accounting Pakistan, IFRS 15 revenue recognition, audit readiness Pakistan, financial reporting Pakistan",
};

const painPoints = [
  {
    title: "Incorrect Revenue Recognition",
    desc: "Revenue booked at the wrong time or using the wrong method — creating audit risk and investor distrust.",
  },
  {
    title: "Lease Accounting Complications",
    desc: "IFRS 16 requires right-of-use assets and lease liabilities on the balance sheet. Most businesses are still non-compliant.",
  },
  {
    title: "Weak Financial Reporting Controls",
    desc: "Month-end closes that take weeks, inconsistent accounting policies, and management accounts that don't match the audited accounts.",
  },
  {
    title: "Audit Observations & Compliance Risks",
    desc: "Recurring audit findings, qualified opinions, or auditor disagreements that damage credibility with lenders and investors.",
  },
  {
    title: "No In-House IFRS Expertise",
    desc: "Your finance team handles day-to-day well but lacks the technical depth to navigate complex IFRS standards.",
  },
  {
    title: "Investor & Lender Reporting Requirements",
    desc: "PE firms, banks, and international investors require IFRS-compliant financials. Without them, deals stall.",
  },
  {
    title: "Transition from Local GAAP to IFRS",
    desc: "Converting your historical accounts to IFRS for the first time is complex — opening balance sheet restatements, policy elections, and comparative periods.",
  },
  {
    title: "Financial Statement Disclosure Gaps",
    desc: "Missing or insufficient notes to accounts — a common audit observation that signals poor financial governance.",
  },
];

const services = [
  {
    title: "IFRS Implementation",
    icon: "⚙",
    points: [
      "End-to-end implementation support",
      "Accounting policy manual drafting",
      "Financial statement alignment to IFRS",
      "Chart of accounts restructuring",
    ],
  },
  {
    title: "IFRS Gap Assessment",
    icon: "🔍",
    points: [
      "Review of current financial statements",
      "Identification of non-compliance areas",
      "Risk-prioritised gap report",
      "Practical remediation roadmap",
    ],
  },
  {
    title: "IFRS 15 — Revenue Recognition",
    icon: "📋",
    points: [
      "Contract-by-contract revenue analysis",
      "Five-step model application",
      "Performance obligation identification",
      "Variable consideration treatment",
    ],
  },
  {
    title: "IFRS 16 — Lease Accounting",
    icon: "🏢",
    points: [
      "Lease identification and classification",
      "Right-of-use asset calculations",
      "Lease liability modelling and schedules",
      "Transition and ongoing accounting",
    ],
  },
  {
    title: "IFRS Financial Statements",
    icon: "📄",
    points: [
      "Full IFRS financial statement preparation",
      "Disclosure notes drafting",
      "Comparative period restatements",
      "Auditor liaison and query resolution",
    ],
  },
  {
    title: "Audit & Compliance Support",
    icon: "✅",
    points: [
      "Audit readiness assessment",
      "Technical accounting position papers",
      "Response to auditor observations",
      "Prior year restatement support",
    ],
  },
  {
    title: "IFRS Training",
    icon: "🎓",
    points: [
      "Finance team workshops (group or 1-on-1)",
      "Standard-specific deep dives",
      "Practical implementation sessions",
      "Ongoing technical Q&A support",
    ],
  },
];

const whyMNSAI = [
  "Chartered Accountants with hands-on IFRS implementation experience — not just theory",
  "Track record across Pakistan, UAE, and Saudi Arabia",
  "Big Four-trained professionals (KPMG, PwC) embedded in your finance function",
  "Practical, business-oriented solutions — not textbook compliance exercises",
  "Experience across startups, SMEs, groups, and international organizations",
  "Audit-oriented approach — we prepare you for the questions auditors will ask",
  "Strong financial modelling background to support valuation and reporting simultaneously",
];

const industries = [
  "Manufacturing",
  "FMCG",
  "Technology & SaaS",
  "E-commerce",
  "Construction",
  "Healthcare",
  "Energy & Solar",
  "Trading Businesses",
  "Startups & SMEs",
];

const caseStudy = {
  title: "Improved Financial Reporting Accuracy for a Growing SME",
  context:
    "A mid-sized trading business in Pakistan with PKR 400M revenue was preparing for its first institutional lender audit. Their existing accounts were prepared under local GAAP with significant IFRS gaps.",
  results: [
    "Identified 11 material IFRS disclosure gaps across revenue, leases, and financial instruments",
    "Assisted finance team in restating comparatives and drafting full IFRS disclosure notes",
    "Reduced audit adjustment risk — the lender audit passed with zero qualified observations",
    "Improved management reporting structure adopted internally for ongoing use",
  ],
};

export default function IFRSAdvisoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-800 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
            alt="IFRS financial reporting"
            fill
            className="object-cover object-center opacity-15"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-800/90 to-navy-800/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">
              IFRS Advisory & Implementation
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Practical IFRS Solutions{" "}
              <span className="text-gold-400">for Growing Businesses</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Chartered Accountants providing practical IFRS advisory, financial reporting, audit
              readiness, and compliance support for businesses in Pakistan, UAE, and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book Free IFRS Assessment</Link>
              <Link
                href="/contact"
                className="btn-white"
              >
                Get Free Gap Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">Sound Familiar?</p>
            <h2 className="section-heading">Common IFRS Challenges Businesses Face</h2>
            <p className="section-subheading">
              These are the issues that surface in audits, investor due diligence, and lender reviews —
              and the ones we fix most often.
            </p>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {painPoints.map((p, i) => (
              <AnimateOnView key={p.title} delay={i * 0.06}>
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-gold-400 hover:shadow-sm transition-all h-full">
                  <div className="w-8 h-8 bg-red-50 border border-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-navy-800 text-sm mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-[120px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="section-heading">Our IFRS Advisory Services</h2>
            <p className="section-subheading">
              Implementation-focused support — from gap identification to audit-ready financial statements.
            </p>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimateOnView key={s.title} delay={i * 0.07}>
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gold-400 transition-all h-full">
                  <p className="text-2xl mb-4">{s.icon}</p>
                  <h3 className="font-heading font-semibold text-navy-800 mb-4">{s.title}</h3>
                  <ul className="space-y-2">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-gold-400 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600 text-sm leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Why MNSAI */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <AnimateOnView direction="left">
              <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">Why Us</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8">
                Why Businesses Choose MNSAI
              </h2>
              <ul className="space-y-4">
                {whyMNSAI.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gold-400 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.12}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "12+", label: "Years of advisory experience" },
                  { value: "Big Four", label: "Trained — KPMG & PwC" },
                  { value: "3", label: "Countries — PK, UAE, KSA" },
                  { value: "200+", label: "Businesses served" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-navy-700 rounded-xl p-6 text-center">
                    <p className="font-heading text-3xl font-bold text-gold-400 mb-1">{stat.value}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-10">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">Sectors</p>
            <h2 className="section-heading">Industries We Serve</h2>
          </AnimateOnView>
          <AnimateOnView delay={0.1} className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="bg-gray-50 border border-gray-200 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-full hover:border-gold-400 hover:text-navy-800 transition-colors"
              >
                {ind}
              </span>
            ))}
          </AnimateOnView>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 lg:py-[120px] bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-10">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">In Practice</p>
            <h2 className="section-heading">Results We've Delivered</h2>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-gold-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-1">Case Study — Anonymous Client</p>
                  <h3 className="font-heading font-bold text-navy-800 text-xl">{caseStudy.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{caseStudy.context}</p>
              <ul className="space-y-3">
                {caseStudy.results.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gold-400 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Free Offer / Lead Magnet */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnView direction="left">
              <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">Free Offer</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-5">
                Free Preliminary IFRS Compliance Review
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Send us your financial statements or accounting policies. We'll identify your key
                IFRS gaps, flag the highest-risk areas, and give you a clear view of where you
                stand — at no cost, no obligation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "We review your financial statements or accounting policies",
                  "You receive key gaps, risks, and priority recommendations",
                  "Delivered within 5 business days",
                  "No sales pitch — just actionable findings",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gold-400 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary inline-block text-base px-8 py-4">
                Book a Free IFRS Assessment
              </Link>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.12}>
              <div className="bg-navy-700 rounded-2xl p-8">
                <h3 className="font-heading font-semibold text-white mb-2">Also Available</h3>
                <p className="text-gray-400 text-sm mb-6">Choose the level of engagement that works for you.</p>
                <div className="space-y-4">
                  {[
                    { title: "Free 30-Min IFRS Consultation", desc: "Speak with a CA about your specific IFRS challenge — no commitment." },
                    { title: "IFRS Compliance Checklist", desc: "A practical PDF checklist covering the most common IFRS disclosure and policy requirements." },
                    { title: "IFRS 16 Readiness Checklist", desc: "Self-assessment tool to identify whether your lease accounting is compliant." },
                  ].map((offer) => (
                    <div key={offer.title} className="bg-navy-800 rounded-xl p-4">
                      <p className="font-semibold text-white text-sm mb-1">{offer.title}</p>
                      <p className="text-gray-400 text-xs leading-relaxed">{offer.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-6 italic leading-relaxed">
                  Confidential, practical, and business-focused advisory by qualified Chartered Accountants.
                </p>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <AnimateOnView className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading mb-4">Ready to Get IFRS-Compliant?</h2>
          <p className="text-gray-500 text-lg mb-8">
            Talk to an IFRS advisor today. We'll tell you where you stand and what it takes to get
            your reporting to the standard your auditors and investors expect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book a Free IFRS Assessment
            </Link>
            <Link href="/services" className="btn-navy">
              View All Services
            </Link>
          </div>
        </AnimateOnView>
      </section>
    </>
  );
}
