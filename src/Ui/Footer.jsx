import { useEffect } from 'react';
import footImage from '../assets/Images/cable-wire-in-green-and-black-background-dwksvgpa2ektmlv1.jpg'
import ScrollReveal from 'scrollreveal';
const Footer = () => {
  useEffect(() => {
    ScrollReveal().reveal('.animate-side', {
      origin: 'side',
      distance: '400px',
      duration: 1000,
      easing: 'ease-out',
      
    });
  }, []);
  return (
    // <div className="text-[#212121] bg-[#006400]">
    <div
    className="bg-cover w-full bg-center h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem] xl:h-[40rem] object-fill text-gray-300 bg-transparent"
    style={{ backgroundImage: `url(${footImage})` }}>

      <main className="grid grid-cols-4 justify-center lg:grid-cols-3 md:grid-cols-1 px-20 gap-8 py-10 animate-side">
        <div className='space-y-2'>
          <h1 className="text-center font-medium text-2xl">Express Tech</h1>
          <p className="text-gray-300 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste suscipit sapiente maxime molestias iusto minus dolorem harum sed, a illum id mollitia accusamus cupiditate architecto consequatur numquam quae, ipsam fuga?</p>
        </div>
        <div>
          <h1 className="text-center font-medium text-2xl">Service</h1>
          <ul className="text-gray-200 font-medium space-y-5">
            <li className="hover:scale-95 cursor-pointer">  -Complete Network Solution</li>
            <li className="hover:scale-95 cursor-pointer">-Structure Cabling</li>
            <li className="hover:scale-95 cursor-pointer">-Network Design and Installation</li>
            <li className="hover:scale-95 cursor-pointer">-Solution and Planning</li>
            <li className="hover:scale-95 cursor-pointer">-Web Development</li>
          </ul>
        </div>
        <div>
          <h1 className="text-center font-bold text-2xl">Contact</h1>
          <ul className="text-gray-200 font-medium space-y-5">
            <li className="hover:scale-95 cursor-pointer">Express Tech</li>
            <li className="hover:scale-95 cursor-pointer">Sukedhara, Kathmandu</li>
            <li className="hover:scale-95 cursor-pointer">email@gmail.com</li>
          </ul>
        </div>
        <div>
          <h1 className="text-center font-bold text-2xl">Our Location</h1>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1411.372403922907!2d85.3481804!3d27.7323578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzU2LjUiTiA4NcKwMjAnNTMuNSJF!5e0!3m2!1sen!2snp!4v1699881323457!5m2!1sen!2snp"
              width="100%"
              height="200"
               className="rounded-lg outline-none focus:outline-2 focus:outline-green-500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </main>
    </div>
  )
}
export default Footer