// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import CodeShowcase from "./CodeShowcase";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <main className="px-6 md:px-12 lg:px-20 relative top-15">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
        
        {/* LEFT SIDE CONTENT */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="uppercase text-sm tracking-wider text-slate-500">
            Hi, I’m Muhammad Bilal !
          </p>

          {/* Dynamic Heading with Fixed Typewriter Box */}
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            I build modern websites that{" "}
            <span
              className="text-[#00BCD4] drop-shadow-md inline-block align-middle"
              style={{ minWidth: "250px" }} // 👈 fixed box width
            >
              <Typewriter
                words={[
                  "Drive Results",
                  "Boost Growth",
                  "Engage Users",
                  "Scale Brands",
                  "Increase Sales",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-slate-700 mx-auto md:mx-0">
            Full-stack MERN developer — responsive, fast, and
            conversion-focused. I turn ideas into digital products that scale.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            {/* 🚀 Launch Portfolio */}
            <Link
              to="/Projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl shadow-lg font-semibold text-base relative overflow-hidden group"
              style={{ background: "var(--primary)", color: "#04202a" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Launch Portfolio <ChevronRight size={18} />
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></span>
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 ease-out"></span>
            </Link>

            {/* 💌 Request a Quote */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border shadow-sm font-semibold text-base relative group"
              style={{ borderColor: "var(--secondary)", color: "var(--text)" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Request a Quote
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--secondary)] group-hover:w-full transition-all duration-500"></span>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE EDITOR + PREVIEW */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <CodeShowcase />
        </motion.div>
      </section>
    </main>
  );
};

export default HeroSection;
