import React, { createContext, ReactElement, useContext, useEffect, useReducer } from 'react'
import "../../../scss/body/experience/Workplaces.scss"

const WorkplaceContext = createContext({})
const reducer = (state: any, pair: { workplace: string }) => ({ ...state, ...pair })
const initialState = { selected: 'Infotech0' }

const WorkplaceProvider = ({ children }: { children: ReactElement | ReactElement[] }) => {
  const [state, update] = useReducer(reducer, initialState)

  return (
    <WorkplaceContext.Provider value={{ state, update }}>
      {children}
    </WorkplaceContext.Provider>
  )
}

export default function Workplaces() {
  return (
    <div className="flex flex-row p-6 justify-center">
      <div className='workplace-wrapper'>
        <WorkplaceProvider>
          <WrappedWorkplaces />
        </WorkplaceProvider>
      </div>
    </div>
  )
}

const WrappedWorkplaces = () => {
  const workplaces = ["Infotech", "Virtual Studio", "Teaching Assistant @ UF", "Phaseos"]
  const { state, update }: any = useContext(WorkplaceContext)
  return (
    <React.Fragment>
      {workplaces.map((name, idx) => <Workplace workplace={name} id={idx} />)}
      <div className="absolute top-0 left-0 z-20 h-12 rounded-md bg-primary-full-opacity transition-all duration-200" style={{
        transform: `translate${window.screen.width >= 640 ? 'Y' : 'X'}(calc(${state.selected.slice(-1)} * 48px))`,
        width: 2
      }} />
    </React.Fragment>
  )
}

interface IWorkplaceProps {
  workplace: string,
  id: number
}

const Workplace = ({ workplace, id }: IWorkplaceProps) => {
  const { state, update }: any = useContext(WorkplaceContext)
  const handleClick = () => {
    update({ selected: workplace + id })
  }
  return <div className='hover:bg-gray-800 hover:bg-opacity-50'>
    <button className={`border-none px-5 pb-1 h-12 text-left text-lg items-center cursor-default font-light ${state.selected.slice(-1) === String(id)
      ? 'text-primary-full-opacity'
      : 'unselected'}`}
      onClick={handleClick}
      style={{ borderLeft: '2px solid rgb(31, 41, 55)', outline: 'none', }}
    ><span>{workplace}</span>
    </button>
  </div>
}