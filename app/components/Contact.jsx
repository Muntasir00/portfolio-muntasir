import React, { useState } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async event => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '08b482b5-ede2-44ad-892e-4d413e4a6b52');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <section
      id='contact'
      className='w-full scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-[length:150%_auto] bg-center bg-no-repeat px-5 py-14 sm:bg-[length:110%_auto] sm:px-8 sm:py-16 md:px-12 lg:bg-[length:90%_auto] lg:px-[10%] xl:px-[12%]'
    >
      <h4 className='mb-2 text-center text-base font-ovo sm:text-lg'>
        Connect With Me
      </h4>
      <h2 className='text-center text-4xl font-ovo sm:text-5xl'>
        Get In Touch
      </h2>
      <p className='mx-auto mb-12 mt-5 max-w-2xl text-center text-sm leading-7 text-gray-700 sm:text-base'>
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className='mx-auto max-w-2xl'>
        <div className='mb-6 mt-10 grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6'>
          <input
            type='text'
            placeholder='Enter your name'
            required
            className='w-full rounded-md border-[0.5px] border-gray-400 bg-white p-3 outline-none'
            name='name'
          />
          <input
            type='email'
            placeholder='Enter your email'
            required
            className='w-full rounded-md border-[0.5px] border-gray-400 bg-white p-3 outline-none'
            name='email'
          />
        </div>
        <textarea
          rows='6'
          placeholder='Enter your message'
          required
          className='mb-6 w-full rounded-md border-[0.5px] border-gray-400 bg-white p-4 outline-none'
          name='message'
        ></textarea>
        <button
          type='submit'
          className='mx-auto flex w-full items-center justify-center gap-2 rounded-full bg-black/80 px-8 py-3 text-white duration-500 hover:bg-black sm:w-max'
        >
          Submit Now
          <Image
            src={assets.right_arrow_white}
            alt='Send Icon'
            className='w-4'
          />
        </button>
        <p className='mt-4 text-center font-semibold text-gray-700'>
          {result}
        </p>
      </form>
    </section>
  );
};

export default Contact;
