import Link from "next/link";

const clients = [
  { name: "Umoja International", domain: "umojainternational.org", sector: "International NGO" },
  { name: "Big Life Journal", domain: "biglifejournal.com", sector: "Publishing / Education" },
  { name: "RUDA", domain: "ruda.gov.pk", sector: "Government Authority" },
  { name: "Accruent", domain: "accruent.com", sector: "Technology / SaaS" },
  { name: "Master", domain: null, sector: "Manufacturing" },
  { name: "Mushandi", domain: "mushandi.com", sector: "Technology" },
  { name: "Groundup.AI", domain: "groundup.ai", sector: "Artificial Intelligence" },
  { name: "ASPIRx", domain: null, sector: "Healthcare / Pharma" },
  { name: "Ambassify", domain: "ambassify.com", sector: "SaaS / Marketing" },
  { name: "Gomoon", domain: null, sector: "Technology" },
  { name: "Paragon Actuarial", domain: null, sector: "Actuarial Services" },
  { name: "Nyonda Enterprises Inc.", domain: null, sector: "Business Services" },
  { name: "Active Prime", domain: "activeprime.com", sector: "Technology" },
  { name: "Parse Biosciences", domain: "parsebiosciences.com", sector: "Biotechnology" },
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

export default function ClientsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">Trusted By Many</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Our Clients</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We are proud to have served businesses ranging from startups to multinational corporations
            across a wide range of industries.
          </p>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">Portfolio</p>
            <h2 className="section-heading">Companies We&apos;ve Served</h2>
            <p className="section-subheading">
              From local SMEs to international organizations — our client base spans diverse industries and geographies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-gold-400 hover:shadow-md transition-all duration-300"
              >
                {/* Logo placeholder with initial */}
                <div className="w-14 h-14 bg-navy-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors">
                  <span className="text-white font-heading font-bold text-xl">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-navy-800 text-sm mb-1">{client.name}</h3>
                <span className="text-gold-500 text-xs font-medium bg-gold-50 px-2 py-0.5 rounded-full">
                  {client.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">Client Feedback</p>
            <h2 className="section-heading">What Our Clients Say</h2>
            <p className="section-subheading">
              We measure our success by the results and trust our clients place in us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative"
              >
                {/* Quote mark */}
                <div className="absolute top-5 right-6 text-gold-200 text-6xl font-heading leading-none select-none">
                  &ldquo;
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{t.initial}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-800 text-sm">{t.author}</p>
                    <p className="text-gray-400 text-xs">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Join Our Client Family</h2>
          <p className="text-gray-300 mb-8">
            Let us show you why businesses across Pakistan and internationally trust MNSAI.
          </p>
          <Link href="/contact" className="btn-primary inline-block">Get Started Today</Link>
        </div>
      </section>
    </>
  );
}
