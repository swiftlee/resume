import React, { useState, useEffect, ReactElement } from 'react'

interface IDotsProps {
  selectedIndex: number
  count: number
  setPage: (pageNum: number) => void
}

const Dots = ({ selectedIndex, count, setPage }: IDotsProps) => {
  const [dots, setDots] = useState<Array<ReactElement>>(updateDots())

  useEffect(() => {
    updateDots(setDots)
  }, [selectedIndex])

  function updateDots(__setDots?: ((items: Array<ReactElement>) => void)) {
    const updatedDots = []
    for (let i = 1; i <= count; i++) {
      const className = `inline-flex mx-2 w-4 h-4 transition duration-300 ${i === selectedIndex ? 'bg-white' : 'bg-gray-900 active:bg-primary hover:bg-gray-700 hover:opacity-100'} rounded-full cursor-pointer`
      updatedDots.push(<div key={`dot${i}`} className={className} onClick={() => setPage(i)} />)
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
