import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function Footer() {
  return (
    <footer className="bg-[#F5F7FA] text-[#0D1B2A] pt-14 pb-8 relative overflow-hidden">
      {/* Subtle gradient wave background */}
      <div className="absolute inset-0 z-0 opacity-10 bg-gradient-to-tr from-[#00BCD4] via-[#FFFFFF] to-[#FF9800] blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={footerVariants}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl font-bold">CodEarn Tech</h1>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Crafting digital experiences with precision, creativity, and innovation.
          </p>
          <motion.div
            className="h-1 mt-4 rounded-full w-60 bg-gradient-to-r from-[#00BCD4] via-[#FFFFFF] to-[#0D1B2A]"
            animate={{ scaleX: [0.7, 1, 0.85, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        {/* Company Links */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={footerVariants}
          viewport={{ once: true }}
        >
          <h2 className="text-lg font-semibold mb-3">Company</h2>
          <ul className="space-y-2 text-sm">
            {["About", "Projects", "Articles", "Contact"].map((link, idx) => (
              <li key={idx} className="group relative">
                <a
                  href={`/${link.replace(" ", " ").toLowerCase()}`}
                  className="text-gray-700 hover:text-[#00BCD4] transition-colors"
                >
                  {link}
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#00BCD4] rounded-full group-hover:w-20 transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={footerVariants}
          viewport={{ once: true }}
        >
          <h2 className="text-lg font-semibold mb-3">Resources</h2>
          <ul className="space-y-2 text-sm">
            {["Articles", "", ""].map((link, idx) => (
              <li key={idx} className="group relative">
                <a
                  href=""
                  className="text-gray-700 hover:text-[#00BCD4] transition-colors"
                >
                  {link}
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#00BCD4] rounded-full group-hover:w-20 transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Socials */}
       <motion.div
  custom={3}
  initial="hidden"
  whileInView="visible"
  variants={footerVariants}
  viewport={{ once: true }}
>
  <h2 className="text-lg font-semibold mb-3">Connect</h2>
  <div className="flex space-x-4 mt-1">
    {[
      { icon: <FaFacebookF />, link: "https://www.facebook.com/" },
      { icon: <FaTwitter />, link: "https://www.twitter.com/" },
      { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/alonecoder199" },
      { icon: <FaGithub />, link: "https://github.com/alonecoder199" },
    ].map((item, idx) => (
      <motion.a
        key={idx}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
        className="relative p-3 rounded-full bg-[#FFFFFF] text-[#0D1B2A] shadow-md overflow-hidden transition"
      >
        {/* Gradient Glow Background */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00BCD4] via-[#FFFFFF] to-[#FF9800] opacity-0"
          whileHover={{ scale: 1.6, opacity: 0.4 }}
          transition={{ duration: 0.4 }}
        />

        {/* Icon */}
        <span className="relative z-10 transition-colors duration-300 hover:text-[#00BCD4]">
          {item.icon}
        </span>
      </motion.a>
    ))}
  </div>
</motion.div>

      </div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-600"
      >
        © {new Date().getFullYear()} CodEarn Tech. All Rights Reserved.
      </motion.div>
    </footer>
  );
}

export default Footer;