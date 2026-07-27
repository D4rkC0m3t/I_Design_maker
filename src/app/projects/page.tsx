"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SmoothScroll from "@/components/SmoothScroll";

const categories = ["All", "Retail", "Corporate", "Hospitality", "Healthcare", "Education", "Real Estate", "Industrial"];

const projects = [
  {
    id: 1,
    title: "Global Tech Park Signage",
    category: "Corporate",
    location: "Bengaluru, Karnataka",
    services: ["3D Letter Signage", "Wayfinding Systems", "ACP Cladding"],
    time: "4 Weeks",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
    desc: "Complete exterior branding and interior wayfinding system for a 2-million sq.ft corporate park, featuring highly durable materials and smart LED illumination."
  },
  {
    id: 2,
    title: "Nexus Mall Retail Facade",
    category: "Retail",
    location: "Mumbai, Maharashtra",
    services: ["LED Signage", "Retail Branding", "Digital Displays"],
    time: "3 Weeks",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    desc: "High-impact entrance arch and digital display integration for one of the city's largest shopping destinations, increasing footfall visibility by 40%."
  },
  {
    id: 3,
    title: "Apollo Hospital Wayfinding",
    category: "Healthcare",
    location: "Chennai, Tamil Nadu",
    services: ["Wayfinding Systems", "Acrylic Fabrication", "Indoor Signage"],
    time: "6 Weeks",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    desc: "A comprehensive, highly legible directional signage network designed specifically to reduce patient anxiety and improve hospital navigation."
  },
  {
    id: 4,
    title: "Taj Hotel Entrance Branding",
    category: "Hospitality",
    location: "Jaipur, Rajasthan",
    services: ["3D Letter Signage", "Backlit Signage", "Gold Leaf Finish"],
    time: "5 Weeks",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    desc: "Premium illuminated entrance signage with gold-leaf finished 3D letters for a 5-star heritage hotel, blending luxury aesthetics with weather-resistant engineering."
  },
  {
    id: 5,
    title: "IIM Campus Directional System",
    category: "Education",
    location: "Bengaluru, Karnataka",
    services: ["Wayfinding Systems", "Outdoor Signage", "Campus Branding"],
    time: "8 Weeks",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
    desc: "End-to-end campus-wide wayfinding and branding solution spanning 200 acres, including digital directories, building identification, and pedestrian navigation."
  },
  {
    id: 6,
    title: "Prestige Tower Facade",
    category: "Real Estate",
    location: "Hyderabad, Telangana",
    services: ["ACP Cladding", "LED Profile Lighting", "Tower Signage"],
    time: "10 Weeks",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800",
    desc: "Exterior ACP cladding and LED profile lighting installation for a 30-story commercial tower, creating a striking skyline presence."
  },
  {
    id: 7,
    title: "Reliance Digital Store Network",
    category: "Retail",
    location: "Pan-India (120+ Stores)",
    services: ["LED Signage", "Retail Branding", "Digital Displays"],
    time: "Ongoing",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    desc: "Standardized signage and branding rollout across 120+ retail locations nationwide, ensuring brand consistency with rapid deployment timelines."
  },
  {
    id: 8,
    title: "Manipal Hospital Reception",
    category: "Healthcare",
    location: "Mysuru, Karnataka",
    services: ["3D Letter Signage", "Acrylic Fabrication", "Digital Display"],
    time: "3 Weeks",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
    desc: "Modern reception area signage with illuminated logo, department directories, and real-time queue management digital displays."
  },
  {
    id: 9,
    title: "Brigade Gateway Complex",
    category: "Corporate",
    location: "Bengaluru, Karnataka",
    services: ["ACP Cladding", "Wayfinding Systems", "3D Letter Signage"],
    time: "12 Weeks",
    image: "https://images.unsplash.com/photo-1554469384-e58f5ebe6122?auto=format&fit=crop&q=80&w=800",
    desc: "Comprehensive ACP cladding, wayfinding, and 3D letter signage solution for a mixed-use commercial complex spanning 1.5 million sq.ft."
  },
  {
    id: 10,
    title: "Amazon Warehouse Signage",
    category: "Industrial",
    location: "Chennai, Tamil Nadu",
    services: ["Outdoor Signage", "Safety Wayfinding", "Loading Bay Markers"],
    time: "4 Weeks",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    desc: "Industrial-grade exterior and interior signage for a 500,000 sq.ft fulfillment center including safety wayfinding, dock identification, and emergency routing."
  },
  {
    id: 11,
    title: "St. Joseph's School Rebrand",
    category: "Education",
    location: "Pune, Maharashtra",
    services: ["Campus Branding", "Outdoor Signage", "Wayfinding Systems"],
    time: "6 Weeks",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110cffc?auto=format&fit=crop&q=80&w=800",
    desc: "Complete campus rebranding including entrance gate signage, building identification, classroom directories, and sports facility branding."
  },
  {
    id: 12,
    title: "Oberoi Realty Showroom",
    category: "Real Estate",
    location: "Mumbai, Maharashtra",
    services: ["Backlit Signage", "ACP Cladding", "3D Letter Signage"],
    time: "5 Weeks",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    desc: "Premium backlit signage and ACP cladding for a luxury real estate showroom, creating an immersive brand experience for prospective buyers."
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#111111] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,180,0,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-4 block">
                Our Portfolio
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                Projects That <span className="text-[#FFB400]">Define</span> Brands
              </h1>
              <p className="text-[#999] text-lg md:text-xl leading-relaxed max-w-2xl">
                From towering corporate facades to intricate hospital wayfinding — explore 1500+ projects delivered across 12+ states.
              </p>
            </div>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="py-16 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-6">
            {/* Filters */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
              {categories.map((cat) => (
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
                  <span className="ml-1.5 text-xs opacity-60">
                    ({cat === "All" ? projects.length : projects.filter(p => p.category === cat).length})
                  </span>
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm group hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#111]">
                      {project.category}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-[#111]/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white">
                      {project.time}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl text-[#111111] mb-2 group-hover:text-[#FFB400] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#666] text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.desc}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-3.5 h-3.5 text-[#888] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-xs text-[#888]">{project.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.services.slice(0, 3).map(svc => (
                        <span key={svc} className="text-[10px] px-2.5 py-1 bg-[#FAFAFA] border border-black/5 rounded-full text-[#666] font-medium">
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-[#888] text-lg">No projects found in this category.</p>
                <button onClick={() => setFilter("All")} className="mt-4 text-[#FFB400] font-semibold hover:underline">
                  View all projects
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#111111] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(255,180,0,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Ready to Start Your <span className="text-[#FFB400]">Project</span>?
            </h2>
            <p className="text-[#999] text-lg mb-10 max-w-xl mx-auto">
              Let us bring your brand vision to life with precision-crafted signage and fabrication solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="btn-gold px-8 py-4 rounded-full text-[15px] font-bold shadow-[0_10px_30px_rgba(255,180,0,0.3)]"
              >
                Get Free Quote
              </Link>
              <a
                href="https://wa.me/919686241411"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full text-[15px] font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </main>
    </SmoothScroll>
  );
}
