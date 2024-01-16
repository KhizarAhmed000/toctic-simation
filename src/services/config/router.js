import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Layout from "../../pages/Layout";
import Downloads from "../../pages/Downloads";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                // path:'/Home',
                element:<Home/>,
            },
            {
                path:`/About`,
                element:<About/>,
            },
            {
                path:`/Downloads`,
                element:<Downloads/>,
            }
        ]
    },
])

const Routing = () => {
    return <RouterProvider router={router} />;
  };
  
  export default Routing;