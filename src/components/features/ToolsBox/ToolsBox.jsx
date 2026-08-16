import React from 'react'
import HeadTitle from '../../common/HeadTitle'
import { Col, Container, Row } from 'react-bootstrap'
import { tools } from '../../../Utils/Home/home'
import Tool from './components/Tool'

function ToolsBox() {
  return (
   <>
    <div className='my-5'>
      <HeadTitle text='Access a variety of tools to help you reach your fitness goals more effectively' place='text-start'placeText='text-center' title={{word1:'our Fitness',word2:'Tools'}}/>
    </div>
    <Container fluid>
        <Row className='justify-content-center' >
              {
                tools.map(tool => <Col xs={12} sm={6} md={4} lg={2} key={tool.id}><Tool {...tool}/></Col>) 
              }
        </Row>
    </Container>
   </>
  )
}

export default ToolsBox
