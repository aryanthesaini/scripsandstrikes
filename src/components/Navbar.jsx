import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Draggable from 'react-draggable';

import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaPhone,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300 z-10'>
      <div>
        <img src={logo} alt='logo' style={{ width: '0px' }} />
      </div>
      {/* menu */}
      <div>
        <ul className='hidden md:flex '>
          <li className=' px-8 py-3'>Home</li>
          <li className=' px-8 py-3'>About Us</li>
          <li className=' px-8 py-3'>Contact Us</li>
          <a href='https://cosmofeed.com/view_group/64b12b3d10834a002be0791b'>
            {' '}
            <li className='border-2 rounded-lg px-8 py-3 max-w-xs transition duration-300 ease-in-out hover:scale-110'>
              Pricing
            </li>
          </a>
        </ul>
      </div>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer  '>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'
        }>
        <li className='text-2xl py-6'>Home</li>
        <li className='text-2xl py-6'>About Us</li>
        <li className='text-2xl py-6'>Contact Us</li>
        <li className='text-2xl py-6'>Pricing</li>
      </ul>

      {/* social icons */}
      <div className=' top-[12%] lg:flex fixed flex-col lg:top-[35%] left-0 '>
        <ul>
          <Draggable axis='y' position={null} grid={[25, 25]} scale={1}>
            <li className='w-[150px] h-[40px] lg:w-[160px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-[#075e54] rounded-e-full '>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='/'>
                WhatsApp <FaWhatsapp size={30} />
              </a>
            </li>
          </Draggable>

          <li className='hidden w-[160px] h-[60px] lg:flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#616087] rounded-e-full'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'>
              Call us
              <FaPhone size={30} />
            </a>
          </li>
          <li className=' ig hidden w-[160px] h-[60px] lg:flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-500 rounded-e-full'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'>
              Instagram <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
