import { useSelector } from "react-redux";
import { useGetServiceQuery, useRemoveServiceMutation } from "../Features/OurService/serviceApi";
import { userSlice } from "../Features/Auth/userSlice";


const ServiceList = () => {
  const { data: services, isLoading, error } = useGetServiceQuery();
  const [removeService] = useRemoveServiceMutation();
  const {user}=useSelector((state)=>userSlice.state);

  // const handleDelete = (id) => {
  //   // Make sure to pass the id and token
  //   removeService({ id, token })
  //     .unwrap()
  //     .then(() => {
  //       console.log("Service deleted successfully");
  //     })
  //     .catch((error) => {
  //       console.log("Error deleting service: ", error);
  //     });
  // };

  if (isLoading) {
    return <p className="text-green-500 text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">Something went wrong.</p>;
  }

  return (
    <div className="overflow-x-auto bg-[#1a1a1a] p-4 rounded-lg shadow-lg">
      <table className="w-full table-auto text-gray-300">
        <thead>
          <tr>
            <th className="p-3 text-left">Service Name</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {services?.map((service) => (
            <tr key={service._id} className="transition-transform hover:scale-105">
              <td className="p-3">{service.title}</td>
              <td className="p-3">{service.description}</td>
              <td className="p-3">
                <button
                  onClick={() => handleDelete(service._id)}
                  className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceList;
