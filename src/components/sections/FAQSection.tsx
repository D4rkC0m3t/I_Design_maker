"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSmoothScroll } from "@/components/SmoothScroll";

const faqs = [
  {
    q: "What types of signage do you manufacture?",
    a: "We manufacture LED signs, 3D letter signage, ACP cladding, neon signs, wayfinding systems, digital displays, retail branding, vehicle wraps, and custom fabrication projects. Everything is built in-house at our 10,000 sq.ft facility in Bengaluru.",
  },
  {
    q: "How long does a typical signage project take?",
    a: "Standard projects take 2–4 weeks from design approval to installation. Complex projects like full-facade rebranding or multi-location rollouts may take 4–8 weeks. We provide a detailed timeline during the quotation stage.",
  },
  {
    q: "Do you handle installation across India?",
    a: "Yes. We have a dedicated in-house installation team and have completed projects in 12+ states including Karnataka, Maharashtra, Tamil Nadu, Telangana, Delhi NCR, Kerala, and Gujarat.",
  },
  {
    q: "What warranty do you offer?",
    a: "We offer up to 5 years comprehensive warranty on all signage products, covering LEDs, electrical components, structural integrity, and finish. Warranty terms vary by material and product type.",
  },
  {
    q: "Can I get a free quote and site visit?",
    a: "Absolutely. We offer free consultations, site visits, and quotations with no obligation. Contact us via WhatsApp, phone, or our online form and we will respond within 24 hours.",
  },
  {
    q: "Do you provide design and 3D renders before production?",
    a: "Yes. Every project begins with a design phase where we create detailed CAD drawings and realistic 3D renders so you can visualize the final output before we begin manufacturing.",
  },
  {
    q: "What materials do you work with?",
    a: "We work with Stainless Steel (304/316), Acrylic, ACP (Aluminum Composite Panel), Titanium finishes, Brass, Corten Steel, MS (Mild Steel), PVC, and various other architectural-grade materials.",
  },
  {
    q: "Do you offer maintenance and repair services?",
    a: "Yes. We provide ongoing maintenance, repair, and Annual Maintenance Contracts (AMC) to keep your signage in perfect condition. Our team handles everything from LED replacement to structural cleaning.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { scrollTo } = useSmoothScroll();

  return (
    <section id="faq" className="py-24 bg-[#FAFAFA] relative overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-4 block">
            Common Questions
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111111] mb-6">
            Frequently <span className="text-[#FFB400]">Asked</span>
          </h2>
          <p className="text-[#555] text-lg max-w-2xl mx-auto">
            Everything you need to know about working with I Design Maker.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border border-black/5 overflow-hidden transition-all duration-500 ${openIndex === i ? "border-[#FFB400]/30 shadow-lg" : "hover:border-black/10"} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-display text-base md:text-lg text-[#111] pr-4">{faq.q}</span>
                <svg 
                  className={`w-5 h-5 text-[#FFB400] shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-60" : "max-h-0"}`}>
                <p className="px-6 pb-6 text-[#555] text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#888] text-sm mb-4">Still have questions?</p>
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-gold px-8 py-3.5 rounded-full text-sm font-semibold"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
