import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet the Team | MNSAI (SMC-Private) Limited",
  description:
    "Meet the leadership team at MNSAI — experienced Chartered Accountants with decades of expertise in audit, taxation, financial advisory, and organizational development.",
};

const team = [
  {
    name: "Mr. Waqar Hassan",
    role: "Chief Executive Officer",
    qualifications: ["Accounting Affiliate (ICAP) — CBA", "Member, PIPFA Pakistan", "Tax Practitioner, FBR", "Bachelor's Degree, AEU Malaysia"],
    experience: "12 Years",
    bio: "Mr. Waqar Hassan is a qualified professional having 12 years of experience in Financial Advisory, Accounting and Audit. He holds an Accounting Affiliate (ICAP) and is a member of PIPFA Pakistan. He also holds a Bachelor's degree from AEU Malaysia.",
    expertise: [
      "Business Planning & Research for Startups",
      "Forecasting & Financial Modelling",
      "Pre-Feasibility Studies",
      "Merger & Acquisition Advisory",
      "Due Diligence",
      "Corporate Compliance for SMEs",
    ],
    initial: "W",
  },
  {
    name: "Mr. Mahmood Ul Haq",
    role: "Director — Strategy & Taxation",
    qualifications: ["Fellow Member, ICAP (FCA)", "Alumni, PwC International Network (AF Fergusson)"],
    experience: "25+ Years",
    bio: "Mr. Mahmood Ul Haq is a Fellow Member of the Institute of Chartered Accountants of Pakistan. In an over 25-year career, he has held various senior management positions in the areas of financial management, strategic business planning, risk management and corporate compliance.",
    expertise: [
      "Financial Management",
      "Strategic Business Planning",
      "Risk Management",
      "Corporate Compliance",
      "Tax Strategy & Advisory",
      "Regulatory Affairs",
    ],
    initial: "M",
  },
  {
    name: "Mr. Mansoor Ali",
    role: "Director — OD & Risk",
    qualifications: ["Member, ICAP (ACA)", "22+ Years Senior Management Experience"],
    experience: "22+ Years",
    bio: "Mr. Mansoor Ali is a qualified CA and member of the Institute of Chartered Accountants of Pakistan. In an over 22-year career, he served in Fatima Group for 17 years at a senior management position in financial management, strategic business planning, business development and reengineering of reporting structure and reporting lines.",
    expertise: [
      "Organizational Development",
      "Risk Assessment & Management",
      "Financial Management",
      "Strategic Business Planning",
      "Business Development",
      "Reporting Structure Reengineering",
    ],
    initial: "M",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">Our People</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Meet the Team</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our leadership team combines decades of experience across audit, taxation, financial
            advisory, and organizational development.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`grid md:grid-cols-3 gap-10 items-start ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Profile Card */}
              <div className={`bg-navy-800 rounded-2xl p-8 text-center ${index % 2 !== 0 ? "md:order-3" : ""}`}>
                <div className="w-24 h-24 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-heading font-bold text-4xl">{member.initial}</span>
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-1">{member.name}</h3>
                <p className="text-gold-400 text-sm font-medium mb-4">{member.role}</p>
                <div className="border-t border-navy-700 pt-4 space-y-2">
                  {member.qualifications.map((q) => (
                    <p key={q} className="text-gray-300 text-xs leading-relaxed">{q}</p>
                  ))}
                </div>
                <div className="mt-4 bg-navy-700 rounded-lg px-4 py-2 inline-block">
                  <span className="text-gold-400 text-xs font-semibold">{member.experience} Experience</span>
                </div>
              </div>

              {/* Bio & Expertise */}
              <div className={`md:col-span-2 ${index % 2 !== 0 ? "md:order-1 md:col-start-1" : ""}`}>
                <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-2">{member.role}</p>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-800 mb-4">{member.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                <h4 className="font-semibold text-navy-800 mb-3">Areas of Expertise</h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {member.expertise.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Work With Our Experts</h2>
          <p className="text-gray-300 mb-8">Our team is ready to bring their expertise to your business challenges.</p>
          <Link href="/contact" className="btn-primary inline-block">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
