import React from 'react';

import productSer from '../../Serives/./ProductSer';
import { FormControl, Col,Container,InputGroup,Row,Button } from 'react-bootstrap';
const UpdateProduct = (props) => {

    const [Brand_Name ,setName]=React.useState("");
    const [Cost ,setPrice]=React.useState(0);
    return ( <>
    
    
<h1>Update Product</h1>
<Container>
<Row>
<Col sm={3}>
<>
<InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default"  >Brand_Name</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      value={Brand_Name}
      onChange={(e)=>{setName
        (e.target.value)}}
    />
  </InputGroup>
  
  <br />
  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Cost</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      value={Cost}
      onChange={(e)=>{setPrice(e.target.value)}}
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
>Update</Button>{' '}
    </> );
}
 
export default UpdateProduct ;