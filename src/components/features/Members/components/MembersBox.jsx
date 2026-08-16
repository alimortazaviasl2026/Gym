import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { members } from '../../../../Utils/Home/home'
import Member from './Member'

function MembersBox() {
  return (
    <div className='MembersBox'>
        <Container>
            <Row className='g-2 justify-content-center'>
                 {
                    members.map(mem => <Col xs={12} sm={6} md={4} lg={3} key={mem.id}><Member {...mem}/></Col>)
                 }
            </Row>
        </Container>
    </div>
  )
}

export default MembersBox
