import React from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const Header = () => {
  return (
    <div
      id='top'
      className='mx-auto flex min-h-[100svh] w-full max-w-4xl flex-col items-center justify-center gap-4 px-5 pb-14 pt-24 text-center sm:px-8 lg:px-0'
    >
      <div>
        <Image
          src={assets.profile_img}
          alt=''
          className='w-36 rounded-full sm:w-44 md:w-56 lg:w-64'
        />
      </div>
      <h3 className='mb-2 flex flex-wrap items-end justify-center gap-2 text-lg font-ovo sm:text-xl md:text-2xl'>
        Hi! I am Muntasir Mamun
        <Image src={assets.hand_icon} alt='' className='w-6' />
      </h3>
      <h1 className='text-4xl font-ovo leading-tight sm:text-5xl md:text-6xl lg:text-[66px]'>
        Full Stack Developer based in Bangladesh
      </h1>
      <p className='mx-auto max-w-2xl text-sm leading-7 text-gray-700 sm:text-base'>
        Full Stack Developer with 4+ years' experience in Python/Django,
        Node.js, NestJS, React/Next.js, Docker, CI/CD, Agile, and AI software
        development.
      </p>
      <div className='mt-4 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:items-center'>
        <a
          href='#contact'
          className='flex items-center justify-center gap-2 rounded-full border-white bg-black px-8 py-3 text-white sm:px-10'
        >
          contact me
          <Image src={assets.right_arrow_white} alt='' className='w-6' />
        </a>

        <a
          href='/MuntasirMamun.pdf'
          download
          className='flex items-center justify-center gap-2 rounded-full border border-gray-500 px-8 py-3 sm:px-10'
        >
          Resume
          <Image src={assets.download_icon} alt='' className='w-4' />
        </a>
      </div>
    </div>
  );
};

export default Header;
