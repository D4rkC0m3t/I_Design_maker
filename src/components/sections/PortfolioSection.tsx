"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Retail", "Corporate", "Hospitality", "Healthcare", "Education", "Real Estate"];

const projects = [
  {
    id: 1,
    title: "Global Tech Park Signage",
    category: "Corporate",
    client: "Brigade Enterprises",
    location: "Bengaluru, Karnataka",
    services: ["3D Letter Signage", "Wayfinding Systems", "ACP Cladding"],
    time: "4 Weeks",
    image: "https://images.pexels.com/photos/8242177/pexels-photo-8242177.jpeg?auto=format&fit=crop&q=80&w=1200",
    desc: "Complete exterior branding and interior wayfinding system for a 2-million sq.ft corporate park, featuring highly durable materials and smart LED illumination."
  },
  {
    id: 2,
    title: "Nexus Mall Retail Facade",
    category: "Retail",
    client: "Phoenix Marketcity",
    location: "Mumbai, Maharashtra",
    services: ["LED Signage", "Retail Branding", "Digital Displays"],
    time: "3 Weeks",
    image: "https://images.pexels.com/photos/16218522/pexels-photo-16218522.jpeg?auto=format&fit=crop&q=80&w=1200",
    desc: "High-impact entrance arch and digital display integration for one of the city's largest shopping destinations, increasing footfall visibility by 40%."
  },
  {
    id: 3,
    title: "Apollo Hospital Wayfinding",
    category: "Healthcare",
    client: "Narayana Health",
    location: "Bengaluru, Karnataka",
    services: ["Wayfinding Systems", "Acrylic Fabrication", "Indoor Signage"],
    time: "6 Weeks",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    desc: "A comprehensive, highly legible directional signage network designed specifically to reduce patient anxiety and improve hospital navigation."
  },
  {
    id: 4,
    title: "The Grand Heritage Hotel Branding",
    category: "Hospitality",
    client: "Royal Orchid Hotels",
    location: "Jaipur, Rajasthan",
    services: ["Backlit Signage", "Lobby Branding", "Exterior Façade"],
    time: "5 Weeks",
    image: "https://images.pexels.com/photos/34943854/pexels-photo-34943854.jpeg?auto=format&fit=crop&q=80&w=1200",
    desc: "Premium exterior and interior signage suite for a 5-star heritage hotel, blending traditional aesthetics with modern LED technology for a regal arrival experience."
  },
  {
    id: 5,
    title: "Presidency University Campus Wayfinding",
    category: "Education",
    client: "Presidency University",
    location: "Bengaluru, Karnataka",
    services: ["Wayfinding Systems", "Outdoor Signage", "Room Numbering"],
    time: "8 Weeks",
    image: "https://images.pexels.com/photos/17854459/pexels-photo-17854459.jpeg?auto=format&fit=crop&q=80&w=1200",
    desc: "Full campus-wide directional signage overhaul for a 200-acre university, including digital directories, building markers, and accessible wayfinding."
  },
  {
    id: 6,
    title: "Prestige Lakeside Habitat Signage",
    category: "Real Estate",
    client: "Prestige Group",
    location: "Bengaluru, Karnataka",
    services: ["3D Letter Signage", "Gate Branding", "Directional Signage"],
    time: "6 Weeks",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
    desc: "Grand entrance gate branding and full community wayfinding system for a premium 50-acre residential township, creating a strong first impression for homebuyers."
  }
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState("All");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const getCategoryCount = (cat: string) => 
    cat === "All" ? projects.length : projects.filter(p => p.category === cat).length;

  return (
    <section id="portfolio" className="py-24 bg-[#F0F0F0] relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`flex flex-col md:flex-row justify-between items-end mb-16 gap-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-4 block">
              Featured Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111111]">
              Our Premium <span className="text-[#FFB400]">Projects</span>
            </h2>
          </div>
          <Link href="/projects" className="hidden md:flex btn-gold px-6 py-3 rounded-full text-sm">
            View All Projects
          </Link>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap gap-2 md:gap-3 mb-4 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {categories.map((cat) => {
            const count = getCategoryCount(cat);
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#111111] text-white shadow-md"
                    : "bg-white text-[#555] border border-black/5 hover:border-[#FFB400]/50 hover:text-[#111]"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className={`ml-1.5 text-xs ${filter === cat ? "text-white/60" : "text-[#999]"}`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {filter !== "All" && (
          <p className="text-sm text-[#888] mb-8">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} in {filter}
          </p>
        )}

        {/* Case Studies */}
        <div className="space-y-12">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-[#F0F0F0] flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <p className="text-[#555] text-lg font-medium mb-2">No projects in this category yet</p>
              <p className="text-[#888] text-sm">Check back soon — we&apos;re constantly expanding our portfolio.</p>
            </div>
          ) : (
          filteredProjects.map((project, i) => {
            const directions = ["-translate-x-24", "translate-y-24", "translate-x-24", "-translate-y-24"];
            const dir = directions[i % directions.length];
            return (
            <div 
              key={project.id}
              className={`bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm group transition-all duration-700 ${inView ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${dir}`}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="grid lg:grid-cols-[7fr_3fr]">
                {/* Image Side — 70% */}
                <div className="relative h-80 lg:h-[500px] overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#111]">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.services.map(svc => (
                      <span key={svc} className="text-xs px-3 py-1 bg-black/50 backdrop-blur-sm text-white/90 rounded-full border border-white/10">
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Side — 30% */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="font-display text-2xl md:text-3xl text-[#111111] mb-1">{project.title}</h3>
                  <p className="text-[#FFB400] text-sm font-semibold mb-3">{project.client}</p>
                  <p className="text-[#555] text-sm leading-relaxed mb-6 line-clamp-3">{project.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-y-4 gap-x-3 mb-6">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#888] font-semibold mb-0.5">Client</div>
                      <div className="text-sm font-bold text-[#111]">{project.client}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#888] font-semibold mb-0.5">Location</div>
                      <div className="text-sm font-medium text-[#111]">{project.location}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#888] font-semibold mb-0.5">Timeline</div>
                      <div className="text-sm font-medium text-[#111]">{project.time}</div>
                    </div>
                  </div>

                  <Link href="/projects" className="self-start flex items-center gap-2 text-sm font-bold text-[#111] hover:text-[#FFB400] transition-colors border-b-2 border-transparent hover:border-[#FFB400] pb-1">
                    View Full Case Study
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          );
          })
          )}
        </div>
        
        <Link href="/projects" className="md:hidden mt-8 w-full btn-gold px-6 py-4 rounded-xl text-sm font-semibold text-center block">
          View All Projects
        </Link>
      </div>
    </section>
  );
}
