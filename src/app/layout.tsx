import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mdmahfuz.com'),
  title: {
    default: 'MD Mahfuzur Rahman | Accounting Professional in Bangladesh',
    template: '%s | MD Mahfuzur Rahman',
  },
  description: 'MD Mahfuzur Rahman is an Accounting Professional & CA Articled Student in Bangladesh specializing in Statutory Audit, VAT, Income Tax & AI automation.',
  openGraph: {
    title: {
      default: 'MD Mahfuzur Rahman | Accounting Professional in Bangladesh',
      template: '%s | MD Mahfuzur Rahman',
    },
    description: 'MD Mahfuzur Rahman is an Accounting Professional & CA Articled Student in Bangladesh specializing in Statutory Audit, VAT, Income Tax & AI automation.',
    url: 'https://mdmahfuz.com',
    siteName: 'MD Mahfuzur Rahman',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://mdmahfuz.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MD Mahfuzur Rahman - Accounting Professional in Bangladesh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://mdmahfuz.com/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} antialiased h-full`}
    >
      <body className="min-h-full font-sans m-0 p-0 bg-transparent">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://mdmahfuz.com/#person",
              "name": "MD Mahfuzur Rahman",
              "alternateName": "Mahfuzur Rahman",
              "description": "Accounting Professional and CA Articled Student in Bangladesh specializing in Statutory Audit, Bangladesh VAT, Income Tax Act 2023, and AI Audit Automation.",
              "url": "https://mdmahfuz.com",
              "jobTitle": [
                "Accounting Professional",
                "Audit Associate",
                "VAT Expert",
                "TAX Expert"
              ],
              "knowsAbout": [
                "Accounting",
                "Statutory Audit",
                "Value Added Tax (VAT)",
                "Income Tax Act 2023",
                "Power BI",
                "Financial Statement Review",
                "IFRS"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Islam Quazi Shafique & Co. Chartered Accountants",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Dhaka",
                  "addressCountry": "BD"
                }
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gazipur",
                "addressRegion": "Dhaka Division",
                "addressCountry": "BD"
              },
              "sameAs": [
                "https://github.com/himahfuz",
                "https://linkedin.com/in/mdmahfuzurali" 
              ]
            }).replace(/</g, '\\u003c')
          }}
        />
      </body>
    </html>
  );
}
