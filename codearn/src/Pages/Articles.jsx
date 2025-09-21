// src/components/BlogList.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogs } from "../Data/blogsData.js";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const tags = ["All", ...new Set(blogs.flatMap((b) => b.tags))];

  const filteredBlogs = blogs.filter((b) => {
    const matchesTag = filter === "All" || b.tags.includes(filter);
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#E0F7FA] via-white to-[#FFF8E1] text-[#0D1B2A] py-16 px-6">
      {/* Header */}
      <div className="relative max-w-5xl mx-auto text-center mb-20 top-10">
  {/* Floating Icons (subtle loop animation) */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-8 left-10 text-3xl text-[#00BCD4]"
  >
    
  </motion.div>
  <motion.div
    animate={{ y: [0, 15, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-0 right-12 text-3xl text-[#FF9800]"
  >
    
  </motion.div>
  <motion.div
    animate={{ x: [0, 15, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-0 left-1/4 text-2xl text-[#0D1B2A]"
  >
    
  </motion.div>

  {/* Title */}
  <motion.h1
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    className="text-4xl md:text-6xl font-extrabold text-[#0D1B2A]"
  >
     <span className="text-[#00BCD4]">CodEarn</span>{" "}
    <span className="text-[#FF9800]">Tech</span> Blog
  </motion.h1>

  {/* Animated Accent Line */}
  <motion.div
    animate={{ scaleX: [0, 1, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className="h-1 mt-4 w-1/3 mx-auto bg-[#00BCD4] rounded-full"
  />

  {/* Subtitle */}
  <motion.p
    animate={{ opacity: [0.6, 1, 0.6] }}
    transition={{ duration: 3, repeat: Infinity }}
    className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
  >
    Insights, case studies & practical guides from our creative team 
  </motion.p>
</div>

      {/* Search + Tags */}
      <div className="max-w-6xl mx-auto flex flex-col gap-6 mb-12">
        {/* Search */}
        <motion.input
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          type="text"
          placeholder="🔍 Search blogs by title, author or keyword..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-2xl border border-gray-200 shadow focus:ring-2 focus:ring-[#00BCD4] outline-none"
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-3 justify-center">
          {tags.map((t, i) => (
            <motion.button
              key={t}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              onClick={() => setFilter(t)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === t
                  ? "bg-[#00BCD4] text-white shadow-lg"
                  : "bg-gray-100 text-[#0D1B2A] hover:bg-gray-200"
              }`}
            >
              {t}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Blogs Grid */}
      <motion.div
        layout
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence>
          {filteredBlogs.map((b, i) => (
            <motion.div
              key={b.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <Link to={`/blog/${b.id}`}>
                <motion.article
                  whileHover={{ scale: 1.03 }}
                  className="relative bg-white/80 backdrop-blur-lg border border-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-full h-52 object-top"
                    />
                    <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    <h2 className="text-xl font-bold text-[#0D1B2A] mb-2">
                      {b.title}
                    </h2>
                    <p className="text-gray-600 text-sm flex-grow">
                      {b.excerpt}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm font-medium text-[#FF9800]">
                        {b.author}
                      </span>
                      <span className="text-sm text-gray-500">{b.date}</span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* No Results */}
      {filteredBlogs.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-12 text-gray-500"
        >
          😢 No blogs found. Try another keyword or tag.
        </motion.p>
      )}
    </section>
  );
};

export default BlogList;
