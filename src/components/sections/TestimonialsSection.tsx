"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const testimonials = [
  {
    name: "Arjun Ravindra",
    role: "Facilities Director",
    company: "Prestige Tech Park, Bengaluru",
    image: "https://images.pexels.com/photos/3400573/pexels-photo-3400573.jpeg?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "I Design Makers transformed our entire tech park facade. The quality of the ACP cladding and the LED illumination is absolutely world-class. They handled a 200,000 sq.ft project without a single delay.",
  },
  {
    name: "Meera Suresh",
    role: "Admin Head",
    company: "Narayana Health, Bengaluru",
    image: "https://images.pexels.com/photos/17450829/pexels-photo-17450829.jpeg?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "The wayfinding system they designed for our new wing is intuitive and premium. Their team was professional, adhered to timelines, and the finish is flawless. Patient feedback has been outstanding.",
  },
  {
    name: "Karthik Menon",
    role: "CEO",
    company: "Elevate Builders, Bengaluru",
    image: "https://images.pexels.com/photos/17866100/pexels-photo-17866100.jpeg?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "We needed a massive 3D letter sign for our building rooftop in Whitefield. They handled the structural engineering and manufacturing perfectly. It is now a recognized landmark in the area.",
  },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="testimonials" className="py-24 bg-[#FAFAFA] relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-4 block">
            Client Success Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111111] mb-6">
            Don&apos;t Just Take <br className="hidden md:block" /> Our <span className="text-[#FFB400]">Word</span> For It.
          </h2>
          <p className="text-[#555] text-lg max-w-2xl mx-auto">
            Over 500+ brands across India trust us with their most valuable asset — their visibility.
          </p>
        </div>

        {/* Google Reviews Badge */}
        <div className={`flex justify-center mb-12 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-6 bg-white rounded-2xl border border-black/5 shadow-sm px-8 py-5">
            <div className="flex items-center gap-3">
              <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
              </svg>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-bold text-[#111]">4.9</span>
                  <div className="flex text-[#FFB400]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-[#888] font-medium">Based on 150+ Google Reviews</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-black/10" />
            <div className="hidden sm:flex items-center gap-3">
              <span className="text-sm font-semibold text-[#111]">Trusted by 500+ Brands</span>
              <span className="text-xs text-[#888]">PAN India</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className={`bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              {/* Quote mark */}
              <div className="text-[#FFB400]/20 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10.667 12c-1.839 0-3.333 1.494-3.333 3.333v2.667h2.667a1.333 1.333 0 011.333 1.333v4A1.333 1.333 0 0110 24.667H6a1.333 1.333 0 01-1.333-1.333V14.667c0-4.411 3.589-8 8-8h2v2.667h-2c-1.103 0-2 .897-2 2v.667zM25.333 12c-1.839 0-3.333 1.494-3.333 3.333v2.667h2.667a1.333 1.333 0 011.333 1.333v4a1.333 1.333 0 01-1.333 1.333H22a1.333 1.333 0 01-1.333-1.333V14.667c0-4.411 3.589-8 8-8h2v2.667h-2c-1.103 0-2 .897-2 2v.667z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 text-[#FFB400] mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <svg key={idx} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#333] text-[15px] leading-relaxed mb-8 min-h-[120px]">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-black/5">
                <Image 
                  src={t.image} 
                  alt={t.name} 
                  width={80}
                  height={80}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FFB400]/20"
                />
                <div>
                  <div className="text-sm font-bold text-[#111]">{t.name}</div>
                  <div className="text-xs text-[#888]">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
