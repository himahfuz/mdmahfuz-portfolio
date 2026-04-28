import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";

export const revalidate = 60; // Revalidate every 60 seconds

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

        <div className="prose prose-sm md:prose-base max-w-none prose-p:text-[var(--color-text-secondary)] prose-headings:text-[var(--color-text-primary)] prose-strong:text-[var(--color-text-primary)]">
          <p className="lead text-[16px] text-[var(--color-text-primary)] font-medium mb-8">
            {post.description}
          </p>
          <p>
            Detailed study notes and analysis will appear here. This section tracks ongoing professional development and knowledge sharing.
          </p>
        </div>
      </div>
    </div>
  );
}
