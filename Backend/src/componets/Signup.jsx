import React from 'react';
import { useState } from "react";
import axios from "axios";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
const Signup = () => {
  const [ user, setUser] = useState({
    address:"",
    city:"",
    password:"",
    email: ""});

    const handleChange = e => {
      const { name, value } = e.target
       setUser({
         ...user,
         [name]: value
 })
  }
  const register = () => {

    const { email, password, city,address } = user;
    if(   email &&  city && address && password  ){
      axios.post("http://localhost:3003/register", user)
      .then( res => {
        alert(res.data.message)
          
    })
  }
          else {
        alert("invlid input")
    }
    
}
  
    return (  <>
    <Container>

    <h1 className="shadow-sm text-dark mt-5 p-3 text-center rounded">SignUp Form </h1>
    <Row className="mt-5">
    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
    <Form   action='' >
  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>Email</Form.Label>
      <Form.Control  name="email" value={user.email} type="email" placeholder="Enter email" onChange={ handleChange } />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control  name="password" value={user.password} type="password" placeholder="Password" onChange={ handleChange } />
    </Form.Group>

    

  </Row>

  
  

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control   name="address" value={user.address}  placeholder="Address" onChange={ handleChange } />
  </Form.Group>

  

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control   name="city" value={user.city}  placeholder="city"   onChange={ handleChange }   />
    </Form.Group>
  </Row>
  <Button variant="primary"  onClick={register}>
    Submit
  </Button>
</Form>
    </Col>

    </Row>
    </Container>
    </>);
}
 
export default Signup;