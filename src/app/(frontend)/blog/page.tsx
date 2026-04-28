import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogList() {
  const blogData = await client.fetch(`*[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    "thumbnail": mainImage.asset->url,
    "date": publishedAt,
    readTime,
    featured
  }`);

  const featuredPost = blogData.find((post: any) => post.featured) || blogData[0];
  const regularPosts = featuredPost ? blogData.filter((post: any) => post._id !== featuredPost._id) : [];

  if (!featuredPost) {
    return (
      <div className="pb-20 text-center text-[var(--color-text-secondary)] italic">
        No blog posts published yet.
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Featured Post */}
      <div className="mb-10">
        <h2 className="font-poppins font-bold text-[28px] text-[var(--color-text-primary)] mb-6">
          Featured Post
        </h2>
        <div className="glass-panel w-full flex flex-col md:flex-row overflow-hidden group">
          <div className="w-full md:w-[50%] h-[300px] md:h-auto relative overflow-hidden bg-white/20">
            {featuredPost.thumbnail ? (
              <Image 
                src={featuredPost.thumbnail} 
                alt={featuredPost.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            ) : (
              <div className="w-full h-full bg-[var(--color-brand-primary)] opacity-10"></div>
            )}
          </div>
          
          <div className="p-8 md:p-12 w-full md:w-[50%] flex flex-col justify-center">
            <span className="badge badge-technical w-max mb-4">{featuredPost.category}</span>
            <h3 className="font-poppins font-bold text-[28px] md:text-[32px] text-[var(--color-text-primary)] leading-tight mb-4 group-hover:text-[var(--color-brand-primary)] transition-colors">
              {featuredPost.title}
            </h3>
            <p className="text-[15px] text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              {featuredPost.excerpt}
            </p>
            
            <div className="flex items-center gap-4 text-[12px] text-[var(--color-text-secondary)] mb-8">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {featuredPost.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {featuredPost.readTime}</span>
            </div>
            
            <Link href={`/blog/${featuredPost.slug}`} className="text-[14px] font-semibold text-[var(--color-brand-primary)] flex items-center gap-2 w-max hover:gap-3 transition-all">
              Read Article <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Posts Grid */}
      <div>
        <h2 className="font-poppins font-bold text-[24px] text-[var(--color-text-primary)] mb-6">
          Recent Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post: any) => (
            <div key={post._id} className="glass-panel p-6 flex flex-col hover:shadow-[0_12px_40px_rgba(31,38,135,0.1)] transition-all duration-300 group">
              <span className="text-[11px] font-medium text-[var(--color-brand-primary)] uppercase tracking-wider mb-2">
                {post.category}
              </span>
              <h3 className="font-semibold text-[18px] text-[var(--color-text-primary)] mb-3 leading-tight group-hover:text-[var(--color-brand-primary)] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-[13px] text-[var(--color-text-secondary)] line-clamp-3 mb-5 flex-1">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/20">
                <div className="flex items-center gap-3 text-[11px] text-[var(--color-text-secondary)]">
                  <span>{post.date}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center group-hover:bg-[var(--color-brand-primary)] group-hover:text-white transition-colors">
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
