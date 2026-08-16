import React from 'react'

function HeadTitle({title , place , text , placeText}) {
  return (
    <div className={`my-5`}>
    <div className={`fw-bolder ${place || 'text-center'} `}>
          <span className='text-light display-6'>
         {
           title.word1 
         }
     </span>
     <span className='display-6' style={{color:'var(--orangeDark)'}}>
         {
title.word2
         }
     </span>
    </div>
     <p className={`text-light ${placeText || 'text-center'} grayText my-2 fw-light `}>
       <i> {
            text
        }</i>
     </p>
    </div>
  )
}

export default HeadTitle
