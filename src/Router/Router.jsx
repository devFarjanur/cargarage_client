import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD

import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Products from "../Pages/Products";
import Contact from "../Pages/Contact";
import AdminLogin from "../AdminPages/AdminLogin";
=======
import Main from "../Layout/Main";
import HomeMain from "../Pages/Home/HomeMain/HomeMain";
import AddService from "../Pages/AddService/AddService/AddService";
import CheckOut from "../Pages/CheckOut/CheckOut/CheckOut";
import LogMain from "../Pages/Login & Registration/Login/LoginMain/LogMain";
import RegistrationMain from "../Pages/Login & Registration/Registration/RegistrationMain/RegistrationMain";
import ContactMain from "../Pages/Contact/ContactMain/ContactMain";
import ProductsMain from "../Pages/Products/ProductsMain/ProductsMain";
import AdminLogin from "../AdminPage/AdminLogin/AdminLogin";
import AdminAddProduct from "../AdminPage/AdminProduct/AdminAddProduct/AdminAddProduct";
import AdminProducts from "../AdminPage/AdminProduct/AdminProducts/AdminProducts";
>>>>>>> 0c0b412165a73a1218982b2d188ac4a5fcc7c3dc

const router = createBrowserRouter([
  {
    path: "/",
<<<<<<< HEAD
    element: <Home></Home>
  },
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/services",
    element: <Services></Services>
  },
  {
    path: "/products",
    element: <Products></Products>
  },
  {
    path: "/contact",
    element: <Contact></Contact>
=======
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomeMain></HomeMain>
      }
    ]
  },
  {
    path: "/products",
    element: <ProductsMain></ProductsMain>
  },
  {
    path: "/contact",
    element: <ContactMain></ContactMain>
  },
  {
    path: "/addService",
    element: <AddService></AddService>
  },
  {
    path: "/checkOut",
    element: <CheckOut></CheckOut>
  },
  {
    path: "/logIN",
    element: <LogMain></LogMain>
  },
  {
    path: "/registration",
    element: <RegistrationMain></RegistrationMain>
>>>>>>> 0c0b412165a73a1218982b2d188ac4a5fcc7c3dc
  },
  {
    path: "/admin",
    element: <AdminLogin></AdminLogin>
<<<<<<< HEAD
=======
  },
  {
    path: "/adminProducts",
    element: <AdminProducts></AdminProducts>
  },
  {
    path: "/adminProducts/addProduct",
    element: <AdminAddProduct></AdminAddProduct>
>>>>>>> 0c0b412165a73a1218982b2d188ac4a5fcc7c3dc
  }
]);

export default router;