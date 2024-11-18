import Card from "./Card";
import { useGetServiceQuery } from "./serviceApi";

const Service = () => {
  const { data } = useGetServiceQuery();

  return (
    <div className="mb-28 px-4 md:px-20">
      {/* Title Section */}
      <div className="flex flex-col justify-center items-center pt-16 gap-y-4 text-[#FFFFFF] my-8">
        <h1 className="text-4xl font-semibold text-center text-green-500">Our Services</h1>
        <h2 className="font-medium text-center text-xl text-gray-300 max-w-3xl">
          Welcome to Express Tech, where innovation meets excellence. We provide top-tier tech solutions
          that help your business grow and thrive in the digital age.
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2">
        {data && data.slice(0, 4).map((service) => (
          <Card key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
