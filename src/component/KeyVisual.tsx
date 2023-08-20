import Image from 'next/image'

export const KeyVisual = () => {
  return (
    <div className='relative h-[923px]'>
      <Image
        src='/hero.webp'
        fill
        sizes='100vw'
        style={{
          objectFit: 'cover', // cover, contain, none
          marginTop: '40px',
        }}
        alt='キービジュアル'
      />
    </div>
  )
}
