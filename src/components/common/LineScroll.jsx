import React from 'react'

function LineScroll({width}) {

  
  return (
    <div style={{width:width , height:'3px' , backgroundColor:'var(--orangeNormal)'}} className={`position-fixed lineGradient top-0 start-0 `} ></div>
  )
}

export default LineScroll
