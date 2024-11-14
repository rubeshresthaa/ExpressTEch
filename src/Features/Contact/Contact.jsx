
// import { useFormik } from "formik";
// import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import { useSubmitContactMutation } from "./contactApi";
// import { useDispatch } from "react-redux";

// const Contact = () => {
//    const [submitContact,{isLoading}]=useSubmitContactMutation();
//    const dispatch=useDispatch();
//   const {handleChange,handleSubmit,errors,values,touched}=useFormik({
//     initialValues:{
//       name:'',
//       phone:'',
//       email:'',
//       message:''
//     },
//     onSubmit:async (val,resetForm)=>{
//       try {
//         const response=await submitContact(val).unwrap();
//         dispatch(submitContact(response))
//         resetForm();
        
//       } catch (err) {
        
//       }
//     }

//   })
//   return (
//     <div className="min-h-screen bg-[#121212] flex flex-col items-center py-10 px-4">
//       <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>

//       <div className="bg-[#1f1f1f] shadow-lg rounded-lg p-8 w-full max-w-3xl">
//         {/* Contact Info */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold text-white mb-6 text-center">Get in Touch</h2>
//           <div className="space-y-6 text-gray-300">
//             <div className="flex items-center">
//               <FaMapMarkerAlt className="text-green-500 text-2xl mr-4" />
//               <p>Sukedhara, Kathmandu, Nepal</p>
//             </div>
//             <div className="flex items-center">
//               <FaEnvelope className="text-green-500 text-2xl mr-4" />
//               <p>rubesh.shrestha619@gmail.com</p>
//             </div>
//             <div className="flex items-center">
//               <FaPhoneAlt className="text-green-500 text-2xl mr-4" />
//               <p>+977 9840437941</p>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <form className="space-y-6">
//           <div>
//             <label className="block text-gray-300 font-medium mb-2">Name</label>
//             <input
//               type="text"
//               className="w-full p-3 border border-gray-600 rounded-lg bg-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-green-600"
//               placeholder="Your Name"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-300 font-medium mb-2">Email</label>
//             <input
//               type="email"
//               className="w-full p-3 border border-gray-600 rounded-lg bg-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-green-600"
//               placeholder="Your Email"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-300 font-medium mb-2">Phone Number</label>
//             <input
//               type="text"
//               className="w-full p-3 border border-gray-600 rounded-lg bg-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-green-600"
//               placeholder="Your Phone Number"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-300 font-medium mb-2">Message</label>
//             <textarea
//               className="w-full p-3 border border-gray-600 rounded-lg bg-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-green-600"
//               rows="4"
//               placeholder="Your Message"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition duration-200"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { useFormik } from "formik";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useSubmitContactMutation } from "./contactApi";
import { useState } from "react";

const Contact = () => {
  const [submitContact, { isLoading }] = useSubmitContactMutation();
  const [submitStatus, setSubmitStatus] = useState(null);

  const { handleChange, handleSubmit, values, resetForm, errors, touched } = useFormik({
    initialValues: {
      fullname: '',
      phone: '',
      email: '',
      message: ''
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        await submitContact(values).unwrap();
        setSubmitStatus("Thank you! Your message has been sent successfully.");
        resetForm();
      } catch (error) {
        setSubmitStatus("Sorry, something went wrong. Please try again later.");
      }
    }
  });

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>

      <div className="bg-[#1f1f1f] shadow-lg rounded-lg p-8 w-full max-w-3xl">
        {/* Contact Info */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Get in Touch</h2>
          <div className="space-y-6 text-gray-300">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-green-500 text-2xl mr-4" />
              <p>Sukedhara, Kathmandu, Nepal</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-green-500 text-2xl mr-4" />
              <p>rubesh.shrestha619@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-green-500 text-2xl mr-4" />
              <p>+977 9840437941</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-300 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Your Full Name"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Your Phone Number"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-green-600"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Submission Status Message */}
        {submitStatus && (
          <p className="mt-6 text-center text-lg font-medium text-white">
            {submitStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;

