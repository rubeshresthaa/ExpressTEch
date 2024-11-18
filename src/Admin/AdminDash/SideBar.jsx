import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="p-3 text-green-400 fixed top-2 left-2 z-50 md:hidden bg-gray-800 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-200 shadow-lg z-40 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static`}
      >
        <h2 className="text-2xl font-bold text-green-500 p-6 border-b border-gray-700 cursor-pointer hover:text-gray-400" onClick={()=>nav('/admin-dashboard')}>
          Admin Dashboard
        </h2>
        <nav className="mt-6 space-y-4">
          {/* Link to ServiceAdmin */}
          <button
            onClick={() => nav('/service-admin')}
            className="block w-full text-left px-6 py-3 text-lg font-medium rounded-lg hover:bg-green-600 transition-all cursor-pointer"
          >
            Service Admin
          </button>
          {/* Link to Add Service Page */}
          <button
            onClick={() => nav('/add-servicepage')}
            className="block w-full text-left px-6 py-3 text-lg font-medium rounded-lg hover:bg-green-600 transition-all cursor-pointer"
          >
            Add Service
          </button>
          {/* Link to ContactAdmin */}
          <button
            onClick={() => nav('/contact-admin')}
            className="block w-full text-left px-6 py-3 text-lg font-medium rounded-lg hover:bg-green-600 transition-all cursor-pointer"
          >
            Contact Admin
          </button>
        </nav>
      </div>

      {/* Overlay for mobile to close sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default SideBar;
