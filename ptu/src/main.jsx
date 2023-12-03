import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import { Sevice } from './Components/Sevice.jsx'
import Login from './Components/Login.jsx'
import Sign from './Components/Sign.jsx'
import Showdatabase from './Components/Showdatabase.jsx'
import Eiei from './Components/Eiei.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/Contact",
    element:<Contact/>
  },
  {
    path:"/Sevice",
    element:<Sevice/>
  },
  {
    path:"/Login",
    element:<Login/>    
  },
  {
    path:"/Sign",
    element:<Sign/>
  },
  {
    path:"/Showdatabase",
    element:<Showdatabase/>
  },
  {
    path:"/edit/:id",
    element:<Eiei/>
  }
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
