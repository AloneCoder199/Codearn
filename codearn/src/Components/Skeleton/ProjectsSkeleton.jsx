import React from "react";

function ProjectsSkeleton() {
  return (
    <section className="bg-white text-[#0D1B2A] min-h-screen relative overflow-hidden top-15 animate-pulse">
      {/* Hero Title Skeleton */}
      <div className="relative w-full min-h-[65vh] flex flex-col items-center justify-center text-center px-6">
        <div className="h-10 w-64 bg-gray-300 rounded mb-6"></div>
        <div className="h-4 w-96 bg-gray-200 rounded mb-10"></div>

        {/* Project Card Skeleton */}
        <div className="w-full max-w-xl bg-white border border-gray-200 px-6 py-6 rounded-xl shadow-md">
          <div className="h-6 w-40 bg-gray-300 rounded mb-3 mx-auto"></div>
          <div className="h-4 w-72 bg-gray-200 rounded mb-3 mx-auto"></div>
          <div className="h-10 w-32 bg-gray-300 rounded mx-auto"></div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Image Skeleton */}
        <div className="w-full h-80 bg-gray-300 rounded-2xl shadow-lg"></div>

        {/* Right Side Info Skeleton */}
        <div className="space-y-4">
          <div className="h-8 w-52 bg-gray-300 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>

          {/* Bullet Points */}
          <div className="space-y-2 mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-3 w-2/3 bg-gray-200 rounded"></div>
            ))}
          </div>

          {/* Tech Badges Skeleton */}
          <div className="flex gap-3 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-20 bg-gray-300 rounded-full"></div>
            ))}
          </div>

          {/* Buttons Skeleton */}
          <div className="flex gap-4 mt-6">
            <div className="h-10 w-32 bg-gray-300 rounded-lg"></div>
            <div className="h-10 w-32 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Divider Skeleton */}
      <div className="h-[4px] w-1/2 bg-gray-200 rounded-full mx-auto mb-12"></div>
    </section>
  );
}

export default ProjectsSkeleton;
