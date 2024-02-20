import React from 'react'
import { serviceGrid } from '../../constants'
import Overlay from '../../components/Overlay'

export default function ServiceGrid() {
  return (
    <>
        {serviceGrid.map((entry, index) => 
            <div key={entry.title+index} className={`relative overflow-hidden rounded-md ${entry.style}`}>
                <img src={entry.image} alt="train" className='w-full h-full object-cover'/>
                <h1 className='absolute bottom-[10%] left-[50%] translate-x-[-50%] z-10 text-yellow font-inter font-bold'> {entry.title} </h1>
                <Overlay />
            </div>
        )}
    </>
  )
}
