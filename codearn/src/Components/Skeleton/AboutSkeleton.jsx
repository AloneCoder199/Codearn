import React from "react";

// Reusable Skeleton Block
const SkeletonBlock = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded-md ${className}`} />
);

const AboutSkeleton = () => {
  return (
    <section className="relative bg-white text-[#0D1B2A] py-20 px-6 mt-5 overflow-hidden">
      {/* Mobile Only DP Image */}
      <div className="block md:hidden mb-6">
        <SkeletonBlock className="w-32 h-32 rounded-full mx-auto shadow-lg border-4 border-gray-200" />
      </div>

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        {/* Tagline */}
        <div className="flex items-center gap-2 mb-3">
          <SkeletonBlock className="h-3 w-3 rounded-full" />
          <SkeletonBlock className="h-4 w-40" />
        </div>

        {/* Title */}
        <div className="space-y-3">
          <SkeletonBlock className="h-7 w-60 md:w-96 mx-auto" />
          <SkeletonBlock className="h-7 w-48 md:w-80 mx-auto" />
        </div>

        {/* Description */}
        <div className="mt-6 space-y-3 max-w-2xl mx-auto">
          <SkeletonBlock className="h-4 w-full" />
          <SkeletonBlock className="h-4 w-11/12 mx-auto" />
          <SkeletonBlock className="h-4 w-10/12 mx-auto" />
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <SkeletonBlock className="h-10 w-32 rounded-xl" />
          <SkeletonBlock className="h-10 w-32 rounded-xl" />
        </div>

        {/* Stats */}
        <div className="mt-12 flex gap-10 flex-wrap justify-center">
          {Array(3)
            .fill()
            .map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <SkeletonBlock className="h-7 w-20" />
                <SkeletonBlock className="h-4 w-24" />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSkeleton;
