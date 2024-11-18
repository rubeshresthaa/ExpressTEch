import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';






const RootLayout = () => {
  const location = useLocation();
  return (
    <div>
      {!['/admin-dashboard', '/service-admin', '/contact-admin','/add-servicepage','/login'].includes(location.pathname) && <Header />}
     
      
      
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