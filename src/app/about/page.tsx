import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "About Us | MNSAI (SMC-Private) Limited",
  description:
    "Learn about MNSAI — a professional CA firm with 12+ years of experience in audit, tax, financial advisory, and ERP services across Pakistan and internationally.",
};

const values = [
  {
    title: "Integrity",
    desc: "We uphold the highest standards of professional ethics and transparency in every client engagement.",
  },
  {
    title: "Excellence",
    desc: "Our team continuously upgrades its knowledge to deliver cutting-edge financial and advisory solutions.",
  },
  {
    title: "Innovation",
    desc: "We embrace AI, Blockchain, and ERP technologies to future-proof our clients' businesses.",
  },
  {
    title: "Client-First",
    desc: "Every strategy we design is built around your unique business goals and long-term success.",
  },
];

const experience = [
  { firm: "KPMG", desc: "Big Four audit and advisory experience" },
  { firm: "PwC / AF Fergusson", desc: "International network, assurance & tax" },
  { firm: "Fatima Group", desc: "17+ years senior management in a large conglomerate" },
  { firm: "Starlet", desc: "Financial and corporate advisory" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-800 py-20">
        <AnimateOnView className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">Who We Are</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">About MNSAI</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A professional CA firm delivering expert financial, audit, tax, and advisory services across Pakistan.
          </p>
        </AnimateOnView>
      </section>

      {/* Vision */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <AnimateOnView direction="left">
              <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">Vision Statement</p>
              <h2 className="section-heading mb-5">Value Your Business Today</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are specialist CA advisors — Virtual CFO practitioners, financial modelers,
                IFRS experts, and tax consultants — with Big Four-trained professionals serving
                SMEs and international organizations across Pakistan.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Business in today's world has been changing tremendously due to innovation and
                availability of latest gadgets to all entrepreneurs. Keeping this view it can
                be said that a business may become obsolete if it does not cope-up with the
                latest trends and transforming market norms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We aim to provide our valued clients with latest methods and tools to achieve
                effectiveness in their operations so that they can keep abreast of current market
                trends. We believe that success is a byproduct if you are actively observing the
                current trends, envision the future needs of the business and make effective
                strategies to incorporate both.
              </p>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "12+", label: "Years of Experience" },
                { value: "200+", label: "Clients Served" },
                { value: "15+", label: "Industries" },
                { value: "25+", label: "Professionals" },
              ].map((s) => (
                <Counter key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Competence */}
      <section className="py-20 lg:py-[120px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-12">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">Our Background</p>
            <h2 className="section-heading">Competence &amp; Experience</h2>
            <p className="section-subheading">
              Our team has served at senior &amp; strategic levels in leading national and multinational organizations.
            </p>
          </AnimateOnView>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <AnimateOnView direction="left">
            <div className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm">
              <p className="text-gray-600 leading-relaxed mb-4">
                We are specialist CA advisors with Big Four-trained professionals. Our expertise spans
                Virtual CFO services, financial modeling, IFRS advisory, and tax consulting — delivered
                to SMEs, startups, and international organizations across Pakistan. We have served at
                senior and strategic levels in leading national and multinational companies.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With the inception of AI and Blockchain revolutionizing how businesses operate, we are
                fully equipped with the latest technology, qualification, and skill set to future-proof
                our clients' businesses with long-term, specialist-led solutions.
              </p>
            </div>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.12}>
            <div className="bg-navy-800 rounded-xl p-7 text-white">
              <h3 className="font-heading text-xl font-semibold text-gold-400 mb-6">Working Experience With</h3>
              <div className="space-y-4">
                {experience.map((e) => (
                  <div key={e.firm} className="flex items-start gap-3 border-b border-navy-700 pb-4 last:border-0 last:pb-0">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">{e.firm}</p>
                      <p className="text-gray-400 text-sm">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnView className="text-center mb-12">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">Our Foundation</p>
            <h2 className="section-heading">Our Core Values</h2>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimateOnView key={v.title} delay={i * 0.08}>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-gold-400 hover:shadow-md transition-all h-full">
                <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-gold-400 rounded-full" />
                </div>
                <h3 className="font-heading font-semibold text-navy-800 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-800">
        <AnimateOnView className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
          <p className="text-gray-300 mb-8">Let our experienced team help you navigate your financial and business challenges.</p>
          <Link href="/contact" className="btn-primary inline-block">Get in Touch</Link>
        </AnimateOnView>
      </section>
    </>
  );
}
