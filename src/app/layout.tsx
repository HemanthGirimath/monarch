import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Monarch Assistant',
  description: 'Your Developer Sidekick for GitHub Repos',
  icons: {
    icon: '/images/monarch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}