import React, { useState } from 'react'
import Sign from './components/Sign'
import Login from './components/Login'

function Form() {

    const [FormType , setFormType] = useState('login')


  const changeForm = (value) => {
    setFormType(value)
  }

  return (
    <form onSubmit={()=> event.preventDefault()} className='form  p-3 rounded-3 bg-dark w-100'>
        <div className="FormHeader d-flex justify-content-center gap-2 ">
             <button className={`btn btn-sm border-danger ${FormType === "sign" &&'border-bottom border-3'}  text-light px-4  py-2  rounded-0 w-25 border-0`}  onClick={() => changeForm('sign')  }>sign Up </button>
             <button className={`btn btn-sm border-danger ${FormType === "login" &&'border-bottom border-3'}  text-light px-4  py-2 rounded-0 w-25 border-0`}  onClick={() => changeForm('login')  }>Login</button>
        </div>
        <section className='data'>
            {
                FormType === 'sign' ? <Sign/> :<Login/> 
            }
        </section>
    </form>
  )
}

export default Form
