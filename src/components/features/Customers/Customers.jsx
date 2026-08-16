import React, { useEffect, useReducer, useState } from 'react'
import HeadTitle from '../../common/HeadTitle'
import { BiArrowBack, BiArrowFromRight, BiFastForward } from 'react-icons/bi'
import { FiArrowDownCircle, FiArrowDownLeft, FiArrowRight } from 'react-icons/fi'
import Comment from './components/Comment'
import { generateComments } from '../../../Utils/Home/home'
import CounterReducer from '../../../reducers/CounterReducer'
import { Next , Back , Reset } from '../../../actions/CounterActions'
import { Col, Container, Row } from 'react-bootstrap'


function Customers() {

   const [comments , setComments]= useState(generateComments())

   const [commentNumber , disPatch] =  useReducer(CounterReducer , 0)
 
  useEffect(()=>{
  

   if(commentNumber > comments.length - 1){
     disPatch({type:Reset})
   }
   if(commentNumber < 0 ){
    disPatch({type:'LAST_INDEX' , payload:comments.length})
    // console.log('small');
    
   }
   
  },[commentNumber])

   

  return (
 <>
    <div className='my-4 '>
      <HeadTitle text='At This Part you can See Few Of The Many Positive reviews Of Our Customers.' title={{word1:'what our' , word2:'customers say' }}/>
    </div>
  <section className=' comments  p-2 rounded-top-5 d-flex gap-2 justify-content-center align-items-center mx-auto w-75'  >
   <Container>
     <Row>
       <Col xs={12} xxl={6}>
           <Comment idea={comments[commentNumber]}/>
       </Col>
       <Col xs={12} xxl={6}>
          <div className='d-flex justify-content-between'>
         <button className='btn btn-outline-danger ' onClick={()=> disPatch({type:Back})}><BiArrowBack/></button>
         <button className='btn btn-outline-danger ' onClick={()=> disPatch({type:Next})}><FiArrowRight/></button>
          </div>
       </Col>
       
    
     </Row>
   </Container>
  </section>
 </>
  )
}

export default Customers
