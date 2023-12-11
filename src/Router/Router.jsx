import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import AdminLogin from "../AdminPages/AdminLogin";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/product",
    element: <Products></Products>
  },
  {
    path: "/service",
    element: <Services></Services>
  },
  {
    path: "/contact",
    element: <Contact></Contact>
  },
  {
    path: "/admin",
    element: <AdminLogin></AdminLogin>
  }
  
]);

export default router;