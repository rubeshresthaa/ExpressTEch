import React from "react";
import { imageUrl } from "../../constants/api_url";
import { useNavigate } from "react-router-dom";

const Card = React.memo(({ service: { _id, title, image, description } }) => {
  const nav=useNavigate()
  return (
    <div className="max-w-xs bg-[#1E1E1E] overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out h-[400px] w-full flex flex-col justify-between rounded-lg border border-[#333] hover:scale-105" onClick={()=>nav(`/service-detail/${_id}`)}>
      {/* Image Section */}
      <div className="relative flex-grow">
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src={`${imageUrl}${image}`}
          alt="Card Image"
          loading="lazy" // Improves performance for large datasets
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between">
        <h2 className="text-xl font-semibold text-white mb-3 text-center">{title}</h2>
        <p className="text-gray-300 text-sm mb-4 text-justify leading-relaxed">
          {description.length > 100 ? description.substring(0, 100) + "..." : description}
        </p>
      </div>
    </div>
  );
});

export default Card;
