import React from 'react';
import { Navbar, Nav, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import '../App.css';


function WebNavbar() {
  return (
    <div>
    <Navbar  className='navbar' expand="lg" fixed="top" >
                  <Navbar.Brand href="#">
                    <img src="./Images/1logo.png" alt="Avatar Logo" style={{ width: "40px" }} className="rounded-pill" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarCollapse" />
                  <Navbar.Collapse id="navbarCollapse">
                    <Nav className="ml-auto mr-5">
                      <Nav.Link className='mr-4' href="#footer" style={{ color: "white" }}><h5>HOME</h5></Nav.Link>
                      <Nav.Link className='mr-4' href="#" style={{ color: "white" }}><h5>About</h5></Nav.Link>
                      <Nav.Link className='mr-4' href="#" style={{ color: "white" }}><h5>HEALTH BENEFITS</h5></Nav.Link>
                      <Nav.Link className='mr-4' href="#" style={{ color: "white" }}><h5>SHOP</h5></Nav.Link>
                      <Nav.Link className='mr-4' href="#" style={{ color: "white" }}><h5>CONTACT</h5></Nav.Link>


                    </Nav>
                    <Button  className='text-center' href='/login' variant="primary" style={{ backgroundColor: "#FFF4D6", borderRadius: "15px", color:"#3F7132" }}><h5 className='mt-1'>Sign Up</h5></Button>
                  </Navbar.Collapse>
                </Navbar>
    </div>
  );
}

export default WebNavbar;
