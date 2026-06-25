import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider'
import PageTransition from '@/components/ui/PageTransition'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: 'Euro Pet Express | Premium Pet Transport UK & Europe',
  description: 'DEFRA authorised premium pet transport between the UK and Europe. Safe, compliant, scheduled departures for dogs, cats and small animals across Romania, Serbia, Germany, France and 9+ destinations. Owner accompanied travel available.',
  keywords: 'premium pet transport UK Europe, pet transport Romania UK, DEFRA authorised pet transport, cat transport Europe, dog transport Europe, pet courier UK, bespoke pet transport',
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
    shortcut: '/icon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="shortcut icon" href="/icon.png" />
      </head>
      <body className="font-sans antialiased bg-off-white text-navy flex flex-col min-h-screen">
        <SmoothScrollProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <FloatingWhatsApp />
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
