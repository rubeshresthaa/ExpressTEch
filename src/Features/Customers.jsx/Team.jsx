const Team = () => {
  return (
    <div className="max-w-xs bg-[#202124] overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out mt-5 hover:shadow-xl hover:scale-105">
      {/* Image Section */}
      <div className="relative">
        <img
          className="w-full h-56 md:h-64 object-cover rounded-t-lg"
          src="https://via.placeholder.com/400x300"
          alt="Card Image"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-[#FFFFFF] mb-2 text-center hover:text-teal-500 transition-colors">
          Card Title
        </h2>
        <p className="text-gray-300 text-sm mb-4 text-justify">
          This is a brief description of the card content. It should be concise and give the reader a quick summary.
        </p>
      
      </div>
    </div>
  );
};

export default Team;
