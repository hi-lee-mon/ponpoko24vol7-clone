import { Slider } from '@/component/Slider '
import { Header } from '@/component/Header'
import { Container } from '@/component/Container'
import Image from 'next/image'
import { SectionTitle } from '@/component/SectionTitle'
import About from '@/component/About'

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
    </div>
  )
}
