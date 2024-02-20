import React from 'react'
import { navBar, footerIcons } from '../constants'
import Navigation from './Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-stone-900'>
    <div className='container px-6'>
        <div className='max-w-[1110px] mx-auto grid justify-center items-center gap-[2rem] py-[3rem] md:grid-cols-2'>
            <h1 className='text-white text-[2rem] md:text-[3rem] md:text-start text-center font-bold font-inter'> Get In Touch <br className='hidden lg:block' /> with us </h1>

            <div className='flex flex-col gap-[2rem]'>
                <div className='flex gap-[1rem] justify-center md:justify-end'>
                    {footerIcons.map(entry => 
                        <FontAwesomeIcon icon={entry.icon} key={entry.name} className='text-[1.5rem] md:text-[2rem] text-light hover:text-yellow cursor-pointer'/>
                    )}
                </div>
                <nav>
                    <ul className='list-none flex flex-wrap gap-[1rem] justify-center md:justify-end'>
                        {navBar.map(nav => 
                            <li key={nav.name}> 
                                <Navigation name={nav.name} to={nav.to} />
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <div className='h-[1px] w-full bg-light'>
    </div>
    <div className='py-[1rem] container text-center px-6 flex flex-wrap justify-center'>
        <small className='text-light whitespace-pre-wrap'>&copy; 2019 Commute. All rights reserved. | </small>

        <small className='text-light whitespace-pre-wrap'>Developed By: 
        <NavLink className='text-yellow' to='https://ccp-portfolio.netlify.app/' target='_blank'> Charles </NavLink> | </small> 

        <small className='text-light'>Designed By: 
        <NavLink to='https://w3layouts.com/' className='text-yellow' target='_blank'> W3Layout </NavLink> </small> 
    </div>            
    
    </footer>
  )
}
