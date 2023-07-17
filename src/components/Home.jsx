import React from 'react';
import Typewriter from 'typewriter-effect';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='bg-[#0e232a] w-full h-screen'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-500 text-xl'>Hey, we are</p>
        <h1 className='text-4xl sm:text-6xl font-extrabold py-4 text-[#ccd6f6]'>
          Scrips And Strikes
        </h1>
        <h2 className='text-2xl sm:text-4xl py-4 text-[#8892b0]'>
          Your gateway to purposeful and efficient
        </h2>
        <h2 className='text-2xl sm:text-4xl pb-5 text-pink-500 font-bold'>
          <Typewriter
            options={{
              strings: ['investing', 'trading'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <div>
          <button className='text-white border-2 px-6 py-4 my-2 flex items-center hover:bg-pink-500 hover:border-pink-500'>
            View work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-4' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
