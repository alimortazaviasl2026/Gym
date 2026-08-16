import { createBrowserRouter } from "react-router";
import LayoutGym from "./layouts/LayoutGym";
import React from "react";
import Home from "./pages/home/Page";
import NotFound from "./components/common/NotFound";

const router = createBrowserRouter([
    {
      path:'/',
      element:<LayoutGym/>,
      children:[
        {
          index: true,
          element:<Home/>
        },
        {
          path:'programs',
          element:<div>programs</div>
        },
        {
         path:'coaching',
          element:<div>coachs</div>
        },
        {
         path:'/*',
          element:<NotFound/>
        },
      ]
    },
    {
        path:'/login' ,
        element:<div>login</div>
    }
])

export default router