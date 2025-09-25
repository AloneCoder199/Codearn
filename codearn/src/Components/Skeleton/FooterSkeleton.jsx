import React from "react";

function FooterSkeleton() {
  return (
    <footer className="bg-[#F5F7FA] text-[#0D1B2A] pt-14 pb-8 relative overflow-hidden animate-pulse">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* Brand Skeleton */}
        <div>
          <div className="h-6 w-40 bg-gray-300 rounded mb-4"></div>
          <div className="h-3 w-64 bg-gray-200 rounded mb-2"></div>
          <div className="h-3 w-56 bg-gray-200 rounded mb-2"></div>
          <div className="h-2 w-44 bg-gray-200 rounded"></div>
        </div>

        {/* Company Links Skeleton */}
        <div>
          <div className="h-5 w-28 bg-gray-300 rounded mb-4"></div>
          <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-3 w-24 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>

        {/* Resources Skeleton */}
        <div>
          <div className="h-5 w-28 bg-gray-300 rounded mb-4"></div>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-3 w-24 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>

        {/* Socials Skeleton */}
        <div>
          <div className="h-5 w-28 bg-gray-300 rounded mb-4"></div>
          <div className="flex space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 w-10 rounded-full bg-gray-300"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line Skeleton */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center">
        <div className="h-3 w-56 bg-gray-200 rounded mx-auto"></div>
      </div>
    </footer>
  );
}

export default FooterSkeleton;
