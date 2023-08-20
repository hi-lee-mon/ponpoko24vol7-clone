import { Slider } from '@/component/Slider '
import { Header } from '@/component/Header'
import { Container } from '@/component/Container'
import { SectionTitle } from '@/component/SectionTitle'
import About from '@/component/About'
import { Scrollbar } from '@/component/Scrollbar'
import Image from 'next/image'
import { KeyVisual } from '@/component/KeyVisual'
import { Quiz } from '@/component/Quize'

export default function Home() {
  return (
    <div className='bg-[url("/background.webp")]'>
      <Header />
      <Container>
        {/* カルーセル */}
        <Slider />
      </Container>
      <Container>
        <SectionTitle h1Text='ABOUT' h2Text='ぽんぽこ24って何？' />
        <About />
      </Container>
      <Container>
        <SectionTitle h1Text='ARCHIVE' h2Text='ぽんぽこ24の歴史' />
        <Scrollbar />
        <Quiz />
        <KeyVisual />
      </Container>
    </div>
  )
}
