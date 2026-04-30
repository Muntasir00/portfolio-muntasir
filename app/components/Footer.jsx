import Image from 'next/image';
import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className='mt-5 px-5 sm:px-8'>
      <div className='text-center'>
        <Image
          src={assets.muntasir_mamun_logo}
          alt='Logo'
          className='mx-auto mb-2 w-28 sm:w-36'
        />

        <div className='mx-auto flex max-w-full flex-col items-center justify-center gap-2 sm:flex-row'>
          <Image src={assets.mail_icon} alt='Email Icon' className='w-6' />
          <a
            href='mailto:mdmuntasirmamun00@gmail.com'
            className='break-all text-sm font-medium underline-offset-4 sm:text-base'
          >
            mdmuntasirmamun00@gmail.com
          </a>
        </div>

        <div className='mx-auto mt-4 flex max-w-sm flex-wrap items-center justify-center gap-3 sm:gap-4'>
          <a
            href='https://wa.me/8801794690000'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src={assets.whatsapp} alt='whatsapp' className='w-11 sm:w-12' />
          </a>
          <a
            href='https://www.facebook.com/muntasirmamuun/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src={assets.facebook} alt='Facebook' className='w-11 sm:w-12' />
          </a>
          <a
            href='https://www.instagram.com/muntasir_mamun_00/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={assets.instagram}
              alt='Instagram'
              className='w-11 sm:w-12'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/md-muntasir-mamun-251907187/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src={assets.linkedin} alt='LinkedIn' className='w-11 sm:w-12' />
          </a>
          <a
            href='https://github.com/Muntasir00'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src={assets.github} alt='Github' className='w-11 sm:w-12' />
          </a>
        </div>
      </div>

      <div className='mx-auto mt-12 max-w-6xl border-t border-gray-400 py-6 text-center text-xs leading-6 text-gray-500 sm:text-sm'>
        (C){' '}
        {new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}{' '}
        Muntasir Mamun. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
