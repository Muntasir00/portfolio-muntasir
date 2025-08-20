import Image from 'next/image';
import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='mt-5'>
      <div className='text-center'>
        <Image
          src={assets.muntasir_mamun_logo}
          alt='Logo'
          className='w-36 mx-auto mb-2'
        />

        <div className='w-max flex items-center justify-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='Email Icon' className='w-6' />
          <a
            href='mailto:mdmuntasirmamun00@gmail.com'
            className='text-base font-medium underline-offset-4 '
          >
            mdmuntasirmamun00@gmail.com
          </a>
        </div>
        {/* whatsapp  facebook Instagram LinkedIn*/}
        {/* <div className='w-max flex items-center justify-center mx-auto gap-2 text-gray-700 hover:text-green-600'>
          <Image src={assets.whatsapp} alt='WhatsApp Icon' className='w-6' />
          <a
            href='https://wa.me/8801794690000'
            target='_blank'
            rel='noopener noreferrer'
            className='text-base font-medium underline-offset-4 '
          >
            +880 1794690000
          </a>
        </div> */}

        <div className='flex items-center justify-center gap-4 mt-4'>
          <a
            href='https://wa.me/8801794690000'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src={assets.whatsapp} alt='whatsapp' className='w-15' />
          </a>
          <a
            href='https://www.facebook.com/muntasirmamuun/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src={assets.facebook} alt='Facebook' className='w-15' />
          </a>
          <a
            href='https://www.instagram.com/muntasir_mamun_00/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src={assets.instagram} alt='Instagram' className='w-15' />
          </a>
          <a
            href='https://www.linkedin.com/in/md-muntasir-mamun-251907187/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src={assets.linkedin} alt='LinkedIn' className='w-15' />
          </a>
          <a
            href='https://github.com/Muntasir00'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src={assets.github} alt='Github' className='w-15' />
          </a>
        </div>
      </div>

      <div className='border-t border-gray-400 mx-[10%] mt-12 py-6'>
        © {new Date().getFullYear()} Muntasir Mamun. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
