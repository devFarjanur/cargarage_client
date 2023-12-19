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
import LoginForm from "../Shared/LoginForm";
import RegistrationForm from "../Shared/RegistrationForm";






const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch(`https://cargarage.onrender.com/product`)
  },

  // {
  //   path: "/homeservices",
  //   element: <HomeServices></HomeServices>,
  //   loader: () => fetch(`https://cargarage.onrender.com/service`)
  // },
  // {
  //   path: "/homeproducts",
  //   element: <HomeProducts></HomeProducts>,
  //   loader: () => fetch(`https://cargarage.onrender.com/product`)
  // },
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
    path: "/login",
    element: <LoginForm></LoginForm>
  },
  {
    path: "/registration",
    element: <RegistrationForm></RegistrationForm>
  },
  {
    path: "/admin",
    element: <AdminLogin></AdminLogin>,
  },
  {
    path: "/adminproduct",
    element: <AdminMainProduct></AdminMainProduct>,
    loader: () => fetch(`https://cargarage.onrender.com/product`)
  },
  {
    path: "/adminproduct/adminaddproduct",
    element: <AdminAddProduct></AdminAddProduct>
  },
  {
    path: "/adminservice",
    element: <AdminMainService></AdminMainService>,
    loader: () => fetch(`https://cargarage.onrender.com/service`)
  },
  {
    path: "/adminservice/adminaddservice",
    element: <AdminAddService></AdminAddService>
  }
]);

export default router;