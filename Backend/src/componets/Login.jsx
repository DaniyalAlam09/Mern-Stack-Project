import React from 'react';
import { useState,  } from "react";
import axios from "axios"
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
const Login = ({ setLoginUser}) => {


    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:3003/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
        
        })
    }


  return ( <>
    
<Container>

<h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Login Form </h1>
<Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    
                        <Form   action=''>
                        
                            
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email </Form.Label>
                                <Form.Control   name="email" value={user.email}  autocomplete="off" type="email" placeholder="Enter email"    onChange={ handleChange }
               />
                           
        
                            </Form.Group>

                            
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control    name="password" value={user.password}  autocomplete="off"  type="password" placeholder="Password" onChange={ handleChange }
            />
                            </Form.Group>
                            
                            <Button variant="success btn-block" type="submit" onClick={login}>
                                Login
                            </Button>
                            <a id="tag"   ><Link to = '/signup' className='uu'>SingUp</Link>   </a>
                            
                        </Form>
                    </Col>
                </Row>
                
</Container>
    
    
    
    </> );

  }
export default Login;