import React from "react";

// Reusable Skeleton Block
const SkeletonBlock = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded-md ${className}`} />
);

const ServicesSectionSkeleton = () => {
  return (
    <section id="services" className="py-20 px-6 lg:px-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-12 space-y-4">
        <SkeletonBlock className="h-8 w-56 mx-auto" /> {/* Title */}
        <SkeletonBlock className="h-1 w-24 mx-auto rounded-full" /> {/* Orange line */}
        <div className="space-y-2 max-w-2xl mx-auto">
          <SkeletonBlock className="h-4 w-full" />
          <SkeletonBlock className="h-4 w-5/6 mx-auto" />
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* LEFT SIDE - Services List Skeletons */}
        <div className="flex flex-col space-y-3">
          {Array(6)
            .fill()
            .map((_, i) => (
              <SkeletonBlock key={i} className="h-12 w-full rounded-xl" />
            ))}
        </div>

        {/* RIGHT SIDE - Detail Card Skeleton */}
        <div>
          <div className="p-8 rounded-2xl shadow-md border border-slate-200 bg-white space-y-6 min-h-[380px]">
            {/* Icon + Title */}
            <div className="flex items-center gap-3">
              <SkeletonBlock className="h-10 w-10 rounded-xl" />
              <SkeletonBlock className="h-6 w-48" />
            </div>

            {/* Paragraph */}
            <div className="space-y-3">
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-11/12" />
              <SkeletonBlock className="h-4 w-5/6" />
              <SkeletonBlock className="h-4 w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionSkeleton;
