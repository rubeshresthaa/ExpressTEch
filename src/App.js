import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Ui/RootLayout";
import Serivce from "./Features/OurService/Serivce";
import DashBoard from "./Features/Dashboard/DashBoard";
import Contact from "./Features/Contact/Contact";
import AboutPage from "./Features/About Us/AboutPage";
import Login from "./Features/Auth/Login";
import ServicePage from "./Features/OurService/ServicePage";
import AdminDashBoard from "./Admin/AdminDashBoard";



function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<RootLayout />,
    children:[
      {
       index:true,
       element:<DashBoard />
    },
    {
      path:'service',
      element:<Serivce />
    },
    {
      path:'contact',
      element:<Contact />
    },
    {
      path:'about',
      element:<AboutPage />
    },
    {
      path:'login',
      element:<Login />
    },
    {
      path:'service-detail/:id',
      element:<ServicePage />
    },
    {
      path:'admin-dashboard',
      element:<AdminDashBoard />
    }
  ]
  }])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
