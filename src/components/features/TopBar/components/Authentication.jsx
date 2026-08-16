import React from 'react'

function Authentication() {
  return (
    <div className='d-flex gap-2 fw-light w-25'>
     <button className='btn btn-auth btn  rounded-3 w-50' style={{color:'var(--PureWhite)', backgroundColor:'var(--orangeDark)'}} >sign up</button>
     <button className='btn btn-auth btn-sm p-1   rounded-3 border-danger  w-50 ' style={{color:'var(--orangeNormal)'}}>Login</button>
    </div>
  )
}

export default Authentication
