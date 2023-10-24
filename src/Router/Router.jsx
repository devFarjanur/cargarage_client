import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddService from "../Pages/AddService/AddService/AddService";
import CheckOut from "../Pages/CheckOut/CheckOut/CheckOut";

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
  }
]);

export default router;