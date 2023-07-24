import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import profit1 from '../assets/profit1.jpg';
import profit2 from '../assets/profit2.jpg';
import profit3 from '../assets/profit3.jpg';
import profit4 from '../assets/profit4.jpg';

const Trades = () => {
  return (
    <>
      {' '}
      <div className='text-5xl w-full bg-black py-4 text-center text-gray-300'>
        Our Trades
      </div>
      <div
        name='contact'
        className='w-full h-screen bg-black flex justify-center py-10 -z-10'>
        <Carousel
          showThumbs='false'
          infiniteLoop='true'
          interval='2000'
          autoPlay='true'
          className=' w-[350px] h-[400px] md:w-[600px] md:h-full'>
          <div>
            <img src={profit1} />
            <p className='legend font-bold text-2xl'>Profit of A to B </p>
          </div>
          <div>
            <img src={profit2} />
            <p className='legend font-bold text-2xl'>Profit of c to d </p>
          </div>
          <div>
            <img src={profit3} />
            <p className='legend font-bold text-2xl'>Profit of e to f </p>
          </div>
          <div>
            <img src={profit3} />
            <p className='legend font-bold text-2xl'>Profit of e to f </p>
          </div>
          <div>
            <img src={profit3} />
            <p className='legend font-bold text-2xl'>Profit of e to f </p>
          </div>
          <div>
            <img src={profit3} />
            <p className='legend font-bold text-2xl'>Profit of e to f </p>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Trades;
