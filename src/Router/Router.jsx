import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomeMain from "../Pages/Home/HomeMain/HomeMain";
import AddService from "../Pages/AddService/AddService/AddService";
import CheckOut from "../Pages/CheckOut/CheckOut/CheckOut";
import LogMain from "../Pages/Login & Registration/Login/LoginMain/LogMain";
import RegistrationMain from "../Pages/Login & Registration/Registration/RegistrationMain/RegistrationMain";
import ContactMain from "../Pages/Contact/ContactMain/ContactMain";
import ProductsMain from "../Pages/Products/ProductsMain/ProductsMain";

const router = createBrowserRouter([
  {
    path: "/",
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
  }
]);

export default router;