import type { Metadata } from "next";
import Script from "next/script";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "VAT & Tax Calculator Bangladesh - Free Online Tool",
  description: "A free and universal online tool to easily calculate VAT, Tax (TDS), gross bills, and net payable amounts in Bangladesh.",
  openGraph: {
    title: "VAT & Tax Calculator Bangladesh - Free Online Tool",
    description: "A free and universal online tool to easily calculate VAT, Tax (TDS), gross bills, and net payable amounts in Bangladesh.",
    url: "https://mdmahfuz.com/tools/vat-tax-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "VAT & Tax Calculator (Bangladesh)",
  url: "https://mdmahfuz.com/tools/vat-tax-calculator",
  description:
    "Free online calculator to compute VAT (15%) and TDS/Tax (7.5%) for any service or supply in Bangladesh. Supports Net-to-Gross and Gross-to-Net calculation modes as per NBR rules.",
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
