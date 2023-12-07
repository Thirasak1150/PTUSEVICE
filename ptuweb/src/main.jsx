import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./login.jsx";
import Homecus from "./component/Homecunstomer.jsx";
import Homeemployee from "./component/Homeemployee.jsx";
import Sign from "./Sign.jsx";
import Homeadmin from "./component/Homeadmin.jsx";
import ProfileC from "./component/ProfileC.jsx";
import "bootstrap/dist/css/bootstrap.css";
import Status from "./component/Status.jsx";
import SeviceE from "./component/Employee/SeviceE.jsx";
import Reservetionc from "./component/reserC/Reservetionc.jsx";
import Serviceall from "./component/Employee/Serviceall.jsx";
import Checkservice from "./component/Employee/Checkservice.jsx";
import Readresevesion from "./component/Employee/Readresevesion.jsx";
import Servicereservetion from "./component/Employee/Sevicereservetion.jsx";
import ReservetionE from "./component/Employee/ReservetionE.jsx";
import ProfileE from "./component/Employee/ProfileE.jsx";
// import SeviceE from "./component/Employee/SeviceE.jsx";
// import Updatestatus from "./component/Employee/Updatestatus.jsx";
// import ReservetionE from "./component/Employee/ReservetionE.jsx";
// import ReservetionShow from "./component/Employee/ReservetionShow.jsx";

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
    path: "/SeviceE",
    element: <SeviceE />,
  },
  {
    path: "/SeviceE/:id",
    element: <SeviceE />,
  },
  {
    path: "/Reservetionc/:id",
    element: <Reservetionc />,
  }
  ,
  {
    path: "/Serviceall/:id",
    element: <Serviceall />,
  },
  {
    path: "/Serviceall/:id/:Em",
    element: <Serviceall />,
  },
  {
    path: "/Serviceall",
    element: <Serviceall />,
  }
  ,
  {
    path: "/Checkservice",
    element: <Checkservice />,
  } ,
  {
    path: "/Readresevesion/:id",
    element: <Readresevesion />,
  },
  {
    path: "/Servicereservetion/:id/:Em",
    element: <Servicereservetion/>,
  },
  {
    path: "/ReservetionE/:id",
    element: <ReservetionE/>,
  },
  {
    path: "/ProfileE/:id",
    element: <ProfileE/>,
  }
  // {
  //   path: "/SeviceE/:id",
  //   element: <SeviceE />,
  // },
  // {
  //   path: "/Updatestatus",
  //   element: <Updatestatus />,
  // },
  // {
  //   path: "/ReservetionE",
  //   element: <ReservetionE />,
  // },
  // {
  //   path: "/ProfileE/:id",
  //   element: <ProfileE />,
  // },
  // {
  //   path: "/ReservetionShow",
  //   element: <ReservetionShow />,
  // },
  // {
  //   path: "/Editsevice",
  //   element: <Editsevice />,
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
