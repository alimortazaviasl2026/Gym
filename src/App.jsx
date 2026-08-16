import "bootstrap/dist/css/bootstrap.min.css"
import React, { Fragment, useEffect, useRef, useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router'
import router from './Routes'
import { BiRocket } from "react-icons/bi"

function App() {
  const cursurRef = useRef()
  const [positionCursur , setPositonCursur] = useState()


  
  


  return (
   <Fragment>
     
        <RouterProvider router={router}/>
   </Fragment>
  )
}

export default App
