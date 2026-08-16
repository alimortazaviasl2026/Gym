import React from 'react'

function DetailCard({title , value , id , text}) {
  return (
    <div className='detailCard position-relative p-2 '>
    <div className='d-flex gap-1 align-items-center'>
         <span className='display-6 fw-bold' style={{color:'var(--orangeNormal)'}}>
             {
               value
             }
         </span>
         
        <span className='text-light'>
              {
            title
         }
        </span>
    </div>
    <p className='my-2'style={{color:'var(--grayText) ',fontSize:'13px'}}>
        {
            text
        }
    </p>
    </div>
  )
}

export default DetailCard
