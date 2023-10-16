import React from "react";
import ReactDOM from "react-dom/client";
import {HelmetProvider} from "react-helmet-async";
import "./assets/css/index.css";
import {RouterProvider} from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Routes from './routes/Routes';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={Routes} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
