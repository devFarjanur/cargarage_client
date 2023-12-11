import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Products from "../Pages/Products";
import Contact from "../Pages/Contact";
import AdminLogin from "../AdminPages/AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
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
  },
  {
    path: "/admin",
    element: <AdminLogin></AdminLogin>
  }
]);

export default router;