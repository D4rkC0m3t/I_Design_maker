"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { useSmoothScroll } from "@/components/SmoothScroll";
import Image from "next/image";

const slides = [
  { type: "image" as const, src: "/Hero section/Hero 2.jpg", alt: "Signage assembly and first light-up" },
  { type: "image" as const, src: "/Hero section/Hero 3.jpg", alt: "Signage transport and delivery" },
  { type: "image" as const, src: "/Hero section/Hero 4.jpg", alt: "Crane installation and lifting" },
  { type: "image" as const, src: "/Hero section/Hero 5.jpg", alt: "Final mounting and reveal" },
  { type: "video" as const, src: "https://cdn.pixabay.com/video/2021/09/11/88226-606079087_large.mp4", poster: "https://cdn.pixabay.com/video/2021/09/11/88226-606079087_tiny.jpg" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollTo } = useSmoothScroll();

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  useEffect(() => {
    if (slides[current].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [current]);

  const isVideo = slides[current].type === "video";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Carousel background */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => {
          if (slide.type === "image") {
            const isVisible = i === current || i === (current + 1) % slides.length || i === (current + slides.length - 1) % slides.length;
            if (!isVisible) return <div key={i} className="absolute inset-0" style={{ opacity: 0 }} />;
            return (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={i <= 1}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            );
          }
          return (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                poster={slide.poster}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-[#111111]/50" />
        <div className="absolute inset-0 bg-[#111111]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-4xl">
          <div
            className="inline-flex items-center gap-2 glass-gold px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-8"
            style={{ animation: "fadeInUp 0.8s ease both" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB400] animate-pulse" />
            In-House Manufacturing • Pan India Installation
          </div>

          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] mb-4 tracking-tight"
            style={{ animation: "fadeInUp 0.8s ease 0.2s both" }}
          >
            Bengaluru's Premium{" "}
            <span className="text-gradient-gold">Signage &amp; Branding</span>{" "}
            Partner
          </h1>

          <p
            className="text-[#C0C0C0] text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-6 max-w-3xl"
            style={{ animation: "fadeInUp 0.8s ease 0.4s both" }}
          >
            End-to-End Design, Manufacturing &amp; Installation for Retail, Corporate &amp; Commercial Brands.
          </p>

          {/* Trust pills above fold */}
          <div
            className="flex flex-wrap gap-3 mb-8"
            style={{ animation: "fadeInUp 0.8s ease 0.45s both" }}
          >
            {["500+ Projects Delivered", "10+ Years Experience", "PAN India Installation", "In-House Manufacturing"].map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/90 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full"
              >
                <svg className="w-3.5 h-3.5 text-[#FFB400] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {pill}
              </span>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-5 mb-16"
            style={{ animation: "fadeInUp 0.8s ease 0.6s both" }}
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-gold px-12 py-6 rounded-full text-lg font-bold shadow-[0_10px_50px_rgba(255,180,0,0.4)] hover:shadow-[0_15px_60px_rgba(255,180,0,0.5)] transition-shadow"
            >
              Get Free Quote
            </button>
            <button
              onClick={() => scrollTo("#portfolio")}
              className="px-10 py-6 rounded-full text-lg font-semibold tracking-wide text-white border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              View Projects
            </button>
          </div>

          {/* Trust stats — dark glass pill cards */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            style={{ animation: "fadeInUp 0.8s ease 0.8s both" }}
          >
            {[
              { num: "1500+", label: "Projects Delivered" },
              { num: "4.9★", label: "Google Rating" },
              { num: "72hr", label: "Quotation TAT" },
              { num: "12+", label: "States Served" },
            ].map((stat, i) => (
              <div key={i} className="text-center bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-5">
                <div className="font-display text-3xl lg:text-4xl text-white mb-1 leading-none">{stat.num}</div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-white/70 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Certifications row */}
          <div
            className="flex flex-wrap items-center justify-center gap-2 mt-6"
            style={{ animation: "fadeInUp 0.8s ease 0.9s both" }}
          >
            {[
              "ISO 9001:2015 Certified",
              "GST Registered",
              "In-House Manufacturing",
              "Professional Installation",
              "Up to 5 Year Warranty",
            ].map((cert) => (
              <span key={cert} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-white/70">
                <span className="text-[#FFB400]">✓</span>
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel navigation dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? "w-8 h-2 bg-[#FFB400]"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase font-semibold">
        <span className={`text-sm font-display ${isVideo ? "text-white/70" : "text-[#FFB400]"}`}>
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="w-6 h-px bg-white/30" />
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>

      {/* Scroll indicator */}
      <button
        className="absolute bottom-10 left-10 hidden md:flex items-center gap-4 text-[#888] group z-20"
        onClick={() => scrollTo("#trust")}
        aria-label="Scroll to content"
      >
        <span className="text-xs tracking-widest uppercase font-semibold group-hover:text-white transition-colors">Scroll</span>
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FFB400] transition-colors">
          <svg className="w-4 h-4 group-hover:text-[#FFB400]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </button>
    </section>
  );
}
