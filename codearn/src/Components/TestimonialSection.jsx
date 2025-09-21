// TestimonialSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
const testimonials = [
  {
    id: 1,
    name: "Ali Khan",
    company: "TechCorp",
    text: "CodEarn Tech ne meri website project ka kamal kaam kiya. Design aur functionality dono best hain!",
    info: "TechCorp is a leading IT solutions company focusing on web & mobile applications.",
  },
  {
    id: 2,
    name: "Sara Malik",
    company: "InnovateX",
    text: "Mujhe unki professionalism aur timely delivery bohot pasand aayi. Strongly recommend!",
    info: "InnovateX specializes in AI-driven software solutions for startups.",
  },
  {
    id: 3,
    name: "Ahmed Raza",
    company: "WebSolutions",
    text: "Project ka har step transparent tha, aur unki coding quality top notch hai!",
    info: "WebSolutions provides end-to-end web development and digital marketing services.",
  },
  {
    id: 4,
    name: "Hina Javed",
    company: "Creative Labs",
    text: "Unka UI/UX design aur responsiveness mere client ko bohot impress kiya!",
    info: "Creative Labs is a design studio focusing on UI/UX and brand identity.",
  },
];

const TestimonialSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  return (
    <section className="py-20 px-6 lg:px-20 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h3 className="text-4xl font-extrabold text-[#0D1B2A]">
          What <span className="text-[#00BCD4]">Clients Say</span>
        </h3>
        <p className="text-[#0D1B2A]/70 mt-3 text-lg">
          Reviews & insights from our satisfied clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT - Company Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active + "-info"}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white border-l-4 border-[#00BCD4] rounded-xl shadow-md"
          >
            <h4 className="text-2xl font-semibold text-[#0D1B2A] mb-2">
              {testimonials[active].company}
            </h4>
            <p className="text-[#0D1B2A]/80 leading-relaxed">
              {testimonials[active].info}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT - Testimonial Box */}
        <motion.div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active + "-testimonial"}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.7 }}
              className="p-10 bg-white border border-[#E5E7EB] rounded-3xl shadow-lg relative overflow-hidden cursor-pointer"
            >
              {/* Quote Icon */}
              <div className="absolute -top-5 left-6 text-[#00BCD4] text-5xl font-bold">“</div>

              {/* Review Text */}
              <p className="text-[#0D1B2A] italic text-lg leading-relaxed mb-6 mt-4">
                {testimonials[active].text}
              </p>

              <footer className="flex flex-col gap-1">
                <span className="font-semibold text-[#0D1B2A] text-lg">
                  {testimonials[active].name}
                </span>
                <span className="text-[#FF9800] text-sm">{testimonials[active].company}</span>
              </footer>

              {/* Hire Me Button */}
              <motion.div
  whileTap={{ scale: 0.95 }}
>
  <Link
    to="/contact"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl shadow-lg font-semibold text-base relative overflow-hidden group mt-5"
    style={{ background: "var(--primary)", color: "#04202a" }}
  >
    <span className="relative z-10 flex items-center gap-2">
      Hire Me <ChevronRight size={18} />
    </span>
  </Link>
</motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
