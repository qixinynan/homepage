import './globals.css'
import "toastify-js/src/toastify.css"
import { Noto_Sans_SC } from 'next/font/google'
import Header from './components/header/header'
import Footer from './components/footer'
import localFont from 'next/font/local'
const notosc = localFont({
  src: '../../public/fonts/notosc.ttf',
  variable: '--font-noto',
})

// const inter = Noto_Sans_SC({ subsets: ['latin'], weight: ["300", "400", "700", "900"] })

export const metadata = {
  title: "七夕泥の网站 - 七夕泥向世界分享！",
  description: "七夕泥的互联网栖息空间！",
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <body className={`${notosc.className} ${notosc.variable} body`}>
        <Header />
        <div >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
export const dynamic = 'force-dynamic'