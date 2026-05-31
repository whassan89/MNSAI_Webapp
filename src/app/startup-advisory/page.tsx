import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView";

export const metadata: Metadata = {
  title: "Startup Advisory Pakistan | Finance for Founders | MNSAI (SMC-Private) Limited",
  description:
    "MNSAI helps Pakistani startups with financial modeling, pitch decks, business plans, IFRS reporting, and CFO support — from idea to Series A and beyond.",
  keywords:
    "startup advisory Pakistan, startup CFO Pakistan, pitch deck financial model Pakistan, business plan Pakistan, startup accounting Lahore, founder advisory Pakistan",
};

const stages = [
  {
    stage: "Idea Stage",
    label: "Pre-Revenue",
    services: [
      "Business plan & financial projections",
      "Company structure & legal setup advisory",
      "Pitch deck financial slides",
      "Unit economics & pricing model",
    ],
    color: "bg-navy-700",
  },
  {
    stage: "MVP / Early Traction",
    label: "0–PKR 10M Revenue",
    services: [
      "Bookkeeping & management accounts setup",
      "Seed round financial model",
      "Investor-ready financial statements",
      "NTN registration & tax compliance",
    ],
    color: "bg-navy-700",
  },
  {
    stage: "Growth Stage",
    label: "PKR 10M–500M Revenue",
    services: [
      "Virtual CFO retainer",
      "Series A / B financial model",
      "IFRS adoption & compliance",
      "KPI dashboards & reporting to board",
    ],
    color: "bg-navy-700",
  },
  {
    stage: "Scale / Fundraising",
    label: "Raising USD 1M+",
    services: [
      "Full data room financial package",
      "Due diligence support",
      "Cap table modelling",
      "Post-investment reporting & compliance",
    ],
    color: "bg-navy-700",
  },
];

const deliverables = [
  {
    icon: "📊",
    title: "Pitch Deck Financial Slides",
    desc: "Market size, revenue model, unit economics, funding ask, and use of proceeds — built to pass investor scrutiny.",
  },
  {
    icon: "📋",
    title: "Business Plan",
    desc: "Full business plan with executive summary, market analysis, operational plan, and 5-year financial projections.",
  },
  {
    icon: "📈",
    title: "Startup Financial Model",
    desc: "Driver-based model with cohort analysis, CAC/LTV, burn rate, runway, and scenario planning.",
  },
  {
    icon: "🏗️",
    title: "Company Setup Advisory",
    desc: "Guidance on legal structure (SMC, Pvt Ltd, LLP), NTN registration, and tax-efficient setup for startups.",
  },
  {
    icon: "📁",
    title: "Investor Data Room",
    desc: "Organised financial data room with historical accounts, projections, cap table, and due diligence documents.",
  },
  {
    icon: "🧾",
    title: "IFRS-Compliant Accounts",
    desc: "Financial statements prepared to IFRS standards — required by most institutional investors and international VCs.",
  },
];

const faqs = [
  {
    q: "Do you work with very early-stage startups?",
    a: "Yes. We work with founders at the idea stage — helping them structure the business, build financial projections, and prepare for initial fundraising. You don't need revenue to work with us.",
  },
  {
    q: "Can you help with our investor pitch deck?",
    a: "We build the financial section of your pitch deck — market sizing, revenue model, unit economics, funding ask, and use of funds. These are the slides investors spend the most time on.",
  },
  {
    q: "Do you help with company registration?",
    a: "We advise on the right legal structure and tax setup for your business. For SECP registration, we work alongside your legal counsel and ensure the financial and tax structure is optimal from day one.",
  },
  {
    q: "What if we already have an accountant?",
    a: "Our startup advisory often works alongside existing bookkeepers or accountants — we add the CFO-level layer (strategy, investor relations, IFRS) on top of transactional accounting.",
  },
  {
    q: "Can you help after we've raised a round?",
    a: "Absolutely. Post-investment, founders typically need structured reporting, investor updates, IFRS compliance, and a finance function that scales. Our Virtual CFO service covers all of this.",
  },
];

