import React from 'react'

export default function Description() {
  return (
    <div className='flex flex-col items-center text-white w-full'>
      <hr className='mb-10 border-none h-1 bg-gray-500 w-3/4 md:w-1/3' />
      <p className='text-center w-3/4 md:w-1/5 font-extralight' style={{ lineHeight: '24px', wordSpacing: '0.25px', letterSpacing: '0.05px' }}>
        I'm a software engineer based in Melbourne, Florida with a variety of different skillsets. I am currently a <span className='text-blue-400 opacity-80 font-semibold'>free-agent</span> looking for work in the industry!
      </p>
    </div>
  )
}