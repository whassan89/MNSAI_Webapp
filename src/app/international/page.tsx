import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView";

export const metadata: Metadata = {
  title: "International Affairs | MNSAI Global Chapters",
  description:
    "MNSAI serves businesses and investors across Pakistan, UAE, UK, and USA — delivering specialist CA advisory, Virtual CFO, IFRS compliance, and financial modeling remotely from Pakistan.",
  keywords:
    "MNSAI international, CA advisory UAE UK USA Pakistan, Virtual CFO international, IFRS advisory global, financial modeling international, remote CA firm Pakistan",
};

const chapters = [
  {
    name: "Pakistan",
    label: "Home Base",
    tagline: "Where We Are Built",
    description:
      "Pakistan is where MNSAI was founded and where our team is based. We serve businesses across the country — from Karachi to Islamabad — with Virtual CFO services, IFRS advisory, tax consulting, and financial modeling.",
    highlights: [
      "Virtual CFO for Pakistan businesses",
      "IFRS advisory & financial reporting",
      "Tax & FBR compliance",
      "Startup advisory & fundraising models",
    ],
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
    imageAlt: "Badshahi Mosque, Lahore, Pakistan",
    href: "/services",
    cta: "Our Services",
    accent: "bg-emerald-500",
  },
  {
    name: "UAE",
    label: "UAE Chapter",
    tagline: "Dubai · Abu Dhabi · Sharjah",
    description:
      "Our UAE Chapter serves businesses across the Emirates — from DIFC and DMCC registered entities to UAE mainland SMEs. We handle UAE Corporate Tax (9%), IFRS compliance, Virtual CFO, and financial modeling for GCC investors.",
    highlights: [
      "UAE Corporate Tax (9%) advisory",
      "IFRS compliance for UAE entities",
      "Virtual CFO retainer",
      "Financial modeling for GCC investors",
    ],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    imageAlt: "Dubai Burj Khalifa skyline",
    href: "/uae",
    cta: "UAE Chapter",
    accent: "bg-gold-400",
  },
  {
    name: "UK",
    label: "UK Venture",
    tagline: "London · Manchester · Birmingham",
    description:
      "Our UK Venture serves UK-registered businesses and British Pakistani entrepreneurs. We prepare IFRS-compliant annual accounts for Companies House, support UK fundraising, and advise cross-border UK–Pakistan operations.",
    highlights: [
      "Companies House annual accounts",
      "UK-adopted IFRS financial statements",
      "Virtual CFO for UK businesses",
      "UK–Pakistan cross-border advisory",
    ],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    imageAlt: "London Tower Bridge at night",
    href: "/uk",
    cta: "UK Venture",
    accent: "bg-blue-500",
  },
  {
    name: "USA",
    label: "USA Wing",
    tagline: "New York · Silicon Valley · Houston",
    description:
      "Our USA Wing serves US-based Pakistani entrepreneurs, Pakistan startups raising from US investors, and US companies entering the Pakistan market. We specialise in financial models built to US VC standards and cross-border advisory.",
    highlights: [
      "Financial models for US VCs & angels",
      "Virtual CFO for cross-border businesses",
      "IFRS / US GAAP conversion",
      "Pakistan market entry advisory",
    ],
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    imageAlt: "New York City skyline at night",
    href: "/usa",
    cta: "USA Wing",
    accent: "bg-red-500",
  },
];

const whyRemote = [
  {
    title: "Same Rigour, Lower Cost",
    desc: "Our CA-qualified team delivers Big Four-trained expertise. Operating from Pakistan means you pay 40–70% less than equivalent advisory in Dubai, London, or New York — with no compromise on quality.",
  },
  {
    title: "IFRS Across All Markets",
    desc: "Pakistan follows full IFRS. UAE, UK, and international investors all require IFRS-compliant reporting. Our team is immersed in these standards daily — not just once a year at compliance time.",
  },
  {
    title: "Remote-First by Design",
    desc: "We have always operated remotely with international clients — video calls, shared cloud workspaces, and async workflows. Geography is not a constraint; it is a cost advantage.",
  },
  {
    title: "One Firm, Multiple Markets",
    desc: "Rather than hiring separate advisory firms in each market, you get one consistent team that understands your business and maintains continuity across all jurisdictions.",
  },
];

export default function InternationalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-800 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt="World map at night showing city lights"
            fill
            className="object-cover object-center opacity-15"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">
              International Affairs
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              One Firm.{" "}
              <span className="text-gold-400">Four Regions.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              MNSAI serves businesses and investors across Pakistan, UAE, United Kingdom, and
              United States — delivering specialist CA advisory, Virtual CFO, IFRS compliance,
              and financial modeling remotely from Pakistan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book a Free Call</Link>
              <Link href="/services" className="btn-outline">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Cards */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">Our Global Chapters</p>
            <h2 className="section-heading">Where We Operate</h2>
            <p className="section-subheading">
              Each chapter is tailored to the specific regulatory environment, investor landscape, and business needs of its region.
            </p>
          </AnimateOnView>

          <div className="space-y-10">
            {chapters.map((chapter, i) => (
              <AnimateOnView key={chapter.name} delay={i * 0.08}>
                <div className={`grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  {/* Image */}
                  <div className="relative h-64 md:h-auto min-h-[280px]">
                    <Image
                      src={chapter.image}
                      alt={chapter.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-navy-900/40" />
                    <div className="absolute bottom-6 left-6">
                      <span className={`${chapter.accent} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                        {chapter.label}
                      </span>
                      <p className="text-white font-heading font-bold text-2xl mt-2">{chapter.name}</p>
                      <p className="text-white/70 text-sm">{chapter.tagline}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-gray-50 p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">{chapter.description}</p>
                      <ul className="space-y-2 mb-8">
                        {chapter.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2.5 text-sm text-navy-800">
                            <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={chapter.href}
                      className="btn-primary self-start"
                    >
                      {chapter.cta} →
                    </Link>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Why Remote Works */}
      <section className="py-20 lg:py-[120px] bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">Why It Works</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Why Businesses Across Four Regions Choose MNSAI
            </h2>
            <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
              Remote advisory is not a compromise — for the right firm, it is a competitive advantage.
            </p>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyRemote.map((w, i) => (
              <AnimateOnView key={w.title} delay={i * 0.08}>
                <div className="bg-navy-700 rounded-xl p-6 h-full">
                  <h3 className="font-heading font-semibold text-gold-400 text-lg mb-3">{w.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <AnimateOnView className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Wherever You Are, We Can Help.
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Book a free 30-minute call — tell us where you are, what you need, and we will
            tell you how MNSAI can support your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-block text-base px-8 py-4">
              Book a Free Call
            </Link>
            <a
              href="https://wa.me/923324452894"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base px-8 py-4 border-2 border-navy-800 text-navy-800 rounded-lg font-semibold hover:bg-navy-800 hover:text-white transition-colors duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </AnimateOnView>
      </section>
    </>
  );
}
