import React, { useRef, useState } from 'react';
import Inputs from './Inputs';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Email from '../../components/Email';
import { images } from '../../constants';

export default function ContactForm() {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    subject: '',
    message: '',
  });
  const modal = useRef();

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    setFormData({
      name: '',
      number: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const modalData = {
    image: images.email,
    description: 'Email sent successfully \n Thank you for sending a message',
  };

  function closeModal() {
    setSubmit(false);
  }

  return (
    <>
      {submit && (
        <Modal ref={modal} onClose={closeModal}>
          <Email text={modalData.description} />
        </Modal>
      )}

      <form action="" className='max-w-[1110px] mx-auto' onSubmit={onSubmit}>
        <div className='grid gap-[2rem] md:grid-cols-2 lg:grid-cols-4 mb-[2rem]'>
          {['name', 'number', 'email', 'subject'].map((field) => (
            <Inputs
              key={field}
              type='text'
              title={`${field.toUpperCase()}:`}
              placeholder={`Enter ${field}`}
              name={field}
              value={formData[field]}
              onChange={handleChange}
            />
          ))}
        </div>
        <textarea
          className='h-[300px] w-full outline-none border-b-[1px] border-dark resize-none mb-[1rem] bg-transparent px-2'
          placeholder='Message'
          name='message'
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)} // Update this line
        />
        <Button style='bg-yellow border-yellow text-white hover:bg-white hover:text-dark' children='Submit' />
      </form>
    </>
  );
}
