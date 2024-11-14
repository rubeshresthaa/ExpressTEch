import { useParams } from "react-router-dom";
import { imageUrl } from "../../constants/api_url";
import { useGetServiceByIDQuery } from "./serviceApi";

const ServicePage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetServiceByIDQuery(id);

  // Handle loading state
  if (isLoading) {
    return <p className="text-green-500 text-center">Loading...</p>;
  }

  // Handle error state
  if (error) {
    return <p className="text-red-500 text-center">Something went wrong.</p>;
  }

  // Handle no data found
  if (!data) {
    return <p className="text-red-500 text-center">Service not found.</p>;
  }

  // Construct the full image URL
  const fullImageUrl = `${imageUrl}${data.data.image}`;

  return (
    <div className="min-h-screen bg-[#121212] text-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
        {/* Image Section */}
        <img
          src={fullImageUrl}
          alt={data.data.title}
          className="w-full h-64 md:h-80 object-cover rounded-t-xl transform transition-transform duration-500 ease-in-out"
        />
        
        <div className="p-6 md:p-10">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-green-500 mb-4 text-center hover:text-white transition-colors duration-300 ease-in-out">
            {data.data.title}
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify">
            {data.data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
