import React from 'react';
import {Navbar,Nav,NavDropdown,Carousel,Container,Form,FormControl,Button} from 'react-bootstrap';
import Login from './Login';
import Signup from './Signup';

const Nav1 = () => {
    return ( 

        <>
        <Navbar bg="light" expand="lg">
              <Container fluid>
    <Navbar.Brand href="#">Seams snd Stiches</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2"> about</Nav.Link>

        
          <Nav.Link href="/product"> product</Nav.Link>
        <Nav.Link >Signup</Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>


</>
      
        
        
     );
}
 
export default Nav1;