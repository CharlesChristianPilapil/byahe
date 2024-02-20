import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tabs({ title, text, icon }) {
  return (
    <div className="text-center bg-stone-50 border-[1px] py-[3rem] flex flex-col gap-4 px-2 hover:bg-yellow transition-all duration-[.2s] rounded-md tab">
      <FontAwesomeIcon icon={icon} className="text-[2rem] text-yellow transition-all duration-[.2s] icon"/>
      <h3 className="font-inter text-[1.5rem] text-dark font-bold">{title}</h3>
      <p className="text-light font-rubik">{text}</p>
    </div>
  );
}