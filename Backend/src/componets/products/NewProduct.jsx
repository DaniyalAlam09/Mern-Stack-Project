import React from 'react';

import productSer from '../../Serives/./ProductSer';
import { FormControl, Col,Container,InputGroup,Row,Button } from 'react-bootstrap';
const NewProduct = (props) => {

    const [Brand_Name ,setBrand_Name]=React.useState("");
    const [Cost ,setCost]=React.useState(0);
    return ( <>
    
    
<h1>Add Product</h1>
<Container>
<Row>
<Col sm={3}>
<>
<InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default"  >Name</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      value={Brand_Name}
      onChange={(e)=>{setBrand_Name
        (e.target.value)}}
    />
  </InputGroup>
  
  <br />
  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Price</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      value={Cost}
      onChange={(e)=>{setCost(e.target.value)}}
    />

  </InputGroup>

  <br />
  
 
</>
</Col >
</Row>
</Container>
<Button variant="success" onClick={


(e)=>{

  productSer.addProduct({Brand_Name,Cost})
    .then((data) => {
        console.log(data);
    
});
}}
>Added</Button>{' '}
    </> );
}
 
export default NewProduct ;