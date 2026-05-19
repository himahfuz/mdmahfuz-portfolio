import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";

import { Metadata } from 'next';
import { PortableText } from '@portabletext/react';

export const revalidate = 60; // Revalidate every 60 seconds

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const formattedTitle = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${formattedTitle} | CA Study Notes`,
    description: `${formattedTitle}`,
  };
}

export default async function LearningPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const post = await client.fetch(`*[_type == "learning" && slug.current == $slug][0] {
    title,
    category,
    description,
    status,
    "date": publishedAt
  }`, { slug });

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto pb-20">
      <Link href="/learning" className="inline-flex items-center gap-2 text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] mb-8 transition-colors">
        <ArrowLeft size={16} /> Back to Learning
      </Link>

      <div className="glass-panel p-8 md:p-12">
        <div className="flex items-center justify-between mb-4">
          <span className="badge badge-technical inline-block">{post.category}</span>
          <span className={`text-[12px] font-medium px-3 py-1 rounded-full ${post.status === "Published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
            {post.status}
          </span>
        </div>
        
        <h1 className="font-poppins font-bold text-[32px] md:text-[40px] text-[var(--color-text-primary)] leading-tight mb-6">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-6 text-[13px] text-[var(--color-text-secondary)] mb-10 pb-6 border-b border-white/20">
          <span className="flex items-center gap-2"><BookOpen size={16} /> Learning Log</span>
          {post.date && <span className="flex items-center gap-2"><Clock size={16} /> Updated: {post.date}</span>}
        </div>

        <div className="
          max-w-none 
          text-[16px] leading-relaxed text-[var(--color-text-secondary)] 
          [&>p]:mb-6 
          [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:text-[var(--color-text-primary)] [&>h2]:mt-10 [&>h2]:mb-4 
          [&>h3]:text-[20px] [&>h3]:font-semibold [&>h3]:text-[var(--color-text-primary)] [&>h3]:mt-8 [&>h3]:mb-3 
          [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-6 [&>li]:mb-2 
          [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-6 [&>li]:mb-2
          [&>strong]:text-[var(--color-text-primary)]
        ">
          {post.description ? (
            <PortableText value={post.description} />
          ) : (
            <p>Detailed study notes and analysis will appear here. This section tracks ongoing professional development and knowledge sharing.</p>
          )}
        </div>
      </div>
    </div>
  );
}
