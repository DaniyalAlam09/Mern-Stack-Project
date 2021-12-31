
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import NewProduct from './componets/products/NewProduct'
import UpdateProduct from './componets/products/UpdateProduct';
import Nav1 from './componets/Nav';
 import Login from './componets/Login';
import Signup from './componets/Signup';
import Product from './componets/products/Product';

function App() {
  return (
   
    <>
     <BrowserRouter>
    <Nav1/>
    
     <Routes>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/signup" element={<Signup/>}></Route>
  <Route exact path="/product/update/:id" element={<UpdateProduct />}></Route>
  
  <Route  path="/product" element={<Product />}></Route>
  <Route  exact path="/product/new" element={<NewProduct />}></Route>
  
  </Routes>  
        
        </BrowserRouter>
    
    </>
     
    
  );
}

export default App;
