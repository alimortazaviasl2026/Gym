import React, { useReducer, useState } from 'react'
import { BiText, BiUser } from 'react-icons/bi'
import useInput from '../../../../hooks/useInpu'
import userReducer from '../../../../reducers/userReducer'
import { USER_EMAIL , USER_PASSWORD } from '../../../../actions/userActions'

function Login() {
    
   const [user , disPatch] = useReducer(userReducer , {email : 'sara' , password :'10000'})
   // const [email , setEmail] = useState('ali')
   // const email = useInput('ali')


const result = () => {
   alert(`you logged in successfully by (${user.email})(${user.password})`)
}


  return (
    <>
       <div className='form_anime'>
        <div className='position-relative text-light  '>
           <label htmlFor="" className='form-lable  my-2'>Email</label>
            <input value={user.email} onChange={(e)=> disPatch({type:USER_EMAIL, payLoad:e.target.value})}
           
             
             type="Email" 
                className='form-control px-4 bg-transparent text-light' />
            <BiUser color='white' size={20} style={{position:'absolute' , top:'50px' , left:'5px'}}/>
          </div>
        
          <div className='position-relative text-light'>
           <label htmlFor="" className='form-lable  my-2'>password</label>
            <input value={user.password} onChange={(e)=> disPatch({type:USER_PASSWORD ,payLoad:e.target.value })} type="password"   className='form-control px-4 bg-transparent text-warning ' />
             <BiText color='white' size={20} style={{position:'absolute' , top:'50px' , left:'5px'}}/>
          </div>
      
          <div className='my-3'>
             <button onClick={result} className='btn btn-danger btn-sm rounded-1 w-100' style={{backgroundColor:'var(--orangeDark)'}}>
                login
             </button>
             </div>
       </div>
    </>
  )
}

export default Login
