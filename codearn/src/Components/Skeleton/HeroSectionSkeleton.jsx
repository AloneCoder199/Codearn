import React from "react";

// Reusable Skeleton Block
const SkeletonBlock = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded-md ${className}`}></div>
);

const HeroSectionSkeleton = () => {
  return (
    <main className="px-6 md:px-12 lg:px-20 relative top-15">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
        
        {/* LEFT SIDE (Text + Buttons) */}
        <div className="space-y-5 text-center md:text-left">
          {/* Small Intro Text */}
          <SkeletonBlock className="h-4 w-40 mx-auto md:mx-0" />

          {/* Heading Lines */}
          <div className="space-y-3">
            <SkeletonBlock className="h-10 w-3/4 mx-auto md:mx-0" />
            <SkeletonBlock className="h-10 w-2/3 mx-auto md:mx-0" />
          </div>

          {/* Paragraph */}
          <div className="space-y-2">
            <SkeletonBlock className="h-4 w-full max-w-md mx-auto md:mx-0" />
            <SkeletonBlock className="h-4 w-5/6 mx-auto md:mx-0" />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <SkeletonBlock className="h-12 w-40" />
            <SkeletonBlock className="h-12 w-36" />
          </div>
        </div>

        {/* RIGHT SIDE (CodeShowcase box) */}
        <div className="w-full">
          <SkeletonBlock className="h-80 w-full rounded-xl" />
        </div>
      </section>
    </main>
  );
};

export default HeroSectionSkeleton;
