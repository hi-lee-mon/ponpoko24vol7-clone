import Image from 'next/image'
import Link from 'next/link'
import x from '@/svg/x.svg'
import youtube from '@/svg/youtube.svg'
import hamburger from '@/svg/hamburger.svg'

export const Header = () => {
  return (
    <header className='flex items-center sticky top-0 left-0 pl-6 z-50'>
      <div className='invisible lg:visible lg:flex-1'>
        <Image src='/logo.0e393f92.webp' alt='ロゴ' width={210} height={120} />
      </div>
      <div className='pr-20'>
        {/* ナビゲーション */}
        <nav className='hidden lg:flex items-center gap-10 font-bold'>
          <Link href=''>ABOUT</Link>
          <Link href=''>SCHEDULE</Link>
          <Link href=''>EXTRA</Link>
          <Link href=''>CM LIST</Link>
          <Link href=''>
            <Image src={x} alt='X(旧Twitter)' />
          </Link>
          <Link href=''>
            <Image src={youtube} alt='Youtube' />
          </Link>
        </nav>
        {/* ハンバーガー */}
        <Image src={hamburger} alt='メニューリスト' className='absolute right-2 top-2 lg:hidden' />
      </div>
    </header>
  )
}
