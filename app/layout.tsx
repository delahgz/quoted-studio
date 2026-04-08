import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Quoted Studio | Earned Authority Acquisition',
    template: '%s | Quoted Studio',
  },
  description: 'We get founders and business experts quoted in real media. Earned media mentions, high-trust backlinks, and compounding brand authority, delivered monthly.',
  metadataBase: new URL('https://quotedstudio.com.au'),
  openGraph: {
    title: 'Quoted Studio | Earned Authority Acquisition',
    description: 'We get founders and business experts quoted in real media. Earned backlinks, brand authority, and trust that compounds.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Quoted Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quoted Studio | Earned Authority Acquisition',
    description: 'We get founders and business experts quoted in real media.',
  },
  robots: { index: true, follow: true },
}

// Structured data: LocalBusiness + Service
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'Quoted Studio',
      description: 'Earned authority acquisition agency. We get founders and business experts quoted in real media through expert commentary placement.',
      url: 'https://quotedstudio.com.au',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sydney',
        addressRegion: 'NSW',
        addressCountry: 'AU',
      },
      priceRange: 'AUD 2,500 - 5,000+/month',
      areaServed: ['Australia', 'Global'],
    },
    {
      '@type': 'Service',
      name: 'Earned Authority Acquisition',
      description: 'Managed service that monitors journalist requests daily, matches them to your expertise, drafts expert commentary, and earns published media mentions and backlinks.',
      provider: { '@type': 'LocalBusiness', name: 'Quoted Studio' },
      serviceType: 'Expert Commentary Placement',
      areaServed: ['Australia', 'Global'],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Font preload to prevent layout shift */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          as="style"
        />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="grain">
        <Header />
        <main className="min-h-screen pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
