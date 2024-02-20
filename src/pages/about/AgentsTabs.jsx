import React from 'react'
import { footerIcons } from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'


export default function AgentsTabs({...props}) {
  return (
    <div className='relative border-2 agent-tab overflow-hidden'>
        <img src={props.image} alt={props.name} className='w-full' />
        <div className='absolute top-[50%] left-[50%] bg-black/70 h-[90%] w-[90%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center gap-[1rem] overlay duration-[.3s]'>
            <h1 className='text-yellow font-bold text-[1.2rem] font-inter'> {props.name} </h1>
            <h1 className='font-rubik text-white'> {props.role} </h1>
            <div className='flex gap-[1rem]'>
                <span className='h-[2.5rem] w-[2.5rem] bg-yellow rounded-[50%] grid place-items-center cursor-pointer'>
                    <FontAwesomeIcon icon={faFacebookF} className='text-[1.5rem] text-white'/>
                </span>
                <span className='h-[2.5rem] w-[2.5rem] bg-yellow rounded-[50%] grid place-items-center cursor-pointer'>
                    <FontAwesomeIcon icon={footerIcons[1].icon} className='text-[1.5rem] text-white'/>
                </span>
            </div>
        </div>
    </div>
  )
}
