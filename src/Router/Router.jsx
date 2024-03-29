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
import SingleProduct from "../Shared/Product/SingleProduct";
import AdminSingleProduct from "../Shared/Admin/AdminSingleProduct";
import SingleService from "../Shared/Service/SingleService";
import ProductMainCart from "../Pages/ProductMainCart";





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
    element: <Products></Products>,
    loader: () => fetch(`https://cargarage.onrender.com/product`)
  },
  {
    path: "/cart",
    element: <ProductMainCart></ProductMainCart>
  },
  {
    path: "/product/singleproduct/:id",
    element: <SingleProduct></SingleProduct>,
    loader: ({params}) => fetch(`https://cargarage.onrender.com/product/${params.id}`)
  },
  {
    path: "/service",
    element: <Services></Services>,
    loader: () => fetch(`https://cargarage.onrender.com/service`)
  },
  {
    path: "/service/singleservice/:id",
    element: <SingleService></SingleService>,
    loader: ({params}) => fetch(`https://cargarage.onrender.com/service/${params.id}`)
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
    path: "/adminproduct/adminsingleproduct/:id",
    element: <AdminSingleProduct></AdminSingleProduct>,
    loader: ({params}) => fetch(`https://cargarage.onrender.com/product/${params.id}`)
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