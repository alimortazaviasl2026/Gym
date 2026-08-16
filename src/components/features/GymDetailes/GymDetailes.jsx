import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DetailCard from './elements/DetailCard'
import details from '../../../data/details'

function GymDetailes() {
  return (
     <Container   className='my-4'>
         <Row className=''>
             {
                details.map(data => <Col xs={12} sm={6} lg={3}   key={data.id}><DetailCard {...data}/></Col>)
             }
         </Row>
     </Container>
  )
}

export default GymDetailes
