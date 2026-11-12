import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(`*[_type == "blog" && slug.current == $slug][0] {
    title,
    excerpt,
    "thumbnail": mainImage.asset->url,
    seo
  }`, { slug });

  const fallbackTitle = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  let rawTitle = post?.seo?.metaTitle || post?.title || fallbackTitle;
  const BRAND_SUFFIX = " | MD Mahfuzur Rahman";
  const hasBrand = rawTitle.includes("MD Mahfuzur Rahman");

  let title: Metadata["title"];
  let ogTitle: string;

  if (hasBrand) {
    if (rawTitle.length > 65) {
      rawTitle = rawTitle.slice(0, 62).trim() + "...";
    }
    title = { absolute: rawTitle };
    ogTitle = rawTitle;
  } else {
    if (rawTitle.length + BRAND_SUFFIX.length <= 65) {
      title = rawTitle;
      ogTitle = rawTitle + BRAND_SUFFIX;
    } else if (rawTitle.length <= 65) {
      title = { absolute: rawTitle };
      ogTitle = rawTitle;
    } else {
      const truncated = rawTitle.slice(0, 62).trim() + "...";
      title = { absolute: truncated };
      ogTitle = truncated;
    }
  }

  const fallbackDesc = `Read article on ${post?.title || fallbackTitle} by MD Mahfuzur Rahman.`;
  const rawDesc = post?.seo?.metaDescription || post?.excerpt || fallbackDesc;
  const description = rawDesc.length > 155 ? `${rawDesc.slice(0, 152).trim()}...` : rawDesc;

  const canonicalUrl = `https://mdmahfuz.com/blog/${slug}`;
  const ogImageUrl = post?.thumbnail || 'https://mdmahfuz.com/images/og-image.jpg';

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: ogTitle,
      description,
      url: canonicalUrl,
      siteName: 'MD Mahfuzur Rahman',
      type: "article",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: typeof title === "string" ? title : ogTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [ogImageUrl],
    },
  };
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 mb-5 font-poppins text-2xl md:text-[28px] font-bold leading-tight text-[var(--color-text-primary)]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 font-poppins text-xl md:text-2xl font-semibold text-[var(--color-text-primary)]">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-5 text-[15px] md:text-base leading-8 text-[var(--color-text-secondary)]">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-6 ml-6 list-disc space-y-3 text-[15px] md:text-base leading-7 text-[var(--color-text-secondary)] marker:text-[var(--color-brand-primary)]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal space-y-3 text-[15px] md:text-base leading-7 text-[var(--color-text-secondary)] marker:font-semibold marker:text-[var(--color-brand-primary)]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,
    number: ({ children }) => <li className="pl-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-[var(--color-text-primary)]">{children}</strong>,
    link: ({ children, value }) => (
      <a href={value?.href} target={value?.href?.startsWith("http") ? "_blank" : undefined} rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined} className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 hover:opacity-80">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      const imageUrl = value?.asset?.url;
      if (!imageUrl) return null;

      return (
        <figure className="my-8">
          <img
            src={imageUrl}
            alt={value?.alt || value?.caption || "Financial Statement Audit Reviewer guide"}
            loading="lazy"
            className="block h-auto w-full rounded-2xl border border-black/5 shadow-sm"
          />
          {value?.caption ? (
            <figcaption className="mt-3 text-center text-sm leading-6 text-[var(--color-text-secondary)]">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = await client.fetch(`*[_type == "blog" && slug.current == $slug][0] {
    title,
    category,
    excerpt,
    "date": publishedAt,
    readTime,
    "heroImage": mainImage.asset->url,
    body[]{
      ...,
      _type == "image" => {
        ...,
        "asset": asset->{url, metadata}
      }
    }
  }`, { slug });

  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://mdmahfuz.com/blog/${slug}#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": `https://mdmahfuz.com/blog/${slug}`,
          "url": `https://mdmahfuz.com/blog/${slug}`,
          "name": post.title,
        },
        "headline": post.title,
        "description": post.excerpt || `Article on ${post.title} by MD Mahfuzur Rahman.`,
        "image": post.heroImage ? [post.heroImage] : ["https://mdmahfuz.com/images/og-image.jpg"],
        "datePublished": post.date || "2026-11-12T00:00:00.000Z",
        "dateModified": post.date || "2026-11-12T00:00:00.000Z",
        "author": {
          "@id": "https://mdmahfuz.com/#person",
        },
        "publisher": {
          "@id": "https://mdmahfuz.com/#person",
        },
        "mainEntityOfPage": `https://mdmahfuz.com/blog/${slug}`,
        "inLanguage": "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://mdmahfuz.com/blog/${slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mdmahfuz.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://mdmahfuz.com/blog",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://mdmahfuz.com/blog/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <article className="mx-auto max-w-4xl pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-[13px] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-brand-primary)]">
        <ArrowLeft size={16} /> Back to Blog
      </Link>

      <div className="glass-panel overflow-hidden">
        <header className="px-6 pt-8 md:px-12 md:pt-12">
          <span className="badge badge-technical mb-5 inline-block">{post.category}</span>
          <h1 className="mb-6 font-poppins text-[30px] font-bold leading-[1.16] text-[var(--color-text-primary)] md:text-[42px]">
            {post.title}
          </h1>
          <div className="mb-8 flex flex-wrap items-center gap-5 border-b border-black/5 pb-7 text-[13px] text-[var(--color-text-secondary)]">
            <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
          </div>
        </header>

        {post.heroImage ? (
          <div className="px-6 md:px-12">
            <img
              src={post.heroImage}
              alt={post.title}
              className="block max-h-[480px] w-full rounded-2xl object-cover"
              fetchPriority="high"
            />
          </div>
        ) : null}

        <div className="px-6 pb-10 pt-8 md:px-12 md:pb-14">
          <p className="mb-9 border-l-4 border-[var(--color-brand-primary)] pl-5 text-base font-medium leading-8 text-[var(--color-text-primary)] md:text-lg">
            {post.excerpt}
          </p>

          {post.body?.length ? (
            <div className="blog-article-content">
              <PortableText value={post.body} components={portableTextComponents} />
            </div>
          ) : (
            <p className="text-[var(--color-text-secondary)]">No content available.</p>
          )}
        </div>
      </div>
    </article>
  );
}
