import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView";

export const metadata: Metadata = {
  title: "Virtual CFO & IFRS Advisory for UAE Businesses | MNSAI",
  description:
    "Remote CA advisory for UAE businesses — Virtual CFO, IFRS compliance, UAE Corporate Tax (9%), and Financial Modeling. Pakistan-based expertise at a fraction of local UAE rates.",
  keywords:
    "Virtual CFO UAE, IFRS advisory UAE, UAE corporate tax consultant, financial modeling UAE, CA firm for UAE businesses, remote CFO Dubai, DIFC financial reporting, DMCC accounting",
};

const challenges = [
  {
    title: "UAE Corporate Tax (9%)",
    desc: "Corporate Tax came into effect June 2023. Many SMEs and freezone entities are still navigating registration, qualifying income exemptions, and first-year filings.",
  },
  {
    title: "IFRS Compliance",
    desc: "UAE mainland and DIFC/ADGM entities must prepare IFRS-compliant financial statements. IFRS 16, IFRS 9, and IFRS 15 are frequently misapplied — and costly to fix late.",
  },
  {
    title: "VAT & FTA Reporting",
    desc: "VAT compliance, FTA audit readiness, and input tax recovery require structured record-keeping. A clean bookkeeping foundation is non-negotiable.",
  },
  {
    title: "Fundraising from GCC Investors",
    desc: "GCC family offices and regional VCs expect IFRS-compliant financials and credible, well-structured financial models before committing capital.",
  },
  {
    title: "CFO-Level Expertise",
    desc: "A full-time CFO in Dubai costs AED 40,000–70,000/month. A Virtual CFO retainer gives you the same strategic oversight at a fraction of that cost.",
  },
  {
    title: "Cross-Border Operations",
    desc: "Businesses operating across UAE and Pakistan need advisory that understands both regulatory environments — tax treaties, transfer pricing, and dual reporting.",
  },
];

const services = [
  {
    title: "Virtual CFO for UAE",
    tag: "Retainer",
    desc: "Monthly CFO retainer — financial reporting, board presentations, cash flow management, investor relations, and strategic financial planning. Remote, responsive, cost-effective.",
    href: "/virtual-cfo",
  },
  {
    title: "IFRS Advisory",
    tag: "Compliance",
    desc: "IFRS 16 lease accounting, IFRS 15 revenue recognition, IFRS 9 financial instruments, and first-time IFRS adoption. We handle the complexity so your team doesn't have to.",
    href: "/ifrs-advisory",
  },
  {
    title: "UAE Corporate Tax",
    tag: "Tax",
    desc: "CT registration, qualifying income assessment, freezone entity analysis, and filing support. Navigate the 9% Corporate Tax regime with expert guidance.",
    href: "/contact",
  },
  {
    title: "Financial Modeling",
    tag: "Fundraising",
    desc: "Fundraising models, business valuations, and investor decks built to GCC investor standards — with scenario analysis, sensitivity tables, and clean Excel workbooks.",
    href: "/financial-modeling",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "30-minute video call to understand your business, UAE entity structure, and what you need from us.",
  },
  {
    step: "02",
    title: "Proposal",
    desc: "A clear scope of work and fixed-fee proposal within 24 hours — no retainers you don't need.",
  },
  {
    step: "03",
    title: "Onboarding",
    desc: "Shared cloud workspace, document checklist, and a dedicated point of contact from day one.",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Regular calls, async updates, and deliverables on schedule — CFO-level output without the Dubai overhead.",
  },
];

const whoWeWorkWith = [
  "UAE mainland SMEs navigating Corporate Tax",
  "DIFC & ADGM registered companies",
  "Freezone businesses (DMCC, JAFZA, RAKEZ)",
  "Pakistani diaspora entrepreneurs in the UAE",
  "UAE startups raising from GCC investors",
  "International businesses with UAE + Pakistan operations",
];

