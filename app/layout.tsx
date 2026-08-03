import type { Viewport } from 'next'

export const metadata = {
  title: 'Maintenance - EuroPet Express',
  description: 'This website is temporarily unavailable due to maintenance.',
  icons: {
    icon: [
      { url: '/Logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/Logo.png', type: 'image/png' },
    ],
    shortcut: '/Logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#f5f5f5',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Logo.png" />
        <link rel="shortcut icon" href="/Logo.png" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
