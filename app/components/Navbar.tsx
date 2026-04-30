import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='pointer-events-none fixed top-0 right-0 -z-10 w-[60vw] min-w-[260px] max-w-[520px] translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>
      <nav
        className={`fixed z-50 flex w-full items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8 xl:px-[8%] ${
          isScroll ? 'bg-white/75 backdrop-blur-lg shadow-sm' : ''
        }`}
      >
        <a href='#top'>
          <Image
            src={assets.logo}
            className='mr-4 w-24 cursor-pointer sm:w-28 lg:mr-8'
            alt='logo'
          />
        </a>
        <ul
          className={`hidden items-center gap-5 rounded-full px-8 py-3 lg:flex xl:gap-8 xl:px-12 ${
            isScroll ? '' : 'bg-white/60 shadow-sm'
          }`}
        >
          <li>
            <a className='font-ovo' href='#top'>
              Home
            </a>
          </li>
          <li>
            <a className='font-ovo' href='#about'>
              About me
            </a>
          </li>
          <li>
            <a className='font-ovo' href='#services'>
              Services
            </a>
          </li>
          <li>
            <a className='font-ovo' href='#work'>
              My Work
            </a>
          </li>
          <li>
            <a className='font-ovo' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
        <div className='flex items-center gap-3 sm:gap-4 lg:gap-6'>
          {/* <button>
            <Image src={assets.moon_icon} alt='' className='w-6' />
          </button> */}
          <a
            href='#contact'
            className='ml-4 hidden items-center gap-3 rounded-full border border-gray-500 px-8 py-2.5 font-ovo xl:flex'
          >
            Contact{' '}
            <Image src={assets.arrow_icon} alt='arrow' className='w-3' />
          </a>

          <button
            type='button'
            aria-label='Open menu'
            className='ml-1 block p-2 lg:hidden'
            onClick={openMenu}
          >
            <Image src={assets.menu_black} alt='menu' className='w-6' />
          </button>
        </div>

        <button
          type='button'
          aria-label='Close menu overlay'
          onClick={closeMenu}
          className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity lg:hidden ${
            isMenuOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }`}
        />

        {/* Mobile Menu */}
        <ul
          className={`fixed bottom-0 right-0 top-0 z-50 flex h-dvh w-[min(82vw,20rem)] flex-col gap-4 bg-rose-50 px-8 py-20 shadow-2xl transition duration-500 lg:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <li className='absolute right-6 top-6 list-none'>
            <button type='button' aria-label='Close menu' onClick={closeMenu}>
              <Image
                src={assets.close_black}
                alt='Close menu'
                className='w-5 cursor-pointer'
              />
            </button>
          </li>

          <li>
            <a className='font-ovo' onClick={closeMenu} href='#top'>
              Home
            </a>
          </li>
          <li>
            <a className='font-ovo' onClick={closeMenu} href='#about'>
              About me
            </a>
          </li>
          <li>
            <a className='font-ovo' onClick={closeMenu} href='#services'>
              Services
            </a>
          </li>
          <li>
            <a className='font-ovo' onClick={closeMenu} href='#work'>
              My Work
            </a>
          </li>
          <li>
            <a className='font-ovo' onClick={closeMenu} href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
