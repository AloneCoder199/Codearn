// AboutPage.jsx
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import profileImg from "../assets/dp.jpg"; // apni image yahan rakho
import { TypeAnimation } from "react-type-animation";
const skills = [
  { name: "React", percent: 90 },
  { name: "Node.js", percent: 82 },
  { name: "Tailwind CSS", percent: 88 },
  { name: "MongoDB", percent: 75 },
  { name: "TypeScript", percent: 65 },
];

const stats = [
  { label: "Projects", value: 24, suffix: "+" },
  { label: "Clients", value: 12, suffix: "+" },
  { label: "Years", value: 3, suffix: "+" },
];

const experience = [
  {
    year: "2024",
    title: "Senior MERN Developer",
    desc: "Freelance & Contract work — scalable web apps, e-commerce, dashboards.",
  },
  {
    year: "2022",
    title: "Fullstack Engineer",
    desc: "Built several production-ready MERN products & performance optimizations.",
  },
  {
    year: "2021",
    title: "Frontend Developer",
    desc: "Focused on pixel-perfect UI and accessibility (a11y).",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function AboutPage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);


const TypingEffect = ({ texts, speed = 40, delay = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let typingInterval;

    if (charIndex < texts[textIndex].length) {
      typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else {
      // wait before moving to next text
      setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length); // loop
      }, delay);
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, textIndex, texts, speed, delay]);

  return <span>{displayedText}</span>;
};
  



  return (
    <main className="bg-white text-[#0D1B2A]">
      {/* HERO */}
<section className="relative bg-white text-[#0D1B2A] py-20 px-6 mt-5 overflow-hidden">

  {/* Mobile Only DP Image (hidden on desktop) */}
  <div className="block md:hidden mb-6">
    <img
      src={profileImg} // apna image path lagana
      alt="Profile"
      className="w-32 h-32 rounded-full object-cover object-[40%_20%] mx-auto shadow-lg border-4 border-[#00BCD4]"
    />
  </div>

  <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center z-10">
    {/* Tagline with Online Dot Animation */}
    <p className="inline-flex items-center gap-2 text-sm font-medium text-[#292e2e] mb-3">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      Online • Secure • Fast • Modern
    </p>

    {/* Title */}
    <h1 className="text-2xl md:text-5xl font-extrabold leading-tight">
      Muhammad Bilal <span className="text-[#00BCD4]">here</span>
      <br />
      <TypeAnimation
        sequence={[
          "MERN Developer ",
          2000,
          "Performance Optimizer ",
          2000,
          "Security Focused ",
          2000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className="text-[#FF9800]"
      />
    </h1>

    {/* Description */}
    <p className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
      I build production-grade web applications — optimized, scalable, and maintainable.  
      Every project is crafted with a strong focus on <span className="text-[#00BCD4] font-semibold">speed</span>,{" "}
      <span className="text-[#FF9800] font-semibold">user experience</span>, and{" "}
      <span className="text-[#00BCD4] font-semibold">security</span>.  
      Turning your ideas into reality with modern, future-ready solutions.
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-wrap gap-4 justify-center">
      <Link
        to="/contact"
        className="px-6 py-3 rounded-xl font-semibold text-base bg-[#00BCD4] text-white shadow-md hover:shadow-lg hover:bg-[#00ACC1] transition"
      >
        🚀 Hire Me
      </Link>

  <motion.a
  href="https://wa.me/923219515138?text=Hi%2C%20I%E2%80%99m%20interested%20in%20booking%20a%20project%20with%20you.%20Can%20we%20discuss%20details%3F"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-3 rounded-xl border border-[#E6E6E6] bg-white shadow hover:shadow-md inline-block"
>
  ✉️ Get Quote
</motion.a>


    </div>

    {/* Stats */}
    <div className="mt-12 flex gap-10 flex-wrap justify-center">
      {[
        { value: "50+", label: "Projects Delivered" },
        { value: "5+", label: "Years Experience" },
        { value: "99%", label: "Client Satisfaction" },
      ].map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="flex flex-col items-center"
        >
          <span className="text-3xl md:text-4xl font-bold text-[#0D1B2A]">
            {s.value}
          </span>
          <span className="text-sm text-slate-600">{s.label}</span>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative">
  {/* Background Gradient Blur */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#00BCD4]/10 via-[#FF9800]/10 to-[#00BCD4]/10 blur-2xl -z-10"></div>

  <motion.h3
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-[#0D1B2A]"
  >
    🚀 My <span className="text-[#00BCD4]">Key Skills</span>
  </motion.h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {skills.map((s, idx) => (
      <motion.div
        key={s.name}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: idx * 0.1, duration: 0.6 }}
        className="relative group p-6 rounded-2xl shadow-lg border border-slate-100 bg-white/70 backdrop-blur-lg hover:shadow-2xl hover:-translate-y-2 transition"
      >
        {/* Circular Progress */}
        <div className="flex flex-col items-center">
          <div className="relative w-28 h-28 mb-4">
            <svg className="absolute top-0 left-0 w-full h-full">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#E5E7EB"
                strokeWidth="10"
                fill="transparent"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke={idx % 2 === 0 ? "#00BCD4" : "#FF9800"}
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="283"
                strokeDashoffset="283"
                initial={{ strokeDashoffset: 283 }}
                whileInView={{ strokeDashoffset: 283 - (283 * s.percent) / 100 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-[#0D1B2A]">
              {s.percent}%
            </span>
          </div>
          <h4 className="text-lg font-semibold text-[#0D1B2A] group-hover:text-[#00BCD4] transition">
            {s.name}
          </h4>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* EXPERIENCE TIMELINE */}
    <section className="max-w-6xl mx-auto px-6 py-16 relative">
  {/* Background Gradient Blur */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#00BCD4]/5 via-transparent to-[#FF9800]/5 blur-2xl -z-10"></div>

  {/* Section Title */}
  <motion.h3
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-[#0D1B2A]"
  >
    💼 My <span className="text-[#00BCD4]">Experience</span>
  </motion.h3>

  <div className="relative border-l-4 border-[#00BCD4]/30 ml-4 space-y-10">
    {experience.map((e, idx) => (
      <motion.div
        key={e.year}
        initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: idx * 0.1, duration: 0.6 }}
        className="relative pl-10"
      >
        {/* Glowing Dot */}
        <div className="absolute -left-[10px] top-2">
          <span className="relative flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BCD4] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-[#00BCD4] border-2 border-white shadow"></span>
          </span>
        </div>

        {/* Experience Card */}
        <div className="bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl border border-slate-100 p-6 rounded-2xl transition transform hover:-translate-y-2">
          <span className="text-sm font-semibold text-[#FF9800]">{e.year}</span>
          <h4 className="text-lg md:text-xl font-bold text-[#0D1B2A] mt-1">
            {e.title}
          </h4>
          <p className="text-slate-600 mt-2 leading-relaxed">{e.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* MISSION + PERSONAL */}
{/* MISSION + PERSONAL */}
<section className="max-w-6xl mx-auto px-6 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Mission Card */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className="p-8 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-3xl">🚀</span>
        <h3 className="text-2xl font-bold text-[#0D1B2A]">Mission</h3>
      </div>

      {/* Fixed height wrapper for typing text */}
      <div className="text-slate-700 leading-relaxed text-lg min-h-[140px] flex items-start">
        <TypingEffect
          texts={[
            "My mission is to deliver quality-first development that ensures speed, security, and user satisfaction.",
            "I aim to build digital solutions that empower businesses to grow and scale confidently.",
            "Every project I take on is guided by performance, accessibility, and innovation at its core.",
            "My focus is on writing clean, scalable, and maintainable code that lasts.",
            "I believe in creating software that not only works but inspires trust and delivers real value."
          ]}
        />
      </div>
    </motion.div>

    {/* Personal Card */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="p-8 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">🎯</span>
        <h3 className="text-2xl font-bold text-[#0D1B2A]">Personal</h3>
      </div>

      {/* Fixed height wrapper for typing text */}
      <div className="text-slate-700 leading-relaxed text-lg min-h-[140px] flex items-start">
        <TypingEffect
          texts={[
            "Beyond coding, I find joy in photography—it helps me see creativity from new perspectives.",
            "Motorbiking gives me freedom and a sense of adventure, keeping me inspired for new challenges.",
            "I enjoy learning about technology trends and applying them in practical, real-world projects.",
            "In my downtime, I like reading about entrepreneurship and personal growth.",
            "Balancing work with hobbies keeps my mind sharp, motivated, and focused on delivering excellence."
          ]}
        />
      </div>
    </motion.div>
  </div>
</section>


      {/* FINAL CTA */}
     <section className="max-w-6xl mx-auto px-6 py-12">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="p-8 rounded-2xl shadow-2xl bg-white border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden 
               min-h-[280px] md:min-h-[220px]" // 👈 fixed height
  >
    {/* Left Content */}
    <div className="text-center md:text-left flex-1">
      <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
        {/* Online Dot */}
        <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-sm font-medium text-slate-600">I’m Online — Let’s Talk</span>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-2 h-[70px] flex items-center"> 
        {/* 👆 fixed height for heading line */}
        <TypeAnimation
          sequence={[
            " Ready to Build Something Great?",
            2000,
            " Book Your Project Today",
            2000,
            " Fast, Secure & Polished Solutions",
            2000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="text-[#00BCD4]"
        />
      </h3>
      <p className="text-slate-600 max-w-lg mx-auto md:mx-0">
        From concept to deployment — I bring ideas to life with performance, scalability, and security in mind.
      </p>
    </div>

    {/* Right Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
      <Link
        to="/contact"
        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-xl hover:scale-105"
        style={{ background: "#00BCD4", color: "#04202a" }}
      >
         Hire Me
      </Link>
      <a
        href="/cv.pdf"
        download="AloneCoder-CV.pdf"
        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-all hover:bg-[#FF9800]/10 hover:scale-105"
        style={{ borderColor: "#FF9800", color: "#0D1B2A" }}
      >
        📄 Download CV
      </a>
    </div>

    {/* Background Glow Effect */}
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00BCD4]/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF9800]/10 rounded-full blur-3xl animate-pulse"></div>
  </motion.div>
</section>


    </main>
  );
}
