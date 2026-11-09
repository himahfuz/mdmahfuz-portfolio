import type { Metadata } from "next";
import Script from "next/script";
import Calculator from "./Calculator";
import VatTaxContent from "./VatTaxContent";

export const metadata: Metadata = {
  title: "VAT Tax Calculator Bangladesh",
  description:
    "Free online VAT and Tax calculator for Bangladesh. Compute Gross Base, Net Payable, VAT, and Tax/TDS deductions across 4 billing modes with comprehensive calculation guides and FAQ.",
  openGraph: {
    title: "VAT Tax Calculator Bangladesh",
    description:
      "Free online VAT and Tax calculator for Bangladesh. Compute Gross Base, Net Payable, VAT, and Tax/TDS deductions across 4 billing modes with comprehensive calculation guides and FAQ.",
    url: "https://mdmahfuz.com/tools/vat-tax-calculator",
    type: "website",
    siteName: "MD Mahfuzur Rahman",
  },
  twitter: {
    card: "summary_large_image",
    title: "VAT Tax Calculator Bangladesh",
    description:
      "Compute Gross Base, Net Payable, VAT, and Tax/TDS deductions across 4 commercial billing modes with comprehensive guides.",
  },
  alternates: {
    canonical: "https://mdmahfuz.com/tools/vat-tax-calculator",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "VAT Tax Calculator Bangladesh",
  url: "https://mdmahfuz.com/tools/vat-tax-calculator",
  description:
    "Free online VAT and Tax calculator for Bangladesh. Compute Gross Base, Net Payable, VAT, and Tax/TDS deductions across 4 billing modes.",
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
    name: "MD Mahfuzur Rahman",
    url: "https://mdmahfuz.com",
  },
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
      <div className="pb-16">
        <Calculator />
        <VatTaxContent />
      </div>
    </>
  );
}
