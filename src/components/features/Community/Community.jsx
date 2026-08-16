import React from 'react'
import HeadTitle from '../../common/HeadTitle'
import { Col, Container, Row } from 'react-bootstrap'
import CommunityCards from './Elements/CommunityCards'
import Form from '../Form/Form'
import Questions from '../Questions/Questions'

function Community() {



  return (

    <Container fluid>
        <Row className=' g-3'>
             <Col xs={12} lg={6}>
                <div>
                   <HeadTitle  title={{word1:'Join Our',word2:' Fitness Community'}} place='text-start' placeText='text-start'  text='Sign up now to unlock exclusive access to personalized workout plans, expert coaching, and a supportive community that will help you achieve your fitness goals.'/>
                   <CommunityCards/>
                 </div>
             </Col>
              <Col xs={12} lg={6}>
                 <div>
                     <Form/>
                 </div>
                   <Questions/>
              </Col>
        </Row>
    </Container>
   
  )
}

export default Community
