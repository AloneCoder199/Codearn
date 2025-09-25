import React from "react";

// Reusable Skeleton Block
const SkeletonBlock = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded-md ${className}`} />
);

const NavbarSkeleton = () => {
  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <SkeletonBlock className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <SkeletonBlock className="h-4 w-20" />
              <SkeletonBlock className="h-3 w-14" />
            </div>
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {Array(5)
              .fill()
              .map((_, i) => (
                <SkeletonBlock key={i} className="h-5 w-12" />
              ))}
          </div>

          {/* Right Button */}
          <SkeletonBlock className="h-9 w-24 rounded-lg" />
        </div>
      </nav>

      {/* MOBILE NAV */}
      <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[92%]">
        <div className="bg-white/96 backdrop-blur-lg shadow-2xl rounded-3xl px-3 py-3 flex items-center justify-between">
          {Array(5)
            .fill()
            .map((_, i) => (
              <SkeletonBlock
                key={i}
                className="h-11 w-11 rounded-xl"
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default NavbarSkeleton;
