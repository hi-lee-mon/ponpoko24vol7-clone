import React from 'react'

type Props = {
  children: React.ReactNode
}

export const Container = ({ children }: Props) => {
  return <section className='md,lg:container mx-auto px-2 py-20 max-w-[1500px]'>{children}</section>
}
