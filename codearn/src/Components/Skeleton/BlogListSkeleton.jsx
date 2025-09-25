// src/Components/Skeleton/BlogListSkeleton.jsx
import React from "react";
import { motion } from "framer-motion";

const BlogListSkeleton = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#E0F7FA] via-white to-[#FFF8E1] text-[#0D1B2A] py-16 px-6">
      {/* Header Skeleton */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <div className="h-10 w-64 mx-auto bg-gray-200 rounded-lg animate-pulse"></div>
        <div className="h-3 w-1/3 mx-auto mt-4 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-4 w-2/3 mx-auto mt-6 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Search Bar Skeleton */}
      <div className="max-w-6xl mx-auto flex flex-col gap-6 mb-12">
        <div className="h-12 w-full bg-gray-200 rounded-2xl animate-pulse"></div>

        {/* Tags Skeleton */}
        <div className="flex flex-wrap gap-3 justify-center">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      {/* Blogs Grid Skeleton */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/80 backdrop-blur-lg border border-gray-100 rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Image Skeleton */}
            <div className="w-full h-52 bg-gray-200 animate-pulse"></div>

            {/* Content Skeleton */}
            <div className="p-6">
              <div className="h-5 w-3/4 bg-gray-200 rounded mb-3 animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded mb-2 animate-pulse"></div>
              <div className="flex items-center justify-between mt-6">
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogListSkeleton;
