import React from 'react';
import productSer from '../../Serives/./ProductSer';
import { Link } from "react-router-dom";

import { Button } from 'react-bootstrap';
const Single = (props) => {
    const {product , onDelete}=props
    return ( 

        <>
        <h2>{product.Brand_Name} <h2/>
        
        
  <Button variant="danger" onClick={(e)  =>{

  productSer.deleteProduct(product._id)
    .then((data) => {
        console.log(data)
        onDelete();
        
    
})

.catch((err)=>{

    console.log(err);

})
}}>Delete Product
  
  </Button></h2>
        <p>{product.Cost}</p>
        <hr />
       
    </>
     );
}
 
export default Single;