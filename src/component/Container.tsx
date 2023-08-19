import React from 'react'

type Props = {
  children: React.ReactNode
}

export const Container = ({ children }: Props) => {
  return <section className='md:container mx-auto px-2 py-20'>{children}</section>
}
