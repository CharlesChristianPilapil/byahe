import React from 'react';

export default function Inputs({ title, type, name, placeholder, value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <label htmlFor={name}>
      <p className='text-dark font-inter'>{title}</p>
      <input
        className='outline-none px-2 py-2 border-b-[1px] w-full border-dark bg-transparent'
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </label>
  );
}
