import Team from "./Team"

const Customers = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-24 space-y-5">
      <h1 className="text-3xl text-[#FFFFFF] font-bold underline decoration-light-green-900 underline-offset-[20px]">Our Clients</h1>
      {/* <div className="mx-auto w-32 h-1 my-3 bg-[#30e130]">
      </div> */}
      <p className="text-xl text-justify text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque perferendis hic voluptatibus impedit eos debitis sint quia nisi quod sit!</p>
      <div className="grid grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-2">
        <p>interest logo/Name here</p>
      </div>

      <h1 className="text-3xl text-[#FFFFFF] font-bold underline decoration-light-green-900 underline-offset-[20px]">Our Team</h1>
      <div className="grid grid-cols-4 md:grid-cols-2 gap-4 mb-4">
        <Team />
        <Team />
        <Team />
        <Team /> 
        
      </div>
    </div>
  )
}
export default Customers