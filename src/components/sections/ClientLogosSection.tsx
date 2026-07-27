"use client";
import { useInView } from "react-intersection-observer";

const clients = [
  "Prestige Group",
  "Narayana Health",
  "Phoenix Marketcity",
  "Brigade Enterprises",
  "Royal Orchid Hotels",
  "Manipal Hospitals",
  "Cushman & Wakefield",
  "Sobha Limited",
  "Manyata Tech Park",
  "L&T Realty",
  "Godrej Properties",
  "DLF India",
];

export default function ClientLogosSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-16 bg-white border-y border-black/5 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-3 block">
            Trusted By Industry Leaders
          </span>
          <h2 className="font-display text-2xl md:text-3xl text-[#111111]">
            Brands That Trust I Design Maker
          </h2>
        </div>
      </div>

      {/* Auto-scrolling logo marquee */}
      <div className="relative overflow-hidden mask-marquee">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="inline-flex items-center shrink-0 mx-8 md:mx-12"
            >
              <div className="flex items-center gap-4 px-8 py-4 rounded-xl border border-black/5 bg-[#FAFAFA] hover:border-[#FFB400]/40 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center shrink-0">
                  <span className="text-white text-sm font-bold">{client.charAt(0)}</span>
                </div>
                <span className="text-base font-semibold text-[#555] whitespace-nowrap">{client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <p className="text-center text-sm text-[#888]">
          And 500+ more businesses across India trust us with their brand visibility.
        </p>
      </div>
    </section>
  );
}
