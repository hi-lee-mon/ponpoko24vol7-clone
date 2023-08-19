import { Header } from '@/component/Header'
import { Slider } from '@/component/Slider '

export default function Home() {
  return (
    <div className='bg-[url("/background.webp")]'>
      <Header />
      <div className='md:container mx-auto px-2 '>
        {/* カルーセル */}
        <Slider />
      </div>
    </div>
  )
}
