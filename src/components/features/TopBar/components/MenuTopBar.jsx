import React from 'react'
import { ListGroup, Tab } from 'react-bootstrap'
import Menu from '../../../../data/Menu'
import { NavLink } from 'react-router'


function MenuTopBar() {
  return (
    <ul className='d-flex  flex-column flex-lg-row justify-content-center pt-2 w-100 gap-5 list-unstyled fw-bold'>
        {
            Menu.items.map(tab => < NavLink className={`text-decoration-none `} to={tab.nav} key={tab.id}><li className=' d-flex align-items-center gap-1 position-relative'style={{color:'var(--PureWhite)'}}>{tab.icon}{tab.tabName}</li></NavLink>)
        } 
    </ul>
  )
}

export default MenuTopBar
