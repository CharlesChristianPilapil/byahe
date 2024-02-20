import React from 'react'
import Section from '../../components/Section'
import AgentsTabs from './AgentsTabs'
import { agents } from '../../constants'


export default function Agents() {
  return (
    <Section title='Agents'>
        <div className='max-w-[1110px] mx-auto grid justify-center gap-[1rem] md:grid-cols-2 lg:grid-cols-4'>
            {agents.map((entry, index) => 
                <AgentsTabs key={index} name={entry.name} image={entry.image} role={entry.role} />
            )}
        </div>
    </Section>
  )
}
