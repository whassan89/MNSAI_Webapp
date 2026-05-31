import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView";

export const metadata: Metadata = {
  title: "Our Services | MNSAI (SMC-Private) Limited",
  description:
    "Comprehensive audit, accounting, taxation, financial advisory, business advisory, and ERP implementation services by MNSAI — Lahore's trusted CA firm.",
};

const services = [
  {
    title: "Audit & Assurance",
    tagline: "Independent. Rigorous. Reliable.",
    description:
      "Statutory audits, internal audits, and assurance engagements conducted with independence and rigor to give stakeholders confidence in your financial statements.",
    detail:
      "Our audit professionals bring Big Four experience and a deep understanding of regulatory requirements to deliver audits that go beyond compliance — providing actionable insights that improve your business.",
    points: [
      "Statutory & External Audits",
      "Internal Audit & Controls Review",
      "Risk-Based Audit Approach",
      "Regulatory Compliance Audits",
      "Due Diligence Reviews",
      "Special Purpose Audits",
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80",
    imageAlt: "Audit documents and financial review",
  },
  {
    title: "Virtual CFO & Managed Finance",
    tagline: "Your Finance Function, Elevated.",
    description:
      "Acting as your outsourced CFO, we take full ownership of your finance function — delivering CFO-level insight, IFRS-compliant reporting, and the financial leadership your business needs to scale.",
    detail:
      "Businesses at every stage benefit from CFO-level thinking without a full-time hire. Our Virtual CFO service replaces a generic bookkeeper with a strategic finance partner who manages your numbers and helps you act on them.",
    points: [
      "Virtual CFO Retainer",
      "Management Accounts & Reporting",
      "KPI Dashboards & Performance Analytics",
      "Payroll & Payables Management",
      "Financial Controls & Procedures",
      "Cash Flow Planning & Management",
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80",
    imageAlt: "Virtual CFO and managed finance",
    reverse: true,
  },
  {
    title: "Tax & Business Consulting",
    tagline: "Compliant. Optimized. Strategic.",
    description:
      "Comprehensive income tax, sales tax, and withholding tax compliance — combined with proactive tax planning and strategic business consulting to minimize liability and maximize efficiency.",
    detail:
      "Our tax consultants combine deep technical knowledge with practical insight to navigate Pakistan's complex tax landscape. We go beyond filing returns — we help you structure your business to pay less tax, legally.",
    points: [
      "Suitable Legal Structure Advisory",
      "NTN of Individual / Partnership / Company",
      "Income & Sales Tax Filings",
      "Processing of Exemption Certificates",
      "Refund Processing & Execution",
      "WEBOC Processing for Import / Export",
      "Deregistration & Winding Up of Business",
      "Provincial Laws (PRA / SRB / KPRA / BRA)",
      "Agriculture Income Tax (Punjab)",
    ],
    image: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?w=700&q=80",
    imageAlt: "Tax and business consulting",
  },
  {
    title: "Financial Modeling & Valuation",
    tagline: "Models That Drive Decisions.",
    description:
      "Investor-grade financial models, DCF valuations, and forecasts built for founders, lenders, and boards — from three-statement models to complex M&A and pre-feasibility studies.",
    detail:
      "Our financial modeling practice combines deep accounting knowledge with analytical rigor. Whether you need a model for fundraising, a bank, or strategic planning, we deliver with the precision that investors and decision-makers demand.",
    points: [
      "Three-Statement Financial Models",
      "DCF & Comparable Company Valuation",
      "Pre-Feasibility & Feasibility Studies",
      "Investor-Ready Business Plans",
      "Budgets, Forecasts & Scenario Analysis",
      "Pitch Decks & Capital Raise Support",
    ],
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=700&q=80",
    imageAlt: "Financial modeling and valuation",
    reverse: true,
  },
  {
    title: "IFRS Advisory & Reporting",
    tagline: "Standards-Compliant. Investor-Ready.",
    description:
      "Expert guidance on the adoption, application, and interpretation of IFRS and IAS standards — ensuring your financial statements meet international benchmarks and satisfy auditors, investors, and regulators.",
    detail:
      "From first-time IFRS adoption to complex transactions requiring specialist accounting judgment, our team provides the technical expertise that businesses need to report with confidence in Pakistan and internationally.",
    points: [
      "First-Time IFRS Adoption",
      "IFRS 9, 15 & 16 Implementation",
      "IAS Compliance & Gap Reviews",
      "Technical Accounting Memos",
      "Financial Statement Preparation (IFRS/IAS)",
      "Restatement & Prior Period Corrections",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80",
    imageAlt: "IFRS advisory and financial reporting",
  },
  {
    title: "ERP Implementation",
    tagline: "Streamlined. Integrated. Scalable.",
    description:
      "End-to-end ERP consulting, implementation, and training — helping businesses streamline operations with the right technology stack tailored to their needs.",
    detail:
      "We assess your current processes, recommend the right ERP solution, and manage the complete implementation lifecycle — ensuring your team is fully equipped to operate the new system.",
    points: [
      "ERP Needs Assessment & Selection",
      "System Configuration & Customization",
      "Data Migration & Integration",
      "Staff Training & Change Management",
      "Post-Implementation Support",
      "Process Automation & Optimization",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
    imageAlt: "ERP software dashboard",
    reverse: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-800 py-20">
        <AnimateOnView className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive financial, audit, tax, and advisory solutions — designed to support your
            business at every stage of growth.
          </p>
        </AnimateOnView>
      </section>

      {/* Services */}
      <div className="bg-white">
        {services.map((service, index) => (
          <section
            key={service.title}
            className={`py-20 lg:py-[120px] ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <AnimateOnView direction={service.reverse ? "right" : "left"} className={service.reverse ? "md:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-72 md:h-96">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gold-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {service.tagline}
                    </span>
                  </div>
                </div>
                </AnimateOnView>

                {/* Content */}
                <AnimateOnView direction={service.reverse ? "left" : "right"} delay={0.12} className={service.reverse ? "md:order-1" : ""}>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-800 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-3">{service.description}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.detail}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </AnimateOnView>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 bg-navy-800">
        <AnimateOnView className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Need a Specific Service?</h2>
          <p className="text-gray-300 mb-8">Talk to our team and we&apos;ll design a solution tailored to your business needs.</p>
          <Link href="/contact" className="btn-primary inline-block">Book a Consultation</Link>
        </AnimateOnView>
      </section>
    </>
  );
}
