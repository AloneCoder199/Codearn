// src/Components/Skeleton/ContactSkeleton.jsx
import React from "react";
import { motion } from "framer-motion";

const ContactSkeleton = () => {
  return (
    <div className="min-h-screen bg-white text-[#0D1B2A] relative overflow-hidden top-15">
      {/* Background Circles Skeleton (subtle animations) */}
      <motion.div
        aria-hidden
        className="absolute -left-32 -top-40 w-96 h-96 rounded-full bg-[#00BCD4]/10 animate-pulse"
      />
      <motion.div
        aria-hidden
        className="absolute right-[-80px] bottom-[-80px] w-80 h-80 rounded-full bg-[#00BCD4]/10 animate-pulse"
      />

      {/* Header Skeleton */}
      <header className="max-w-6xl mx-auto px-6 py-16 text-center relative z-10">
        <div className="h-10 w-80 bg-gray-200 rounded-lg mx-auto animate-pulse"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto mt-4 animate-pulse"></div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* Left Info Card Skeleton */}
        <div className="p-8 rounded-2xl bg-gray-100 border border-gray-200">
          <div className="h-6 w-40 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-3"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse mb-3"></div>

          <div className="mt-6 space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>

          <div className="mt-6">
            <div className="h-5 w-32 bg-gray-300 rounded animate-pulse mb-2"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="mt-6 flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-8 w-8 bg-gray-300 rounded-md animate-pulse"></div>
            ))}
          </div>
        </div>

        {/* Right Form Skeleton */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-lg border">
          <div className="h-6 w-40 bg-gray-300 rounded animate-pulse mb-6"></div>

          {/* Inputs Skeleton */}
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 w-full bg-gray-200 rounded-md animate-pulse"></div>
            ))}
            <div className="h-24 w-full bg-gray-200 rounded-md animate-pulse"></div>
          </div>

          {/* Buttons Skeleton */}
          <div className="flex gap-4 mt-6">
            <div className="h-10 w-32 bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>

          {/* Note Skeleton */}
          <div className="h-3 w-2/3 bg-gray-200 rounded mt-4 animate-pulse"></div>
        </div>
      </main>

      {/* Footer Skeleton */}
      <footer className="py-6 text-center text-sm text-gray-600">
        <div className="h-4 w-64 bg-gray-200 rounded mx-auto animate-pulse"></div>
      </footer>
    </div>
  );
};

export default ContactSkeleton;
