// src/Components/Skeleton/BlogPostSkeleton.jsx
import React from "react";

const BlogPostSkeleton = () => {
  return (
    <div className="animate-pulse max-w-4xl mx-auto p-6">
      {/* Hero Image */}
      <div className="w-full h-72 bg-gray-200 rounded-3xl mb-6"></div>

      {/* Title */}
      <div className="h-8 w-3/4 bg-gray-300 rounded mb-4"></div>

      {/* Meta */}
      <div className="flex gap-3 mb-8">
        <div className="h-4 w-20 bg-gray-200 rounded"></div>
        <div className="h-4 w-20 bg-gray-200 rounded"></div>
      </div>

      {/* Content blocks */}
      <div className="space-y-4">
        <div className="h-24 w-full bg-gray-100 rounded-2xl"></div>
        <div className="h-24 w-full bg-gray-100 rounded-2xl"></div>
        <div className="h-24 w-full bg-gray-100 rounded-2xl"></div>
      </div>

      {/* CTA Section */}
      <div className="mt-10 h-28 w-full bg-gray-200 rounded-3xl"></div>

      {/* Recommended Section */}
      <div className="mt-12">
        <div className="h-6 w-1/3 bg-gray-300 rounded mb-6"></div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="h-40 bg-gray-200 rounded-2xl"></div>
          <div className="h-40 bg-gray-200 rounded-2xl"></div>
          <div className="h-40 bg-gray-200 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostSkeleton;
