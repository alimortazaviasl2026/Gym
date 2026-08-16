import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CommunityCard from './CommunityCard'
import { communityData } from '../../../../Utils/Home/home'

function CommunityCards() {
  return (
    <div className='communityCards'>
       <Container>
         <Row className='g-2'>
          {
            communityData.map(item => <Col xs={12} key={item.id}><CommunityCard {...item}/></Col>)
          }
         </Row>
       </Container>
    </div>
  )
}

export default CommunityCards
