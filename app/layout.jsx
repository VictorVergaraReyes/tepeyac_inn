import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from "@/components/Navigation"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tepeyac Inn',
  description: 'Salón de fiestas y eventos Tepeyac Inn',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
