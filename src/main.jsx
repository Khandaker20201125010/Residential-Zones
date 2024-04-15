import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Pages/Main/Main';
import Home from './components/Home/Home';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import Detailspage from './components/DetailsPage/Detailspage';
import UserProfile from './components/UserProfile/UserProfile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path:'/',
      element:<Home></Home>,
    },
   { path:"/Update Prfile",
    element:<UpdateProfile></UpdateProfile>,},
   { path:"/DetailsPage",
    element:<Detailspage></Detailspage>,},
   { path:"/UserProfile",
    element:<UserProfile></UserProfile>,}
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
