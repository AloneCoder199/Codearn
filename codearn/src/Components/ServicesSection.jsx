// ServicesSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Smartphone,
  Palette,
  ShoppingCart,
  Globe,
  BarChart,
  Cpu,
  Lock,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    desc: "Boost your brand with responsive, high-speed websites. From business sites to enterprise platforms — we deliver custom web solutions designed to convert visitors into customers.",
    icon: <Code size={22} />,
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Reach millions with powerful cross-platform mobile apps. Smooth performance, stunning UI, and features built to maximize engagement and sales.",
    icon: <Smartphone size={22} />,
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: "Win your users’ hearts with modern, user-focused design. Every pixel is crafted to improve usability, boost conversions, and keep users coming back.",
    icon: <Palette size={22} />,
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    desc: "Launch your online store with advanced product management, fast checkout, and secure payments. Start selling online with confidence and scale globally.",
    icon: <ShoppingCart size={22} />,
  },
  {
    id: 5,
    title: "SEO & Digital Marketing",
    desc: "Rank higher, get noticed, and increase sales. Our data-driven SEO and digital marketing strategies put your business in front of the right audience.",
    icon: <BarChart size={22} />,
  },
  {
    id: 6,
    title: "Custom Software",
    desc: "Your business is unique — your software should be too. We develop scalable custom solutions that perfectly match your workflows and goals.",
    icon: <Cpu size={22} />,
  },
  {
    id: 7,
    title: "Domain & Hosting",
    desc: "Lightning-fast, secure, and reliable hosting with domain setup. Keep your site always online and performing at its peak.",
    icon: <Globe size={22} />,
  },
  {
    id: 8,
    title: "Cybersecurity",
    desc: "Stay safe from hackers and data loss. We provide advanced cybersecurity audits, firewalls, and 24/7 monitoring to protect your digital assets.",
    icon: <Lock size={22} />,
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  // Detect if device is mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Auto loop with pause
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % services.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  return (
    <section id="services" className="py-20 px-6 lg:px-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-4xl font-extrabold text-[#0D1B2A]">
          Our <span className="text-[#00BCD4]">Services</span>
        </h3>
        <div className="w-24 h-1 bg-[#FF9800] mx-auto mt-3 rounded-full"></div>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          We provide powerful digital solutions that help businesses launch, grow,
          and dominate the online market.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* LEFT SIDE - Services List */}
        <div
          className="flex flex-col justify-start h-full space-y-3"
          {...(!isMobile && {
            onMouseEnter: () => setPaused(true),
            onMouseLeave: () => setPaused(false),
          })}
        >
          {services.map((s, idx) => (
            <motion.button
              key={s.id}
              onClick={() => setActive(idx)}
              whileHover={{ scale: 1.02, x: 6 }}
              className={`flex items-center gap-3 px-5 py-4 rounded-xl font-semibold shadow-sm transition-all duration-300 border text-left ${
                idx === active
                  ? "border-[#00BCD4] bg-[#E0F7FA] text-[#0D1B2A] shadow-md"
                  : "text-[#0D1B2A] bg-[#F9FAFB] border-slate-200 hover:border-[#FF9800] hover:shadow-md"
              }`}
            >
              <span className="text-lg">{s.icon}</span>
              {s.title}
            </motion.button>
          ))}
        </div>

        {/* RIGHT SIDE - Detail Box */}
        <div
          className="relative"
          {...(!isMobile && {
            onMouseEnter: () => setPaused(true),
            onMouseLeave: () => setPaused(false),
          })}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="p-8 rounded-2xl shadow-xl bg-white border border-slate-200 h-full min-h-[380px] max-h-[500px] overflow-y-auto"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-[#E0F7FA] text-[#00BCD4] shadow">
                  {services[active].icon}
                </div>
                <h4 className="text-2xl font-bold text-[#0D1B2A]">
                  {services[active].title}
                </h4>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">
                {services[active].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
