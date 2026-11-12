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

export default function Page() {
  return <Mushak66Client />;
}
