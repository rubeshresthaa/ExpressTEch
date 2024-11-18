import Team from "./Team";

const Customers = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-24 space-y-12 bg-gray-900">
      {/* Clients Section */}
      <div className="text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold underline decoration-light-green-900 underline-offset-8">
          Our Clients
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-3 px-4 md:px-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque perferendis hic voluptatibus impedit eos debitis sint quia nisi quod sit!
        </p>
        
        {/* Client Logos Section */}
        <div className="grid grid-cols-2 px-10 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
          {/* Placeholder for client logos */}
          <div className="flex justify-center items-center bg-gray-800 p-4 rounded-md shadow-lg">
            <p className="text-xl text-white">Client 1</p>
          </div>
          <div className="flex justify-center items-center bg-gray-800 p-4 rounded-md shadow-lg">
            <p className="text-xl text-white">Client 2</p>
          </div>
          <div className="flex justify-center items-center bg-gray-800 p-4 rounded-md shadow-lg">
            <p className="text-xl text-white">Client 3</p>
          </div>
          <div className="flex justify-center items-center bg-gray-800 p-4 rounded-md shadow-lg">
            <p className="text-xl text-white">Client 4</p>
          </div>
          <div className="flex justify-center items-center bg-gray-800 p-4 rounded-md shadow-lg">
            <p className="text-xl text-white">Client 5</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold underline decoration-light-green-900 underline-offset-8">
          Our Team
        </h1>

        <div className="grid grid-cols-1 px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 mb-12 md:px-10">
          {/* Add your Team components here */}
          <Team />
          <Team />
          <Team />
          <Team />
        </div>
      </div>
    </div>
  );
};

export default Customers;
