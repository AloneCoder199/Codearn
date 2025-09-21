import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, FileText, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function BeastModeFinalNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const navRefs = useRef([]);
  const waveRef = useRef(null);
  const containerRef = useRef(null);
  const cursorRef = useRef(null);

  const location = useLocation();

  const navItems = [
    { name: "Home", icon: <Home size={18} />, path: "/" },
    { name: "About", icon: <User size={18} />, path: "/about" },
    { name: "Projects", icon: <Briefcase size={18} />, path: "/projects" },
    { name: "Blog", icon: <FileText size={18} />, path: "/articles" },
    { name: "Contact", icon: <Mail size={18} />, path: "/contact" },
  ];

  // scroll detect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // cursor follow
  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    const onMove = (e) => {
      const x = e.clientX - 12;
      const y = e.clientY - 12;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // wave update
  const updateWave = (index = active) => {
    const el = navRefs.current[index];
    const wave = waveRef.current;
    const cont = containerRef.current;
    if (!el || !wave || !cont) return;

    const elRect = el.getBoundingClientRect();
    const contRect = cont.getBoundingClientRect();
    const left = elRect.left - contRect.left;
    const width = elRect.width;

    wave.style.left = `${left}px`;
    wave.style.width = `${width}px`;
  };

  useEffect(() => {
    updateWave(active);
    const onResize = () => updateWave(active);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    updateWave(hoverIndex ?? active);
  }, [hoverIndex, active]);

  useEffect(() => {
    const idx = navItems.findIndex((n) => n.path === location.pathname);
    if (idx !== -1) setActive(idx);
  }, [location.pathname]);

  const handleMagnet = (e, idx) => {
    const el = navRefs.current[idx];
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    const tx = dx * 6;
    const ty = dy * 4;
    const ry = dx * 8;
    const rx = -dy * 6;
    el.style.transform = `translate3d(${tx}px, ${ty}px, 10px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`;
    el.style.transition = "transform 0s";
  };

  const resetMagnet = (idx) => {
    const el = navRefs.current[idx];
    if (!el) return;
    el.style.transform = "";
    el.style.transition = "transform 0.45s cubic-bezier(.2,.9,.2,1)";
  };

  return (
    <>
      {/* CUSTOM CURSOR */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed pointer-events-none z-[9999] w-6 h-6 rounded-full transform translate-x-0 translate-y-0"
        style={{
          background: "rgba(0,188,212,0.95)",
          mixBlendMode: "normal",
          boxShadow: "0 6px 18px rgba(0,188,212,0.18)",
        }}
        aria-hidden
      />

      {/* NAVBAR */}
      <motion.nav
        ref={containerRef}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transform-gpu transition-all duration-400 ${
          scrolled
            ? "backdrop-blur-xl bg-white/88 shadow-2xl py-2"
            : "bg-transparent py-6"
        }`}
        style={{
          borderBottom: scrolled
            ? "1px solid rgba(13,27,42,0.06)"
            : "transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-3 select-none ">
            <motion.img
              src={logo}
              alt="CodEarn"
              className="h-10 w-10 rounded-4xl"
              whileHover={{ rotateY: 12, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            />
            <div>
              <div className="text-lg font-extrabold text-[#0D1B2A]">
                Cod<span className="text-[#FF9800]">E</span>arn
              </div>
              <div className="text-xs text-[#0D1B2A]/50">Premium Web</div>
            </div>
          </div>

          {/* desktop nav */}
          <div className="hidden md:flex items-center relative">
            <ul className="flex gap-8 items-center">
              {navItems.map((item, idx) => (
                <li
                  key={item.name}
                  ref={(el) => (navRefs.current[idx] = el)}
                  className="relative px-1 text-[#0D1B2A] font-medium cursor-pointer"
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => {
                    setHoverIndex(null);
                    resetMagnet(idx);
                  }}
                  onMouseMove={(e) => handleMagnet(e, idx)}
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                  }}
                >
                  <Link to={item.path} onClick={() => setActive(idx)}>
                    <motion.span
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 360,
                        damping: 22,
                      }}
                      className="relative inline-block"
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* wave underline */}
            <div
              ref={waveRef}
              className="pointer-events-none absolute -bottom-4 h-6"
              style={{
                left: 0,
                width: 120,
                transition:
                  "left 0.45s cubic-bezier(.2,.9,.2,1), width 0.45s cubic-bezier(.2,.9,.2,1)",
              }}
            >
              <svg
                viewBox="0 0 220 40"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <defs>
                  <filter id="goo2">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="6"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
                      result="goo"
                    />
                    <feBlend in="SourceGraphic" in2="goo" />
                  </filter>
                </defs>

                <motion.path
                  d="M0 20 C40 0, 80 40, 110 20 C140 0, 180 40, 220 20 L220 40 L0 40 Z"
                  fill="#00BCD4"
                  opacity={0.12}
                  filter="url(#goo2)"
                  animate={{
                    pathLength: [0.2, 1],
                    opacity: [0.06, 0.18, 0.06],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
                <motion.path
                  d="M0 20 C40 0, 80 40, 110 20 C140 0, 180 40, 220 20 L220 40 L0 40 Z"
                  fill="#00BCD4"
                  opacity={0.06}
                  animate={{
                    pathLength: [1, 0.3],
                    opacity: [0.12, 0.04, 0.12],
                  }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                />
              </svg>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            {/* Hire Me button (Desktop + Mobile) */}
            <motion.div
              whileHover={{
                y: -4,
                boxShadow: "0 12px 30px rgba(0,188,212,0.12)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
                style={{
                  background: "#0D1B2A",
                  color: "#FFFFFF",
                  boxShadow: "0 8px 28px rgba(13,27,42,0.12)",
                }}
              >
                Hire Me
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="opacity-80"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="#FFFFFF"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE FLOATING NAV (Hire Me removed) */}
      <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[92%]">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white/96 backdrop-blur-lg shadow-2xl rounded-3xl px-3 py-3 flex items-center justify-between"
          style={{
            boxShadow: "0 18px 60px rgba(13,27,42,0.12)",
          }}
        >
          {navItems.map((n, idx) => (
            <Link key={n.name} to={n.path} onClick={() => setActive(idx)}>
              <motion.div
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.12, rotateX: 6 }}
                transition={{ type: "spring", stiffness: 340, damping: 20 }}
                className="flex flex-col items-center justify-center gap-1 px-2 py-1"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center text-[#0D1B2A]`}
                  style={{
                    background: active === idx ? "#00BCD4" : "transparent",
                    color: active === idx ? "#fff" : "#0D1B2A",
                    boxShadow:
                      active === idx
                        ? "0 10px 30px rgba(0,188,212,0.16)"
                        : "none",
                  }}
                >
                  {n.icon}
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </>
  );
}
