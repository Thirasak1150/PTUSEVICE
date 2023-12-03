import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./login.jsx";
import Homecus from "./component/Homecunstomer.jsx";
import Homeemployee from "./component/Homeemployee.jsx";
import Sign from "./Sign.jsx";
import Homeadmin from "./component/Homeadmin.jsx";
import ProfileC from "./component/ProfileC.jsx";
import 'bootstrap/dist/css/bootstrap.css'
import Status from "./component/Status.jsx";
import Reservetionc from "./component/reserC/Reservetionc.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Homecustomer",
    element: <Homecus />,
  },
  {
    path: "/Homeemployee",
    element: <Homeemployee />,
  },
  {
    path: "/Homeadmin",
    element: <Homeadmin />,
  },
  {
    path: "/Signin",
    element: <Sign />,
  },
  {
    path: "/Homecustomer/:id",
    element: <Homecus />,
  },
  {
    path: "/Homeadmin/:id",
    element: <Homeadmin />,
  },
  {
    path: "/Homeemployee/:id",
    element: <Homeemployee />,
  },
  {
    path: "/ProfileC/:id",
    element: <ProfileC />,
  },
  {
    path: "/Status/:id",
    element: <Status />,
  },
  {
    path: "/Reservetionc/:id",
    element: <Reservetionc />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
