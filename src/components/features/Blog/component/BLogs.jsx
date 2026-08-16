import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BlogsData as information } from '../../../../Utils/Home/home'
import { BiNavigation } from 'react-icons/bi'

function BLogs() {
  return (
    <div className='blogs my-3  rounded-1 p-2'>
      <Container fluid>
          <Row className=' g-3'>
              <Col lg={6}>
                 <div>
                     <img  className='w-100' src={information.photos[1].main}/>
                 </div>
              </Col>
              <Col lg={6}>
                 <div>
                     <Container>
                         <Row>
                             {
                                information.photos[0].publics.map(item => <Col xs={12} sm={6}><img className='w-100'  src={item}/></Col>)
                             }
                         </Row>
                     </Container>
                 </div>
              </Col>
          </Row>
      </Container>
      <div className='text-center my-5'>
         <button className='btn btn-outline-danger px-4'>
          view All <BiNavigation/>
      </button>
      </div>
    </div>
  )
}

export default BLogs

