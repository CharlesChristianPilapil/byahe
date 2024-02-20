// Modal.js
import React, { forwardRef, useEffect } from 'react';

const Modal = forwardRef(function Modal({ children, onClose }, ref) {
  useEffect(() => {
    if (ref.current) {
      ref.current.showModal();
    }
  }, [ref]);

  return (
    <dialog ref={ref} className='max-w-[400px] py-[1rem] px-[1rem] bg-white mx-auto grid gap-[1rem] place-items-center fixed top-[50%] translate-y-[-50%] z-20 rounded-md' onClose={onClose}>
        {children}
        <button className='text-white bg-yellow border-yellow px-6 border-[1px] py-2 rounded-md hover:bg-white hover:text-dark button' type='submit' onClick={onClose}> Close </button>
    </dialog>
  );
});

export default Modal;