import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './com/Home/Home.jsx';

import About from './com/About/About.jsx';
import COntact from './com/COntact/COntact.jsx';
import User from './com/User/User.jsx';
import Detail from './com/Detail/Detail.jsx';
import Rechart from './com/Rechart/Rechart.jsx';
import Error from './com/Error\'/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement : <Error></Error>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <COntact></COntact>
      },
      
      {
        path: '/user',
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>
      },
      {
        path: '/rechart',
        element: <Rechart></Rechart>
      },
      {
        path: '/user/:userId',
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        element: <Detail></Detail>
      },

    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
