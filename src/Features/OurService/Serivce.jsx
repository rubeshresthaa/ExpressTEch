import { useNavigate } from "react-router-dom";
import Card from "./Card"
import { useGetServiceQuery } from "./serviceApi"

const Serivce = () => {
  const{data}=useGetServiceQuery();
  console.log(data)
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-4 pt-32 gap-y-2 text-[#FFFFFF]">
      <h1 className="text-4xl font-bold">Our Service</h1>
      <h2 className="font-medium">Welcome To Express Tech</h2>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-2 px-20 md:gap-2 " >
      {data && data.slice(0,4).map((service)=>(<Card key={service.id} service={service}  />))}
        
        
      </div>
      
    </div>
  )
}
export default Serivce