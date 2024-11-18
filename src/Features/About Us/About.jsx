const About = () => {
  return (
    <div className="px-4 md:px-24 py-16 space-y-12 bg-gray-900">
      {/* Title Section */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white underline decoration-light-green-900 underline-offset-8">
        About Us
      </h1>

      {/* Content Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 text-white text-justify">
        
        {/* Text Content */}
        <div className="flex flex-col justify-center space-y-4 order-2 md:order-1">
          <h2 className="text-xl md:text-lg text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde obcaecati quis enim ea debitis iusto
            architecto doloribus ipsam, sit tenetur nam harum dolor consequuntur assumenda? Dolorum cupiditate nihil
            fugit libero velit, tempora, ullam est eligendi animi, explicabo quas ipsam sapiente? Numquam, est neque?
            Optio vel vero, atque at repudiandae similique.
          </h2>
          <p className="text-lg md:text-base text-gray-400 leading-relaxed">
            At Express Tech, we specialize in providing cutting-edge solutions tailored to your needs. Our team of
            professionals is dedicated to ensuring the highest quality service with a focus on innovation and excellence.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center bg-cover bg-center rounded-lg shadow-lg order-1 md:order-2">
          <img 
            src="https://via.placeholder.com/500" // Replace with your image URL
            alt="About Us"
            className="w-full h-64 md:h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
