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
import Estatelist from './components/Estatelist/Estatelist';
import Privetroot from './components/Privertroot/Privetroot';
import { HelmetProvider } from 'react-helmet-async';
import Error from './components/Error/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[{
      path:'/',
      element:<Home></Home>,
      loader: () => fetch('../estate.json')
    },
   { path:"/Update Profile",
    element:<UpdateProfile></UpdateProfile>,},
   { path:"/DetailsPage/:id",
    element:<Privetroot><Detailspage></Detailspage></Privetroot>,
    loader: () => fetch('../estate.json')},
   { path:"/Estatedlist",
    element:<Estatelist></Estatelist>,
    loader: () => fetch('../estate.json')},
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
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  
   </Authprovider>
  </React.StrictMode>,
)
