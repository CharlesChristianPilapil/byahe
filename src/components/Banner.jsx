import React from 'react';
import Overlay from './Overlay';

export default function Banner({ children, bgImage }) {
  return (
    <section className="relative py-[5rem] grid place-items-center bg-cover bg-center lg:py-0 lg:h-[400px]"
      style={{ backgroundImage: `url(${bgImage})` }}>
      {children}
      <Overlay bg='black' />
    </section>
  );
}