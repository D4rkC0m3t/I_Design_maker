"use client";
import { useInView } from "react-intersection-observer";

const stats = [
  { num: "1500+", label: "Projects", sublabel: "Delivered Across India" },
  { num: "4.9★", label: "Google Rating", sublabel: "From 500+ Reviews" },
  { num: "25+", label: "Cities", sublabel: "Pan India Presence" },
  { num: "10+", label: "Years", sublabel: "Industry Experience" },
];

const certifications = [
  { label: "ISO 9001:2015 Certified", icon: "✓" },
  { label: "GST Registered", icon: "✓" },
  { label: "In-house Manufacturing", icon: "🏭" },
  { label: "Professional Installation", icon: "👷" },
  { label: "Up to 5 Year Warranty", icon: "🛡" },
];

export default function TrustSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="trust" className="py-16 bg-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          {/* Big stat numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className={`text-center p-6 rounded-2xl bg-[#FAFAFA] border border-black/5 hover:border-[#FFB400]/40 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111111] mb-2 leading-none">{stat.num}</div>
                <div className="text-sm font-bold text-[#111] mb-0.5">{stat.label}</div>
                <div className="text-xs text-[#888]">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          {/* Certifications row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-center gap-2 bg-[#FAFAFA] border border-black/5 rounded-full px-4 py-2.5 hover:border-[#FFB400]/30 transition-colors">
                <span className="text-[#FFB400] text-sm flex-shrink-0">{cert.icon}</span>
                <span className="text-sm font-medium text-[#555] whitespace-nowrap">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
