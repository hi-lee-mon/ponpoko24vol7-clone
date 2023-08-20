import Image from 'next/image'

export const Quiz = () => {
  return (
    <div className='mt-10 flex flex-col items-center '>
      <p className='mb-8'>ぽんぽこ24に関するクイズ、あなたは何問連続正解できますか？</p>
      <Image className='rounded-lg mb-2' src='/quize.png' width={360} height={150} alt='' />
    </div>
  )
}
