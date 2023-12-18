import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import AdminLogin from "../AdminPages/AdminLogin";
import AdminAddProduct from "../Shared/Admin/AdminAddProduct";
import AdminMainProduct from "../AdminPages/AdminMainProduct";
import AdminMainService from "../AdminPages/AdminMainService";
import AdminAddService from "../Shared/Admin/AdminAddService";




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
    path: "https://main--cargareg.netlify.app/admin",
    element: <AdminLogin></AdminLogin>,
  },
  {
    path: "/adminproduct",
    element: <AdminMainProduct></AdminMainProduct>,
    loader: () => fetch(`http://localhost:5000/product`)
  },
  {
    path: "/adminproduct/adminaddproduct",
    element: <AdminAddProduct></AdminAddProduct>
  },
  {
    path:"/adminservice",
    element: <AdminMainService></AdminMainService>,
    loader: () => fetch(`http://localhost:5000/service`)
  },
  {
    path: "/adminservice/adminaddservice",
    element: <AdminAddService></AdminAddService>
  }
]);

export default router;