import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./../layouts/MainLayout";
import App from "./../App";
import Login from "../pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default routes;
