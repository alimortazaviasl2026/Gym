import React from 'react'
import Authentication from './components/Authentication'
import MenuTopBar from './components/MenuTopBar'
import Brand from './components/Brand'

function TopBar() {
  return (
    <div className='topBar navbar navbar-expand-lg  d-flex    justify-content-evenly  py-4   '>
              <Brand/>
                <button  className="btn btn-sm bg-light navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>

       </button>
           <div className="collapse navbar-collapse" id='navbarSupportedContent'>
       <MenuTopBar/>

      </div>
     
      {/* <Authentication/> */}
    
         
     
 
     
    </div>
  )
}

export default TopBar
