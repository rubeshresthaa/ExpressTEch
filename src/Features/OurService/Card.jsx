const Card = () => {
  return (
    <div className="max-w-xs bg-[#202124] overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      {/* Image Section */}
      <div className="relative">
        <img
          className="w-full h-48 object-fill border-none"
          src="https://via.placeholder.com/400x300" //
          alt="Card Image"
        />
        
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-[#FFFFFF] mb-2 text-center">Card Title</h2>
        <p className="text-gray-300 text-sm mb-4 text-justify">
          This is a brief description of the card content. It should be concise and give the reader a quick summary.
        </p>
        
      </div>
    </div>
  );
};

export default Card;
