import React, { useState, useRef } from 'react';
import Button from './Button';
import Modal from './Modal';
import Email from './Email';
import { images } from '../constants';

const image = images.email;

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const modal = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setEmail('')
    // You can perform additional logic here if needed
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setSubmitted(false); // Reset submitted state when input changes
  };

  const closeModal = () => {
    setSubmitted(false);
    // Implement the logic to close the modal
  };

  return (
    <div>
      {submitted && (
        <Modal ref={modal} onClose={closeModal}>
          <Email image={image} text='Subscription Sent to Email' />
        </Modal>
      )}

      <div className="max-w-[1110px] mx-auto grid md:grid-cols-2 gap-[2rem] items-center justify-center">
        <p className="text-[1.5rem] font-rubik text-dark">
          Duis nisi sapien, elementum finibus fermentum eget, aliquet a leo.
        </p>
        <form action="" onSubmit={handleSubmit} className="flex gap-[1rem]">
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            className="border-b-[1px] outline-none border-dark w-full px-1 py-2 bg-transparent"
            placeholder="Enter your email"
            required
          />
          <Button children="Subscribe" style="border-yellow text-white bg-yellow hover:bg-white hover:text-dark" />
        </form>
      </div>
    </div>
  );
}
