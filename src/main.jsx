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
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Authprovider from './components/Providers/Authprovider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path:'/',
      element:<Home></Home>,
      loader: () => fetch('estate.json')
    },
   { path:"/Update Prfile",
    element:<UpdateProfile></UpdateProfile>,},
   { path:"/DetailsPage",
    element:<Detailspage></Detailspage>,},
   { path:"/UserProfile",
    element:<UserProfile></UserProfile>,},
   { path:"/Login",
    element:<Login></Login>,},
   { path:"/register",
    element:<Register></Register>,}
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
  </React.StrictMode>,
)
