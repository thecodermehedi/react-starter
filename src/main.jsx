import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {createBrowserRouter} from "react-router-dom";
import "./assets/css/index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>root</div>,
    errorElement: <div>error</div>,
    children: [
      {
        path: "/",
        element: <div>home</div>,
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
      {
        path: "/contact",
        element: <div>contact</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
