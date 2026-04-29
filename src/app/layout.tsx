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
  title: 'MD Mahfuzur Rahman | Accounting Professional & VAT/TAX Expert',
  description: 'Accounting Professional, VAT & TAX Expert associated with Islam Quazi Shafique & Co. Chartered Accountants. Specialized in Auditing and Financial Services in Bangladesh.',
  keywords: [
    'Accounting Professional Bangladesh',
    'VAT Expert Gazipur',
    'VAT Expert Uttara',
    'TAX Expert Gazipur ',
    'TAX Expert Uttara',
    'Islam Quazi Shafique & Co',
    'Chartered Accountancy Student'
  ],
  openGraph: {
    title: 'MD Mahfuzur Rahman - Accounting & Tax Expert',
    description: 'Expertise in Auditing, VAT, and TAX services. Associated with Islam Quazi Shafique & Co.',
    url: 'https://mdmahfuz.com',
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
              "name": "MD Mahfuzur Rahman",
              "alternateName": "Mahfuzur Rahman",
              "description": "Accounting Professional and VAT & TAX Expert in Bangladesh.",
              "url": "https://mdmahfuz.com",
              "jobTitle": [
                "Audit Associate",
                "Accounting Professional",
                "VAT Expert",
                "TAX Expert"
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
            }),
          }}
        />
      </body>
    </html>
  );
}
