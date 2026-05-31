"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceDropdown = [
  { label: "Virtual CFO Services",  href: "/virtual-cfo" },
  { label: "IFRS Advisory",         href: "/ifrs-advisory" },
  { label: "Financial Modeling",    href: "/financial-modeling" },
  { label: "Startup Advisory",      href: "/startup-advisory" },
  { label: "All Services",          href: "/services" },
];

const navLinks = [
  { label: "About",   href: "/about" },
  { label: "Clients", href: "/clients" },
  { label: "Team",    href: "/team" },
  { label: "Contact", href: "/contact" },
];

const topSocials = [
  {
    name: "Facebook",
    href: "https://facebook.com/mnsaiconsultants",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/mnsai",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/923324452894",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mnsai",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isServicesActive = serviceDropdown.some((s) => pathname === s.href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── Top Bar (desktop only) ─────────────────────────────────── */}
      <div className="hidden md:block bg-navy-900 border-b border-navy-700/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5 text-xs text-gray-400">
            <a href="tel:+923324452894" className="flex items-center gap-1.5 hover:text-gold-500 transition-colors duration-200">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +92-332-4452894
            </a>
            <a href="mailto:ceo@mnsai.com" className="flex items-center gap-1.5 hover:text-gold-500 transition-colors duration-200">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ceo@mnsai.com
            </a>
            <span className="text-navy-600">|</span>
            <span className="text-gray-500">Mon–Sat: 9:00 AM – 6:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            {topSocials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gold-500 transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Navbar ────────────────────────────────────────────── */}
      <div className="bg-navy-800/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[96px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-12 h-12 relative">
                <Image
                  src="/images/logo.png"
                  alt="MNSAI Logo"
                  fill
                  className="object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div>
                <span className="text-white font-heading font-bold text-xl leading-tight block">
                  MNSAI
                </span>
                <span className="text-gold-500 text-xs font-medium tracking-wider">
                  (SMC-PRIVATE) LIMITED
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">

              {/* Home */}
              <Link
                href="/"
                className={`nav-link font-medium text-sm tracking-wide transition-colors duration-200 ${
                  pathname === "/" ? "text-gold-500 active" : "text-gray-300 hover:text-gold-500"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`nav-link flex items-center gap-1 font-medium text-sm tracking-wide transition-colors duration-200 ${
                    isServicesActive ? "text-gold-500 active" : "text-gray-300 hover:text-gold-500"
                  }`}
                >
                  Services
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-navy-900 border border-navy-700 rounded-xl shadow-2xl py-2 z-50">
                    {serviceDropdown.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                          s.href === "/services"
                            ? "border-t border-navy-700 mt-1 pt-3 font-semibold text-gold-500 hover:text-gold-400"
                            : "text-gray-300 hover:bg-navy-800 hover:text-gold-500"
                        }`}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other nav links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link font-medium text-sm tracking-wide transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-gold-500 active"
                      : "text-gray-300 hover:text-gold-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link href="/contact" className="btn-primary text-sm">
                Get in Touch
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-1 border-t border-navy-700/50 bg-navy-800">
            <div className="max-w-7xl mx-auto px-4 w-full pt-2">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`block font-medium py-2.5 text-sm border-b border-navy-700/50 transition-colors duration-200 ${
                  pathname === "/" ? "text-gold-500" : "text-gray-300 hover:text-gold-500"
                }`}
              >
                Home
              </Link>
              <div className="border-b border-navy-700/50">
                <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase py-2.5">Services</p>
                {serviceDropdown.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block pl-3 py-2 text-sm transition-colors duration-200 ${
                      pathname === s.href ? "text-gold-500" : "text-gray-400 hover:text-gold-500"
                    }`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block font-medium py-2.5 text-sm border-b border-navy-700/50 transition-colors duration-200 ${
                    pathname === link.href ? "text-gold-500" : "text-gray-300 hover:text-gold-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary text-sm text-center mt-3 block">
                Get in Touch
              </Link>
              {/* Mobile contact info */}
              <div className="mt-4 pt-3 border-t border-navy-700/50 flex flex-col gap-1.5 text-xs text-gray-500">
                <a href="tel:+923324452894" className="hover:text-gold-500 transition-colors">📞 +92-332-4452894</a>
                <a href="mailto:ceo@mnsai.com" className="hover:text-gold-500 transition-colors">✉ ceo@mnsai.com</a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
