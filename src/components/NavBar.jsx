import { NavLink } from "react-router-dom";
import { navBar } from "../constants";
import { useState } from "react";
import Navigation from "./Navigation";

const navs = navBar.map(nav => nav);


export default function NavBar() {

  const [active, setActive] = useState(false);

  function handleToggle() {
    setActive(toggle => !toggle)
  }

  return (
    <nav className='container px-6 h-[5rem] z-10 items-center flex justify-between absolute top-0 w-full'>
      <h4 className='text-white text-[1.5rem] font-inter font-bold'> 
      <NavLink to='' className='bg-gradient-to-r text-transparent bg-clip-text from-yellow via-orange-500 to-yellow text-white'> Byahe/PH </NavLink> </h4>

      <ul className={`absolute top-[5rem] left-0 w-full mx-auto
      md:relative md:h-fit md:top-0 md:py-0 md:w-fit md:mx-0 md:border-0 md:block navigation md:bg-transparent
      ${active ? 'block' : 'hidden'}`}>
        <div className="flex flex-col gap-[2rem] mx-6 py-[2rem] justify-center items-center bg-white 
        md:bg-transparent md:flex-row md:gap-[1rem] md:mx-0">
            {navs.map(nav => 
                <li key={nav.name}> 
                  <Navigation name={nav.name} to={nav.to} handleToggle={handleToggle} />
                </li> 
            )}
        </div>
      </ul>

      <div className='text-white cursor-pointer md:hidden'>
        <button onClick={handleToggle}>
            &#9776;
        </button>
      </div>
    </nav>
  );
}
