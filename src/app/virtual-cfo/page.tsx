import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView";

export const metadata: Metadata = {
  title: "Virtual CFO Services | Strategic Finance for Growing Businesses | MNSAI",
  description:
    "Chartered Accountants providing Virtual CFO, financial planning, budgeting, cash flow management, and strategic advisory for startups, SMEs, and growing businesses in Pakistan and UAE.",
  keywords:
    "virtual CFO Pakistan, outsourced CFO Pakistan, cash flow management Pakistan, financial planning SME Pakistan, management reporting Pakistan, CFO services UAE",
};

const painPoints = [
  {
    title: "Revenue Growing But Cash Always Tight",
    desc: "Sales are up but the bank account never reflects it. Poor cash flow visibility is the number one business killer.",
  },
  {
    title: "No Financial Visibility",
    desc: "You don't have a clear, real-time picture of your financial position — making every major decision a guessing game.",
  },
  {
    title: "No Budgeting or Forecasting Process",
    desc: "Decisions are made reactively. There's no annual budget, no cash flow forecast, and no financial roadmap.",
  },
  {
    title: "Weak Management Reporting",
    desc: "Your monthly accounts arrive weeks late, lack detail, and don't tell you what's actually driving performance.",
  },
  {
    title: "Difficulty Making Financial Decisions",
    desc: "Hiring, expansion, new product lines — without reliable financial data, every big decision carries unnecessary risk.",
  },
  {
    title: "Uncontrolled Costs & Expenses",
    desc: "Costs creep up without visibility. By the time you notice, margins have already been squeezed.",
  },
  {
    title: "Delayed Receivables & Cash Flow Pressure",
    desc: "Customers pay late, your payables pile up, and working capital gets stuck in a cycle you can't break out of.",
  },
  {
    title: "No CFO-Level Financial Guidance",
    desc: "Your accountant files returns. But no one is giving you strategic financial advice, challenging your assumptions, or planning ahead.",
  },
  {
    title: "Investor or Bank Reporting Challenges",
    desc: "Lenders and investors want structured financials, forecasts, and KPIs. Producing these without a finance function is exhausting.",
  },
];

const services = [
  {
    title: "Financial Reporting & Dashboards",
    icon: "📊",
    points: [
      "Monthly management accounts delivered on time",
      "Custom KPI dashboards tailored to your business",
      "Business performance analysis with commentary",
      "Board-ready reporting packs",
    ],
  },
  {
    title: "Budgeting & Forecasting",
    icon: "📋",
    points: [
      "Annual budget preparation and review",
      "Rolling cash flow forecasts (13-week and annual)",
      "Budget vs. actual variance analysis",
      "Scenario and sensitivity modelling",
    ],
  },
  {
    title: "Cash Flow Management",
    icon: "💧",
    points: [
      "Receivables tracking and collection support",
      "Expense optimisation and cost review",
      "Working capital analysis and improvement",
      "Cash conversion cycle management",
    ],
  },
  {
    title: "Business Performance Analysis",
    icon: "📈",
    points: [
      "Profitability analysis by product, channel, or department",
      "Margin analysis and pricing review",
      "Cost centre and overhead allocation",
      "Actionable recommendations, not just reports",
    ],
  },
  {
    title: "Investor & Bank Reporting",
    icon: "🏦",
    points: [
      "Investor update packs and board presentations",
      "Financial forecasts for fundraising and lending",
      "Covenant compliance monitoring",
      "Data room financial preparation",
    ],
  },
  {
    title: "Internal Controls & Finance Processes",
    icon: "⚙",
    points: [
      "Finance SOPs and approval workflows",
      "Reporting system design and implementation",
      "Finance team oversight and mentoring",
      "Month-end close process improvement",
    ],
  },
  {
    title: "Strategic Advisory",
    icon: "🎯",
    points: [
      "Growth planning and expansion feasibility",
      "New market and product financial analysis",
      "Make vs. buy and outsourcing decisions",
      "Strategic financial decision-making support",
    ],
  },
];

const whyMNSAI = [
  "Chartered Accountants with practical, hands-on business experience — not just compliance",
  "Experience across Pakistan, UAE, and Saudi Arabia",
  "Big Four-trained professionals — KPMG and PwC background",
  "CFO-level insights and leadership without the full-time hiring cost",
  "Business-focused and practical — we speak your language, not just accountant-speak",
  "Proven track record with startups, SMEs, and established businesses",
  "Strong financial modelling and reporting background to support strategic decisions",
];

const whoWeServe = [
  "Startups",
  "SMEs",
  "E-commerce Businesses",
  "Software Houses",
  "Manufacturing Companies",
  "Trading Businesses",
  "Solar & Energy Companies",
  "Family-Owned Businesses",
];

const outcomes = [
  { title: "Better Cash Flow Visibility", desc: "Know exactly where your cash is, where it's going, and when you'll run tight — before it happens." },
  { title: "Improved Profitability", desc: "Understand which parts of your business make money and which ones erode it." },
  { title: "Smarter Business Decisions", desc: "Every major decision backed by reliable numbers, forecasts, and financial analysis." },
  { title: "Stronger Financial Controls", desc: "SOPs, approval workflows, and reporting systems that prevent leakage and reduce risk." },
  { title: "Better Investor Confidence", desc: "Structured financials and investor-ready reporting that builds credibility with lenders and backers." },
  { title: "Improved Budgeting Discipline", desc: "An annual budget you actually track against — with monthly variance analysis and course corrections." },
  { title: "Faster Business Growth", desc: "Financial clarity frees you to focus on the business. We handle the numbers so you can handle the growth." },
  { title: "Reduced Financial Risk", desc: "Early identification of cash flow risks, cost overruns, and compliance gaps before they become problems." },
];

