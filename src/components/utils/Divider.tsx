import React from 'react'
import '../../scss/utils/Divider.scss'

interface IDividerProps {
  text: string
}

export default function Divider({ text }: IDividerProps) {
  return (
    <div className="divider">{text}</div>
  )
}