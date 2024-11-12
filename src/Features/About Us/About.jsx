const About = () => {
  return (
    <div className="px-24 py-32 space-y-10">
      <h1 className="text-3xl text-[#FFFFFF] font-bold text-center underline decoration-light-green-900 underline-offset-[20px]">About us</h1>
        
      <section className="grid grid-cols-2 md:grid-cols-1 px-10 gap-5 text-[#FFFFFF]">
        <div className="text-justify md:order-2">
          <h1 className="text-xl md:text-lg text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde obcaecati quis enim ea debitis iusto architecto doloribus ipsam, sit tenetur nam harum dolor consequuntur assumenda? Dolorum cupiditate nihil fugit libero velit, tempora, ullam est eligendi animi, explicabo quas ipsam sapiente? Numquam, est neque? Optio vel vero, atque at repudiandae similique.</h1>
        </div>
        <div className="md:order-1">
          <h1>Image Section Here</h1>
        </div>
      </section>

    </div>
  )
}
export default About