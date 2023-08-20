'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar as scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'

const images = [
  { path: '/archive-vol1.webp', data: '2018.05.03 - 2018.05.04', title: 'ぽんぽこ24' },
  { path: '/archive-vol2.webp', data: '2018.10.06 - 2018.10.07', title: 'ぽんぽこ24 リターンズ' },
  {
    path: '/archive-vol3.webp',
    data: '2019.08.14 - 2019.08.15',
    title: 'ぽんぽこ24 vol.3 『祭り』',
  },
  {
    path: '/archive-vol4.webp',
    data: '2018.05.03 - 2018.05.04',
    title: 'ぽんぽこ24 vol.4 『Party!』',
  },
  {
    path: '/archive-vol5.webp',
    data: '2018.05.03 - 2018.05.04',
    title: 'ぽんぽこ24 vol.5 『熱血』',
  },
  {
    path: '/archive-vol6.webp',
    data: '2018.05.03 - 2018.05.04',
    title: 'ぽんぽこ24 vol.6 『Future』',
  },
]

export const Scrollbar = () => {
  return (
    <Swiper
      style={{
        '--swiper-scrollbar-bg-color': 'rgba(57,165,89,0.3)',
        ' --swiper-scrollbar-drag-bg-color': 'rgba(57,165,89)',
        '--swiper-scrollbar-size': '16px',
        paddingBottom: '40px',
      }}
      spaceBetween={20}
      slidesPerView={3}
      scrollbar={{ draggable: true }}
      modules={[scrollbar]}
    >
      {images.map((image) => (
        <SwiperSlide key={image.path}>
          <div className='grid-cols-1-1 grid-rows-2   rounded-lg p-5  bg-green-800 bg-opacity-10'>
            <Image
              className='rounded-lg mb-2'
              src={image.path}
              width={200}
              height={100}
              sizes='100vw'
              style={{
                width: '100%',
                height: 'auto',
              }}
              alt=''
            />
            <div>
              <p className='font-bold text-[15px]'>{image.data}</p>
              <h2 className='font-bold text-[19px]'>{image.title}</h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
