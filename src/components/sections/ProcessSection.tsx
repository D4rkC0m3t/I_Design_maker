"use client";
import { useInView } from "react-intersection-observer";

const processes = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We analyze your brand, location, and requirements to propose the most effective signage strategy.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
    ),
  },
  {
    num: "02",
    title: "Design & Prototyping",
    desc: "Our design team creates 3D renders and detailed CAD drawings for your approval before production.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" /></svg>
    ),
  },
  {
    num: "03",
    title: "In-house Manufacturing",
    desc: "Using state-of-the-art CNC, Laser, and fabrication machinery to build your signage with precision.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>
    ),
  },
  {
    num: "04",
    title: "Professional Installation",
    desc: "Our trained technicians ensure safe, structural, and visually perfect installation at your site.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
    ),
  },
  {
    num: "05",
    title: "Maintenance & Support",
    desc: "We provide ongoing support and warranty maintenance to keep your brand shining bright.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.384 5.384a2.025 2.025 0 01-2.864-2.864l5.384-5.384m2.864 2.864L18.5 6.5a2.025 2.025 0 00-2.864-2.864L8.252 8.522m5.908 5.908l2.864-2.864" /><circle cx="12" cy="12" r="3" strokeWidth={1.5} /></svg>
    ),
  },
];

export default function ProcessSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent z-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-4 block">
            How We Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111111] mb-6">
            From Concept To <span className="text-[#FFB400]">Landmark</span>
          </h2>
          <p className="text-[#555] text-lg max-w-2xl mx-auto">
            A seamless, transparent process ensuring precision quality from the drawing board to final installation.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#FFB400]/0 via-[#FFB400]/30 to-[#FFB400]/0" />

          <div className="space-y-12 md:space-y-16">
            {processes.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.num}
                  className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Mobile */}
                  <div className="md:hidden flex items-start gap-5">
                    <div className="shrink-0 w-14 h-14 rounded-full bg-white border border-[#FFB400]/30 shadow-[0_4px_20px_rgba(255,180,0,0.1)] flex items-center justify-center relative z-10">
                      <div className="absolute inset-2 rounded-full bg-[#FFB400]/10 flex items-center justify-center text-[#FFB400]">
                        {step.icon}
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="text-xs font-bold text-[#FFB400] tracking-widest mb-1">{step.num}</div>
                      <h3 className="font-display text-2xl text-[#111111] mb-3">{step.title}</h3>
                      <p className="text-[#555] text-base leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Desktop */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 md:items-center">
                    <div className={isEven ? "text-right" : ""}>
                      {isEven ? (
                        <div className="pr-4">
                          <div className="text-xs font-bold text-[#FFB400] tracking-widest mb-1">{step.num}</div>
                          <h3 className="font-display text-2xl text-[#111111] mb-3">{step.title}</h3>
                          <p className="text-[#555] text-base leading-relaxed">{step.desc}</p>
                        </div>
                      ) : <div className="pr-4" />}
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white border border-[#FFB400]/30 shadow-[0_4px_20px_rgba(255,180,0,0.1)] flex items-center justify-center relative z-10">
                        <div className="absolute inset-2 rounded-full bg-[#FFB400]/10 flex items-center justify-center text-[#FFB400]">
                          {step.icon}
                        </div>
                      </div>
                    </div>

                    <div>
                      {!isEven ? (
                        <div className="pl-4">
                          <div className="text-xs font-bold text-[#FFB400] tracking-widest mb-1">{step.num}</div>
                          <h3 className="font-display text-2xl text-[#111111] mb-3">{step.title}</h3>
                          <p className="text-[#555] text-base leading-relaxed">{step.desc}</p>
                        </div>
                      ) : <div className="pl-4" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
