import { Metadata } from 'next';
import Mushak66Client from './Mushak66Client';

export const metadata: Metadata = {
  title: 'Mushak 6.6 Generator (VDS Form BD)',
  description: 'Generate NBR standard Mushak 6.6 (Certificate of Tax Deduction at Source) in one click. Free online VDS certificate generator for Bangladesh.',
  alternates: {
    canonical: 'https://mdmahfuz.com/tools/mushak-6.6',
  },
  openGraph: {
    title: 'Mushak 6.6 Generator (VDS Form BD) | MD Mahfuzur Rahman',
    description: 'Generate NBR standard Mushak 6.6 (Certificate of Tax Deduction at Source) in one click. Free online VDS certificate generator for Bangladesh.',
    url: 'https://mdmahfuz.com/tools/mushak-6.6',
    siteName: 'MD Mahfuzur Rahman',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://mdmahfuz.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mushak 6.6 Generator (VDS Form BD) - MD Mahfuzur Rahman',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mushak 6.6 Generator (VDS Form BD) | MD Mahfuzur Rahman',
    description: 'Generate NBR standard Mushak 6.6 (Certificate of Tax Deduction at Source) in one click. Free online VDS certificate generator for Bangladesh.',
    images: ['https://mdmahfuz.com/images/og-image.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mdmahfuz.com/tools/mushak-6.6#webpage",
      "url": "https://mdmahfuz.com/tools/mushak-6.6",
      "name": "Mushak 6.6 Generator (VDS Form BD)",
      "description":
        "Generate NBR standard Mushak 6.6 (Certificate of Tax Deduction at Source) in one click. Free online VDS certificate generator for Bangladesh.",
      "inLanguage": "en-US",
      "breadcrumb": {
        "@id": "https://mdmahfuz.com/tools/mushak-6.6#breadcrumb",
      },
      "mainEntity": {
        "@id": "https://mdmahfuz.com/tools/mushak-6.6#webapp",
      },
    },
    {
      "@type": "WebApplication",
      "@id": "https://mdmahfuz.com/tools/mushak-6.6#webapp",
      "name": "Mushak 6.6 Generator (VDS Form BD)",
      "url": "https://mdmahfuz.com/tools/mushak-6.6",
      "description":
        "Generate NBR standard Mushak 6.6 (Certificate of Tax Deduction at Source) in one click. Free online VDS certificate generator for Bangladesh.",
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
      "@id": "https://mdmahfuz.com/tools/mushak-6.6#breadcrumb",
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
          "name": "Mushak 6.6 Generator",
          "item": "https://mdmahfuz.com/tools/mushak-6.6",
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
      <Mushak66Client />
    </>
  );
}
