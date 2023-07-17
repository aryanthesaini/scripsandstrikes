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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ea
              sit aut ad eligendi. Error, maiores, magni quaerat quam
              repellendus placeat odio quos nobis ab, officiis quasi ea. Sed,
              esse?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
