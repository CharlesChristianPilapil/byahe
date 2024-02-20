import React from 'react'

export default function Email({...props}) {
  return (
    <div>
        <img src={props.image} alt="image" className="w-full" />
        <h1 className="text-center font-inter text-light whitespace-pre-wrap"> {props.text} </h1>
    </div>
  )
}
