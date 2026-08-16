import React, { Activity, useEffect, useState } from 'react'
import HeadTitle from '../../common/HeadTitle'
import MonthPlans from './components/MonthPlans'
import YearsPlans from './components/YearsPlans'
import { CircleLoader, ClockLoader, HashLoader } from 'react-spinners'

function PlansContainer() {

   const [planType , setPlanType] = useState('monthly')


   const changePlan = () => {
     const toggleplan = planType === 'monthly' ? 'yearly' : 'monthly'
     setPlanType(toggleplan)
   }


   const condition = planType === 'monthly' ? 'var(--orangeNormal)' :'var(--orangeDark)'

  return (
   <>
    <div>
    <HeadTitle title={{word1:'our' , word2:'plans'}} text='Select the plan that suits your fitness goals and let our expert coaches guide you every step of the way.'/>
    </div>
    <div className='text-center text-light mx-auto rounded-top-2 border-bottom-0 p-2' style={{width:'10%' ,border:`3px solid ${condition}`}}>
       {planType === 'monthly'?'monthly':'yearly'}
    </div>
    <div onClick={changePlan} className='switch_plans mb-5 mx-auto position-relative  rounded-pill' style={{height:'65px',border:`4px solid ${condition} `,width:'15%',}}>
        <div className={`circle position-absolute   rounded-circle ${planType === 'yearly'?'translateCircle':''} `} style={{top:'4px',width:'50px', left:'4px',height:'50px',backgroundColor:`${condition}`,cursor:'pointer'}} ></div>
    </div>


      <div className='d-flex justify-content-center gap-2 '>
         <ClockLoader size={60}   color='lightBlue' speedMultiplier={2}/>
          <HashLoader size={45}  color='green'/>
           <CircleLoader size={70}   color='orange'/>
      </div>
    {/* <section className='plans border rounded-top-3 p-2 w-75 mx-auto text-light border-danger'>
           {
            planType === 'monthly' ? <MonthPlans/>: <YearsPlans/>
           }
    </section> */}
   </>
  )
}

export default PlansContainer
