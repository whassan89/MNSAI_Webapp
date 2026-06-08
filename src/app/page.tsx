import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "MNSAI (SMC-Private) Limited | Virtual CFO · Financial Modeling · IFRS Advisory · Tax Consulting",
  description:
    "MNSAI is a specialist CA advisory firm delivering Virtual CFO services, Financial Modeling, IFRS Advisory, and Tax & Business Consulting to businesses across Pakistan and beyond.",
  keywords:
    "Virtual CFO Pakistan, financial modeling Pakistan, IFRS advisory Pakistan, tax consulting Pakistan, CA firm Pakistan, business consulting Pakistan",
};

const stats = [
  { value: "12+",  label: "Years of Experience" },
  { value: "200+", label: "Clients Served" },
  { value: "15+",  label: "Industries Covered" },
  { value: "25+",  label: "Expert Professionals" },
];

const carouselClients = [
  "Umoja International", "Big Life Journal", "RUDA", "Accruent",
  "Master", "Mushandi", "Groundup.AI", "ASPIRx",
  "Ambassify", "Gomoon", "Paragon Actuarial", "Parse Biosciences",
  "Nyonda Enterprises Inc.", "Active Prime",
];

const servicePreview = [
  { title: "Audit & Assurance",           icon: "✓", href: "/services" },
  { title: "Virtual CFO & Managed Finance", icon: "⊞", href: "/virtual-cfo" },
  { title: "Tax & Business Consulting",    icon: "⊙", href: "/services" },
  { title: "IFRS Advisory & Reporting",   icon: "◈", href: "/ifrs-advisory" },
  { title: "ERP Implementation",          icon: "⊛", href: "/services" },
  { title: "Financial Modeling & Valuation", icon: "◉", href: "/financial-modeling" },
];

