import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cv from "../assets/canada.pdf";

const AboutSection = () => {
  const [showCV, setShowCV] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.warn("Please enter your email.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("✅ Email saved! You will receive updates daily.");
        setEmail("");
      } else {
        toast.error(data.error || "Failed to save email.");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Network error. Please Wait ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
  id="contact"
  className="py-20 px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center gap-12 bg-[#FFFFFF]"
>
  <ToastContainer position="top-right" autoClose={3500} />

  {/* Left Content */}
  <div className="flex-1 space-y-6">
    <h3 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] leading-snug">
      Let’s Build Something <span className="text-[#FF9800]">Amazing</span> 
    </h3>
    <p className="text-lg text-[#0D1B2A] leading-relaxed">
      I’m <span className="font-bold">Alone Coder</span>, a MERN stack developer passionate about{" "}
      <span className="text-[#00BCD4] font-semibold">fast</span>,{" "}
      <span className="text-[#FF9800] font-semibold">user-friendly</span>, and{" "}
      <span className="text-[#0D1B2A] font-semibold">scalable</span> apps.
    </p>

    <ul className="space-y-3 text-[#0D1B2A]">
      <li>✅ Freelance & Long-term availability</li>
      <li>⚡ Rapid prototyping & clean code</li>
      <li>💬 Transparent pricing & communication</li>
    </ul>

    <div className="flex flex-wrap gap-4 pt-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowCV(true)}
        className="px-6 py-3 rounded-xl font-semibold shadow-lg bg-[#00BCD4] text-white hover:shadow-cyan-400/50 transition-transform"
      >
         Download CV
      </motion.button>
    </div>
  </div>

  {/* Right: Email Subscribe Form */}
  <motion.form
    onSubmit={handleSubmit}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    className="flex-1 p-8 rounded-2xl shadow-2xl bg-[#FFFFFF] border border-slate-200"
  >
    <h4 className="text-2xl font-bold text-[#0D1B2A] mb-6">
      Get Daily Updates 
    </h4>

    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full mb-4 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#00BCD4] outline-none"
      required
    />

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type="submit"
      disabled={loading}
      className="w-full px-6 py-3 rounded-xl font-semibold shadow-lg bg-[#00BCD4] text-white hover:shadow-lg transition-all"
    >
      {loading ? "Saving..." : " Subscribe"}
    </motion.button>
  </motion.form>
</section>

  );
};

export default AboutSection;
