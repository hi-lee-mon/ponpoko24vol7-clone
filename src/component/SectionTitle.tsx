import { Rock_Salt } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

const rockSalt = Rock_Salt({ weight: '400', subsets: ['latin'] })

type Props = {
  h1Text: string
  h2Text: string
}

export const SectionTitle = ({ h1Text, h2Text }: Props) => {
  return (
    <div className='flex flex-col items-center mb-10'>
      <h1 className={twMerge('text-[40px] tracking-[10px]', rockSalt.className)}>{h1Text}</h1>
      <h2 className='text-[22.5px] font-bold mt-3'>{h2Text}</h2>
    </div>
  )
}
