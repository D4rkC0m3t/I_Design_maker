"use client";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const transformations = [
  {
    id: 1,
    title: "Corporate Office Tower",
    location: "Bengaluru",
    client: "Prestige Group",
    scope: "Exterior LED Signage + ACP Facade",
    result: "40% increase in brand visibility",
    before: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1600",
    after: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 2,
    title: "Shopping Mall Entrance",
    location: "Mumbai",
    client: "Phoenix Marketcity",
    scope: "3D Letter Signage + Digital Displays",
    result: "60% more footfall visibility",
    before: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    after: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 3,
    title: "Hospital Reception Area",
    location: "Bengaluru",
    client: "Narayana Health",
    scope: "Wayfinding + Indoor Signage",
    result: "90% improvement in patient navigation",
    before: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600",
    after: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1600",
  },
];

function Slider({ before, after, title }: { before: string; after: string; title: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };
    const onMouseUp = () => setIsDragging(false);
    const onTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchend", onTouchEnd);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isDragging]);

  useEffect(() => {
    return () => { setIsDragging(false); };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-black/10"
      onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
      onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
    >
      {/* After Image (Background) */}
      <Image 
        src={after} 
        alt={`After - ${title}`} 
        width={1600}
        height={900}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-6 left-6 bg-[#FFB400] text-black px-5 py-2.5 rounded-full font-bold text-sm shadow-lg z-10">
        After — I DESIGN MAKER
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <Image 
          src={before} 
          alt={`Before - ${title}`} 
          width={1600}
          height={900}
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm text-white px-5 py-2.5 rounded-full font-bold text-sm z-10">
          Before Branding
        </div>
      </div>

      {/* Slider Handle — bigger, more obvious */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.4)] text-[#111] border-2 border-[#FFB400]">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
          </svg>
        </div>
      </div>

      {/* Drag hint arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full font-semibold flex items-center gap-2 pointer-events-none">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
        Drag to Compare
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const t = transformations[activeTab];

  return (
    <section id="transformation" className="py-24 bg-[#FAFAFA] relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-4 block">
            Impact Assured
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111111] mb-6">
            See The <span className="text-[#FFB400]">Transformation</span>
          </h2>
          <p className="text-[#555] text-lg max-w-2xl mx-auto">
            Witness how our bespoke signage and cladding solutions turn ordinary spaces into iconic brand landmarks.
          </p>
        </div>

        {/* Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {transformations.map((tr, i) => (
            <button
              key={tr.id}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === i
                  ? "bg-[#111111] text-white shadow-md"
                  : "bg-white text-[#555] border border-black/5 hover:border-[#FFB400]/50 hover:text-[#111]"
              }`}
            >
              {tr.title}
              <span className="hidden sm:inline text-xs ml-2 opacity-50">{tr.location}</span>
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <Slider 
            key={activeTab}
            before={t.before}
            after={t.after}
            title={t.title}
          />
        </div>

        {/* Project info below slider */}
        <div className={`mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#888] font-semibold mb-1">Client</div>
            <div className="text-sm font-bold text-[#111]">{t.client}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#888] font-semibold mb-1">Location</div>
            <div className="text-sm font-bold text-[#111]">{t.location}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#888] font-semibold mb-1">Scope</div>
            <div className="text-sm font-medium text-[#111]">{t.scope}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#888] font-semibold mb-1">Result</div>
            <div className="text-sm font-bold text-[#FFB400]">{t.result}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
