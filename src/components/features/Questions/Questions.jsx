import React from 'react'
import HeadTitle from '../../common/HeadTitle'
import { Accordion } from 'react-bootstrap'
import { FAQ } from '../../../Utils/Home/home'

function Questions() {
  return (
    <div>
      <HeadTitle title={{word1:'FAQ' , word2:''}} />

    <Accordion className=' p-2' defaultActiveKey="0">
     {
        FAQ.map(question =>  <Accordion.Item className='my-2 rounded-1  ' key={question.id} eventKey={question.id}>
        <Accordion.Header>{question.Question}</Accordion.Header>
        <Accordion.Body>
         {
            question.answer
         }
        </Accordion.Body>
      </Accordion.Item>)
     }
    </Accordion>

    </div>
  )

}
export default Questions
