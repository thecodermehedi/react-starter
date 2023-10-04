import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./../layouts/MainLayout";
import Errorpage from "../pages/Error/Errorpage";
import Homepage from "./../pages/Home/Homepage";
import Loginpage from "./../pages/Login/Loginpage";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Loginpage />,
      },
    ],
  },
]);

export default routes;