const caseStudy = {
  title: "Improved Cash Flow Visibility for a Growing SME",
  context:
    "A Pakistan-based trading company with PKR 250M in annual revenue had no structured reporting, no cash flow forecasts, and a receivable cycle stretching beyond 90 days. The owner was making decisions based on gut feel, with no financial visibility.",
  results: [
    "Established a monthly management reporting system delivered within 5 days of month-end",
    "Reduced the receivable collection cycle from 90+ days to under 45 days within two quarters",
    "Introduced an annual budget with monthly variance tracking — overspend reduced by 18%",
    "Owner gained clear financial visibility to make a PKR 30M expansion decision with confidence",
  ],
};

export default function VirtualCFOPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-800 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&q=80"
            alt="Strategic financial leadership and CFO services"
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
              Virtual CFO Services
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Strategic Financial Leadership{" "}
              <span className="text-gold-400">Without Hiring a Full-Time CFO</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Chartered Accountants providing Virtual CFO, financial planning, budgeting,
              cash flow management, and strategic advisory for startups, SMEs, and growing
              businesses in Pakistan and UAE.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book a Free CFO Consultation</Link>
              <Link
                href="/contact"
                className="btn-white"
              >
                Get Free Financial Health Review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">Does This Sound Familiar?</p>
            <h2 className="section-heading">Is Your Business Facing These Financial Challenges?</h2>
            <p className="section-subheading">
              These are the problems most growing businesses face before they bring in CFO-level support.
            </p>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {painPoints.map((p, i) => (
              <AnimateOnView key={p.title} delay={i * 0.05}>
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

      {/* What Is a Virtual CFO */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnView>
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">The Solution</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              What Is a Virtual CFO?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A Virtual CFO provides strategic financial leadership, reporting, planning, and business
              advisory — without the cost of hiring a full-time executive. You get a senior finance
              professional embedded in your business on a flexible retainer, managing your numbers and
              helping you act on them.
            </p>
          </AnimateOnView>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {[
              { label: "Not a Bookkeeper", detail: "A Virtual CFO interprets your numbers and drives decisions — not just records transactions." },
              { label: "Not a Part-Time Accountant", detail: "You get a dedicated senior advisor with full ownership of your finance function." },
              { label: "Not a Consultant", detail: "We're embedded in your business — your numbers, your team, your outcomes." },
            ].map((item, i) => (
              <AnimateOnView key={item.label} delay={i * 0.1}>
                <div className="bg-navy-700 rounded-xl p-5 text-left h-full">
                  <p className="font-heading font-semibold text-gold-400 mb-2">{item.label}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
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
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">What We Deliver</p>
            <h2 className="section-heading">Our Virtual CFO Services</h2>
            <p className="section-subheading">
              A comprehensive finance function — from monthly reporting to strategic growth decisions.
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
                  { value: "12+", label: "Years of CFO-level experience" },
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

      {/* Who We Serve */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-10">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">Our Clients</p>
            <h2 className="section-heading">Who We Serve</h2>
            <p className="section-subheading">
              From early-stage startups to established family businesses — if you need financial clarity and leadership, we can help.
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.1} className="flex flex-wrap justify-center gap-3">
            {whoWeServe.map((type) => (
              <span
                key={type}
                className="bg-gray-50 border border-gray-200 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-full hover:border-gold-400 hover:text-navy-800 transition-colors"
              >
                {type}
              </span>
            ))}
          </AnimateOnView>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-20 lg:py-[120px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">The Impact</p>
            <h2 className="section-heading">How Our Virtual CFO Services Help Businesses</h2>
            <p className="section-subheading">
              Not features — outcomes. This is what changes in your business when you have the right financial leadership.
            </p>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {outcomes.map((o, i) => (
              <AnimateOnView key={o.title} delay={i * 0.06}>
                <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gold-400 hover:shadow-sm transition-all h-full">
                  <div className="w-8 h-8 bg-gold-400 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-4 h-4 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-navy-800 text-sm mb-2">{o.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{o.desc}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-10">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">In Practice</p>
            <h2 className="section-heading">Results We've Delivered</h2>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10">
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

      {/* Free Offer */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnView direction="left">
              <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">Free Offer</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-5">
                Free Financial Health Assessment
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Share your current financial situation with us. We'll review your cash flow, reporting,
                budgeting, profitability, and finance structure — and give you a clear picture of where
                your gaps are and where to focus first.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "We review your cash flow, reporting, and budgeting process",
                  "You receive key financial gaps and risk areas",
                  "Specific improvement opportunities identified for your business",
                  "No obligation — just clarity on where you stand",
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
                Book a Free CFO Consultation
              </Link>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.12}>
              <div className="bg-navy-700 rounded-2xl p-8">
                <h3 className="font-heading font-semibold text-white mb-2">Also Available</h3>
                <p className="text-gray-400 text-sm mb-6">Choose the engagement that fits where you are right now.</p>
                <div className="space-y-4">
                  {[
                    { title: "Free 30-Min CFO Consultation", desc: "Talk through your specific financial challenge with a CA — no commitment, no pitch." },
                    { title: "Free Cash Flow Review", desc: "We review your receivables, payables, and working capital cycle and identify quick wins." },
                    { title: "Free KPI Dashboard Sample", desc: "See what a well-structured management dashboard looks like for a business like yours." },
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
          <h2 className="section-heading mb-4">
            Ready to Improve Financial Visibility &amp; Business Performance?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Speak with MNSAI to explore how Virtual CFO services can support your business growth,
            improve cash flow management, and give you the financial clarity to make smarter decisions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book Free CFO Consultation
            </Link>
            <Link
              href="/services"
              className="btn-navy"
            >
              View All Services
            </Link>
          </div>
        </AnimateOnView>
      </section>
    </>
  );
}