export default function StartupAdvisoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-800 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80"
            alt="Startup team in a meeting room"
            fill
            className="object-cover object-center opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Startup Advisory
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              The Finance Partner{" "}
              <span className="text-gold-400">Founders Need.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              From pitch deck to post-investment reporting — we give Pakistani founders the financial
              models, IFRS accounts, and CFO-level support that turns investor conversations into
              closed rounds.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book a Founder Call</Link>
              <Link href="/services" className="btn-outline">View All Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stage-Based Help */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">Stage-Based Support</p>
            <h2 className="section-heading">Help at Every Stage of Your Journey</h2>
            <p className="section-subheading">
              Your financial needs change as you scale. We're built to grow with you.
            </p>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stages.map((s, i) => (
              <AnimateOnView key={s.stage} delay={i * 0.08}>
                <div className="bg-navy-800 rounded-xl p-6 text-white h-full">
                  <div className="w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center text-navy-900 font-bold text-sm mb-4">
                    {i + 1}
                  </div>
                  <p className="font-heading font-bold text-white text-base mb-1">{s.stage}</p>
                  <p className="text-gold-400 text-xs font-medium mb-4">{s.label}</p>
                  <ul className="space-y-2">
                    {s.services.map((sv) => (
                      <li key={sv} className="flex items-start gap-2">
                        <span className="text-gold-400 text-xs mt-0.5 flex-shrink-0">›</span>
                        <span className="text-gray-300 text-xs leading-relaxed">{sv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 lg:py-[120px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">What We Deliver</p>
            <h2 className="section-heading">What Founders Get</h2>
            <p className="section-subheading">
              Concrete deliverables — not just advice — that you can put in front of investors, lenders, and co-founders.
            </p>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((d, i) => (
              <AnimateOnView key={d.title} delay={i * 0.07}>
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gold-400 transition-colors h-full">
                  <p className="text-2xl mb-3">{d.icon}</p>
                  <h3 className="font-heading font-semibold text-navy-800 mb-2">{d.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Why MNSAI for Startups */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <AnimateOnView direction="left">
              <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">Why MNSAI</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Why Founders Choose Us
              </h2>
              <div className="space-y-5">
                {[
                  { title: "We've worked with international investors", detail: "Our clients include companies backed by US, UK, and Gulf-based VCs and angels — we know what global investors expect." },
                  { title: "Big Four training, startup sensibility", detail: "We bring KPMG and PwC rigour without the KPMG and PwC fees — practical advice calibrated to your stage and budget." },
                  { title: "We're not just accountants", detail: "We help you structure your business, challenge your assumptions, and build financial narratives that close investment rounds." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gold-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.12}>
              <div className="bg-navy-700 rounded-2xl p-8">
                <h3 className="font-heading text-xl font-semibold text-gold-400 mb-6">Startup Clients We've Worked With</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Groundup.AI", "Gomoon", "ASPIRx", "Parse Biosciences", "Ambassify", "Active Prime"].map((co) => (
                    <div key={co} className="bg-navy-800 rounded-lg px-3 py-2.5 text-center text-sm text-white font-medium">
                      {co}
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-5 leading-relaxed">
                  Includes technology startups, SaaS businesses, and international ventures operating in and out of Pakistan.
                </p>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-12">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">Questions</p>
            <h2 className="section-heading">Frequently Asked</h2>
          </AnimateOnView>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <AnimateOnView key={faq.q} delay={i * 0.07}>
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-heading font-semibold text-navy-800 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
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
            Building Something? Let's Talk.
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Book a free 30-minute founder call. Tell us where you are, where you're going, and
            we'll tell you exactly how we can help.
          </p>
          <Link href="/contact" className="btn-primary inline-block text-base px-8 py-4">
            Book a Founder Call
          </Link>
        </AnimateOnView>
      </section>
    </>
  );
}
