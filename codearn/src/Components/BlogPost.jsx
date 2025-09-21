// src/components/BlogPost.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../Data/blogsData.js";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogs.find((b) => b.id === id);

  if (!post) {
    return (
      <div className="p-12 text-center text-xl text-gray-500">
        ❌ Post not found.
      </div>
    );
  }

  const recommended = blogs.filter((b) => b.id !== id).slice(0, 3);

  return (
    <article className="relative min-h-screen bg-[#FFFFFF] text-[#0D1B2A] py-16 px-6 overflow-hidden top-15 mb-10">
      {/* Subtle Animated Pulse BG */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#00BCD4]/20 blur-3xl"
      />

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Hero Image */}
        <motion.img
          src={post.image}
          alt={post.title}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-72 object-top object-cover rounded-3xl shadow-xl"
        />

        {/* Title */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-4xl md:text-5xl font-extrabold text-[#0D1B2A]"
        >
          {post.title}
        </motion.h1>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-3 mt-3 text-sm text-gray-500"
        >
          <span className="flex items-center gap-1">📅 {post.date}</span>
          <span>•</span>
          <span className="flex items-center gap-1">✍️ {post.author}</span>
        </motion.div>

        {/* Content with separate animated boxes */}
        <div className="mt-10 space-y-6">
          {post.content.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-[#E0F7FA] to-[#FFFFFF] border border-[#00BCD4]/30 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                {p}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 rounded-3xl bg-[#00BCD4]/10 border border-[#00BCD4]/30 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-bold text-lg">🚀 Like this article?</h3>
            <p className="text-gray-700">
              Book a free consultation with{" "}
              <span className="font-semibold">CodEarn Tech</span> and let’s
              bring your ideas to life.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-7 py-3 bg-[#00BCD4] text-[#FFFFFF] rounded-xl font-semibold shadow-md hover:bg-[#FF9800] transition-colors"
          >
            Book a Call
          </Link>
        </motion.div>

        {/* Recommended Section */}
        <div className="mt-16">
          <h4 className="font-bold text-2xl mb-6">✨ Recommended Reads</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {recommended.map((r) => (
              <motion.div
                key={r.id}
                whileHover={{ scale: 1.05 }}
                className="bg-[#FFFFFF] rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <Link to={`/blog/${r.id}`}>
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h5 className="font-semibold text-[#0D1B2A]">
                      {r.title}
                    </h5>
                    <p className="text-gray-500 text-sm mt-1">{r.date}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
