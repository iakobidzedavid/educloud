import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'edu.cloud - Alumni Impact Research',
  description: 'Demonstrate the impact of your education and research through comprehensive alumni tracking and metrics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
