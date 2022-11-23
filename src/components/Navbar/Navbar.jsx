import React from 'react'
import {Nav, NavDropdown, Container, Navbar  }from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget';
import "bootstrap-icons/font/bootstrap-icons.css";
import './header.css'

const CustomNavbar = () => {
    const logoStyle = {
        width: 100
      }
      
  return (
    <>
     <Navbar className='bt-navbar' expand="lg">
        <Container>          
          <Navbar.Brand href="#home"><img src={`${window.location.origin}/LogoPrincipal.png`} alt="Logo Buy-Art" style={logoStyle} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='/' className='navLinks'>Home</Link>
              <Link to='/collections' className='navLinks'>Collections</Link>
              <NavDropdown title="Topics" id="basic-nav-dropdown" >
              <Link to='topic/nature' className='navLinks'>Nature</Link>
              <NavDropdown.Divider />
              <Link to='topic/people' className='navLinks'>People</Link>
              </NavDropdown>
              <Link to='/search' className='navLinks'>Search</Link>
              <Link to='/likes' className='navLinks'><CartWidget/></Link>
              <Link to='/login' className='navLinks'>Login</Link>       
             
           </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default CustomNavbar