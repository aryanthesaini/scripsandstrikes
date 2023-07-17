import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0e232a] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-2 border-pink-500'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl'>
            <p>Hey there we are gald you are here, take a look around!</p>
          </div>
          <div>
            <p className='text-xl'>
              Dive into the world of dynamic finance with your partner in
              financial success: Scrips and Strikes Investments. Together, we
              will explore the deepest realms of investment and trading
              strategies to keep your money safe, secure, and multiplying! Join
              the financial voyage with our expertise and get ready to pave your
              path to wealth and stability. Embark on the adventure of a
              lifetime with us today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
