import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import NavigationWrapper from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import './global.css'

export const metadata: Metadata = {
  title: 'Prashanna Bajracharya',
  description: 'Portfolio of Prashanna Bajracharya – Independent videographer and photographer based in Nepal. Co-owner of Untitle.np.',
  keywords: ['Prashanna Bajracharya', 'Videographer', 'Photographer', 'Cinematographer', 'Portfolio'],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'PRASHANNA BAJRACHARYA - Filmmaker & Photographer | Asia',
    description: 'Prashanna Bajracharya is a Photographer & Filmmaker bringing live-music moments and commercial projects to life. Open for global collaborations.',
    url: 'https://prashannabajracharya.com/',
    type: 'website',
    images: [
      {
        url: 'https://prashannabajracharya.com/logos/pb-landscape.jpg',
      }
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Prashanna Bajracharya",
              "jobTitle": "Filmmaker & Photographer",
              "url": "https://prashannabajracharya.com",
              "image": "https://prashannabajracharya.com/logos/pb-landscape.jpg",
              "sameAs": [
                "https://www.instagram.com/untitled.np"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kathmandu",
                "addressCountry": "Nepal"
              },
              "description": "Independent videographer and photographer based in Nepal. Co-owner of Untitled.np.",
            })
          }}
        />
      </head>
      <body>
        <NavigationWrapper />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}