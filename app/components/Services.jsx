import React from 'react';
import Image from 'next/image';
import { serviceData } from '@/assets/assets';

const Services = () => {
  return (
    <section
      id='services'
      className='w-full scroll-mt-20 px-5 py-14 sm:px-8 sm:py-16 md:px-12 lg:px-[10%] xl:px-[12%]'
    >
      <h4 className='mb-2 text-center text-base font-ovo sm:text-lg'>
        What I offer
      </h4>
      <h2 className='text-center text-4xl font-ovo sm:text-5xl'>
        My Services
      </h2>
      <p className='mx-auto mb-12 mt-5 max-w-2xl text-center text-sm leading-7 text-gray-700 sm:text-base'>
        I am a full stack developer providing end-to-end solutions using a
        variety of frontend and backend technologies.
      </p>

      <div className='my-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {serviceData.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className='h-full cursor-pointer rounded-lg border border-gray-400 px-5 py-8 duration-500 hover:-translate-y-1 hover:bg-lightHover hover:shadow-black sm:px-6 sm:py-10 lg:px-8 xl:py-12'
          >
            <Image src={icon} alt='Icon' className='w-12' />
            <h3 className='my-4 text-lg text-gray-700'>{title}</h3>
            <p className='text-sm leading-6 text-gray-600'>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
