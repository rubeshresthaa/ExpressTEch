
import About from "../About Us/About"
import Customers from "../Customers.jsx/Customers"
import Serivce from "../OurService/Serivce"
import Main from "./Main"

const DashBoard = () => {
  return (
    <div>
      <Main />
      <Serivce />
      <hr />
      <About />
      <hr className="text-black" />
      <Customers />
     
    </div>
  )
}
export default DashBoard