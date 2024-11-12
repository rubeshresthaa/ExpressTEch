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
    className="bg-cover w-full  bg-center h-[34.375rem] object-fill border-2 border-blue-gray-900 shadow-lg flex flex-col gap-y-2 justify-center items-center" // Tailwind classes for styling
    style={{ backgroundImage: `url(${dashimage})`}}
  >
    <h1 className='text-6xl font-bold text-gray-900 shadow-md animate-top'>Express Tech</h1>
    <p className='animate-top'>Add Slogun Here</p>
  </div>
  );
};

export default Main;