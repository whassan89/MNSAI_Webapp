import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "IFRS Advisory & Reporting Pakistan | MNSAI (SMC-Private) Limited",
  description:
    "IFRS-compliant financial reporting, first-time adoption, and IFRS 9/15/16 implementation by Big Four-trained advisors. MNSAI helps businesses in Pakistan meet international reporting standards.",
  keywords:
    "IFRS advisory Pakistan, IFRS 9 implementation, IFRS 15 revenue recognition Pakistan, IFRS 16 leases, first-time IFRS adoption Pakistan, financial reporting Lahore",
};

const standardsCovered = [
  { code: "IFRS 9", name: "Financial Instruments", desc: "Classification, measurement, and ECL impairment modelling for your financial assets and liabilities." },
  { code: "IFRS 15", name: "Revenue Recognition", desc: "Five-step model implementation for complex revenue arrangements, subscription models, and multi-element contracts." },
  { code: "IFRS 16", name: "Leases", desc: "Full right-of-use asset and lease liability recognition — schedule preparation, transition, and ongoing accounting." },
  { code: "IFRS 3", name: "Business Combinations", desc: "Purchase price allocation, goodwill computation, and acquisition accounting for M&A transactions." },
  { code: "IAS 36", name: "Impairment of Assets", desc: "Impairment reviews, value-in-use calculations, and CGU assessments to protect your asset values." },
  { code: "IAS 19", name: "Employee Benefits", desc: "Actuarial valuations, gratuity provisions, and post-employment benefit accounting under international standards." },
];

const whoFor = [
  "Companies preparing for listing or PE investment",
  "Subsidiaries of multinational groups adopting IFRS locally",
  "Banks, NBFIs, and financial institutions",
  "NGOs and international organizations requiring donor-compliant reporting",
  "SMEs converting from local GAAP to IFRS for the first time",
  "Companies completing audits with Big Four or Top-10 firms",
];

const deliverables = [
  { title: "IFRS Gap Analysis", desc: "Full assessment of your current policies vs. IFRS requirements — with a prioritised remediation roadmap." },
  { title: "First-Time Adoption (IFRS 1)", desc: "Opening IFRS balance sheet, transition date adjustments, and comparative period restatements." },
  { title: "Accounting Policy Manual", desc: "Tailored IFRS-compliant accounting policy documentation specific to your business and industry." },
  { title: "Management Disclosure Notes", desc: "Full IFRS disclosure notes drafted to accompany your financial statements — ready for audit." },
  { title: "ECL & Valuation Models", desc: "Excel-based models for IFRS 9 expected credit losses, IFRS 16 schedules, and actuarial computations." },
  { title: "Auditor Liaison Support", desc: "We work directly with your external auditors — responding to queries, justifying positions, and resolving technical disagreements." },
];

export default function IFRSAdvisoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-800 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
            alt="IFRS financial reporting and standards"
            fill
            className="object-cover object-center opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">
              IFRS Advisory & Reporting
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Standards-Compliant.{" "}
              <span className="text-gold-400">Investor-Ready.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Navigate the complexity of IFRS with Big Four-trained advisors who have implemented
              international standards across banking, manufacturing, technology, and NGO sectors
              throughout Pakistan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Get a Free IFRS Review</Link>
              <Link href="/services" className="btn-outline">View All Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Covered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">Coverage</p>
            <h2 className="section-heading">IFRS Standards We Implement</h2>
            <p className="section-subheading">
              Deep technical expertise across the most complex and frequently misapplied standards.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {standardsCovered.map((s) => (
              <div key={s.code} className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-navy-800 text-gold-400 text-xs font-bold px-3 py-1 rounded-full">{s.code}</span>
                  <span className="font-heading font-semibold text-navy-800 text-sm">{s.name}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">Who We Serve</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Who Is This For?
              </h2>
              <ul className="space-y-3">
                {whoFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gold-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-700 rounded-2xl p-8">
              <h3 className="font-heading text-xl font-semibold text-gold-400 mb-6">Our IFRS Background</h3>
              <div className="space-y-4">
                {[
                  { firm: "KPMG", detail: "Financial instruments and banking IFRS" },
                  { firm: "PwC", detail: "Listed company and MNC reporting" },
                  { firm: "Fatima Group", detail: "Large conglomerate IFRS conversion" },
                ].map((item) => (
                  <div key={item.firm} className="flex items-center gap-4 bg-navy-800 rounded-lg px-4 py-3">
                    <span className="font-heading font-bold text-white text-lg w-20 flex-shrink-0">{item.firm}</span>
                    <span className="text-gray-400 text-xs">{item.detail}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-6 leading-relaxed">
                Our advisors have carried IFRS implementation projects at Big Four firms and as embedded advisors
                inside Pakistan's largest businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">What You Get</p>
            <h2 className="section-heading">Deliverables</h2>
            <p className="section-subheading">
              Concrete outputs — not just advice. Every engagement ends with something your auditors and investors can use.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((d) => (
              <div key={d.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gold-400 transition-colors">
                <h3 className="font-heading font-semibold text-navy-800 mb-3">{d.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Where Your IFRS Gaps Are?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get a free IFRS health check. We review your current financial statements and tell you exactly
            where the compliance risks are — at no cost.
          </p>
          <Link href="/contact" className="btn-primary inline-block text-base px-8 py-4">
            Get a Free IFRS Review
          </Link>
        </div>
      </section>
    </>
  );
}
