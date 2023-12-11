import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import AdminLogin from "../AdminPages/AdminLogin";
import Admin from "../AdminPages/Admin";
import AdminAddProduct from "../Shared/Admin/AdminAddProduct";
import AdminProducts from "../Shared/Admin/AdminProducts";




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
    element: <AdminLogin></AdminLogin>,
  },
  {
    path: "/adminproduct",
    element: <Admin></Admin>,
    loader: () => fetch(`http://localhost:5000/product`)
  },
  {
    path: "/adminproduct/adminaddproduct",
    element: <AdminAddProduct></AdminAddProduct>
  }
  
]);

export default router;