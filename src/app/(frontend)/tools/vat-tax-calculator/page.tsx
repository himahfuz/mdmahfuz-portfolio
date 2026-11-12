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
    {
      "@type": "FAQPage",
      "@id": "https://mdmahfuz.com/tools/vat-tax-calculator#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a VAT Tax Calculator in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A VAT Tax Calculator in Bangladesh is an online financial tool designed for businesses, consultants, vendors, and finance professionals to compute mathematical breakdowns of bills, applicable tax deductions, and net amounts across 4 commercial modes.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I calculate VAT in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To calculate VAT in Bangladesh, identify the specific statutory VAT rate applicable to your supply or service under current NBR schedules. If adding VAT to a base price, multiply base by VAT rate. If extracting from a total inclusive bill, divide by (1 + Rate ÷ 100) to find base, then subtract base from total.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I calculate VAT from a VAT-exclusive amount?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Apply the standard formula: VAT Amount = Base Amount × (VAT Rate ÷ 100). For example, with a 100,000 base and 15% rate, VAT is 15,000 and total invoice is 115,000.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I calculate VAT from a VAT-inclusive amount?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Extract the base first: Base = Total Inclusive Amount ÷ [1 + (VAT Rate ÷ 100)]. Then, VAT Amount = Total Inclusive Amount − Base. For 115,000 at 15%, base is 100,000 and VAT is 15,000.",
          },
        },
        {
          "@type": "Question",
          "name": "How can I calculate the VAT amount included in a gross bill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the VAT Fraction formula: VAT Amount = Gross Bill × [VAT Rate ÷ (100 + VAT Rate)]. For 15%, multiply by 15/115; for 10%, multiply by 10/110; for 5%, multiply by 5/105.",
          },
        },
        {
          "@type": "Question",
          "name": "Is 15% VAT applicable to all goods and services in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. While 15% is the standard rate under Section 15 of the VAT & SD Act 2012, reduced rates (5%, 7.5%, 10%), fixed duties, or exemptions apply depending on specific H.S. codes, service codes, and NBR SROs.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the difference between VAT, TAX, TDS and VDS in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "VAT is an indirect consumption tax governed by the 2012 VAT Act. Income Tax is a direct tax under the Income Tax Act 2023. TDS is advance income tax withheld by the payer from supplier payments. VDS is VAT withheld at source by registered withholding entities and credited via Mushak-6.6.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I calculate VAT and TDS together?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In standard accounting practice, TDS is deducted from the Gross Base amount, while VAT is added onto the Gross Base amount. For a 100,000 base with 7.5% TDS (-7,500) and 15% VAT (+15,000), client bill is 115,000 and net received is 92,500.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I calculate net payable after deducting TDS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Net Payable = Gross Base − (Gross Base × Tax Rate ÷ 100). To find required gross from target net, use reverse gross-up: Gross = Target Net ÷ [1 − (Tax Rate ÷ 100)].",
          },
        },
        {
          "@type": "Question",
          "name": "Can this calculator automatically determine the applicable VAT and TDS rates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. This calculator is a mathematical modeling tool. The user provides the applicable rates based on their transaction and NBR regulations.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the four calculation modes available in this VAT Tax Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1. Excluding VAT & Tax (reverse gross-up from net cash), 2. Including VAT & Tax (extracts base and deductions from total budget), 3. Exclusive VAT, Inclusive Tax (base contract billing), and 4. Inclusive VAT, Exclusive Tax (reverse gross-up when tax was omitted from VAT quote).",
          },
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
