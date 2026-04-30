import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Work = () => {
  return (
    <section
      id='work'
      className='w-full scroll-mt-20 px-5 py-14 sm:px-8 sm:py-16 md:px-12 lg:px-[10%] xl:px-[12%]'
    >
      <h4 className='mb-2 text-center text-base font-ovo sm:text-lg'>
        My Portfolio
      </h4>
      <h2 className='text-center text-4xl font-ovo sm:text-5xl'>
        My Latest Work
      </h2>
      <p className='mx-auto mb-12 mt-5 max-w-2xl text-center text-sm leading-7 text-gray-700 sm:text-base'>
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end and back-end development.
      </p>

      <div className='my-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className='group relative min-h-[300px] cursor-pointer overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat sm:aspect-square sm:min-h-0'
          >
            <div className='absolute bottom-4 left-1/2 flex max-h-[calc(100%-2rem)] w-[calc(100%-2rem)] -translate-x-1/2 items-center justify-between overflow-hidden rounded-md bg-white px-4 py-3 duration-500 group-hover:bottom-6 sm:bottom-5 sm:w-10/12 sm:px-5'>
              <div className='min-w-0'>
                <h2 className='text-sm font-semibold leading-5 sm:text-base'>
                  {project.title}
                </h2>
                <p className='line-clamp-4 text-xs leading-5 text-gray-700 sm:line-clamp-3 sm:text-sm'>
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href='#contact'
        className='mx-auto my-16 flex w-full max-w-3xl flex-col items-center justify-center gap-2 rounded-full border-[0.5px] border-gray-500 px-5 py-3 text-center text-sm text-gray-700 duration-500 hover:bg-lightHover sm:my-20 sm:w-max sm:flex-row sm:px-10 sm:text-base'
      >
        Contact Me for full project details, demo and source code and other
        projects
        <Image
          src={assets.right_arrow_bold}
          alt='Right Arrow'
          className='w-4 shrink-0'
        />
      </a>
    </section>
  );
};

export default Work;
