import React from 'react'
import HeadTitle from '../../common/HeadTitle'
import MembersBox from './components/MembersBox'

function Members() {
  return (
    <div className='my-5'>
       <HeadTitle text='At This Part you can See Few Of The Many Positive reviews Of Our Customers.' place='text-start' title={{word1:'Meet our' , word2:'Trainers'}}/>

       <MembersBox/>
    </div>
  )
}

export default Members
