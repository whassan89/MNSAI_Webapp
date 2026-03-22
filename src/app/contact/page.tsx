const contactDetails = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    lines: ["+92-332-4452894", "+92-321-4452894"],
    href: "tel:+923324452894",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    lines: ["ceo@mnsai.com"],
    href: "mailto:ceo@mnsai.com",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    lines: ["Office No. 7, First Floor,", "Al-Rehman Arcade, PIA Road,", "Johar Town, Lahore"],
    href: "https://maps.google.com/?q=Al+Rehman+Arcade+PIA+Road+Johar+Town+Lahore",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    label: "Website",
    lines: ["www.mnsai.com"],
    href: "https://www.mnsai.com",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">Reach Out</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We&apos;d love to hear about your business needs. Get in touch and our team will respond promptly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-800 mb-8">Get in Touch With Us</h2>
              <div className="space-y-6">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Address" || item.label === "Website" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                      {item.lines.map((line) => (
                        <p key={line} className="text-navy-800 font-medium group-hover:text-gold-600 transition-colors text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <div className="mt-10">
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a href="https://facebook.com/mnsaiconsultants" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-navy-800 hover:bg-gold-500 rounded-lg flex items-center justify-center text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/mnsai" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-navy-800 hover:bg-gold-500 rounded-lg flex items-center justify-center text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="https://wa.me/923324452894" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-navy-800 hover:bg-gold-500 rounded-lg flex items-center justify-center text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-5">
              <h3 className="font-heading text-xl font-bold text-navy-800 mb-2">Send Us a Message</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-600 text-sm font-medium block mb-1.5">Full Name</label>
                  <input type="text" placeholder="Your name"
                    className="w-full border border-gray-200 text-gray-800 placeholder-gray-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors" />
                </div>
                <div>
                  <label className="text-gray-600 text-sm font-medium block mb-1.5">Email Address</label>
                  <input type="email" placeholder="you@example.com"
                    className="w-full border border-gray-200 text-gray-800 placeholder-gray-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-gray-600 text-sm font-medium block mb-1.5">Phone Number</label>
                <input type="tel" placeholder="+92 XXX XXXXXXX"
                  className="w-full border border-gray-200 text-gray-800 placeholder-gray-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors" />
              </div>
              <div>
                <label className="text-gray-600 text-sm font-medium block mb-1.5">Service Required</label>
                <select className="w-full border border-gray-200 text-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors bg-white">
                  <option value="">Select a service...</option>
                  <option>Audit & Assurance</option>
                  <option>Accounting & Bookkeeping</option>
                  <option>Taxation & Corporate Advisory</option>
                  <option>Financial Services</option>
                  <option>Business Advisory</option>
                  <option>ERP Implementation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-gray-600 text-sm font-medium block mb-1.5">Message</label>
                <textarea rows={4} placeholder="Tell us about your requirements..."
                  className="w-full border border-gray-200 text-gray-800 placeholder-gray-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full btn-primary text-center">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-100 h-72 flex items-center justify-center">
        <a
          href="https://maps.google.com/?q=Al+Rehman+Arcade+PIA+Road+Johar+Town+Lahore"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center group"
        >
          <svg className="w-12 h-12 text-navy-700 mx-auto mb-3 group-hover:text-gold-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="font-semibold text-navy-800 group-hover:text-gold-600 transition-colors">
            Office No. 7, First Floor, Al-Rehman Arcade
          </p>
          <p className="text-gray-500 text-sm">PIA Road, Johar Town, Lahore</p>
          <p className="text-gold-500 text-xs mt-2 font-medium">Click to open in Google Maps →</p>
        </a>
      </section>
    </>
  );
}
