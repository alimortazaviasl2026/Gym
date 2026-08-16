import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import LineScroll from '../components/common/LineScroll'

function LayoutGym() {


  const [width , setWidth] =  useState(0)

 const customScroll = () => {
  const userScroll = document.documentElement.scrollTop
  const bodyHeight = document.body.clientHeight
  const windowInner = window.innerHeight
  const width = Math.floor( userScroll / (bodyHeight - windowInner) * 100)
  setWidth(`${width}%`)
 }

window.addEventListener('scroll' , customScroll)





  return (
    <div className='layout_gym'>
       <LineScroll width={width}/>
       <Header/>
         <div>
              <Outlet/>
         </div>
       <Footer/>
    </div>
  )
}

export default LayoutGym
