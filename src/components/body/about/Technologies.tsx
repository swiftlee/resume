import React from 'react'
import '../../../scss/body/about/Technologies.scss'

export default function Technologies() {
  return <>
    <div className="grid grid-flow-col-dense grid-cols-3 grid-rows-3 mt-4">
      {getListOfTech()}
    </div>
  </>
}

const techArr = ['ReactJS', 'VueJS', 'Rails 6', 'Java', 'Redis', 'Postgres', 'AWS', 'Python', 'Electron']

const getListOfTech = () => {
  return techArr.map((item: string, index: number) => {
    return <i className='list-item'> {item}</i >
  })
}