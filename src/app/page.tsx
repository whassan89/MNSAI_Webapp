import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MNSAI (SMC-Private) Limited | Audit, Accounting, Advisory, Tax & ERP",
  description:
    "MNSAI is a professional CA firm in Lahore offering Audit, Accounting, Tax Advisory, Financial Services, Business Advisory, and ERP Implementation across Pakistan.",
};

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "200+", label: "Clients Served" },
  { value: "15+", label: "Industries Covered" },
  { value: "25+", label: "Expert Professionals" },
];

const servicePreview = [
  { title: "Audit & Assurance", icon: "✓", href: "/services" },
  { title: "Accounting & Bookkeeping", icon: "⊞", href: "/services" },
  { title: "Tax Advisory", icon: "⊙", href: "/services" },
  { title: "Business Advisory", icon: "◈", href: "/services" },
  { title: "ERP Implementation", icon: "⊛", href: "/services" },
  { title: "Financial Services", icon: "◉", href: "/services" },
];

const clients = [
  "Umoja International", "Big Life Journal", "RUDA", "Accruent",
  "Master", "Mushandi", "Groundup.AI", "ASPIRx",
  "Ambassify", "Gomoon", "Paragon Actuarial", "Parse Biosciences",
  "Nyonda Enterprises Inc.", "Active Prime",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-navy-800 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg,#d4af37 0,#d4af37 1px,transparent 0,transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">
              MNSAI (SMC-Private) Limited
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Value Your{" "}
              <span className="text-gold-400">Business</span> Today
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl">
              We are Chartered Accountants having experience in Taxation, Financial Advisory,
              Internal Audit, Risk Assessment, ERP Solutions and Business Plans ranging from
              small to large scale businesses.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-2xl">
              We aim to provide our valued clients with latest methods and tools to achieve
              effectiveness in their operations so that they can keep abreast of current market trends.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary">Our Services</Link>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
      </section>

      {/* Stats */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center py-6 px-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <p className="font-heading text-4xl font-bold text-navy-700 mb-1">{s.value}</p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">Who We Are</p>
              <h2 className="section-heading mb-5">Competence and Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are qualified professionals with diversified experience in Accounting, Finance,
                Strategy, Risk and Assurance. We have served in numerous organizations from small
                to large scale and national to multinational companies at senior &amp; strategic levels.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With the inception of Tech Industry all over the world and AI and Blockchain
                revolutionizing business structure, we are fully equipped with the latest technology,
                qualification and skill set to perform and implement these for our respected clients.
              </p>
              <Link href="/about" className="btn-primary inline-block">Learn More</Link>
            </div>
            <div className="bg-navy-800 rounded-2xl p-8 text-white">
              <h3 className="font-heading text-xl font-semibold mb-6 text-gold-400">Working Experience With</h3>
              <div className="grid grid-cols-2 gap-4">
                {["KPMG", "PwC", "Fatima Group", "Starlet"].map((co) => (
                  <div key={co} className="bg-navy-700 rounded-lg px-4 py-3 text-center font-semibold text-sm">
                    {co}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="section-heading">Our Services</h2>
            <p className="section-subheading">Comprehensive financial and advisory solutions for businesses of every size.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {servicePreview.map((s) => (
              <Link key={s.title} href={s.href}
                className="group bg-gray-50 hover:bg-navy-800 border border-gray-100 hover:border-navy-800 rounded-xl p-6 transition-all duration-300">
                <p className="text-2xl mb-3">{s.icon}</p>
                <p className="font-heading font-semibold text-navy-800 group-hover:text-white transition-colors">{s.title}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="btn-primary inline-block">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Clients Strip */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">Trusted By</p>
            <h2 className="section-heading">Our Clients</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((c) => (
              <span key={c} className="bg-white border border-gray-200 text-gray-600 font-medium text-sm px-5 py-2.5 rounded-full shadow-sm hover:border-gold-400 hover:text-navy-800 transition-colors">
                {c}
              </span>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/clients" className="btn-primary inline-block">View All Clients</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get in touch today and let us help you achieve financial clarity and business growth.
          </p>
          <Link href="/contact" className="btn-primary inline-block text-base px-8 py-4">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
