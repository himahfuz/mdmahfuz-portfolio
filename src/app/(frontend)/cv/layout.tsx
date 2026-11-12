import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accounting Professional CV (CA)',
  description: 'CV of MD Mahfuzur Rahman, Accounting Professional & CA Articled Student at Islam Quazi Shafique & Co., skilled in Audit, IFRS, VAT, Tax & Power BI.',
  openGraph: {
    title: 'Accounting Professional CV (CA) | MD Mahfuzur Rahman',
    description: 'CV of MD Mahfuzur Rahman, Accounting Professional & CA Articled Student at Islam Quazi Shafique & Co., skilled in Audit, IFRS, VAT, Tax & Power BI.',
    url: 'https://mdmahfuz.com/cv',
    siteName: 'MD Mahfuzur Rahman',
    images: [
      {
        url: 'https://mdmahfuz.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MD Mahfuzur Rahman CV',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accounting Professional CV (CA) | MD Mahfuzur Rahman',
    description: 'CV of MD Mahfuzur Rahman, Accounting Professional & CA Articled Student at Islam Quazi Shafique & Co., skilled in Audit, IFRS, VAT, Tax & Power BI.',
    images: ['https://mdmahfuz.com/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://mdmahfuz.com/cv',
  },
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
