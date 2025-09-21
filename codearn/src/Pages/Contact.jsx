import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  Phone,
  MapPin,
  ShieldCheck,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Contact page - tailored to color scheme:
 * Primary: #00BCD4
 * Secondary: #FF9800
 * Text: #0D1B2A
 * Background: #FFFFFF
 *
 * Backend: POST -> http://localhost:5000/api/contact
 */

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    // basic validation
    if (!form.name || !form.email || !form.message) {
      toast.warn("Please fill name, email and message.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("✅ Message sent — we will reply within 24 hours.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send. Try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Network error. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0D1B2A] relative overflow-hidden top-15">
      {/* Subtle animated primary circles (no gradients) */}
      <motion.div
        aria-hidden
        className="absolute -left-32 -top-40 w-96 h-96 rounded-full bg-[#00BCD4]/12"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[-80px] bottom-[-80px] w-80 h-80 rounded-full bg-[#00BCD4]/10"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-16 text-center relative z-10">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          <span className="text-[#00BCD4]">Let’s Connect</span> — Build something
          exceptional together
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-gray-600 max-w-2xl mx-auto"
        >
          Send a quick message or book a call — we reply fast. Your data is
          secure and responses come from a real human.
        </motion.p>
      </header>

      {/* Main content: two columns */}
      <main className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* Left: Company Info Card */}
        <motion.aside
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-[#0D1B2A]/5 border border-[#00BCD4]/8"
        >
          <h2 className="text-2xl font-bold text-[#00BCD4]">CodEarn Tech</h2>
          <p className="mt-3 text-gray-700">
            Modern web apps, secure deployments, and pixel-perfect UX. We
            partner with startups and enterprises to ship meaningful software.
          </p>

          <div className="mt-6 space-y-4 text-sm text-[#0D1B2A]">
            <div className="flex items-center gap-3">
              <Phone className="text-[#00BCD4]" />
              <span>+92 3219515138</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#00BCD4]" />
              <span>codearntech@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#00BCD4]" />
              <span>Samundri, Pakistan</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-[#0D1B2A] mb-2">Our Promise</h3>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>• Reply within 24 hours.</li>
              <li>• Privacy: we never share your data.</li>
              <li>• Clear pricing & honest timelines.</li>
            </ul>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://github.com/alonecoder199"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-[#00BCD4]/10 transition"
              aria-label="GitHub"
            >
              <Github className="text-[#0D1B2A]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-[#00BCD4]/10 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-[#0D1B2A]" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-[#00BCD4]/10 transition"
              aria-label="Twitter"
            >
              <Twitter className="text-[#0D1B2A]" />
            </a>
          </div>
        </motion.aside>

        {/* Right: Form Card */}
        <motion.section
  initial={{ x: 30, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="p-6 sm:p-8 rounded-2xl bg-white shadow-lg border"
>
  <h3 className="text-xl sm:text-2xl font-semibold text-[#0D1B2A] mb-4">
    Send message
  </h3>

  <form onSubmit={handleSubmit} className="space-y-4">
    {/* Name + Email */}
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <label className="text-sm text-gray-600">Name</label>
        <div className="mt-1 flex items-center gap-2 border rounded-md p-2">
          <User className="text-[#00BCD4]" />
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full outline-none text-[#0D1B2A] placeholder-gray-400 bg-transparent"
            placeholder="Your name"
          />
        </div>
      </div>

      <div className="flex-1">
        <label className="text-sm text-gray-600">Email</label>
        <div className="mt-1 flex items-center gap-2 border rounded-md p-2">
          <Mail className="text-[#00BCD4]" />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full outline-none text-[#0D1B2A] placeholder-gray-400 bg-transparent"
            placeholder="you@example.com"
          />
        </div>
      </div>
    </div>

    {/* Subject */}
    <div>
      <label className="text-sm text-gray-600">Subject</label>
      <div className="mt-1 flex items-center gap-2 border rounded-md p-2">
        <MessageSquare className="text-[#00BCD4]" />
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full outline-none text-[#0D1B2A] placeholder-gray-400 bg-transparent"
          placeholder="Project / enquiry subject"
        />
      </div>
    </div>

    {/* Message */}
    <div>
      <label className="text-sm text-gray-600">Message</label>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        required
        rows="5"
        className="w-full mt-1 border rounded-md p-3 text-[#0D1B2A] placeholder-gray-400 outline-none"
        placeholder="Describe your project or question..."
      />
    </div>

    {/* Buttons row */}
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#00BCD4] hover:bg-[#00ACC1] text-[#0D1B2A] font-semibold px-5 py-3 rounded-lg shadow"
      >
        {loading ? "Sending..." : "Send Message"}
        <Send size={16} />
      </button>

      <a
        href="/cv.pdf"
        download="CodEarnTech-CV.pdf"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 border rounded-lg text-sm"
        style={{ borderColor: "#FF9800", color: "#0D1B2A" }}
      >
        Download CV
      </a>
    </div>

    {/* Quick Note */}
    <div className="text-xs text-gray-500 mt-2 text-center sm:text-left">
      By sending you agree we may contact you. We do not share your data.
    </div>
  </form>
</motion.section>

      </main>

      {/* Footer small bar */}
      <footer className="py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} CodEarn Tech — Built with care.
      </footer>

      {/* Toast notifications */}
      <ToastContainer position="top-right" autoClose={3500} />
    </div>
  );
};

export default Contact;

