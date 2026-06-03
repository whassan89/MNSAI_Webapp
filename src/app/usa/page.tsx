import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView";

export const metadata: Metadata = {
  title: "Financial Modeling & Virtual CFO for US Businesses | MNSAI USA Wing",
  description:
    "Remote CA advisory for US businesses and Pakistani diaspora entrepreneurs — financial modeling for US investors, Virtual CFO services, IFRS advisory, and Pakistan market entry support.",
  keywords:
    "financial modeling US investors, Virtual CFO USA, IFRS advisory USA, Pakistan market entry, Pakistani diaspora business USA, remote CFO New York, financial model for US VC",
};

const challenges = [
  {
    title: "Financial Models for US Investors",
    desc: "US VCs and angels have very specific expectations — unit economics, cohort analysis, SaaS metrics, and defensible assumptions. We build models that hold up under investor scrutiny.",
  },
  {
    title: "IFRS vs US GAAP",
    desc: "Companies raising internationally or expanding to global markets often need IFRS-compliant reporting alongside US GAAP. We bridge the gap and manage the conversion.",
  },
  {
    title: "Pakistan Market Entry",
    desc: "US companies looking to establish operations, hire talent, or source from Pakistan need a local advisory partner who understands the regulatory and financial landscape.",
  },
  {
    title: "Diaspora Business Advisory",
    desc: "Pakistani-American entrepreneurs often run businesses with operations on both sides. We understand the complexity of cross-border business between the US and Pakistan.",
  },
  {
    title: "US Investors Evaluating Pakistan",
    desc: "US family offices, PE firms, and angels increasingly look at Pakistan. We provide financial due diligence, market analysis, and local financial advisory to support investment decisions.",
  },
  {
    title: "CFO Function Without US Costs",
    desc: "A full-time CFO in New York costs $200,000–$300,000/year. Our Virtual CFO retainer delivers the same strategic financial oversight at a small fraction of that — fully remote.",
  },
];

const services = [
  {
    title: "Financial Modeling for US Investors",
    tag: "Fundraising",
    desc: "Investor-grade financial models built to US VC and angel standards — 3-statement models, DCF, SaaS metrics, unit economics, cap table, and use of funds. Clean Excel, fully unlocked.",
    href: "/financial-modeling",
  },
  {
    title: "Virtual CFO",
    tag: "Retainer",
    desc: "Monthly CFO retainer covering strategic financial planning, investor reporting, cash flow management, and board-level financial guidance — remote and fully async-capable.",
    href: "/virtual-cfo",
  },
  {
    title: "IFRS & US GAAP Advisory",
    tag: "Compliance",
    desc: "For companies operating across markets — IFRS adoption, US GAAP to IFRS conversion, and dual-standard financial reporting for international stakeholders.",
    href: "/ifrs-advisory",
  },
  {
    title: "Pakistan Market Entry",
    tag: "Advisory",
    desc: "Financial and regulatory advisory for US companies establishing Pakistan operations — entity structure, tax registration, local compliance, and financial setup.",
    href: "/contact",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "30-minute video call to understand your business, investor context, and what you need.",
  },
  {
    step: "02",
    title: "Proposal",
    desc: "Clear scope and fixed-fee proposal within 24 hours. Straightforward pricing, no ambiguity.",
  },
  {
    step: "03",
    title: "Onboarding",
    desc: "Shared cloud workspace, document checklist, and a dedicated contact from day one.",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Async-friendly workflow with regular updates — built for the US–Pakistan time difference.",
  },
];

const whoWeWorkWith = [
  "US-based Pakistani entrepreneurs and founders",
  "Pakistan startups raising from US VCs or angels",
  "US companies entering the Pakistan market",
  "US investors evaluating Pakistan opportunities",
  "Pakistani-American family offices and businesses",
  "US funds with Pakistan portfolio companies",
];

const whyMnsai = [
  {
    title: "We build to US investor standards",
    detail:
      "We've worked with Pakistan founders raising from US-based VCs and angels. We know what US investors interrogate — unit economics, cohort analysis, and defensible assumptions — and we build for it.",
  },
  {
    title: "Pakistan expertise, international standards",
    detail:
      "For US companies entering Pakistan or US investors evaluating Pakistani businesses, we are the local expert — combining Pakistan regulatory knowledge with internationally recognised CA qualification.",
  },
  {
    title: "Async-friendly workflow",
    detail:
      "The US–Pakistan time difference (9–10 hours) means we work while you sleep. Deliverables are ready when you start your day. We're built for async collaboration.",
  },
  {
    title: "Cost advantage is significant",
    detail:
      "US advisory rates are among the highest in the world. Our Pakistan-based team delivers comparable quality at 50–70% lower cost — making CFO-level oversight accessible to early-stage companies.",
  },
];

export default function USAPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-800 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1920&q=80"
            alt="New York City skyline"
            fill
            className="object-cover object-center opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">
              USA Wing — International Affairs
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              CA Advisory for US Businesses.{" "}
              <span className="text-gold-400">Built for US Investors.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Financial modeling to US investor standards, Virtual CFO services, IFRS advisory,
              and Pakistan market entry support — delivered by a specialist CA team in Lahore
              for businesses and investors across the United States.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book a Free Call</Link>
              <Link href="/international" className="btn-outline">All Regions</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">What US Clients Need</p>
            <h2 className="section-heading">Challenges We Solve</h2>
            <p className="section-subheading">
              US businesses, founders, and investors have distinct financial advisory needs — especially when Pakistan is part of the picture.
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Services for US Clients</h2>
            <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
              Specialist advisory built for US context — investor-grade models, cross-border compliance, and Pakistan market knowledge.
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
                Why US Clients Choose Us
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
                <h3 className="font-heading text-xl font-semibold text-gold-400 mb-6">Who We Work With in the US</h3>
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
                    Based in Lahore, Pakistan — serving US clients fully remotely. Async-friendly workflow designed for the US–Pakistan time difference.
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
            <h2 className="section-heading">How We Work with US Clients</h2>
            <p className="section-subheading">
              An async-first process built for the US–Pakistan time difference — work progresses while you sleep.
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
              { label: "US Investor Standards", detail: "Financial models built to the standards US VCs and angels actually use — unit economics, cohort analysis, and defensible assumptions." },
              { label: "Fixed-Fee Pricing", detail: "Every engagement is scoped and priced upfront. No billable-hour surprises in a currency you have to convert." },
              { label: "Async-First Workflow", detail: "We work while you sleep. Deliverables are ready when your US workday starts — the time difference becomes an advantage." },
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
            Based in the US? Let's Connect.
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Book a free call. Tell us about your business, your investors, or your Pakistan
            plans — we'll tell you exactly how we can help.
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
