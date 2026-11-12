import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import Calculator from "./Calculator";
import VatTaxContent from "./VatTaxContent";

export const metadata: Metadata = {
  title: "VAT & Tax Calculator Bangladesh",
  description:
    "Free Bangladesh VAT and Tax calculator. Compute Gross Base, Net Payable, VAT, and Tax/TDS deductions across 4 billing modes with guides and FAQ.",
  alternates: {
    canonical: "https://mdmahfuz.com/tools/vat-tax-calculator",
  },
  openGraph: {
    title: "VAT & Tax Calculator Bangladesh",
    description:
      "Free Bangladesh VAT and Tax calculator. Compute Gross Base, Net Payable, VAT, and Tax/TDS deductions across 4 billing modes with guides and FAQ.",
    url: "https://mdmahfuz.com/tools/vat-tax-calculator",
    type: "website",
    siteName: "MD Mahfuzur Rahman",
    locale: "en_US",
    images: [
      {
        url: "https://mdmahfuz.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VAT & Tax Calculator Bangladesh - MD Mahfuzur Rahman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VAT & Tax Calculator Bangladesh",
    description:
      "Free Bangladesh VAT and Tax calculator. Compute Gross Base, Net Payable, VAT, and Tax/TDS deductions across 4 billing modes with guides and FAQ.",
    images: ["https://mdmahfuz.com/images/og-image.jpg"],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mdmahfuz.com/tools/vat-tax-calculator#webpage",
      "url": "https://mdmahfuz.com/tools/vat-tax-calculator",
      "name": "VAT & Tax Calculator Bangladesh",
      "description":
        "Free Bangladesh VAT and Tax calculator. Compute Gross Base, Net Payable, VAT, and Tax/TDS deductions across 4 billing modes with guides and FAQ.",
      "inLanguage": "en-US",
      "breadcrumb": {
        "@id": "https://mdmahfuz.com/tools/vat-tax-calculator#breadcrumb",
      },
      "mainEntity": {
        "@id": "https://mdmahfuz.com/tools/vat-tax-calculator#webapp",
      },
    },
    {
      "@type": "WebApplication",
      "@id": "https://mdmahfuz.com/tools/vat-tax-calculator#webapp",
      "name": "VAT & Tax Calculator Bangladesh",
      "url": "https://mdmahfuz.com/tools/vat-tax-calculator",
      "description":
        "Free Bangladesh VAT and Tax calculator. Compute Gross Base, Net Payable, VAT, and Tax/TDS deductions across 4 billing modes with guides and FAQ.",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "inLanguage": "en-US",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BDT",
      },
      "author": {
        "@id": "https://mdmahfuz.com/#person",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mdmahfuz.com/tools/vat-tax-calculator#breadcrumb",
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
          "name": "Tools",
          "item": "https://mdmahfuz.com/tools",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "VAT Tax Calculator",
          "item": "https://mdmahfuz.com/tools/vat-tax-calculator",
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdGraph).replace(/</g, "\\u003c"),
        }}
      />
      <div className="pb-16">
        {/* User-visible Semantic Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center flex-wrap gap-2 text-[13px] text-[var(--color-text-secondary)] font-inter">
            <li className="inline-flex items-center gap-2">
              <Link
                href="/"
                className="hover:text-[var(--color-brand-primary)] transition-colors inline-flex items-center gap-1.5"
              >
                <Home size={14} className="opacity-75" />
                <span>Home</span>
              </Link>
            </li>
            <li aria-hidden="true" className="opacity-40">
              <ChevronRight size={13} />
            </li>
            <li className="inline-flex items-center gap-2">
              <Link
                href="/tools"
                className="hover:text-[var(--color-brand-primary)] transition-colors"
              >
                Tools
              </Link>
            </li>
            <li aria-hidden="true" className="opacity-40">
              <ChevronRight size={13} />
            </li>
            <li className="inline-flex items-center text-[var(--color-text-primary)] font-medium">
              <span aria-current="page">VAT Tax Calculator</span>
            </li>
          </ol>
        </nav>

        <Calculator />
        <VatTaxContent />
      </div>
    </>
  );
}
