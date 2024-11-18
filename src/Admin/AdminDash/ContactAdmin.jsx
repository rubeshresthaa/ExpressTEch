import React from 'react';
import { useDeleteContactMutation, useGetContactQuery } from '../../Features/Contact/contactApi';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import SideBar from './SideBar';

const ContactAdmin = () => {
  const { data: contacts, error, isLoading } = useGetContactQuery();
  const [deleteContact] = useDeleteContactMutation();
  const { user } = useSelector((state) => state.userSlice);

  // Loading and error handling
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading contacts</div>;

  const handleDelete = async (id) => {
    try {
      const token = user?.token;
      if (!token) {
        toast.error('You are not authorized');
        return;
      }
      await deleteContact({ id, token }).unwrap();
      toast.success('Successfully Deleted');
    } catch (err) {
      toast.error('Try Again!!');
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/5 p-4 mb-6 md:mb-0">
        <SideBar />
      </div>

      {/* Main Content */}
      <div id="contact" className="bg-gray-800 shadow-lg rounded-lg p-4 md:p-6 mt-4 flex-1 md:ml-6">
        
        <h2 className="text-xl font-bold text-green-400 mb-4">Contact Management</h2>

        {contacts?.length > 0 ? (
          <>
            {/* Table Layout for Desktop */}
            <div className="hidden md:block">
              <table className="w-full text-left text-gray-300">
                <thead>
                  <tr>
                    <th className="border-b border-gray-700 py-2 text-sm md:text-base">Full Name</th>
                    <th className="border-b border-gray-700 py-2 text-sm md:text-base">Email</th>
                    <th className="border-b border-gray-700 py-2 text-sm md:text-base">Phone No.</th>
                    <th className="border-b border-gray-700 py-2 text-sm md:text-base">Message</th>
                    <th className="border-b border-gray-700 py-2 text-sm md:text-base">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact._id} className="hover:bg-gray-700">
                      <td className="border-b border-gray-700 py-2">{contact.fullname}</td>
                      <td className="border-b border-gray-700 py-2">{contact.email}</td>
                      <td className="border-b border-gray-700 py-2">{contact.phone}</td>
                      <td className="border-b border-gray-700 py-2">{contact.message}</td>
                      <td className="border-b border-gray-700 py-2">
                        {user?.isAdmin && (
                          <button
                            onClick={() => handleDelete(contact._id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                          >
                            Delete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Layout for Contacts */}
            <div className="block md:hidden space-y-4">
              {contacts.map((contact) => (
                <div key={contact._id} className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="text-lg font-semibold text-white">{contact.fullname}</div>
                    <div className="text-sm text-gray-400">{contact.email}</div>
                  </div>
                  <div className="mt-2 text-sm text-gray-300">{contact.message}</div>
                  <div className="mt-2 flex justify-between items-center">
                    <div className="text-sm text-gray-500">{contact.phone}</div>
                    {user?.isAdmin && (
                      <button
                        onClick={() => handleDelete(contact._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-xs sm:text-sm"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-400">No Contacts Found</p>
        )}
      </div>
    </div>
  );
};

export default ContactAdmin;
