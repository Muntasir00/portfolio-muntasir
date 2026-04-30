import { assets, infoList, toolsData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section
      id='about'
      className='w-full scroll-mt-20 px-5 py-14 sm:px-8 sm:py-16 md:px-12 lg:px-[10%] xl:px-[12%]'
    >
      <h4 className='mb-2 text-center text-base font-ovo sm:text-lg'>
        Introduction
      </h4>
      <h2 className='text-center text-4xl font-ovo sm:text-5xl'>About Me</h2>

      <div className='my-12 flex w-full flex-col items-center gap-10 lg:my-20 lg:flex-row lg:items-stretch lg:gap-16 xl:gap-20'>
        <div className='w-full max-w-[320px] rounded-3xl sm:max-w-[420px] lg:w-[34%] lg:max-w-[500px]'>
          <Image
            src={assets.user_image}
            alt='user'
            className='h-auto w-full rounded-3xl'
          />
        </div>
        <div className='w-full flex-1'>
          <p className='mb-8 max-w-3xl text-sm leading-7 text-gray-700 sm:text-base lg:mb-10 [@media(min-width:2048px)]:text-2xl'>
            Full Stack Developer with 3+ years of experience in backend
            development, API design, and modern frontend frameworks. Skilled in
            building scalable backend systems with Python/Django and
            React/Next.js for responsive user interfaces. Experienced in Agile
            teams, containerization (Docker), CI/CD automation (GitHub Actions),
            and ERP customizations with Odoo.
          </p>

          <ul className='grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className='h-full cursor-pointer rounded-xl border-[0.5px] border-gray-400 p-5 duration-500 hover:-translate-y-1 hover:bg-lightHover hover:shadow-black sm:p-6'
              >
                <Image src={icon} alt={title} className='mt-3 w-7' />
                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                <p className='text-sm leading-6 text-gray-600'>
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h3 className='my-6 text-gray-900 font-ovo'>Tools I use</h3>
          <ul className='flex flex-wrap items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className='flex aspect-square w-12 cursor-pointer items-center justify-center rounded-lg border border-gray-400 duration-500 hover:-translate-y-1 sm:w-14'
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
