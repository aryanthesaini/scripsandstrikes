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
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0e232a] text-gray-300'>
      <div>
        <img src={logo} alt='logo' style={{ width: '80px' }} />
      </div>
      {/* menu */}
      <div>
        <ul className='hidden md:flex '>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
            : 'absolute top-0 left-0 w-full h-screen bg-[#0e232a] flex flex-col justify-center items-center'
        }>
        <li className='text-2xl py-6'>Home</li>
        <li className='text-2xl py-6'>About Us</li>
        <li className='text-2xl py-6'>Contact Us</li>
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
