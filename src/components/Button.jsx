// Button.js
import React from 'react';

const Button = ({ children, style }) => {
  return (
    <button className={`px-6 outline-none border-[1px] py-2 rounded-md ${style} button`}>
      {children}
    </button>
  );
};

export default Button;