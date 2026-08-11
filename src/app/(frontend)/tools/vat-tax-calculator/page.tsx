import type { Metadata } from "next";
import Script from "next/script";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "VAT Tax Calculator BD - Free Online Tool",
  description: "Free online calculator to easily compute VAT, VDS, Tax, TDS, gross bills, and net payable amounts for Bangladesh. Fast, accurate, and NBR compliant.",
  keywords: [
    "VAT calculator BD",
    "Tax calculator Bangladesh",
    "TDS calculator BD",
    "Gross to net calculator Bangladesh",
    "NBR VAT calculation",
    "VDS calculator",
    "Free online VAT calculator",
    "Bangladesh tax deduction calculator"
  ],
  openGraph: {
    title: "VAT Tax Calculator BD - Free Online Tool",
    description: "Free online calculator to compute VAT, VDS, Tax, TDS, gross bills, and net payable amounts for Bangladesh. Fast, accurate, and NBR compliant.",
    url: "https://mdmahfuz.com/tools/vat-tax-calculator",
  },
  alternates: {
    canonical: "https://mdmahfuz.com/tools/vat-tax-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "VAT & Tax Calculator (Bangladesh)",
  url: "https://mdmahfuz.com/tools/vat-tax-calculator",
  description:
    "Free online calculator to compute VAT and TDS/Tax for any service or supply in Bangladesh. Supports Net-to-Gross and Gross-to-Net calculation modes as per NBR rules.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "All",
  browserRequirements: "Requires JavaScript",
  inLanguage: "en",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BDT",
  },
  author: {
    "@type": "Person",
    name: "Md. Mahfuzur Rahman",
    url: "https://mdmahfuz.com",
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="vat-calculator-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Calculator />
    </>
  );
}
