import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Serenity Stays',
  description: 'Serenity Styles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>{children}</body>
    </html>
  )
}