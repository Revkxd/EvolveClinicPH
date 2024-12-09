import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { lexendDeca } from './fonts'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Evolve Clinic PH',
  description: 'Your premier destination for advanced skincare treatments and cosmetic surgical procedures',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${lexendDeca.variable}`}>
      <body className={`${inter.className} custom-scrollbar bg-gray-100 font-sans`}>
        <SpeedInsights />
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <main className='flex-grow pt-24 md:pt-32'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}