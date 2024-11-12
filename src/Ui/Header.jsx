import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";


const Header = () => {
  const [open,setOpen]=useState(false)

  const toggleButton=()=>{
    setOpen((prev)=>!prev)
  }
   const content= <>
     <div className="hidden md:block lg:block absolute top-16 w-full left-0 right-0 bg-black ">
          <ul className="text-center text-xl p-10 space-y-4">
            <li className="hover:scale-125 hover:underline hover:underline-offset-8 uppercase">Home</li>
            <li className="hover:scale-125 hover:underline hover:underline-offset-8 uppercase">About Us</li>
            <li className="hover:scale-125 hover:underline hover:underline-offset-8 uppercase">Services</li>
            <li className="hover:scale-125 hover:underline hover:underline-offset-8 uppercase">Contact</li>
          </ul>
        </div>
   </>

  return (
    <div>
      <div className="flex justify-between bg-[#006400] p-4">
        <div className="flex space-x-5 px-10 font-bold">
          <h1>Address</h1>
          <h1>Email</h1>
        </div>
        <div className="flex justify-evenly px-10 font-bold">
          <h1>Phone No.</h1>
          <h1>facebook</h1>
          <h1>instagram</h1>
        </div>
      </div>
   <div className="bg-[#212121] text-white p-4 md:m-0 w-full ">
      <nav className="h-10vh flex md:flex-col lg:flex-col justify-between z-50 text-white lg:py-5 px-20 py-4 md:px-0 md:gap-y-4 ">
        <div className="flex space-x-5 uppercase font-bold">
          <h1>Logo Section Here</h1>
          <h1>Express Tech</h1>
        </div>
        
        <div>
          {open && content}
        </div>
        <button className="hidden md:block lg:block absolute right-10" onClick={toggleButton}>
        { open ? <IoClose size={30} /> :  <IoMenuSharp size={30} />}

        </button>
        <div>
          <ul className="flex font-bold md:flex-col md:items-start items-center gap-5 md:gap-y-4 cursor-pointer w-full lg:hidden">
            <li className="hover:scale-125 hover:underline hover:underline-offset-8 uppercase transition-all">Home</li>
            <Link to='/about'><li className="hover:scale-125 hover:underline hover:underline-offset-8 uppercase transition-all">About Us</li></Link>
            <li className="hover:scale-125 hover:underline hover:underline-offset-8 uppercase transition-all">Services</li>
            <Link to='/contact'><li className="hover:scale-125 hover:underline hover:underline-offset-8 uppercase transition-all">Contact</li></Link>
          </ul>
        </div>
      </nav>
    </div>
    </div>
 
  )
}
export default Header