import React from 'react';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-black flex justify-center items-center p-4'>
      <form action='' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-2 border-pink-500 text-gray-300'>
            Contact Us
          </p>
          <p className='text-gray-300 py-4'>
            Submit this form or reach out at our email: abc@gmail.com
          </p>
        </div>

        <input
          className=' p-2 bg-[#ccd6f6] rounded-md'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6] rounded-md'
          type='email'
          placeholder='Email'
          name='email'
        />

        <textarea
          className=' p-2 bg-[#ccd6f6] rounded-md'
          name='message'
          rows='10'
          placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-500 hover:border-pink-500 px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Go
        </button>
      </form>
    </div>
  );
};

export default Contact;
