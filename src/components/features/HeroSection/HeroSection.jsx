import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Authentication from '../TopBar/components/Authentication'

function HeroSection() {
  return (
    <div className='heroSection'>
       <Container >
          <Row className='align-items-center'>
         
               <Col xs={12} lg={6}>
                  <div className='text-light fw-bolder text-center'>
                       <span className='display-5'>Achieve Your</span>
                       <span className='display-3 d-block my-2' ><span  style={{color:'var(--orangeDark)'}}>Fitness </span><span style={{color:'var(--orangeNormal)'}}>Goals</span></span>
                       <span className='display-6 text-justifya' >With FitMaker</span>
                       <p className='fw-light'>"Join the Fitmaker community and transform your fitness journey. Our expert coaches and personalized programs are designed to help you achieve your goals and exceed your expectations. Ready to make a change?"</p>

                      <div className='d-flex gap-2 my-4'>
                         <button className='btn btn-auth btn-sm  rounded-pill p-2 w-100' style={{color:'var(--PureWhite)', backgroundColor:'var(--orangeDark)'}} >start your journey</button>
                          <button className='btn btn-auth btn-sm   rounded-pill border-danger p-2 w-100 ' style={{color:'var(--orangeNormal)'}}>explor programs</button>
                      </div>
                  </div>
               </Col >
                    <Col  xs={12} lg={6}>
                   <div >
                        <img src="/dist/Group-4.png"  className='w-100' />
                   </div>
               </Col>
          </Row>
       </Container>
    </div>
  )
}

export default HeroSection
