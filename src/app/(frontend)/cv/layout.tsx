import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accounting Professional Digital CV | MD Mahfuzur Rahman',
  description: 'Detailed professional resume of MD Mahfuzur Rahman, Senior Auditor at Islam Quazi Shafique & Co.',
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
