import { NavLink } from 'react-router-dom';

export default function OverlayButton({ children, ...props }) {
  return (
    <div className={`z-10 flex flex-col gap-[2rem] items-center text-center container px-6`}>
      <h1 className={`text-[2rem] lg:text-[3rem] text-stone-100 font-rubik`}>{props.title}</h1>
      <p className={`text-stone-300 font-inter max-w-[1110px]`}>{props.text}</p>
      {props.navlink ? (
        <NavLink to={props.navlink}>{children}</NavLink>
      ) : (
        children
      )}
    </div>
  );
}