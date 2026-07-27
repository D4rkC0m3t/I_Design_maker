"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useSmoothScroll } from "@/components/SmoothScroll";
import { useRouter } from "next/navigation";

interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  image: string;
  items: string[];
}

const categories: ServiceCategory[] = [
  {
    id: "signage",
    number: "01",
    title: "SIGNAGE",
    tagline: "Crafting iconic visual identities through premium signage systems.",
    image: "https://images.pexels.com/photos/29200640/pexels-photo-29200640.jpeg?auto=format&fit=crop&q=80&w=800",
    items: ["3D Letters", "LED Signs", "Channel Letters", "Neon Signs", "Pylons", "Light Boxes", "Wayfinding"],
  },
  {
    id: "digital",
    number: "02",
    title: "DIGITAL\nDISPLAYS",
    tagline: "Interactive visual experiences that command attention.",
    image: "https://images.pexels.com/photos/14338583/pexels-photo-14338583.jpeg?auto=format&fit=crop&q=80&w=800",
    items: ["Video Walls", "LED Screens", "Digital Kiosks", "Menu Boards", "LED Tickers", "Transparent LED"],
  },
  {
    id: "printing",
    number: "03",
    title: "PRINTING",
    tagline: "Precision printing with industry-leading technology.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    items: ["UV Printing", "HP Latex", "Vinyl Graphics", "Wallpaper", "Canvas", "ACP Panels", "Glass"],
  },
  {
    id: "laser",
    number: "04",
    title: "LASER\n& CNC",
    tagline: "Engineering accuracy at every cut.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    items: ["Metal Cutting", "Aluminum", "Acrylic", "MDF & Wood", "CNC Router", "Engraving"],
  },
  {
    id: "fabrication",
    number: "05",
    title: "FABRICATION",
    tagline: "Transforming raw materials into architectural landmarks.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200",
    items: ["Welding", "Powder Coating", "Acrylic Bending", "Vinyl Plotting", "Lamination", "Installation"],
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView({ threshold: 0.02, triggerOnce: true, rootMargin: "0px 0px -10% 0px" });
  const { scrollTo } = useSmoothScroll();
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleContact = () => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      scrollTo("#contact");
    } else {
      router.push("/#contact");
    }
  };

  return (
    <section id="services" className="relative overflow-hidden bg-[#0a0a0a]" ref={ref}>
      {/* Top gradient fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

      {/* Header */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 max-w-7xl mx-auto px-6 relative z-20">
        <div className={`transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-6 block">
            Capabilities
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] mb-6">
            What We <span className="text-[#FFB400]">Create</span>
          </h2>
          <p className="text-[#999] text-lg md:text-xl max-w-xl">
            Five core disciplines. One seamless partner.
          </p>
        </div>
      </div>

      {/* Service Cards — Clean 3x2 Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {categories.map((category, index) => (
            <div key={category.id} className="min-h-[420px] lg:min-h-[450px]">
              <ServiceCard
                category={category}
                isHovered={hoveredId === category.id}
                onHover={() => setHoveredId(category.id)}
                onLeave={() => setHoveredId(null)}
                inView={inView}
                delay={index * 100}
                onContact={handleContact}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Block */}
      <div className={`max-w-7xl mx-auto px-6 pb-32 relative z-20 transition-all duration-1000 delay-500 ease-out ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
        <div className="relative rounded-3xl overflow-hidden border border-white/[0.06]">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB400]/[0.06] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#FFB400]/[0.04] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left: Text */}
            <div className="text-center md:text-left max-w-lg">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-4 block">
                Ready to Begin?
              </span>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-[0.95] mb-4">
                Let&apos;s Build Something <span className="text-[#FFB400]">Iconic</span>
              </h3>
              <p className="text-[#999] text-sm md:text-base">
                From concept to installation — we handle every step of your signage journey with precision and care.
              </p>
            </div>

            {/* Right: CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button onClick={handleContact} className="btn-gold px-8 py-4 rounded-full text-[15px] font-bold shadow-[0_10px_40px_rgba(255,180,0,0.25)] whitespace-nowrap">
                Get Free Quote
              </button>
              <a
                href="https://wa.me/919686241411"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full text-[15px] font-semibold border border-white/10 text-white/80 hover:bg-white/5 hover:border-white/20 transition-all duration-300 whitespace-nowrap"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Bottom gold line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFB400]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ─── Individual Service Card ─── */

function ServiceCard({
  category,
  isHovered,
  onHover,
  onLeave,
  inView,
  delay,
  onContact,
}: {
  category: ServiceCategory;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  inView: boolean;
  delay: number;
  onContact: () => void;
}) {
  return (
    <div
      className={`group relative h-full min-h-[400px] md:min-h-[450px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      tabIndex={0}
      role="button"
      aria-label={`View ${category.title} services`}
    >
      {/* Background Image with Ken Burns zoom */}
      <div className="absolute inset-0">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-transform duration-[1.2s] ease-out ${isHovered ? "scale-110" : "scale-100"}`}
        />
      </div>

      {/* Dark overlay — always present, deepens on hover */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isHovered
            ? "bg-gradient-to-t from-black/90 via-black/50 to-black/20"
            : "bg-gradient-to-t from-black/80 via-black/30 to-transparent"
        }`}
      />

      {/* Gold accent line at top */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] transition-transform duration-500 origin-left ${
          isHovered ? "scale-x-100" : "scale-x-0"
        }`}
        style={{ background: "linear-gradient(90deg, #FFB400, transparent)" }}
      />

      {/* Content */}
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
        {/* Top: Number */}
        <div className="flex items-start justify-between">
          <span
            className={`font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-none transition-all duration-500 ${
              isHovered ? "text-[#FFB400]" : "text-white/10"
            }`}
          >
            {category.number}
          </span>
        </div>

        {/* Bottom: Title + tagline + reveal */}
        <div>
          {/* Title */}
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-[0.95] mb-3 whitespace-pre-line">
            {category.title}
          </h3>

          {/* Tagline — always visible */}
          <p
            className={`text-[#bbb] text-sm md:text-base max-w-md transition-all duration-500 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-60 translate-y-0"
            }`}
          >
            {category.tagline}
          </p>

          {/* Sub-services — always visible, more prominent on hover */}
          <div className="flex flex-wrap gap-2 mt-4 transition-all duration-500">
            {category.items.map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/70 backdrop-blur-sm bg-white/5 hover:border-[#FFB400]/50 hover:bg-[#FFB400]/10 hover:text-[#FFB400] transition-all duration-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Explore link */}
          <div className="mt-5 flex items-center gap-2 text-[#FFB400] text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300 cursor-pointer" onClick={(e) => { e.stopPropagation(); onContact(); }}>
            <span>Enquire Now</span>
            <svg
              className="w-4 h-4 text-[#FFB400] transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Glass border on hover */}
      <div
        className={`absolute inset-0 rounded-3xl border transition-all duration-500 pointer-events-none ${
          isHovered ? "border-white/10" : "border-transparent"
        }`}
      />
    </div>
  );
}
