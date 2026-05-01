import type { Metadata } from "next";
import Script from "next/script";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "Consultant VAT & Tax Calculator (BD)",
  description: "Easily calculate Gross, VAT, and TDS on consultant fees. Supports both Including and Excluding calculation methods as per NBR standard rules.",
  openGraph: {
    title: "Consultant VAT & Tax Calculator (BD)",
    description: "Easily calculate Gross, VAT, and TDS on consultant fees. Supports both Including and Excluding calculation methods as per NBR standard rules.",
    url: "https://mdmahfuz.com/tools/vat-tax-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Consultant VAT & Tax Calculator BD",
  url: "https://mdmahfuz.com/tools/vat-tax-calculator",
  description:
    "Free online calculator to compute VAT (15%) and TDS/Tax (7.5%) on consultant fees in Bangladesh. Supports Net-to-Gross and Gross-to-Net calculation modes as per NBR rules.",
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
