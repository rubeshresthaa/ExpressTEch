import React from "react";
import ContactList from "./ContactList";
import ServiceList from "./ServiceList";


const AdminDashBoard = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-4xl text-center font-extrabold text-green-500 mb-8">
          Admin Dashboard
        </h1>
        
        {/* Section: Service Management */}
        <div className="service-section mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Manage Services</h2>
          <ServiceList />
          
        </div>

        {/* Section: Contact Management */}
        <div className="contact-section">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Manage Contacts</h2>
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
