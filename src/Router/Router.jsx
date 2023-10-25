import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddService from "../Pages/AddService/AddService/AddService";
import CheckOut from "../Pages/CheckOut/CheckOut/CheckOut";
import LogMain from "../Pages/Login & Registration/Login/LoginMain/LogMain";
import RegistrationMain from "../Pages/Login & Registration/Registration/RegistrationMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
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