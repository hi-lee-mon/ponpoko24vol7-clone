import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ぽんぽこ24 vol.7(クローン)',
  description: 'ぽんぽこ24 vol.7のクローンページ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={notoSansJP.className}>{children}</body>
    </html>
  )
}
