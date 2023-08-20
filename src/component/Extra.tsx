import Image from 'next/image'
import React from 'react'

export const Extra = () => {
  return (
    <div className='lg:grid grid-cols-12'>
      <div className='col-start-2 col-end-7'>
        <h2 className='font-bold text-2xl mb-2'>ぽんぽこ24 サバイバルクイズ</h2>
        <p className='leading-8 mb-5'>
          過去のぽんぽこ24の内容がクイズになった！
          <br />
          問題数は50問超、間違えたら即終了の超過酷な４択クイズ。
          <br />
          全問正解の奇跡を起こせるか。
        </p>
        <div className='flex flex-col items-center mb-5'>
          <p>挑戦はこちらから↓</p>
          <Image
            src='/quize.png'
            width={360}
            height={150}
            sizes='100vw'
            style={{
              width: '70%',
              height: 'auto',
            }}
            alt=''
          />
        </div>
      </div>
      <div className='col-start-7 col-end-12'>
        <h2 className='font-bold text-2xl mb-2'>POKOROCK {"'"}23 フライヤー</h2>
        <Image
          src='/POKOROCK23_flyer.d47cec81.webp'
          sizes='100vw'
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={600}
          height={840}
          alt=''
        />
      </div>
    </div>
  )
}
