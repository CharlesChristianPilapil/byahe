import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function StatTabs({...props}) {
  return (
    <div className='flex flex-col gap-[1rem] items-center justify-center'>
        <p className='text-stone-300 font-rubik'> {props.title} </p>
        <h4 className='text-[1.5rem] font-bold font-inter text-white'> {props.number} </h4>
        
        <span className='bg-white p-[1rem] rounded-[50%]'>
            <FontAwesomeIcon icon={props.icon} className="text-dark text-[1.5rem]"/>
        </span>
    </div>
  )
}
