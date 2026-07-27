"use client";
import { useInView } from "react-intersection-observer";
import { 
  IconBuildingStore, 
  IconBuildingSkyscraper, 
  IconCoffee, 
  IconStethoscope,
  IconSchool,
  IconBuilding,
  IconRosetteDiscountCheck,
  IconBuildingEstate,
} from "@tabler/icons-react";
import Image from "next/image";

const industries = [
  { name: "Retail", desc: "Stores, malls & showrooms", Icon: IconBuildingStore, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600" },
  { name: "Corporate", desc: "Offices & tech parks", Icon: IconBuildingSkyscraper, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" },
  { name: "Hospitality", desc: "Hotels & restaurants", Icon: IconCoffee, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600" },
  { name: "Healthcare", desc: "Hospitals & clinics", Icon: IconStethoscope, image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" },
  { name: "Education", desc: "Schools & universities", Icon: IconSchool, image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
  { name: "Real Estate", desc: "Townships & commercial", Icon: IconBuilding, image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=600" },
  { name: "Malls", desc: "Shopping centres & arcades", Icon: IconRosetteDiscountCheck, image: "https://images.pexels.com/photos/37039990/pexels-photo-37039990.jpeg?auto=format&fit=crop&q=80&w=600" },
  { name: "Restaurants", desc: "QSR, cafes & fine dining", Icon: IconBuildingEstate, image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600" },
];

export default function IndustriesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="industries" className="py-24 bg-[#FAFAFA] relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-4 block">
            Who We Serve
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111111] mb-6">
            Industries We <span className="text-[#FFB400]">Elevate</span>
          </h2>
          <p className="text-[#555] text-lg max-w-2xl mx-auto">
            Our specialized teams understand the unique branding and visibility requirements of different sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <div 
              key={ind.name}
              className={`group relative h-48 md:h-64 rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Image 
                src={ind.image} 
                alt={ind.name} 
                width={600}
                height={400}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[60%] group-hover:grayscale-0 opacity-50 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-[#111111]/70 group-hover:bg-[#111111]/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-4 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-white/[0.12] backdrop-blur-sm border border-white/20 flex items-center justify-center mb-3 group-hover:bg-[#FFB400] group-hover:border-[#FFB400] transition-colors duration-300">
                  <ind.Icon className="w-6 h-6 text-white group-hover:text-[#111]" />
                </div>
                <h3 className="font-display text-lg text-white mb-1">{ind.name}</h3>
                <p className="text-white/50 text-xs hidden md:block group-hover:text-white/80 transition-colors duration-300">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
