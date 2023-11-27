import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "七夕泥的伟大网站",
  description: "I'm Qixiny, Welcome to my homepage👏!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className={`${inter.className} body`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
