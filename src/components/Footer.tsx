"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSmoothScroll } from "@/components/SmoothScroll";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "/projects" },
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "LED Signage", href: "#services" },
  { label: "ACP Cladding", href: "#services" },
  { label: "3D Letter Signage", href: "#services" },
  { label: "Retail Branding", href: "#services" },
  { label: "Wayfinding Systems", href: "#services" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { scrollTo } = useSmoothScroll();
  const router = useRouter();

  const handleLink = (href: string) => {
    if (href.startsWith("/")) {
      router.push(href);
    } else if (window.location.pathname === "/") {
      scrollTo(href);
    } else {
      router.push("/" + href);
    }
  };

  return (
    <footer className="bg-[#111111] border-t border-[#222] pt-24 pb-10 text-[#888]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-20">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FFB400] to-[#E6A200] flex items-center justify-center">
                <span className="font-display text-white text-lg leading-none">ID</span>
              </div>
              <div>
                <div className="font-display text-white text-xl leading-none tracking-wider">I DESIGN</div>
                <div className="font-display text-[#FFB400] text-xl leading-none tracking-widest">MAKER</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              India&apos;s premium signage and brand visibility partner. We build iconic landmarks that command attention and drive business results.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.instagram.com/idesignmaker" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#333] hover:border-[#FFB400] hover:text-[#FFB400] flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.facebook.com/idesignmaker" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#333] hover:border-[#FFB400] hover:text-[#FFB400] flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/idesignmaker" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#333] hover:border-[#FFB400] hover:text-[#FFB400] flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Quick Links</h4>
            <nav aria-label="Quick links">
              <ul className="space-y-4 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link href={link.href} className="hover:text-[#FFB400] transition-colors">{link.label}</Link>
                    ) : (
                      <button onClick={() => handleLink(link.href)} className="hover:text-[#FFB400] transition-colors text-left">{link.label}</button>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Services</h4>
            <nav aria-label="Service links">
              <ul className="space-y-4 text-sm">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <button onClick={() => handleLink(link.href)} className="hover:text-[#FFB400] transition-colors text-left">{link.label}</button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Reach Out</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#FFB400] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>1st Main Rd, Sharada Colony, BEML Layout, Kamakshipalya, Bengaluru 560079</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#FFB400] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+919845572653" className="hover:text-[#FFB400] transition-colors">+91 98455 72653</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#FFB400] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:hello@idesignmaker.com" className="hover:text-[#FFB400] transition-colors">hello@idesignmaker.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width={20} height={20} className="w-4 h-4" />
            <span className="font-semibold text-white">4.9/5 Rating</span>
            <span className="text-[#666]">(500+ Reviews)</span>
          </div>
          <div>
            &copy; {currentYear} I Design Maker. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