const whyMnsai = [
  {
    title: "Pakistan-based cost advantage",
    detail:
      "Our CA-qualified team delivers the same rigour as a UAE-based advisory firm at 40–60% lower cost. You get Big Four-trained expertise without Big Four fees.",
  },
  {
    title: "Deep IFRS expertise",
    detail:
      "Pakistan follows full IFRS — our team has applied these standards across hundreds of engagements. IFRS is not a compliance checkbox for us; it is what we do every day.",
  },
  {
    title: "UAE regulatory familiarity",
    detail:
      "We have worked with UAE-registered entities on Corporate Tax, FTA compliance, DIFC reporting, and investor-ready financials. We understand the UAE regulatory landscape.",
  },
  {
    title: "Cross-border expertise",
    detail:
      "Unique in the market: we understand both UAE and Pakistan tax and accounting frameworks — essential for businesses that operate across both jurisdictions.",
  },
];

export default function UAEPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-800 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
            alt="Dubai skyline at night"
            fill
            className="object-cover object-center opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Serving UAE Businesses
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              CA Advisory for the UAE.{" "}
              <span className="text-gold-400">Delivered Remotely.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Virtual CFO services, IFRS compliance, UAE Corporate Tax advisory, and financial
              modeling — delivered by a specialist CA team in Lahore to businesses across Dubai,
              Abu Dhabi, and the wider UAE.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book a Free Call</Link>
              <Link href="/services" className="btn-outline">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">What UAE Businesses Face</p>
            <h2 className="section-heading">Challenges We Solve</h2>
            <p className="section-subheading">
              The UAE's regulatory landscape has changed significantly in recent years. We help businesses stay compliant and financially sharp.
            </p>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c, i) => (
              <AnimateOnView key={c.title} delay={i * 0.07}>
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <h3 className="font-heading font-semibold text-navy-800 mb-3">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-[120px] bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Services for UAE Clients</h2>
            <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
              Specialist advisory across the areas UAE businesses need most — all delivered remotely with no compromise on quality.
            </p>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <AnimateOnView key={s.title} delay={i * 0.08}>
                <div className="bg-navy-700 rounded-xl p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-heading font-semibold text-white text-lg">{s.title}</h3>
                    <span className="bg-navy-900 text-gold-400 text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ml-3">
                      {s.tag}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">{s.desc}</p>
                  <Link
                    href={s.href}
                    className="mt-5 text-gold-400 text-sm font-semibold hover:text-gold-300 transition-colors inline-flex items-center gap-1"
                  >
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Why MNSAI */}
      <section className="py-20 lg:py-[120px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <AnimateOnView direction="left">
              <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-4">Why MNSAI</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-6">
                Why UAE Businesses Choose Us
              </h2>
              <div className="space-y-5">
                {whyMnsai.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-navy-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy-800 text-sm mb-1">{item.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.12}>
              <div className="bg-navy-800 rounded-2xl p-8">
                <h3 className="font-heading text-xl font-semibold text-gold-400 mb-6">Who We Work With in the UAE</h3>
                <div className="space-y-3">
                  {whoWeWorkWith.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-gold-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-navy-700">
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Based in Lahore, Pakistan — serving UAE clients fully remotely via video call, email, and shared cloud platforms.
                  </p>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">Remote Engagement</p>
            <h2 className="section-heading">How We Work with UAE Clients</h2>
            <p className="section-subheading">
              A structured, remote-first process — designed so geography is never a friction point.
            </p>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Trust Bar */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { label: "IFRS-Compliant", detail: "All financial statements and reporting prepared to full IFRS standards — as required by UAE mainland and free zone regulators." },
              { label: "Fixed-Fee Engagements", detail: "No surprise invoices. Every engagement is scoped and priced upfront so you know exactly what you're getting." },
              { label: "Remote-First", detail: "All work delivered remotely via video, email, and cloud platforms. Time zone overlap with UAE is straightforward." },
            ].map((q, i) => (
              <AnimateOnView key={q.label} delay={i * 0.1}>
                <div className="py-6 px-4 border border-gray-100 rounded-xl bg-white h-full">
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
            Based in the UAE? Let's Talk.
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Book a free 30-minute call. Tell us about your business, your UAE entity structure, and
            what you need — we'll tell you exactly how we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-block text-base px-8 py-4">
              Book a Free Call
            </Link>
            <a
              href="https://wa.me/923324452894"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-block text-base px-8 py-4"
            >
              WhatsApp Us
            </a>
          </div>
        </AnimateOnView>
      </section>
    </>
  );
}
