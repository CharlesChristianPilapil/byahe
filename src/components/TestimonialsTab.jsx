import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function TestimonialsTab({...props}) {
  return (
    <div className='flex flex-col gap-[1rem] bg-white border-[1px] px-[2rem] py-[2rem] hover:bg-yellow duration-[.3s] rounded-md testimonial-tab'>
        <div>
            <p className='text-dark font-semibold font-inter'> <FontAwesomeIcon icon={props.icon} className='text-[2rem] text-yellow mr-4 icon duration-[.3s]' /> 
            {props.text} </p>
        </div>

        <div className='flex gap-[1rem]'>
            <img src={props.image} alt={props.name} className='h-[4rem] w-[4rem] rounded-[50%]'/>
            <div>
                <h4 className='text-yellow font-bold font-inter duration-[.3s]'> {props.name} </h4>
                <h5 className='font-rubik text-light'> {props.job} </h5>
            </div>
        </div>
    </div>
  )
}
