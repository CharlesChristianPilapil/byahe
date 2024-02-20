import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation({handleToggle, ...props}) {
  return (
    <NavLink onClick={handleToggle} className={`${handleToggle? 'md:ml-[2rem] md:text-white' : undefined} font-semibold font-rubik text-stone-500 hover:text-yellow transition-all duration=[.2s] navlink`} to={props.to}> {props.name} </NavLink>
  )
}
