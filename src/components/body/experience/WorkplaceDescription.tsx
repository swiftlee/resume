import React, { MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import { WorkplaceContext } from './Workplaces'
import '../../../scss/body/experience/Workplaces.scss'
import '../../../scss/body/about/Technologies.scss'
import anime from 'animejs'


export default function WorkplaceDescription() {
  const { state, update }: any = useContext(WorkplaceContext)
  const { role, about, dates } = state.description

  const getListOfInfo = () => {
    return about.map((item: string, index: number) => {
      return <li key={`skill${index}`} className='list-item pt-3'><span className="pl-2">{item}</span></li>
    })
  }

  return <div className={`workplace-desc text-white text-md text-left w-5/6 sm:w-full pl-2 sm:p-8 pt-8 sm:pt-2`}>
    <span className="text-lg font-semibold">{role}<span className="text-primary"> @ {state.selected.slice(0, -1)}</span></span>
    <br />
    <span className="text-sm text-gray-300 font-thin">{dates}</span>
    <br />
    <div className="grid grid-rows-3 pt-1 text-base font-thin text-gray-300">
      {getListOfInfo()}
    </div>
  </div>
}