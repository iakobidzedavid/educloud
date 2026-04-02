import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'edu.cloud - Higher Education Impact Research',
  description: 'Demonstrate the impact of your education and research through alumni success metrics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
