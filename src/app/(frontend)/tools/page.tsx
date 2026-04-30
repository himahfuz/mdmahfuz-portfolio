import { client } from "@/sanity/lib/client";
import * as LucideIcons from "lucide-react";
import Link from "next/link";

export const revalidate = 60; // Revalidate every 60 seconds

// Hardcoded local tools for scalability
const localTools = [
  {
    _id: "local-vat-tax-calculator",
    title: "Consultant VAT & Tax Calculator",
    icon: "Calculator",
    description: "Quickly calculate Gross, VAT, and Tax amounts for professional consultancy services. Supports both Net and Total calculation modes.",
    link: "/tools/vat-tax-calculator",
  }
];

export default async function Tools() {
  const sanityTools = await client.fetch(`*[_type == "tool"]{
    _id,
    title,
    icon,
    description,
    link
  }`);

  // Combine local hardcoded tools with Sanity fetched tools
  const toolsData = [...localTools, ...sanityTools];

  return (
    <div className="pb-20">
      
      {/* Hero Section */}
      <div className="glass-panel p-10 md:p-12 w-full mb-10 text-center md:text-left">
        <h1 className="font-poppins font-bold text-[36px] text-[var(--color-text-primary)] leading-tight mb-2">
          Professional Audit & Tax Tools
        </h1>
        <p className="font-inter text-[15px] text-[var(--color-text-secondary)]">
          Web applications and calculators designed for accounting, auditing, and finance professionals.
        </p>
      </div>

      {/* Tool Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolsData.length === 0 ? (
          <div className="col-span-full py-20 flex flex-col items-center justify-center opacity-70">
            <div className="w-16 h-16 bg-[var(--color-brand-primary)]/10 rounded-full flex items-center justify-center mb-4 text-[var(--color-brand-primary)]">
              <LucideIcons.Clock size={28} />
            </div>
            <h3 className="font-poppins font-semibold text-xl text-[var(--color-text-primary)] mb-2">Coming Soon</h3>
            <p className="text-[14px] text-[var(--color-text-secondary)] text-center w-full max-w-[400px]">Tools and resources are currently being prepared and will be published shortly.</p>
          </div>
        ) : (
          toolsData.map((tool: any) => {
            // Dynamically get the icon component
            const IconComponent = (LucideIcons as any)[tool.icon] || (LucideIcons as any).Wrench;

            return (
              <div key={tool._id} className="glass-panel p-6 flex flex-col hover:shadow-[0_12px_40px_rgba(31,38,135,0.1)] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center mb-4 text-[var(--color-brand-primary)] border border-white/60">
                  <IconComponent size={24} />
                </div>
                
                <h3 className="font-semibold text-[16px] text-[var(--color-text-primary)] mb-2">
                  {tool.title}
                </h3>
                
                <p className="text-[13px] text-[var(--color-text-secondary)] flex-1 mb-6">
                  {tool.description}
                </p>
                
                <Link href={tool.link} className="btn-glass justify-center mt-auto text-center w-full">
                  Use Tool
                </Link>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
