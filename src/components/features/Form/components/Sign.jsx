import React from 'react'
import { BiText, BiUser } from 'react-icons/bi'

function Sign() {
  return (
   <>
    <div className='form_anime'>
      <div className='position-relative text-light '>
     <label htmlFor="" className='form-lable  my-2'>Name</label>
      <input type="text"  className='form-control px-4 bg-transparent ' />
      <BiUser color='white' size={20} style={{position:'absolute' , top:'50px' , left:'5px'}}/>
    </div>
  
    <div className='position-relative text-light'>
     <label htmlFor="" className='form-lable  my-2'>E-Mail</label>
      <input type="Email"  className='form-control px-4 bg-transparent ' />
       <BiText color='white' size={20} style={{position:'absolute' , top:'50px' , left:'5px'}}/>
    </div>

    <div className='my-2'>
       <button className='btn btn-danger btn-sm rounded-1 w-100' style={{backgroundColor:'var(--orangeDark)'}}>
           sign Up
       </button>
        <div className=' text-light my-2 text-center'>
          
         <span>or</span>
        
        </div>

        <button className='btn btn-outline-light d-flex justify-content-center gap-1 btn-sm w-100'><img src="public/devicon_google.png" alt="" />sign Up with google</button>
    </div>
    </div>
   </>
  )
}

export default Sign
