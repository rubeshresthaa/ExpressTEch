import React from 'react';
import SideBar from './SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { useGetServiceQuery } from '../../Features/OurService/serviceApi';
import { useGetContactQuery } from '../../Features/Contact/contactApi';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../../Features/Auth/userSlice';

const AdminDashBoard = () => {
  const { user } = useSelector((state) => state.userSlice);
  const { data: services } = useGetServiceQuery();
  const { data: contacts } = useGetContactQuery();
  const nav = useNavigate();
  const dispatch=useDispatch()

  const handleSignOut = () => {
    dispatch(removeUser());
    nav('/login');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-1/5 bg-black shadow-lg p-4 md:sticky top-0">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Logout Button */}
        <div className="flex justify-end md:p-6 p-4 bg-gradient-to-r from-black to-gray-900">
          <button
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 active:scale-95 uppercase text-sm"
            onClick={handleSignOut}
          >
            Log Out
          </button>
        </div>

        {/* Dashboard Content */}
        <main className="flex-1 px-4 sm:px-6 md:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            
            <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <h2 className="text-xl font-bold text-green-400 mb-4">Service List</h2>
              {services?.slice(0, 5).map((service) => (
                <div key={service._id} className="mb-6 border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
              
              <button
                onClick={() => nav('/service-admin')}
                className="text-green-400 hover:underline"
              >
                View All Services
              </button>
            </div>

            {/* Top 5 Contacts */}
            <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <h2 className="text-xl font-bold text-green-400 mb-4">Contact List</h2>
              {contacts?.slice(0, 5).map((contact) => (
                <div key={contact._id} className="mb-6 border-b border-gray-700 pb-4">
                  <p>
                    <strong>{contact.fullname}</strong>: {contact.message}
                  </p>
                </div>
              ))}
              <button
                onClick={() => nav('/contact-admin')}
                className="text-green-400 hover:underline"
              >
                View All Contacts
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashBoard;
