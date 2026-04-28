import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { PortableText } from "@portabletext/react";

export const revalidate = 60; // Revalidate every 60 seconds

// In Next.js 15, `params` in dynamic routes is treated as a Promise.
// It's strongly recommended to await `params` before using its properties.
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const post = await client.fetch(`*[_type == "blog" && slug.current == $slug][0] {
    title,
    category,
    excerpt,
    "date": publishedAt,
    readTime,
    body
  }`, { slug });

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto pb-20">
      <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] mb-8 transition-colors">
        <ArrowLeft size={16} /> Back to Blog
      </Link>

      <div className="glass-panel p-8 md:p-12">
        <span className="badge badge-technical mb-4 inline-block">{post.category}</span>
        <h1 className="font-poppins font-bold text-[32px] md:text-[40px] text-[var(--color-text-primary)] leading-tight mb-6">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-6 text-[13px] text-[var(--color-text-secondary)] mb-10 pb-6 border-b border-white/20">
          <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
          <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
        </div>

        <div className="prose prose-sm md:prose-base max-w-none prose-p:text-[var(--color-text-secondary)] prose-headings:text-[var(--color-text-primary)] prose-strong:text-[var(--color-text-primary)]">
          <p className="lead text-[16px] text-[var(--color-text-primary)] font-medium mb-8">
            {post.excerpt}
          </p>
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p>No content available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
