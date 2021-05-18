import React, { createContext, ReactElement, useContext, useEffect, useReducer, useState } from 'react'
import WorkplaceDescription from './WorkplaceDescription'
import { useDetectViewportWidth } from '../../../hooks/useDetectViewportWidth'
import "../../../scss/body/experience/Workplaces.scss"
import descriptionData from '../../../data/workplaceDescriptions.json'
import anime from "animejs";


type Descriptions = {
  [key: string]: { role: string, about: string[], dates: string }
}

const descriptions: Descriptions = descriptionData

export const WorkplaceContext = createContext({})
const reducer = (state: any, pair: { workplace: string }) => ({ ...state, ...pair })
const initialState = { selected: 'Infotech0', description: descriptions['infotech'] }

const WorkplaceProvider = ({ children }: { children: ReactElement | ReactElement[] }) => {
  const [state, update] = useReducer(reducer, initialState)

  return (
    <WorkplaceContext.Provider value={{ state, update }}>
      <div className="flex flex-col sm:flex-row py-4 px-0 sm:p-6">
        {children}
      </div>
    </WorkplaceContext.Provider>
  )
}

export default function Workplaces() {
  return (
    <WorkplaceProvider>
      <WrappedWorkplaces />
      <WorkplaceDescription />
    </WorkplaceProvider>
  )
}

const WrappedWorkplaces = () => {
  const { state, update }: any = useContext(WorkplaceContext)
  const win = useDetectViewportWidth({ phoneStyle: `translateX(${Number.parseInt(state.selected.slice(-1)) * 120}px)`, otherStyle: `translateY(${Number.parseInt(state.selected.slice(-1)) * 48}px)` }, state)
  const workplaces = ["Infotech", "Virtual Studio", "University of Florida", "Phaseos"]
  return (
    <div className='workplace-wrapper'>
      {workplaces.map((name, idx) => <Workplace workplace={name} id={idx} />)}
      <div className="slider" style={{
        transform: win.responsiveStyle,
      }} />
    </div>
  )
}

interface IWorkplaceProps {
  workplace: string,
  id: number
}

const Workplace = ({ workplace, id }: IWorkplaceProps) => {
  const { state, update }: any = useContext(WorkplaceContext)
  const handleClick = () => {
    anime.timeline().add({
      targets: ['.workplace-desc'],
      autoplay: true,
      opacity: [0, 1],
      easing: 'easeInQuad',
      duration: 175,
      delay: 30
    })

    setTimeout(() => {
      update({ selected: workplace + id, description: descriptions[workplace.toLowerCase()] })
    }, 40)
  }

  const getValueIfSelected = (selection: any, defaultValue: any) => state.selected.slice(-1) === String(id) ? selection : defaultValue

  return <div className={getValueIfSelected('selected-button-wrapper', 'unselected-button-wrapper')}>
    <button className={`workplace-button border-none h-12 ${getValueIfSelected('text-primary-full-opacity', 'unselected')}`}
      onClick={handleClick}
    ><span>{workplace}</span>
    </button>
  </div>
}