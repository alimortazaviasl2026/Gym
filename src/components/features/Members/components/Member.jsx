import React from 'react'
import { Card } from 'react-bootstrap'

function Member({id , img , name , role}) {
  return (
    <Card className='box bg-dark text-light border border-danger border-3'>
        <Card.Img src={img} width={250} height={250}/>
        <Card.Body className='p-2'>
            <Card.Title >{name}</Card.Title>
             <Card.Text >{role}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <button className='btn btn-sm  btn-outline-danger' style={{border:'1px dashed red'}}>
             contact me
          </button>
        </Card.Footer>
    </Card>
  )
}

export default Member
