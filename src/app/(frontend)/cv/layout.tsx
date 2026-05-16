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
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
