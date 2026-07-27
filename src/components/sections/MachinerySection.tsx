"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useSmoothScroll } from "@/components/SmoothScroll";

const capabilities = [
  { 
    name: "Laser Cutting", 
    desc: "Precision cutting for acrylic and metal sheets with sub-millimeter accuracy.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5m-4.25-11.396c.251.023.501.05.75.082M12 21a8.966 8.966 0 005.982-2.275M12 21a8.966 8.966 0 01-5.982-2.275M15.75 3.186a24.284 24.284 0 012.028.408M6.25 3.186a24.284 24.284 0 00-2.028.408M12 3.186c1.026.134 2.028.275 3.004.426M9 3.186C7.974 3.32 6.972 3.461 5.996 3.612" />
      </svg>
    )
  },
  { 
    name: "CNC Routing", 
    desc: "Complex 3D shapes and heavy material carving with CNC precision.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.384 5.384a2.025 2.025 0 01-2.864-2.864l5.384-5.384m2.864 2.864L18.5 6.5a2.025 2.025 0 00-2.864-2.864L8.252 8.522m5.908 5.908l2.864-2.864" />
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
      </svg>
    )
  },
  { 
    name: "Acrylic Fabrication", 
    desc: "Bending, molding, and finishing high-grade acrylic to custom specifications.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-9.75 5.25-9.75-5.25 4.179-2.25" />
      </svg>
    )
  },
  { 
    name: "Metal Fabrication", 
    desc: "Welding and assembling steel, brass, and aluminum structures with precision.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    )
  },
  { 
    name: "Powder Coating", 
    desc: "Durable, weather-resistant finish for exterior signage in any color.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    )
  },
  { 
    name: "Large Format Printing", 
    desc: "High-resolution vinyl and flex printing for large-scale visual displays.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m0 0a48.159 48.159 0 018.5 0m-8.5 0V6.75a2 2 0 012-2h4.5a2 2 0 012 2v1.043" />
      </svg>
    )
  },
  { 
    name: "Installation Team", 
    desc: "Dedicated on-site installation crew with crane support for large-format signage across India.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    )
  },
];

export default function MachinerySection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { scrollTo } = useSmoothScroll();

  return (
    <section id="manufacturing" className="py-24 bg-[#111111] relative overflow-hidden" ref={ref}>
      {/* Background visual */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2000" 
          alt="Manufacturing Facility" 
          width={2000}
          height={1200}
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/90 to-[#111111]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-4 block">
            State-Of-The-Art Facility
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            In-House <span className="text-[#FFB400]">Manufacturing</span>
          </h2>
          <p className="text-[#aaa] text-lg max-w-2xl mx-auto">
            Our 10,000 sq.ft facility in Bengaluru is equipped with the latest machinery to handle projects of any scale, ensuring absolute quality control and rapid delivery.
          </p>
        </div>

        {/* Video / Main Visual */}
        <div className={`relative w-full h-64 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <Image 
            src="/InHouse Manufacturing.png" 
            alt="I Design Maker in-house manufacturing facility" 
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#111]/40 flex items-center justify-center group cursor-pointer" role="button" tabIndex={0} aria-label="View manufacturing facility" onClick={() => scrollTo("#manufacturing")} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") scrollTo("#manufacturing"); }}>
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FFB400] group-hover:border-[#FFB400] transition-all duration-300">
              <svg className="w-8 h-8 text-white group-hover:text-[#111] ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4l12 6-12 6V4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div 
              key={cap.name}
              className={`p-6 bg-white/[0.07] border border-white/[0.12] rounded-2xl hover:bg-white/[0.12] hover:border-[#FFB400]/40 transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFB400]/15 flex items-center justify-center shrink-0 text-[#FFB400]">
                  {cap.icon}
                </div>
                <div>
                  <h4 className="font-display text-lg text-white mb-2">{cap.name}</h4>
                  <p className="text-[#aaa] text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications / Trust Badges */}
        <div className={`mt-16 flex flex-wrap justify-center gap-4 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { label: "GST Registered", icon: "✓" },
            { label: "MSME Certified", icon: "✓" },
            { label: "ISO Compliant", icon: "✓" },
            { label: "Safety Certified", icon: "✓" },
            { label: "10,000 Sq.Ft Facility", icon: "✓" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/[0.05] text-white/80 text-sm font-semibold">
              <span className="text-[#FFB400]">{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </div>
      </div>

      {/* Installation Team Showcase */}
      <div className="mt-24 max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-3 block">
            On-Ground Execution
          </span>
          <h3 className="font-display text-3xl md:text-4xl text-white">
            Our Installation <span className="text-[#FFB400]">Team in Action</span>
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: "/Hero section/Hero 3.jpg", alt: "Signage transport and delivery" },
            { src: "/Hero section/Hero 4.jpg", alt: "Crane installation and lifting" },
            { src: "/Hero section/Hero 5.jpg", alt: "Final mounting and reveal" },
            { src: "/Hero section/Hero 2.jpg", alt: "Signage assembly" },
          ].map((img, i) => (
            <div
              key={i}
              className={`relative h-48 md:h-64 rounded-2xl overflow-hidden border border-white/10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
