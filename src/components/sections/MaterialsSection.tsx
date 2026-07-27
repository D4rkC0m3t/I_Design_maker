"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const materials = [
  {
    name: "Stainless Steel",
    grade: "304 / 316",
    durability: "10+ Years",
    use: "Outdoor / Premium Signage",
    finish: "Brushed / Mirror / Gold PVD",
    image: "https://images.pexels.com/photos/8853524/pexels-photo-8853524.jpeg?auto=format&fit=crop&q=80&w=600",
    warranty: "5 Years",
    advantage: "Rust-proof, weather-resistant, premium aesthetic for high-end corporate facades.",
  },
  {
    name: "Premium Acrylic",
    grade: "High-Grade Cast",
    durability: "7+ Years",
    use: "Indoor / Illuminated Signs",
    finish: "Gloss / Matte / Frost / Translucent",
    image: "https://images.pexels.com/photos/6570721/pexels-photo-6570721.jpeg?auto=format&fit=crop&q=80&w=600",
    warranty: "3 Years",
    advantage: "Light-diffusing, edge-lit capability, vibrant color options for retail branding.",
  },
  {
    name: "Aluminum Composite",
    grade: "ACP (Alucobond)",
    durability: "7+ Years",
    use: "Outdoor Facades / Cladding",
    finish: "Solid / Metallic / Wood Grain",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
    warranty: "5 Years",
    advantage: "Lightweight, rigid, weatherproof — ideal for large-format building facades.",
  },
  {
    name: "Titanium Finish",
    grade: "PVD Coated",
    durability: "10+ Years",
    use: "Luxury Hotels / Premium",
    finish: "Gold / Rose Gold / Black Mirror",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=600",
    warranty: "5 Years",
    advantage: "Scratch-resistant, anti-corrosion, museum-grade finish for luxury brands.",
  },
  {
    name: "LED Modules",
    grade: "IP68 Waterproof",
    durability: "50,000+ Hours",
    use: "Backlit / Frontlit Signage",
    finish: "White / RGB / Tunable White",
    image: "https://images.pexels.com/photos/15887092/pexels-photo-15887092.jpeg?auto=format&fit=crop&q=80&w=600",
    warranty: "2 Years",
    advantage: "Energy-efficient, uniform illumination, compatible with smart lighting controls.",
  },
  {
    name: "Brass & Copper",
    grade: "Architectural Grade",
    durability: "15+ Years",
    use: "Premium Interiors / Heritage",
    finish: "Polished / Antique / Satin / Patina",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=600",
    warranty: "5 Years",
    advantage: "Timeless elegance, develops natural patina, unmatched prestige for luxury brands.",
  },
];

export default function MaterialsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="materials" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-4 block">
            The Foundation Of Quality
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111111] mb-6">
            World-Class <span className="text-[#FFB400]">Materials</span>
          </h2>
          <p className="text-[#555] text-lg max-w-2xl mx-auto">
            We source only the highest grade architectural materials, ensuring your brand stands the test of time.
          </p>
        </div>

        {/* Material Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((mat, i) => (
            <div
              key={mat.name}
              className={`group bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={mat.image}
                  alt={mat.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <h3 className="font-display text-xl text-white font-bold drop-shadow-sm">{mat.name}</h3>
                  <span className="text-xs text-white/80 font-medium">{mat.grade}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-[#555] leading-relaxed mb-4">{mat.advantage}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#FFB400]/10 text-[#FFB400] px-2.5 py-1 rounded-full">{mat.durability}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#111]/5 text-[#555] px-2.5 py-1 rounded-full">{mat.use}</span>
                </div>

                <div className="pt-3 border-t border-black/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#888] font-semibold">Finishes</div>
                      <div className="text-xs font-medium text-[#333] mt-0.5">{mat.finish}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-[#888] font-semibold">Warranty</div>
                      <div className="text-xs font-bold text-[#FFB400] mt-0.5">{mat.warranty}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