const testimonials = [
  {
    quote:
      "MNSAI transformed how we handle our finances in Pakistan. Their tax advisory saved us significant costs and their team was always available to guide us through local compliance requirements.",
    author: "CEO",
    company: "International Client",
    initial: "I",
  },
  {
    quote:
      "Their ERP implementation was smooth and professional. The team understood our business processes deeply and delivered a solution that truly worked for us. Highly recommended.",
    author: "Director Operations",
    company: "Manufacturing Company",
    initial: "D",
  },
  {
    quote:
      "We engaged MNSAI for our startup's business plan and financial modelling. The quality of work was exceptional — our investors were impressed with the depth of the financial analysis.",
    author: "Founder",
    company: "Tech Startup",
    initial: "F",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Right image — fills right 60%, sits behind */}
        <div className="absolute inset-y-0 right-0 w-[60%]">
          <Image
            src="/images/Home/hero-right.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="60vw"
          />
        </div>

        {/* Left image — fills left 40%, sits in front */}
        <div className="absolute inset-y-0 left-0 w-[40%] z-10">
          <Image
            src="/images/Home/hero-left.jpeg"
            alt="MNSAI advisory professionals"
            fill
            className="object-cover object-center"
            sizes="40vw"
            priority
          />
        </div>

        {/* Text content — above both images */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
          <div className="max-w-xl ml-auto text-right">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-[70px] font-bold text-white leading-tight mb-3">
              Value Your{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-400 bg-clip-text text-transparent">
                Business
              </span>{" "}
              Today
            </h1>
            <p className="text-gold-400 text-xs font-medium tracking-widest uppercase mb-6">
              Virtual CFO · Financial Modeling · IFRS Advisory · Tax &amp; Business Consulting
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
              Specialist CA advisors delivering Virtual CFO services, financial modeling,
              IFRS-compliant reporting, and strategic tax consulting to businesses across Pakistan.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Big Four-trained professionals bringing institutional-grade expertise to growing
              businesses — at a fraction of the cost of an in-house finance team.
            </p>
            <div className="flex flex-wrap gap-4 justify-end">
              <Link href="/services" className="btn-primary">Our Services</Link>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      </section>

      {/* ── Stats ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-navy-900 border-b border-navy-700/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <Counter key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Logo Carousel ─────────────────────────────────────────── */}
      <section className="py-10 bg-navy-800 overflow-hidden border-b border-navy-700/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase">
            Trusted By Leading Businesses
          </p>
        </div>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-navy-800 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-navy-800 to-transparent z-10 pointer-events-none" />
          <div className="flex gap-4 animate-scroll-x">
            {[...carouselClients, ...carouselClients].map((c, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-gray-400 text-sm font-medium px-5 py-2.5 border border-navy-700 rounded-full whitespace-nowrap hover:border-gold-400 hover:text-gold-400 transition-colors duration-300 cursor-default flex-shrink-0"
              >
                <span className="w-1.5 h-1.5 bg-gold-400 rounded-full flex-shrink-0" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Preview ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-[120px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-stretch">
            <AnimateOnView direction="left" className="flex flex-col justify-center">
              <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">Who We Are</p>
              <h2 className="section-heading mb-5">Specialists, Not Generalists</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are specialist CA advisors — Virtual CFO practitioners, financial modelers,
                IFRS experts, and tax consultants — with Big Four-trained professionals serving
                SMEs and international organizations across Pakistan.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team has held senior roles at KPMG and PwC, serving clients across
                Manufacturing, Real Estate, and Technology sectors. We bring that institutional
                expertise directly to your business — so you get more than a bookkeeper,
                you get a strategic finance partner.
              </p>
              <Link href="/about" className="btn-primary inline-block">Learn More</Link>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.15} className="h-full">
              <div className="bg-navy-800 rounded-2xl p-8 text-white h-full flex flex-col justify-around">
                {/* Big 4 */}
                <div className="text-center">
                  <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-5">Big4 Exposure</p>
                  <div className="flex gap-4 justify-center">
                    {["KPMG", "PwC", "EY"].map((f) => (
                      <span key={f} className="px-7 py-3 bg-navy-700 rounded-full text-base font-semibold text-white border border-navy-600 hover:bg-gold-400 hover:text-navy-900 hover:border-gold-400 transition-all duration-300 cursor-default">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-navy-700" />
                {/* Industries */}
                <div className="text-center">
                  <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-5">Multiple Industries</p>
                  <div className="flex gap-3 justify-center flex-wrap">
                    {["Manufacturing", "Information Technology"].map((ind) => (
                      <span key={ind} className="px-6 py-3 bg-navy-700 rounded-full text-sm font-medium text-gray-300 border border-navy-600 hover:border-gold-400 hover:text-gold-400 transition-colors duration-200 cursor-default">
                        {ind}
                      </span>
                    ))}
                    <span className="px-4 py-3 text-sm text-gray-500 cursor-default">& more →</span>
                  </div>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ── Services Preview ──────────────────────────────────────── */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-12">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="section-heading">Our Services</h2>
            <p className="section-subheading">
              Comprehensive financial and advisory solutions for businesses of every size.
            </p>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {servicePreview.map((s, i) => (
              <AnimateOnView key={s.title} delay={i * 0.08}>
                <Link
                  href={s.href}
                  className="group block h-full bg-gray-50 hover:bg-navy-800 border border-gray-100 hover:border-gold-400 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/20"
                >
                  <p className="text-2xl mb-3">{s.icon}</p>
                  <p className="font-heading font-semibold text-navy-800 group-hover:text-white transition-colors">
                    {s.title}
                  </p>
                  <p className="link-arrow text-gray-400 text-xs mt-2 group-hover:text-gold-400 transition-colors">
                    Learn more <span className="arrow">→</span>
                  </p>
                </Link>
              </AnimateOnView>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="btn-primary inline-block">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-[120px] bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-12">
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">Client Feedback</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
            <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
              We measure our success by the results and trust our clients place in us.
            </p>
          </AnimateOnView>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimateOnView key={i} delay={i * 0.12} className="flex flex-col">
                <div className="flex flex-col flex-1 bg-navy-800 border border-navy-700 rounded-xl p-7 hover:border-gold-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-400/10 transition-all duration-300 relative">
                  <div className="absolute top-5 right-6 text-gold-400/20 text-6xl font-heading leading-none select-none">
                    &ldquo;
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-navy-900 font-bold text-sm">{t.initial}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t.author}</p>
                      <p className="text-gray-500 text-xs">{t.company}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/clients" className="btn-primary inline-block">View All Clients</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-[120px] bg-navy-800 border-t border-navy-700/40">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimateOnView>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Get in touch today and let us help you achieve financial clarity and business growth.
            </p>
            <Link href="/contact" className="btn-primary inline-block text-base px-8 py-4">
              Schedule a Consultation
            </Link>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
