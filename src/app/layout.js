import './globals.css'
import "toastify-js/src/toastify.css"
import { Inter, Noto_Sans_SC } from 'next/font/google'
import Header from './components/header/header'
import Footer from './components/footer'

const inter = Noto_Sans_SC({ subsets: ['latin'], weight: ["300"] })

export const metadata = {
  title: "七夕泥の网站 - 七夕泥向世界分享！",
  description: "七夕泥的互联网栖息空间！",
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <body className={`${inter.className} body`}>
        <Header />
        <div className='mx-auto max-w-3xl'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
