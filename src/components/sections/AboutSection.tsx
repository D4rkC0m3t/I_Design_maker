"use client";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";
import { useSmoothScroll } from "@/components/SmoothScroll";

const stats = [
  { num: 1500, suffix: "+", label: "Projects Completed", desc: "Delivered across India" },
  { num: 500, suffix: "+", label: "Happy Clients", desc: "Trusted by top brands" },
  { num: 10, suffix: "+", label: "Years Experience", desc: "Industry expertise" },
  { num: 25, suffix: "+", label: "Cities Served", desc: "Pan-India presence" },
];

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true, rootMargin: "0px 0px -10% 0px" });
  const { scrollTo } = useSmoothScroll();

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFB400]/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_50%,rgba(255,180,0,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <div className={`transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-4 block">
                About I Design Maker
              </span>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#0a0a0a] leading-tight mb-6">
                Crafting{" "}
                <span className="text-gradient-gold">Visibility.</span>
                <br />
                Building Brands.
              </h2>
              <p className="text-[#444] text-lg leading-relaxed mb-6">
                I DESIGN MAKER delivers complete signage, digital display, branding, printing, and
                fabrication solutions from our 10,000 sq.ft in-house manufacturing facility in Bengaluru.
              </p>
              <p className="text-[#666] text-base leading-relaxed mb-8">
                With CNC, Laser, Powder Coating, and Acrylic fabrication machinery under one roof, we handle
                everything from concept and 3D design to manufacturing and pan-India installation — ensuring
                absolute quality control at every step.
              </p>

              {/* Factory highlights */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: "🏭", text: "10,000 sq.ft Factory" },
                  { icon: "⚙️", text: "CNC + Laser Cutting" },
                  { icon: "🎨", text: "In-house Design Team" },
                  { icon: "🚛", text: "Pan India Installation" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 p-3 rounded-xl bg-[#FAFAFA] border border-black/5">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-semibold text-[#555]">{item.text}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollTo("#contact")}
                className="btn-gold px-8 py-3.5 rounded-full font-semibold text-sm"
              >
                Start Your Project →
              </button>
            </div>
          </div>

          {/* Right — image + stats */}
          <div className={`transition-all duration-1000 delay-200 ease-out ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
            <div className="relative mb-8">
              <div className="relative rounded-2xl overflow-hidden h-80">
                <Image
                  src="/portfolio-corporate.png"
                  alt="I Design Maker manufacturing"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 glass-gold rounded-xl px-5 py-3 border border-[#FFB400]/30">
                <div className="font-display text-3xl text-[#FFB400]">ISO</div>
                <div className="text-xs text-[#555]">Certified Quality</div>
              </div>
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#FFB400]/50 rounded-tr-lg" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#f9f9f9] rounded-xl p-5 border border-black/5 hover:border-[#FFB400]/40 transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="font-display text-4xl lg:text-5xl text-[#0a0a0a] font-bold mb-1">
                    {inView && <AnimatedCounter end={stat.num} suffix={stat.suffix} />}
                  </div>
                  <div className="text-[#666] text-xs tracking-widest uppercase font-semibold">{stat.label}</div>
                  <div className="text-[#888] text-xs mt-1">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
