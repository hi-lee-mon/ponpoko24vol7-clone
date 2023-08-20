import Image from 'next/image'
import React from 'react'

const images = [
  '/0op.webp',
  '/1.webp',
  '/2異世界ゾンビ.webp',
  '/3コールスター.webp',
  '/4すべりそうですべらないちょっとすべる話.webp',
  '/5新時代.webp',
  '/6.webp',
  '/7やらかしvsホラー.webp',
  '/8ナイトサファリ.webp',
  '/9凸.webp',
  '/10早起きvs徹夜.webp',
  '/11,12朝ごはん.webp',
  '/13デカキンラジオ.webp',
  '/14ぽこ家の食卓.webp',
  '/15一般男性Vの集い.webp',
  '/16POKOROCK23.webp',
  '/17.webp',
  '/18ぽこピロワイヤル.webp',
  '/19出られない部屋.webp',
  '/20 ed.webp',
]

export const Schedule = () => {
  return (
    <div className='flex justify-center'>
      <div className='grid lg:grid-cols-3 gap-10 lg:px-4 max-w-7xl'>
        {images.map((path) => (
          <button
            key={path}
            type='button'
            className='lg:translate-x-1 group lg:hover:scale-105 transition duration-500 ease-in-out'
          >
            <div className='gap-10 drop-shadow-[0_4px_10px_rgba(63,63,63)] overflow-hidden'>
              <Image
                className='rounded-lg'
                src={path}
                width={400}
                height={400}
                sizes='100vw'
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                alt=''
              />
              <p className='pointer-events-none absolute bottom-0 w-full flex rounded-b-lg p-2 text-black bg-slate-200/90 backdrop-blur-3xl opacity-0 translate-y-[2rem] lg:group-hover:opacity-100 group-hover:translate-y-[0rem] transition duration-300 ease-in-out'>
                テストテキスト
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
