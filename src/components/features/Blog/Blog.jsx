import React from 'react'
import HeadTitle from '../../common/HeadTitle'
import BLogs from './component/BLogs'

function Blog() {
  return (
    <div className='blog'>
       <HeadTitle  title={{word1:'Fitmaker',word2:'Blog Posts'}} place='text-start'  text='Discover essential tips to maximize your workout results and reach your fitness goals faster.'/>
       <BLogs/>
    </div>
  )
}

export default Blog
