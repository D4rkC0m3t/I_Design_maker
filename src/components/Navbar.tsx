"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSmoothScroll } from "@/components/SmoothScroll";

const leftLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "Projects", href: "/projects" },
];

const rightLinks = [
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollTo, scrollY } = useSmoothScroll();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  const scrolled = scrollY > 60;

  useEffect(() => {
    if (!menuOpen) return;
    const menu = menuRef.current;
    if (!menu) return;
    const focusableEls = menu.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];
    firstEl?.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl?.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl?.focus();
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/")) {
      router.push(href);
    } else if (typeof window !== "undefined" && window.location.pathname === "/") {
      scrollTo(href);
    } else {
      router.push("/" + href);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-black/[0.06] py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "py-5 bg-transparent"
        }`}
      >
        {/* Desktop — true center architecture */}
        <div className="hidden md:grid max-w-[1400px] mx-auto px-10 items-center" style={{ gridTemplateColumns: "1fr auto 1fr" }}>

          {/* Left navigation */}
          <div className="flex items-center justify-end gap-12 pr-12">
            {leftLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className={`text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-300 ${
                  scrolled ? "text-[#666] hover:text-[#111]" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Center logo — the anchor */}
          <Link
            href="/"
            className="flex items-center justify-center group px-12 select-none"
          >
            <Image
              src="/logo.png"
              alt="I DESIGN MAKER"
              width={240}
              height={96}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Right navigation + CTA */}
          <div className="flex items-center justify-start gap-12 pl-12">
            {rightLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className={`text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-300 ${
                  scrolled ? "text-[#666] hover:text-[#111]" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className={`ml-4 px-6 py-2.5 rounded-full text-[12px] font-semibold tracking-[0.1em] uppercase transition-all duration-300 ${
                scrolled
                  ? "bg-[#111] text-white hover:bg-[#FFB400] hover:text-[#111]"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-[#111]"
              }`}
            >
              Get Quote
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="max-w-7xl mx-auto px-6 md:hidden flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.png"
              alt="I DESIGN MAKER"
              width={200}
              height={80}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <button
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block h-[1.5px] bg-[#111] transition-all duration-300 ${menuOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"}`} />
            <span className={`block h-[1.5px] bg-[#111] transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-3.5"}`} />
            <span className={`block h-[1.5px] bg-[#111] transition-all duration-300 ${menuOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(24px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {[...leftLinks, ...rightLinks].map((link, i) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="font-display text-3xl tracking-[0.06em] text-[#111] hover:text-[#FFB400] transition-colors duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="btn-gold px-10 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase mt-6"
          >
            Get Quote
          </button>
        </div>
      </div>
    </>
  );
}
