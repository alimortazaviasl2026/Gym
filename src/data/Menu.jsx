import { BiData, BiHome, BiNote, BiPhone } from "react-icons/bi";
import React from "react";
const Menu = {
    id:1000,
    title:'MenuTopBar',
    items:[
        {
         id:1 ,
         tabName:'Home',
         icon:<BiHome/>,
         nav:'/'
        },
        {
         id:2 ,
         tabName:'Programs',
         icon:<BiNote/>,
         nav:'/Programs'
        },
        {
         id:3 ,
         tabName:'coaching',
         icon:<BiData/>,
         nav:'/coaching'
        },
        {
         id:4 ,
         tabName:'contact',
         icon:<BiPhone/>,
         nav:'/contact'
        },
        {
         id:5 ,
         tabName:'about',
         icon:<BiData/>,
         nav:'/about'
        },
    ]
}

export default Menu