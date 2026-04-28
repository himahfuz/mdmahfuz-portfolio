"use client";

import { useState } from "react";
import { PostCard } from "@/components/ui/PostCard";

export default function LearningTabs({ learningData }: { learningData: any[] }) {
  const [activeTab, setActiveTab] = useState(learningData[0]?.category || "Accounting");

  return (
    <>
      {/* Tab Bar */}
      <div className="flex flex-wrap md:flex-row gap-3 mb-10 overflow-x-auto hide-scrollbar">
        {learningData.map((data) => (
          <button
            key={data.category}
            onClick={() => setActiveTab(data.category)}
            className={`px-7 py-2.5 rounded-[30px] border border-white/50 font-inter font-medium text-[14px] transition-all duration-250 whitespace-nowrap
              ${activeTab === data.category 
                ? "bg-[image:var(--background-image-brand-gradient)] text-white border-none shadow-[0_4px_16px_rgba(0,201,127,0.3)]" 
                : "bg-white/30 text-[var(--color-text-secondary)] hover:bg-white/50"
              }
            `}
          >
            {data.category}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {learningData
          .find((d) => d.category === activeTab)
          ?.posts.map((post: any) => (
            <PostCard key={post._id} {...post} id={post._id} hrefPrefix="/learning" />
          ))}
        {learningData.find((d) => d.category === activeTab)?.posts.length === 0 && (
          <div className="col-span-full py-10 text-center text-[var(--color-text-secondary)] italic">
            No posts in this category yet.
          </div>
        )}
      </div>
    </>
  );
}
