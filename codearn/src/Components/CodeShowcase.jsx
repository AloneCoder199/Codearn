// CodeShowcase.jsx
import React, { useState, useEffect, useRef } from "react";
import { Copy } from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";

const snippets = [
  // ✅ Hero Section
  {
    code: `function Hero() {
  return (
    <div className="text-center py-8">
      <h1 className="text-3xl font-bold text-white">Alone Coder</h1>
      <p className="text-slate-300 text-sm mt-2">
        MERN Stack Developer | Building Cool Web Experiences
      </p>
    </div>
  );
}`,
    preview: (
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold text-slate-900">Alone Coder</h1>
        <p className="text-slate-600 text-sm mt-2">
          MERN Stack Developer | Building Cool Web Experiences
        </p>
      </div>
    ),
  },
  // ✅ Services Page
  {
    code: `function Services() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="p-4 rounded-xl shadow bg-white">
        <h3 className="font-semibold">Web Development</h3>
        <p className="text-sm text-slate-500">
          Responsive, scalable, and modern websites.
        </p>
      </div>
      <div className="p-4 rounded-xl shadow bg-white">
        <h3 className="font-semibold">API Integration</h3>
        <p className="text-sm text-slate-500">
          Secure backend & RESTful APIs.
        </p>
      </div>
    </div>
  );
}`,
    preview: (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 rounded-xl shadow bg-white">
          <h3 className="font-semibold">Web Development</h3>
          <p className="text-sm text-slate-500">
            Responsive, scalable, and modern websites.
          </p>
        </div>
        <div className="p-4 rounded-xl shadow bg-white">
          <h3 className="font-semibold">API Integration</h3>
          <p className="text-sm text-slate-500">
            Secure backend & RESTful APIs.
          </p>
        </div>
      </div>
    ),
  },
  // ✅ Portfolio Page
  {
    code: `function Portfolio() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="p-3 rounded-lg bg-slate-100">
        <img src="/project1.png" className="rounded-md" />
        <h4 className="font-semibold mt-2">E-Commerce Website</h4>
      </div>
      <div className="p-3 rounded-lg bg-slate-100">
        <img src="/project2.png" className="rounded-md" />
        <h4 className="font-semibold mt-2">Business Landing Page</h4>
      </div>
    </div>
  );
}`,
    preview: (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-3 rounded-lg bg-slate-100">
          <div className="h-24 bg-slate-300 rounded-md"></div>
          <h4 className="font-semibold mt-2">E-Commerce Website</h4>
        </div>
        <div className="p-3 rounded-lg bg-slate-100">
          <div className="h-24 bg-slate-300 rounded-md"></div>
          <h4 className="font-semibold mt-2">Business Landing Page</h4>
        </div>
      </div>
    ),
  },
  // ✅ Contact Page
  {
    code: `function Contact() {
  return (
    <form className="flex flex-col gap-3 bg-white p-4 rounded-xl shadow">
      <input type="text" placeholder="Your Name" className="border p-2 rounded" />
      <input type="email" placeholder="Your Email" className="border p-2 rounded" />
      <textarea placeholder="Message" className="border p-2 rounded"></textarea>
      <button className="px-4 py-2 bg-[#00BCD4] text-[#04202a] rounded-lg">
        Send Message
      </button>
    </form>
  );
}`,
    preview: (
      <form className="flex flex-col gap-3 bg-white p-4 rounded-xl shadow">
        <input type="text" placeholder="Your Name" className="border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="border p-2 rounded" />
        <textarea placeholder="Message" className="border p-2 rounded"></textarea>
        <button className="px-4 py-2 bg-[#00BCD4] text-[#04202a] rounded-lg">
          Send Message
        </button>
      </form>
    ),
  },
  // ✅ Footer Page
  {
    code: `function Footer() {
  return (
    <footer className="text-center py-4 text-slate-500 text-sm">
      © 2025 CodEarn Tech. Built with ❤️ by Alone Coder.
    </footer>
  );
}`,
    preview: (
      <footer className="text-center py-4 text-slate-500 text-sm">
        © 2025 CodEarn Tech. Built with ❤️ by Alone Coder.
      </footer>
    ),
  },
];

const CodeShowcase = () => {
  const [step, setStep] = useState(0);
  const [displayCode, setDisplayCode] = useState("");
  const [isOutput, setIsOutput] = useState(false);
  const [copied, setCopied] = useState(false);
  const indexRef = useRef(0);

  const fullCode = snippets[step].code;

  useEffect(() => {
    Prism.highlightAll();
    if (!isOutput && indexRef.current < fullCode.length) {
      const timer = setTimeout(() => {
        setDisplayCode((prev) => prev + fullCode[indexRef.current]);
        indexRef.current += 1;
      }, 25);
      return () => clearTimeout(timer);
    }

    if (!isOutput && indexRef.current === fullCode.length) {
      const timer = setTimeout(() => setIsOutput(true), 2000);
      return () => clearTimeout(timer);
    }

    if (isOutput) {
      const timer = setTimeout(() => {
        setIsOutput(false);
        setDisplayCode("");
        indexRef.current = 0;
        setStep((prev) => (prev + 1) % snippets.length);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [displayCode, isOutput, step, fullCode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {!isOutput ? (
        <div className="bg-[#0D1B2A] font-mono rounded-2xl shadow-2xl overflow-hidden relative border border-slate-700">
          {/* Editor Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#1B263B] text-slate-300 text-xs">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span className="ml-2">App.jsx</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition text-xs"
            >
              <Copy size={14} /> {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Code Box with Scroll */}
          <pre className="p-4 text-sm leading-relaxed max-h-72 overflow-y-auto">
            <code className="language-jsx">{displayCode}</code>
          </pre>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl text-center p-6 border border-slate-200">
          {snippets[step].preview}
        </div>
      )}
    </div>
  );
};

export default CodeShowcase;
