import React from 'react'
import Tabs from '../../components/Tabs'
import { tabs } from '../../constants'
import { images } from '../../constants'

export default function WhatWeDo() {
  return (
    <div className="grid gap-[2rem] lg:grid-cols-2 items-start max-w-[1110px] mx-auto">
        <div className="grid gap-4 sm:grid-cols-2">
        {tabs.map((tab, index) =>
            <Tabs key={tab.name+index} title={tab.name} text={tab.text} icon={tab.icon} />
        )}
        </div>
        <img src={images.whatWeDo} alt="girl on train" />
    </div>
  )
}
