import { client } from "@/sanity/lib/client";
import LearningTabs from "./LearningTabs";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Learning() {
  const posts = await client.fetch(`*[_type == "learning"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    status,
    "date": publishedAt
  }`);

  const categories = ["Accounting", "Cost Accounting", "TAX", "VAT"];
  const learningData = categories.map((cat) => ({
    category: cat,
    posts: posts.filter((p: any) => p.category === cat),
  }));

  return (
    <div className="pb-20">
      
      {/* Hero Section */}
      <div className="glass-panel p-10 md:p-12 w-full mb-10 text-center md:text-left">
        <h1 className="font-poppins font-bold text-[36px] text-[var(--color-text-primary)] leading-tight mb-2">
          My Learning Portfolio
        </h1>
        <p className="font-inter text-[15px] text-[var(--color-text-secondary)]">
          A curated record of my ongoing professional development and knowledge sharing.
        </p>
      </div>

      <LearningTabs learningData={learningData} />

    </div>
  );
}
