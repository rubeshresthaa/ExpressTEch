// import { useState } from "react";
// import { IoMenuSharp } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [open, setOpen] = useState(false);

//   const toggleButton = () => {
//     setOpen((prev) => !prev);
//   };

//   const mobileMenu = (
//     <div
//       className={`fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col justify-center items-center p-6 z-50 transition-all transform duration-300 ease-in-out ${
//         open ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-90"
//       }`}
//     >
//       {/* Close Button */}
//       <button
//         className="absolute top-4 right-4 text-white p-3 rounded-full bg-green-600 hover:bg-green-500 focus:outline-none transition-all transform duration-300 ease-in-out"
//         onClick={() => setOpen(false)}
//         aria-label="Close Menu"
//       >
//         <IoClose size={30} />
//       </button>
  
//       <ul className="text-center text-2xl space-y-6">
//         <li>
//           <Link
//             to="/"
//             onClick={() => setOpen(false)}
//             className="text-green-500 hover:text-green-300 hover:scale-105 hover:translate-x-2 hover:underline hover:underline-offset-8 uppercase transition-all duration-300 py-3"
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/about"
//             onClick={() => setOpen(false)}
//             className="text-green-500 hover:text-green-300 hover:scale-105 hover:translate-x-2 hover:underline hover:underline-offset-8 uppercase transition-all duration-300 py-3"
//           >
//             About Us
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/service"
//             onClick={() => setOpen(false)}
//             className="text-green-500 hover:text-green-300 hover:scale-105 hover:translate-x-2 hover:underline hover:underline-offset-8 uppercase transition-all duration-300 py-3"
//           >
//             Services
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/contact"
//             onClick={() => setOpen(false)}
//             className="text-green-500 hover:text-green-300 hover:scale-105 hover:translate-x-2 hover:underline hover:underline-offset-8 uppercase transition-all duration-300 py-3"
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
//   return (
//     <div>
//       {/* Top Section */}
//       <div className="flex justify-between bg-green-800 p-4 text-white">
//         <div className="flex space-x-8">
//           <h1>Address: 1234 Street Name</h1>
//           <h1>Email: info@example.com</h1>
//         </div>
//         <div className="flex space-x-6">
//           <h1>Phone: +1234567890</h1>
//           <h1>Facebook</h1>
//           <h1>Instagram</h1>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div className="bg-black text-white p-4 md:p-6 relative">
//         <nav className="flex justify-between items-center relative z-50">
//           {/* Logo */}
//           <div className="flex space-x-4 items-center">
//             <h1 className="font-bold text-2xl text-green-500">Express Tech</h1>
//           </div>

//           {/* Menu toggle for mobile */}
//           <button
//             className="md:hidden z-50"
//             onClick={toggleButton}
//             aria-expanded={open}
//             aria-label="Toggle Menu"
//           >
//             {open ? <IoClose size={30} /> : <IoMenuSharp size={30} />}
//           </button>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex gap-8 text-lg font-semibold uppercase">
//             <li>
//               <Link
//                 to="/"
//                 className="hover:scale-110 hover:underline hover:underline-offset-8 transition-all"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="hover:scale-110 hover:underline hover:underline-offset-8 transition-all"
//               >
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/service"
//                 className="hover:scale-110 hover:underline hover:underline-offset-8 transition-all"
//               >
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="hover:scale-110 hover:underline hover:underline-offset-8 transition-all"
//               >
//                 Contact
//               </Link>
//               </li>
//               <li>
//               <Link
//                 to="/info"
//                 className="hover:scale-110 hover:underline hover:underline-offset-8 transition-all"
//               >
//                 FAQs
//               </Link>
//             </li>
//           </ul>

//           {/* Mobile Menu */}
//           {open && mobileMenu}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Header;


import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleButton = () => {
    setOpen((prev) => !prev);
  };

  const mobileMenu = (
    <div
      className={`fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col justify-center items-center p-6 z-50 transition-all transform duration-300 ease-in-out ${
        open ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-90"
      }`}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white p-3 rounded-full bg-green-600 hover:bg-green-500 focus:outline-none transition-all transform duration-300 ease-in-out"
        onClick={() => setOpen(false)}
        aria-label="Close Menu"
      >
        <IoClose size={30} />
      </button>

      {/* Mobile Navigation Links */}
      <ul className="text-center text-xl space-y-6">
        <li>
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-green-500 hover:text-green-300 hover:scale-105 hover:translate-x-2 hover:underline hover:underline-offset-8 uppercase transition-all duration-300 py-2"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="text-green-500 hover:text-green-300 hover:scale-105 hover:translate-x-2 hover:underline hover:underline-offset-8 uppercase transition-all duration-300 py-2"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/service"
            onClick={() => setOpen(false)}
            className="text-green-500 hover:text-green-300 hover:scale-105 hover:translate-x-2 hover:underline hover:underline-offset-8 uppercase transition-all duration-300 py-2"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-green-500 hover:text-green-300 hover:scale-105 hover:translate-x-2 hover:underline hover:underline-offset-8 uppercase transition-all duration-300 py-2"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/info"
            onClick={() => setOpen(false)}
            className="text-green-500 hover:text-green-300 hover:scale-105 hover:translate-x-2 hover:underline hover:underline-offset-8 uppercase transition-all duration-300 py-2"
          >
            FAQs
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      {/* Top Section */}
      <div className="bg-green-800 p-2 md:p-4 text-white text-sm md:text-base flex flex-col md:flex-row justify-between items-center">
        <div className="space-y-1 md:space-y-0 md:flex md:space-x-8 text-center">
          <span>Address: 1234 Street Name</span>
          <span>Email: info@example.com</span>
        </div>
        <div className="space-y-1 md:space-y-0 md:flex md:space-x-6 text-center mt-2 md:mt-0">
          <span>Phone: +1234567890</span>
          <span>Facebook</span>
          <span>Instagram</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-black text-white p-4 md:p-6">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="font-bold text-2xl text-green-500">Express Tech</h1>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50"
            onClick={toggleButton}
            aria-expanded={open}
            aria-label="Toggle Menu"
          >
            {open ? <IoClose size={30} /> : <IoMenuSharp size={30} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-lg font-semibold uppercase">
            <li>
              <Link
                to="/"
                className="hover:scale-105 hover:text-green-300 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:scale-105 hover:text-green-300 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="hover:scale-105 hover:text-green-300 transition-all duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:scale-105 hover:text-green-300 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/info"
                className="hover:scale-105 hover:text-green-300 transition-all duration-300"
              >
                FAQs
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          {open && mobileMenu}
        </nav>
      </div>
    </div>
  );
};

export default Header;


