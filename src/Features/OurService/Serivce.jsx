import Card from "./Card"

const Serivce = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-4 pt-32 gap-y-2 text-[#FFFFFF]">
      <h1 className="text-4xl font-bold">Our Service</h1>
      <h2 className="font-medium">Welcome To Express Tech</h2>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-2 px-20 md:gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      
    </div>
  )
}
export default Serivce