import { useDeleteContactMutation, useGetContactQuery } from "../Features/Contact/contactApi";

const ContactList = () => {
  const { data: contacts, isLoading, error } = useGetContactQuery();
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = (id) => {
    deleteContact(id);
  };

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
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone No.</th>
            <th className="p-3 text-left">Message</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact) => (
            <tr key={contact._id} className="transition-transform hover:scale-105">
              <td className="p-3">{contact.name}</td>
              <td className="p-3">{contact.email}</td>
              <td className="p-3">{contact.phone}</td>
              <td className="p-3">{contact.message}</td>
              <td className="p-3">
                <button
                  onClick={() => handleDelete(contact._id)}
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

export default ContactList;
