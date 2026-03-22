import Image from "next/image";
import Link from "next/link";

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
    title: "Accounting & Bookkeeping",
    tagline: "Accurate Records. Clear Insights.",
    description:
      "Accurate, timely financial records and reporting — from day-to-day bookkeeping to full-scope financial statement preparation under IFRS and local standards.",
    detail:
      "We manage your accounting function so you can focus on running your business. Our team prepares compliant financial statements and delivers the clarity you need to make informed decisions.",
    points: [
      "General Ledger Maintenance",
      "Financial Statement Preparation (IFRS/IAS)",
      "Monthly/Quarterly Management Accounts",
      "Payroll Processing",
      "Accounts Payable & Receivable",
      "Bank Reconciliations",
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80",
    imageAlt: "Accounting and bookkeeping",
    reverse: true,
  },
  {
    title: "Taxation & Corporate Advisory",
    tagline: "Compliant. Optimized. Strategic.",
    description:
      "Comprehensive income tax, sales tax, and withholding tax services including return filing, FBR representation, and proactive tax planning to minimize liability.",
    detail:
      "Our tax team combines deep technical knowledge with practical insight to navigate Pakistan's complex tax landscape — helping you stay compliant while maximizing tax efficiency.",
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
    imageAlt: "Tax advisory and compliance",
  },
  {
    title: "Financial Services",
    tagline: "Plans. Models. Decisions.",
    description:
      "Strategic financial planning, business plan preparation, financial modelling, and feasibility studies to help you start, grow, and scale your business.",
    detail:
      "From startup business plans to sophisticated financial models and valuation exercises, our financial advisory team equips you with the tools investors and decision-makers trust.",
    points: [
      "Business Plans for Starters",
      "Financial Modelling",
      "Due Diligence",
      "Pre-Feasibility for New Projects",
      "Valuation & Analysis",
      "Pitch Decks",
      "Budgets and Forecasts",
    ],
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=700&q=80",
    imageAlt: "Financial planning and analysis",
    reverse: true,
  },
  {
    title: "Business Advisory",
    tagline: "Strategy. Structure. Growth.",
    description:
      "Strategic business planning, restructuring, merger & acquisition advisory, and management consulting to help your business grow sustainably.",
    detail:
      "Our advisors work alongside leadership teams to design growth strategies, evaluate opportunities, and build robust business frameworks that stand the test of market change.",
    points: [
      "Strategic Business Planning",
      "Business Restructuring",
      "Merger & Acquisition Advisory",
      "Pre-Feasibility & Feasibility Studies",
      "Corporate Governance",
      "Management Consulting",
      "Startup & Investor Advisory",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80",
    imageAlt: "Business advisory meeting",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive financial, audit, tax, and advisory solutions — designed to support your
            business at every stage of growth.
          </p>
        </div>
      </section>

      {/* Services */}
      <div className="bg-white">
        {services.map((service, index) => (
          <section
            key={service.title}
            className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${service.reverse ? "md:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden shadow-xl h-72 md:h-96 ${service.reverse ? "md:order-2" : ""}`}>
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

                {/* Content */}
                <div className={service.reverse ? "md:order-1" : ""}>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-800 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-3">{service.description}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.detail}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Need a Specific Service?</h2>
          <p className="text-gray-300 mb-8">Talk to our team and we&apos;ll design a solution tailored to your business needs.</p>
          <Link href="/contact" className="btn-primary inline-block">Book a Consultation</Link>
        </div>
      </section>
    </>
  );
}
