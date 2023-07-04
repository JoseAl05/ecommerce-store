import { Urbanist } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'E-commerce Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
