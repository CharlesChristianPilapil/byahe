import React from 'react';

export default function Articles({ onClick, ...props }) {
  return (
    <article className='w-[100%] flex flex-col gap-[.5rem]'>
      <button className='border-yellow w-full' onClick={() => onClick(props.image, props.article)}> 
        <img src={props.image} alt={props.title} className='w-full'/> 
      </button>

      <h1 className='font-inter text-dark font-bold text-[1.5rem]'> {props.title} </h1>

      <p className='text-light font-rubik lg:mr-[1rem]'> {props.preview} </p>
    </article>
  );
}
