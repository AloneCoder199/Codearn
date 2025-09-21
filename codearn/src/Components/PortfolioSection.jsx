// PortfolioSection.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from "../assets/projects/project-1.png";

const PortfolioSection = () => {
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [error, setError] = useState(""); // ⚡ error state
  const intervalRef = useRef(null);

  const extraSkills = {
    React: 85,
    Tailwind: 70,
    Node: 60,
    MongoDB: 65,
  };

  // Dummy fallback projects (skeletons)
  const skeletonProjects = [
    { id: "sk1", name: "Loading Project 1", description: "Fetching data...", html_url: "#", homepage: "" },
    { id: "sk2", name: "Loading Project 2", description: "Fetching data...", html_url: "#", homepage: "" },
    { id: "sk3", name: "Loading Project 3", description: "Fetching data...", html_url: "#", homepage: "" },
  ];

  // Fetch GitHub repos
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/repos");
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        const data = await res.json();

        const filtered = data.filter((r) => !r.fork);
        setRepos(filtered.length > 0 ? filtered : skeletonProjects);

        const langs = {};
        for (let repo of filtered) {
          const langRes = await fetch(repo.languages_url, {
            headers: { Accept: "application/vnd.github+json" },
          });
          const langData = await langRes.json();
          langs[repo.id] = langData;
        }
        setLanguages(langs);
      } catch (err) {
        console.error("Failed to fetch repos:", err);
        setError("⚠️ Unable to load projects from GitHub. Showing fallback projects.");
        setRepos(skeletonProjects); // fallback
      }
    };
    fetchRepos();
  }, []);

  // Auto slide
  useEffect(() => {
    if (!paused && repos.length > 0) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % repos.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused, repos]);

  const getLangPercentages = (repoId) => {
    const langData = languages[repoId];
    if (!langData) return extraSkills; // fallback skills
    const total = Object.values(langData).reduce((a, b) => a + b, 0);
    const percents = {};
    for (let [lang, val] of Object.entries(langData)) {
      percents[lang] = Math.round((val / total) * 100);
    }
    return { ...percents, ...extraSkills };
  };

  return (
    <section id="portfolio" className="py-16 px-6 lg:px-20 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-4xl font-extrabold text-gray-900">
          Our <span className="text-cyan-500">Projects</span>
        </h3>
        <p className="text-gray-600 mt-3">
          Explore live projects with skill insights & progress.
        </p>
      </div>

      {/* ⚠️ Warning message */}
      {error && (
        <div className="mb-6 p-4 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-lg text-center shadow">
          {error}
        </div>
      )}

      {/* Project Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {repos.map((r, idx) => (
          <button
            key={r.id}
            onClick={() => setActive(idx)}
            className={`px-5 py-2 rounded-full font-medium transition-all border ${
              idx === active
                ? "bg-cyan-500 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>

      {/* Project Layout */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* LEFT - Project Image */}
        <AnimatePresence mode="wait">
          {repos.length > 0 && (
            <motion.div
              key={repos[active].id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="w-full relative group rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={img}
                alt={repos[active].name}
                className="w-full h-80 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl">
                <div className="text-white font-bold text-lg mb-3">
                  #{active + 1} — {repos[active].name}
                </div>
                {repos[active].homepage && (
                  <a
                    href={repos[active].homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition"
                  >
                    Live Demo 🚀
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* RIGHT - Project Details */}
        <AnimatePresence mode="wait">
          {repos.length > 0 && (
            <motion.div
              key={repos[active].id + "-details"}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-white rounded-3xl shadow-2xl border border-gray-200"
            >
              <h4 className="text-3xl font-bold text-gray-900 mb-3">
                {repos[active].name}
              </h4>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {repos[active].description || "No description provided."}
              </p>

              {/* Skills Progress Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(getLangPercentages(repos[active].id)).map(
                  ([tech, percent]) => (
                    <div
                      key={tech}
                      className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800">{tech}</span>
                        <span className="text-sm font-medium text-gray-600">
                          {percent}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percent}%` }}
                          transition={{ duration: 1 }}
                          className="h-2 rounded-full bg-cyan-500"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* GitHub Button */}
              <div className="mt-8">
                <a
                  href={repos[active].html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg transition"
                >
                  GitHub Repo
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;
