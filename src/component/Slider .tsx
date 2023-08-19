'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Parallax } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// カルーセルにする画像のソースをリストにします
const images = [
  '/0op.webp',
  '/1.webp',
  '/2異世界ゾンビ.webp',
  '/3コールスター.webp',
  '/4すべりそうですべらないちょっとすべる話.webp',
  '/5新時代.webp',
  '/6.webp',
]

export const Slider = () => {
  return (
    <Swiper
      style={{ borderRadius: '0.5rem', boxShadow: '0px 4px 10px #3f3f3f' }}
      mousewheel={true}
      slidesPerView={1} //一度に表示するスライドの数
      // pagination={{clickable: false}} //何枚目のスライドかを示すアイコン、スライドの下の方にある
      // navigation //スライドを前後させるためのボタン、スライドの左右にある
      loop={true}
      parallax={true}
      modules={[Autoplay, Pagination, Parallax]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className='mySwiper'
    >
      {images.map((src: string, index: number) => {
        return (
          <SwiperSlide key={`${index}`}>
            <Image src={src} layout='responsive' width={788} height={443} alt='' />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
