"use client";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyQuoteButton from "@/components/StickyQuoteButton";
import Footer from "@/components/Footer";

const AboutSection = dynamic(() => import("@/components/sections/AboutSection"), { ssr: false });
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"), { ssr: false });
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"), { ssr: false });
const PortfolioSection = dynamic(() => import("@/components/sections/PortfolioSection"), { ssr: false });
const MachinerySection = dynamic(() => import("@/components/sections/MachinerySection"), { ssr: false });
const MaterialsSection = dynamic(() => import("@/components/sections/MaterialsSection"), { ssr: false });
const IndustriesSection = dynamic(() => import("@/components/sections/IndustriesSection"), { ssr: false });
const BeforeAfterSection = dynamic(() => import("@/components/sections/BeforeAfterSection"), { ssr: false });
const WhyChooseUsSection = dynamic(() => import("@/components/sections/WhyChooseUsSection"), { ssr: false });
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"), { ssr: false });
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), { ssr: false });

export default function Home() {
  return (
    <SmoothScroll>
      <main className="overflow-x-hidden relative bg-white">
        <Navbar />
        <HeroSection />
        <ClientLogosSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <MachinerySection />
        <MaterialsSection />
        <IndustriesSection />
        <BeforeAfterSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
        <FloatingWhatsApp />
        <StickyQuoteButton />
      </main>
    </SmoothScroll>
  );
}
