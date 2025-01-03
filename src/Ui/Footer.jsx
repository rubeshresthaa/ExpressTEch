import { useEffect } from "react";
import footImage from "../assets/Images/cable-wire-in-green-and-black-background-dwksvgpa2ektmlv1.jpg";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    ScrollReveal().reveal(".animate-side", {
      origin: "left",
      distance: "400px",
      duration: 1000,
      easing: "ease-out",
    });
  }, []);

  return (
    <div
      className="bg-cover w-full bg-center min-h-[20rem] sm:min-h-[25rem] lg:min-h-[30rem] flex flex-col justify-between text-gray-300"
      style={{
        backgroundImage: `url(${footImage})`,
        backgroundSize: "cover", // Ensure the image covers the entire area
        backgroundPosition: "center", // Center the image
      }}
    >
      {/* Main content of footer */}
      <div className="flex-1 flex flex-col justify-center">
        <main className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8 lg:px-12 py-12 animate-side">
          {/* Express Tech Section */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">Express Tech</h1>
            <p className="text-gray-300 text-justify text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste suscipit sapiente
              maxime molestias iusto minus dolorem harum sed, a illum id mollitia accusamus
              cupiditate architecto consequatur numquam quae, ipsam fuga?
            </p>
          </div>

          {/* Service Section */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-2xl">Quick Links</h1>
            <ul className="text-gray-200 md:text-xl font-medium space-y-3 text-sm sm:text-base">
              <Link to='/home'>
                <li className="hover:scale-95 cursor-pointer transition-transform">- Home</li>
              </Link>
              <Link to='/contact'>
                <li className="hover:scale-95 cursor-pointer transition-transform">- About</li>
              </Link>
              <Link to='/service'>
                <li className="hover:scale-95 cursor-pointer transition-transform">- Service</li>
              </Link>
              <Link to='/contact'>
                <li className="hover:scale-95 cursor-pointer transition-transform">- Contact</li>
              </Link>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">Contact</h1>
            <ul className="text-gray-200 font-medium space-y-3 text-sm sm:text-base">
              <li className="hover:scale-95 cursor-pointer transition-transform">Express Tech</li>
              <li className="hover:scale-95 cursor-pointer transition-transform">Sukedhara, Kathmandu</li>
              <li className="hover:scale-95 cursor-pointer transition-transform">email@gmail.com</li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">Our Location</h1>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1411.372403922907!2d85.3481804!3d27.7323578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzU2LjUiTiA8NcKwMjAnNTMuNSJF!5e0!3m2!1sen!2snp!4v1699881323457!5m2!1sen!2snp"
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
    </div>
  );
};

export default Footer;
