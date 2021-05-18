import React, { MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import { WorkplaceContext } from './Workplaces'
import '../../../scss/body/experience/Workplaces.scss'


export default function WorkplaceDescription() {
  const { state, update }: any = useContext(WorkplaceContext)
  const { role, about, dates } = state.description
  useEffect(() => {

  }, [state.description])

  return <div className={`workplace-desc text-white text-md text-left w-5/6 sm:w-full pl-2 sm:p-8 pt-8 sm:pt-2`}>
    <span className="text-lg font-semibold">{role}<span className="text-primary"> @ {state.selected.slice(0, -1)}</span></span>
    <br />
    <span className="text-sm text-gray-300 font-thin">{dates}</span>
    <br />
    <div className="pt-4 text-base font-thin text-gray-300">
      {about}
    </div>
  </div>
}