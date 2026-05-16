import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accounting Professional Digital CV | MD Mahfuzur Rahman',
  description: 'Detailed professional resume of MD Mahfuzur Rahman, Senior Auditor at Islam Quazi Shafique & Co.',
  keywords: [
    'MD Mahfuzur Rahman CV',
    'Senior Auditor Bangladesh',
    'CA Student Resume BD',
    'Accounting Professional CV',
    'Islam Quazi Shafique & Co Auditor',
    'VAT expert Bangladesh',
    'Tax expert Bangladesh',
    'Financial Auditor CV'
  ],
  openGraph: {
    title: 'Accounting Professional Digital CV | MD Mahfuzur Rahman',
    description: 'Detailed professional resume of MD Mahfuzur Rahman, Senior Auditor at Islam Quazi Shafique & Co.',
    url: 'https://mdmahfuz.com/cv',
    siteName: 'MD Mahfuzur Rahman CV',
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
