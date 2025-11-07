import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'sistema gestion cine uleam',
  description: 'Created with ProCat',
  generator: 'sistema gestion cine uleam',
  icons: {
    icon: [
      {
        url: '/logo_cine_uleam.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo_cine_uleam.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo_cine_uleam.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo_cine_uleam.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

