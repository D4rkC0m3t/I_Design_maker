"use client";
import { useInView } from "react-intersection-observer";

const comparisons = [
  { feature: "In-house Manufacturing", us: true, them: false },
  { feature: "Design & 3D Renders", us: "Free with every project", them: "Charged separately" },
  { feature: "Installation Team", us: "Dedicated in-house crew", them: "Freelance contractors" },
  { feature: "Quality Certification", us: "ISO 9001:2015", them: "No certification" },
  { feature: "Warranty", us: "Up to 5 Years", them: "None or limited" },
  { feature: "Emergency Support", us: "24/7 Priority Response", them: "Not available" },
  { feature: "Maintenance Contract", us: "AMC Available", them: "Not offered" },
  { feature: "Pan-India Service", us: "12+ States Direct", them: "Local only" },
];

export default function WhyChooseUsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-4 block">
            The I Design Maker Advantage
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111111] mb-6">
            I Design Maker <span className="text-[#FFB400]">vs</span> Typical Vendor
          </h2>
          <p className="text-[#555] text-lg max-w-2xl mx-auto">
            See why 500+ businesses choose us over local signage vendors.
          </p>
        </div>

        <div className={`max-w-5xl mx-auto rounded-3xl border border-black/10 overflow-hidden shadow-2xl transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {/* Header Row */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-black/10">
            <div className="p-5 md:p-6 font-semibold text-[#888] uppercase tracking-wider text-xs md:text-sm flex items-center">
              Feature
            </div>
            <div className="p-5 md:p-6 bg-[#111111] text-white font-bold text-sm md:text-base text-center flex items-center justify-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#FFB400] flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-[#111]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              </div>
              I Design Maker
            </div>
            <div className="p-5 md:p-6 bg-[#F5F5F5] font-semibold text-[#999] text-xs md:text-sm text-center flex items-center justify-center">
              Typical Vendor
            </div>
          </div>

          {/* Data Rows */}
          {comparisons.map((row, i) => (
            <div 
              key={i} 
              className={`grid grid-cols-[1.2fr_1fr_1fr] border-b border-black/5 last:border-b-0 transition-colors hover:bg-[#FAFAFA] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]/50"}`}
            >
              <div className="p-4 md:p-5 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-black/[0.04] flex items-center justify-center text-[10px] font-bold text-[#999] shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[#555] font-medium text-xs md:text-sm">{row.feature}</span>
              </div>
              <div className="p-4 md:p-5 flex items-center justify-center gap-2.5 bg-[#FFB400]/[0.04] border-x border-[#FFB400]/10">
                <div className="w-5 h-5 rounded-full bg-[#FFB400]/20 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-[#FFB400]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <span className="font-bold text-[#111] text-xs md:text-sm text-center">
                  {typeof row.us === "boolean" ? "Yes" : row.us}
                </span>
              </div>
              <div className="p-4 md:p-5 flex items-center justify-center gap-2.5 opacity-50">
                <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-[#888] text-xs md:text-sm text-center">
                  {typeof row.them === "boolean" ? "No" : row.them}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
