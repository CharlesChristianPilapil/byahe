import React from 'react'
import StatTabs from '../../components/StatTabs'
import { stats } from '../../constants'

export default function Stats() {
  return (
    <>
        <div className='z-10 container px-6 grid'>
            <div className='max-w-[1110px] mx-auto grid gap-[1.5rem] lg:grid-cols-2 lg:gap-[2rem] lg:justify-between'>
                <div className='flex flex-col items-center text-center gap-[1.5rem] lg:text-start lg:items-start'>
                    <h1 className='text-[2rem] lg:text-[3rem] text-white font-bold font-inter'> Years In The Field </h1>

                    <p className='font-inter text-stone-200'> Integer pulvinar leo id viverra feugiat. Pellentesque libero justo, semper at tempus vel, ultrices in ligula. Nulla sollicit sed. </p>

                    <h2 className='font-inter text-[1.2rem] text-stone-400 font-bold'> <span className='text-[2rem] text-yellow'> 20+ </span> Years of Experience </h2>
                </div>

                <div className='grid gap-[2rem] item-center sm:grid-cols-3'>
                    {
                        stats.map(entry => 
                            <StatTabs key={entry.title} title={entry.title} number={entry.number} icon={entry.icon} />    
                        )
                    }
                </div>

            </div>
        </div>
    </>
  )
}
