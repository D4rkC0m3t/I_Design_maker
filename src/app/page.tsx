"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

// Lazy-load heavy sections for performance
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"), { ssr: false });
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"), { ssr: false });
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"), { ssr: false });
const PortfolioSection = dynamic(() => import("@/components/sections/PortfolioSection"), { ssr: false });
const MachinerySection = dynamic(() => import("@/components/sections/MachinerySection"), { ssr: false });
const MaterialsSection = dynamic(() => import("@/components/sections/MaterialsSection"), { ssr: false });
const IndustriesSection = dynamic(() => import("@/components/sections/IndustriesSection"), { ssr: false });
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), { ssr: false });

export default function Home() {
  return (
    <main className="bg-[#050505] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <MachinerySection />
      <MaterialsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
