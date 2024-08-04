import React, { useRef, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import emailjs from '@emailjs/browser';

function PopupModel({ isOpen, closePopup, pdf }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    user_email: '',
    user_name: '',
    user_number: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name) newErrors.user_name = 'Name is required';
    if (!formData.user_email) newErrors.user_email = 'Email is required';
    if (!formData.user_number) newErrors.user_number = 'Contact Number is required';
    return newErrors;
  };

  const form = useRef(null)


  const downloadPDF = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '../../../public/Pdf/test.pdf'; // Update with the path to your PDF file
    link.download = 'test.pdf'; // Specify the file name
    link.click(); // Trigger the download
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // email logic
    emailjs
      .sendForm('service_auqjjhd', 'template_nruae7s', form.current, 'WdUd06RdSPBGYjT2k')
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset(); // Reset the form only after successful email send
          closePopup(); // Close the popup after form submission
          if(pdf) return downloadPDF();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='inset-0 h-screen fixed flex justify-center items-center bg-black/70 backdrop-blur-sm z-[999]'>
      <div className='bg-white p-6 flex flex-col rounded-lg shadow-lg w-11/12 max-w-md'>
        <IoCloseSharp onClick={closePopup} className='text-4xl self-end cursor-pointer' />
        <h2 className='text-2xl font-bold mb-4'>Contact Form</h2>
        <form ref={form} onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Name</label>
            <input
              type='text'
              name='user_name'
              value={formData.name}
              onChange={handleChange}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Email</label>
            <input
              type='email'
              name='user_email'
              value={formData.email}
              onChange={handleChange}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Contact Number</label>
            <input
              type='text'
              name='user_number'
              value={formData.contactNumber}
              onChange={handleChange}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.contactNumber && <p className='text-red-500 text-sm'>{errors.contactNumber}</p>}
          </div>
          <div className='flex justify-between items-center'>
            <button
              type='submit'
              className='px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Download PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupModel;
