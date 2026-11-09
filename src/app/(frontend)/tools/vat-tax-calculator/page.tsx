import type { Metadata } from "next";
import Script from "next/script";
import Calculator from "./Calculator";
import VatTaxFaq from "./VatTaxFaq";
import { FAQ_STEPS } from "./faqData";

export const metadata: Metadata = {
  title: "VAT Tax Calculator BD - Free Online TDS & VDS Calculation Tool",
  description:
    "Free online VAT & Tax calculator for Bangladesh. Calculate Gross bills, Net payable, VAT (15%, 10%, 7.5%, 5%), and TDS under NBR laws. Complete with FAQ guide on VAT, Tax, TDS, and VDS.",
  keywords: [
    "VAT calculator BD",
    "Tax calculator Bangladesh",
    "TDS calculator BD",
    "VDS calculator Bangladesh",
    "Gross to net calculator Bangladesh",
    "NBR VAT calculation",
    "Mushak 6.6 calculation",
    "Bangladesh tax deduction calculator",
    "VAT inclusive exclusive formula",
    "VAT Tax FAQ Bangladesh",
    "Value Added Tax Bangladesh 2023 2024",
  ],
  openGraph: {
    title: "VAT Tax Calculator BD - Free Online TDS & VDS Calculation Tool",
    description:
      "Free online VAT & Tax calculator for Bangladesh. Calculate Gross bills, Net payable, VAT, and TDS under NBR laws with 4 calculation modes and detailed FAQ guide.",
    url: "https://mdmahfuz.com/tools/vat-tax-calculator",
    type: "website",
    siteName: "Md. Mahfuzur Rahman - Audit & Tax Consultant",
  },
  twitter: {
    card: "summary_large_image",
    title: "VAT Tax Calculator BD - Free Online TDS & VDS Calculation Tool",
    description:
      "Calculate Gross bills, Net payable, VAT, and TDS under Bangladesh NBR laws with 4 calculation modes and comprehensive FAQ.",
  },
  alternates: {
    canonical: "https://mdmahfuz.com/tools/vat-tax-calculator",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "VAT Tax Calculator (Bangladesh)",
  url: "https://mdmahfuz.com/tools/vat-tax-calculator",
  description:
    "Free online calculator to compute VAT and TDS/Tax for any service or supply in Bangladesh. Supports 4 calculation modes: Net-to-Gross, Total Budget, Contract Base, and Reverse VAT as per NBR rules.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_STEPS.flatMap((step) =>
    step.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.rawAnswer,
      },
    }))
  ),
};

export default function Page() {
  return (
    <>
      <Script
        id="vat-calculator-webapp-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Script
        id="vat-calculator-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="pb-16">
        <Calculator />
        <VatTaxFaq />
      </div>
    </>
  );
}
