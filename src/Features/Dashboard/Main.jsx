import { useEffect } from 'react';
import dashimage from '../../assets/Images/dashimage.jpg';
import ScrollReveal from 'scrollreveal';

const Main = () => {
  useEffect(() => {
    ScrollReveal().reveal('.animate-top', {
      origin: 'top',
      distance: '400px',
      duration: 1000,
      easing: 'ease-out',
      reset: true,
    });
  }, []);

  return (
    <div
      className="bg-cover w-full bg-center h-[34.375rem] sm:h-[30rem] md:h-[34.375rem] lg:h-[40rem] object-fill border-2 border-blue-gray-900 shadow-lg flex flex-col gap-y-4 justify-center items-center px-4 sm:px-8 lg:px-16"
      style={{ backgroundImage: `url(${dashimage})` }}
    >
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 shadow-md animate-top'>
        Express Tech
      </h1>
      <p className='text-lg sm:text-xl md:text-2xl text-white animate-top'>
        Add Slogan Here
      </p>
    </div>
  );
};

export default Main;
