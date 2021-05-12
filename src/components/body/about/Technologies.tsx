import React from 'react'
import '../../../scss/body/about/Technologies.scss'
// grid grid-flow-col-dense grid-cols-3 grid-rows-3 mt-4
export default function Technologies() {
  return <div>
    <ul className="grid grid-flow-col-dense grid-cols-3 grid-rows-3 mt-4 list-inside text-justify">
      {getListOfTech()}
    </ul>
  </div>
}

const techArr = ['ReactJS', 'VueJS', 'Rails 6', 'Java', 'Redis', 'Postgres', 'AWS', 'Python', 'Electron']

const getListOfTech = () => {
  return techArr.map((item: string, index: number) => {
    return <li key={`skill${index}`} className='list-item'>{item}</li>
  })
}