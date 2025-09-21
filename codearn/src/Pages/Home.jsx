import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Code, Monitor, Phone } from "lucide-react";
import HeroSection from "../Components/HeroSection";
import ServicesSection from "../Components/ServicesSection";
import PortfolioSection from "../Components/PortfolioSection";
import TestimonialSection from "../Components/TestimonialSection";
import { Link } from "react-router-dom";
import AboutSection from "../Components/AboutSection";
// Production-ready single-file React component (Tailwind CSS assumed).
// Replace placeholder images and data with your real content.

export default function CodEarnTechHome() {
  const primary = "#00BCD4";
  const secondary = "#FF9800";
  const text = "#0D1B2A";
  const bg = "#FFFFFF";

  const services = [
    {
      id: 1,
      title: "Custom Web Development",
      desc: "Fast, responsive and scalable websites using MERN stack.",
      icon: <Code size={28} />,
    },
    {
      id: 2,
      title: "UI / UX Design",
      desc: "Modern, conversion-focused interfaces and prototypes.",
      icon: <Monitor size={28} />,
    },
    {
      id: 3,
      title: "Maintenance & Support",
      desc: "Deployment, monitoring, and fast bug fixes.",
      icon: <Phone size={28} />,
    },
  ];

  const projects = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    subtitle: "E-commerce / Portfolio / SaaS",
    img: `https://picsum.photos/seed/codearn-${i + 1}/800/600`,
  }));

  const testimonials = [
    {
      id: 1,
      name: "Aisha Khan - CEO, BrightMart",
      text: "Alone Coder ne hamara site migrate kiya aur sales 38% barh gayi. Highly recommended!",
    },
    {
      id: 2,
      name: "Bilal Rafi - Founder, TechHive",
      text: "Fast turnaround, clear communication, aur excellent UI polish.",
    },
  ];

  return (
    <div style={{ background: bg, color: text }} className="min-h-screen font-sans">
      {/* Root CSS variables for easy theme changes */}
      <style>{`
        :root{ --primary: ${primary}; --secondary: ${secondary}; --text: ${text}; }
        .glass{ backdrop-filter: blur(6px) saturate(120%); background: rgba(255,255,255,0.6); }
      `}</style>

      {/* HERO */}
      <main className="px-6 md:px-12">
    <HeroSection/>

        {/* SERVICES */}
      <ServicesSection/>

        {/* PORTFOLIO */}
        <PortfolioSection/>
       <TestimonialSection/>

        {/* ABOUT & CONTACT */}
         <AboutSection/>
        
      </main>
    </div>
  );
}
