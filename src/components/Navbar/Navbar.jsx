import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
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
              <Link to='topic/nature' className='navLinks'>Naturaleza</Link>
              <Link to='topic/people' className='navLinks'>Personas</Link>
              <Link to='/comida-bebida' className='navLinks'>Comida y Bebida</Link>
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