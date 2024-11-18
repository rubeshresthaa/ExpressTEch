import React from 'react';
import { useGetServiceQuery, useRemoveServiceMutation } from '../../Features/OurService/serviceApi';
import { toast } from 'react-toastify';
import SideBar from './SideBar';

const ServiceAdmin = () => {
  const { data: services, refetch } = useGetServiceQuery();
  const [removeService] = useRemoveServiceMutation();

  const handleDelete = async (id) => {
    try {
      await removeService({ id }).unwrap();
      toast.success('Service removed successfully');
      refetch();
    } catch (err) {
      toast.error('Failed to remove service');
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar with right margin */}
      <div className="md:w-1/5 p-4 md:mr-6 mb-6 md:mb-0">
        <SideBar />
      </div>

      {/* Main Content with margin on left */}
      <div className="bg-gray-900 p-6 flex-1">
        <h1 className="text-2xl font-bold text-green-400 mb-6">Service Management</h1>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          {services?.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-300">
                <thead>
                  <tr>
                    <th className="border-b border-gray-700 py-2 text-sm md:text-base">Title</th>
                    <th className="border-b border-gray-700 py-2 text-sm md:text-base">Description</th>
                    <th className="border-b border-gray-700 py-2 text-sm md:text-base">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service._id} className="hover:bg-gray-700">
                      <td className="border-b border-gray-700 py-2">{service.title}</td>
                      <td className="border-b border-gray-700 py-2">{service.description}</td>
                      <td className="border-b border-gray-700 py-2">
                        <button
                          onClick={() => handleDelete(service._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm md:text-base"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-400">No Service Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceAdmin;
