import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Comment({idea}) {

 
  
   
    
  return (
     <>
      <div className='comment-img comment'>

         <Container fluid>
             <Row className='align-items-center justify-content-center'>
                <Col xs={12} md={6} >
                  <img src={idea?.img} width={275} height={379}/>
                </Col>
                <Col xs={12} md={6} >
                       <div className='idea rounded-2 p-2 ' >
       <div className='d-flex  justify-content-between align-items-center'>
         <div className='text-light fw-bold'>{idea?.name}</div>
          {/* <div>  <img src="public/ooui_quotes-ltr.png"  /></div> */}
       </div>
          <span className='my-2 d-block' style={{color:'var(--grayText)'}}><i>{idea?.role}</i></span>
          <div className='lh-lg text-light ' style={{fontSize:'14px'}}>
             <i> {
                idea?.idea
              }</i>
          </div>
                       </div>
                </Col>
             </Row>
         </Container>
     </div>
  
     </>
  )
}

export default Comment
