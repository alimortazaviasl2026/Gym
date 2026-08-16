import React from 'react'
import HeadTitle from '../../common/HeadTitle'
import {services} from '../../../Utils/Home/home'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceCard from './components/ServiceCard'

function ServicesContainer() {
  return (
   <>
    <div>
         <HeadTitle title={{word1:'our' , word2:'services'}} place='text-center' text='At This Part You Can Easily access all of our servises. take a look at them and chose wich ever you want.'/>
    </div>
   <Container className='my-5'>
      <Row className='g-3 align-items-center'>
          
     {
        services.map(service => <Col xs={12} sm={6} md={3}  key={service.id}><ServiceCard {...service}/></Col>)
     }
      </Row>
   </Container>
   </>
  )
}

export default ServicesContainer
