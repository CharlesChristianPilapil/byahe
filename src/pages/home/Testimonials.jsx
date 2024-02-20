import React from 'react'
import { testimonials } from '../../constants'
import TestimonialsTab from '../../components/TestimonialsTab'

export default function Testimonials() {
  return (
    <div className='grid gap-[2rem] lg:grid-cols-2 max-w-[1110px] mx-auto'>
        {
            testimonials.map(entry => 
                <TestimonialsTab key={entry.name} icon={entry.icon} name={entry.name} job={entry.job} text={entry.text} image={entry.image} />    
            )
        }
    </div>
  )
}
