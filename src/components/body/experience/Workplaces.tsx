import React, { createContext, ReactElement, useContext, useReducer } from 'react'
import "../../../scss/body/experience/Workplaces.scss"

const WorkplaceContext = createContext({})
const reducer = (state: any, pair: { workplace: string }) => ({ ...state, ...pair })
const initialState = { selected: 'Infotech' }

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
      <div className="relative z-10 w-max p-0 m-0 list-none flex flex-col">
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
      <div className="absolute top-0 left-0 z-20 w-1 h-12 rounded-md bg-primary-full-opacity transition-transform duration-200" style={{
        transform: `translateY(calc(${state.selected.slice(-1)} * 48px))`
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
  return <button className={`border-none px-5 pb-1 h-12 text-left items-center cursor-default ${state.selected.slice(0, -1) === workplace
    ? 'text-primary-full-opacity'
    : 'unselected text-gray-500 border-l-2 border-solid border-gray-500 hover:from-gray-300 hover:text-primary-full-opacity'}`}
    onClick={handleClick}
    style={{ outline: 'none' }}
  ><span>{workplace}</span></button>
}