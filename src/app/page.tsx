import { Slider } from '@/component/Slider '
import { Header } from '@/component/Header'
import { Container } from '@/component/Container'
import { SectionTitle } from '@/component/SectionTitle'
import About from '@/component/About'
import { Scrollbar } from '@/component/Scrollbar'
import { KeyVisual } from '@/component/KeyVisual'
import { Quiz } from '@/component/Quiz'
import { Schedule } from '@/component/Schedule'
import Image from 'next/image'
import { Extra } from '@/component/Extra'

export default function Home() {
  return (
    <div className='p-4 bg-[url("/background.webp")]'>
      <Header />
      <Image
        className='lg:hidden'
        src='/logo.0e393f92.webp'
        alt='ロゴ'
        width={210}
        height={120}
        sizes='100vw'
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <Container>
        <Slider />
      </Container>
      <Container>
        <SectionTitle h1Text='ABOUT' h2Text='ぽんぽこ24って何？' />
        <About />
      </Container>
      <SectionTitle h1Text='ARCHIVE' h2Text='ぽんぽこ24の歴史' />
      <Scrollbar />
      <Quiz />
      <KeyVisual />
      <Container>
        <SectionTitle
          h1Text='SCHEDULE'
          h2Text='企画一覧'
          subText='クリック・タップするとゲストを確認できます'
        />
        <Schedule />
      </Container>
      <Container>
        <SectionTitle h1Text='EXTRA' h2Text='関連コンテンツや関連動画など' />
        <Extra />
      </Container>
    </div>
  )
}
