import { useNavigate} from "react-router-dom";
import { imageUrl } from "../../constants/api_url";

const Card = ({service:{_id,title,image,description}}) => {
 
const nav=useNavigate();

  
  return (
    <div className="max-w-xs bg-[#202124] overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      {/* Image Section */}
      <div className="relative" onClick={()=>nav(`/service-detail/${_id}`)}>
        <img
          className="w-full h-48 object-fill border-none bg-transparent"
          src={`${imageUrl}${image}`} //
          alt="Card Image"
        />
        
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-[#FFFFFF] mb-2 text-center">{title}</h2>
        <p className="text-gray-300 text-sm mb-4 text-justify">
          {description}
        </p>
        
      </div>
    </div>
  );
};

export default Card;
