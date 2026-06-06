import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider'
import PageTransition from '@/components/ui/PageTransition'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'
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
  title: 'Euro Pet Express | Premium Dog Transport UK & Europe',
  description: 'DEFRA authorised dog transport between Romania, Poland, Bulgaria and the UK. Safe, compliant, and welfare-focused journeys for rescues, breeders and private owners.',
  keywords: 'dog transport UK Europe, pet transport Romania UK, DEFRA authorised dog transport, dog courier Europe'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
