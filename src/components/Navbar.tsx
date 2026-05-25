"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceDropdown = [
  { label: "Virtual CFO Services", href: "/virtual-cfo" },
  { label: "IFRS Advisory", href: "/ifrs-advisory" },
  { label: "Financial Modeling", href: "/financial-modeling" },
  { label: "Startup Advisory", href: "/startup-advisory" },
  { label: "All Services", href: "/services" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Clients", href: "/clients" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isServicesActive = serviceDropdown.some((s) => pathname === s.href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
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
              <span className="text-gold-400 text-xs font-medium tracking-wider">
                (SMC-PRIVATE) LIMITED
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`font-medium text-sm tracking-wide transition-colors duration-200 ${
                pathname === "/" ? "text-gold-400 border-b-2 border-gold-400 pb-0.5" : "text-gray-300 hover:text-gold-400"
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
                className={`flex items-center gap-1 font-medium text-sm tracking-wide transition-colors duration-200 ${
                  isServicesActive ? "text-gold-400 border-b-2 border-gold-400 pb-0.5" : "text-gray-300 hover:text-gold-400"
                }`}
              >
                Services
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {serviceDropdown.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                        s.href === "/services"
                          ? "border-t border-gray-100 mt-1 pt-3 font-semibold text-navy-800 hover:text-gold-500"
                          : "text-gray-700 hover:bg-gray-50 hover:text-navy-800"
                      }`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium text-sm tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-gold-400 border-b-2 border-gold-400 pb-0.5"
                    : "text-gray-300 hover:text-gold-400"
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

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`font-medium py-2.5 text-sm border-b border-navy-700 transition-colors duration-200 ${
                pathname === "/" ? "text-gold-400" : "text-gray-300 hover:text-gold-400"
              }`}
            >
              Home
            </Link>
            <div className="border-b border-navy-700">
              <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase py-2.5">Services</p>
              {serviceDropdown.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block pl-3 py-2 text-sm transition-colors duration-200 ${
                    pathname === s.href ? "text-gold-400" : "text-gray-400 hover:text-gold-400"
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
                className={`font-medium py-2.5 text-sm border-b border-navy-700 transition-colors duration-200 ${
                  pathname === link.href ? "text-gold-400" : "text-gray-300 hover:text-gold-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-sm text-center mt-3">
              Get in Touch
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
