import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        closeOnClick={true}
        pauseOnHover={false}
      />
      <Footer />
     
    </div>
  )
}
export default RootLayout