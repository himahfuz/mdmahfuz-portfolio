import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sanity Studio',
  description: 'Sanity Studio',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
