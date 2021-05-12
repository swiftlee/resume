import React, { useState, useEffect, ReactElement } from 'react'

interface IDotsProps {
  selectedIndex: number
  count: number
  setPage: (pageNum: number) => void,
  transitioning: boolean
}

const Dots = ({ selectedIndex, count, setPage, transitioning }: IDotsProps) => {
  const [dots, setDots] = useState<Array<ReactElement>>(updateDots())

  useEffect(() => {
    updateDots(setDots)
  }, [selectedIndex, transitioning])

  function updateDots(__setDots?: ((items: Array<ReactElement>) => void)) {
    const updatedDots = []
    for (let i = 1; i <= count; i++) {
      const className = `inline-flex mx-2 w-4 h-4 transition duration-300 ${i === selectedIndex ? 'bg-white' : 'bg-gray-800 active:bg-primary-1 hover:bg-gray-600 hover:opacity-100'} rounded-full ${transitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`
      updatedDots.push(<div key={`dot${i}`} className={className} onClick={() => { transitioning || setPage(i) }} />)
    }

    if (__setDots)
      __setDots([...updatedDots])

    return updatedDots
  }

  return (
    <div className="flex align-center items-center">
      {dots}
    </div>
  )
}

export default Dots
