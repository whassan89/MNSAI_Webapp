import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView";

export const metadata: Metadata = {
  title: "Virtual CFO & IFRS Advisory for UK Businesses | MNSAI UK Venture",
  description:
    "Remote CA advisory for UK businesses and Pakistani diaspora entrepreneurs — Virtual CFO, IFRS financial statements, Companies House compliance, and financial modeling. Pakistan-based expertise at UK-competitive rates.",
  keywords:
    "Virtual CFO UK, IFRS advisory UK, CA firm for UK businesses, remote CFO London, Companies House accounts, financial modeling UK investors, Pakistani diaspora business UK",
};

const challenges = [
  {
    title: "Companies House Compliance",
    desc: "UK-registered entities must file annual accounts and confirmation statements. We prepare IFRS-compliant financial statements that meet Companies House and HMRC standards.",
  },
  {
    title: "IFRS Financial Statements",
    desc: "UK-adopted IFRS applies to many UK entities. IFRS 16 (leases), IFRS 15 (revenue), and IFRS 9 (financial instruments) are frequently misapplied, especially in fast-growing businesses.",
  },
  {
    title: "Fundraising from UK & European Investors",
    desc: "UK angels, VCs, and family offices expect clean, IFRS-compliant financials and credible financial models. We build the package that makes due diligence straightforward.",
  },
  {
    title: "UK–Pakistan Cross-Border Operations",
    desc: "Businesses operating across UK and Pakistan need advisory that covers both sides — transfer pricing, intercompany transactions, and consolidated reporting.",
  },
  {
    title: "CFO-Level Expertise Without London Rates",
    desc: "A full-time CFO in London costs £120,000–£180,000/year. A Virtual CFO retainer delivers the same strategic oversight at a fraction of that cost — without the long-term overhead.",
  },
  {
    title: "Diaspora Business Advisory",
    desc: "British Pakistani entrepreneurs often run businesses with roots in both countries. We understand the dual regulatory landscape and the unique financial challenges that come with it.",
  },
];

const services = [
  {
    title: "Virtual CFO for UK",
    tag: "Retainer",
    desc: "Monthly CFO retainer covering financial reporting, board presentations, cash flow management, investor relations, and strategic planning — remote, responsive, and built for UK businesses.",
    href: "/virtual-cfo",
  },
  {
    title: "IFRS & Annual Accounts",
    tag: "Compliance",
    desc: "UK-adopted IFRS financial statements prepared to Companies House standards — including IFRS 16, IFRS 15, and IFRS 9 compliance. Audit-ready and investor-ready.",
    href: "/ifrs-advisory",
  },
  {
    title: "Financial Modeling",
    tag: "Fundraising",
    desc: "Fundraising models, business valuations, and investor decks built to UK and European investor standards — with scenario analysis, sensitivity tables, and fully unlocked Excel workbooks.",
    href: "/financial-modeling",
  },
  {
    title: "Cross-Border Advisory",
    tag: "UK–Pakistan",
    desc: "Financial advisory for businesses operating across both jurisdictions — intercompany pricing, consolidated accounts, and dual-country tax and compliance guidance.",
    href: "/contact",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "30-minute video call to understand your UK entity, business model, and what you need from us.",
  },
  {
    step: "02",
    title: "Proposal",
    desc: "Clear scope of work and fixed-fee proposal within 24 hours. No hidden extras.",
  },
  {
    step: "03",
    title: "Onboarding",
    desc: "Shared cloud workspace, document checklist, and a dedicated contact from day one.",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Regular calls, async updates, and on-schedule deliverables — CFO-level output without London overhead.",
  },
];

const whoWeWorkWith = [
  "UK-registered SMEs and Ltd companies",
  "British Pakistani entrepreneurs and family businesses",
  "UK startups raising from angels or VCs",
  "UK businesses with Pakistan operations or supply chains",
  "Pakistan companies raising from UK investors",
  "UK investors with Pakistan portfolio companies",
];

const whyMnsai = [
  {
    title: "UK-competitive quality, Pakistan-based cost",
    detail:
      "Our CA-qualified team delivers IFRS-compliant work to the standard of a UK mid-tier firm — at 40–60% lower cost. You get the rigour without the London rates.",
  },
  {
    title: "UK-adopted IFRS expertise",
    detail:
      "Pakistan follows full IFRS. Our team applies these standards daily across hundreds of engagements. We understand the nuances UK entities face — IFRS 16, IFRS 9, first-time adoption.",
  },
  {
    title: "Favourable time zone overlap",
    detail:
      "Pakistan Standard Time is 4–5 hours ahead of UK. Morning UK calls are early afternoon for our team — meaning real-time collaboration during UK business hours is straightforward.",
  },
  {
    title: "Cross-border expertise",
    detail:
      "We understand both UK Companies House requirements and Pakistan's regulatory framework — uniquely positioned for businesses that span both jurisdictions.",
  },
];

export default function UKPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-800 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80"
            alt="London skyline at night"
            fill
            className="object-cover object-center opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">
              UK Venture — International Affairs
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              CA Advisory for UK Businesses.{" "}
              <span className="text-gold-400">Delivered from Pakistan.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Virtual CFO services, IFRS financial statements, Companies House compliance, and
              financial modeling — delivered by a specialist CA team in Pakistan to businesses
              across London, Manchester, Birmingham, and the wider UK.
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
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">What UK Businesses Face</p>
            <h2 className="section-heading">Challenges We Solve</h2>
            <p className="section-subheading">
              UK businesses — particularly those with cross-border operations — face a specific set of financial and compliance challenges. We handle them.
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Services for UK Clients</h2>
            <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
              Specialist advisory across the areas UK businesses need most — all delivered remotely without compromising on quality or turnaround.
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
                Why UK Businesses Choose Us
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
                <h3 className="font-heading text-xl font-semibold text-gold-400 mb-6">Who We Work With in the UK</h3>
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
                    Based in Pakistan — serving UK clients fully remotely via video call, email, and shared cloud platforms with convenient time zone overlap.
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
            <h2 className="section-heading">How We Work with UK Clients</h2>
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
              { label: "UK-Adopted IFRS", detail: "All financial statements prepared to UK-adopted IFRS standards — Companies House ready and investor ready." },
              { label: "Fixed-Fee Pricing", detail: "Every engagement is scoped and priced upfront. No billable-hour surprises." },
              { label: "UK Time Zone Friendly", detail: "Pakistan is UTC+5. Morning UK calls are afternoon Pakistan time — real-time collaboration during UK business hours." },
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
            Based in the UK? Let's Talk.
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Book a free 30-minute call. Tell us about your UK entity, your business, and what
            you need — we'll tell you exactly how we can help.
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
