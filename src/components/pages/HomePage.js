import React from 'react'
import {Link} from 'react-router-dom';
import ProductList from '../features/product-list';
import data from '../../data/data.json';
const HomePage= () => (
    <div>
      <div className="App">
       <header id="heading">
       <div className="container">
         <h1>Dhiviya drawings shop</h1>
       </div>
       </header>
      </div>
  <div className="login">
    <Link to="/login"> Login </Link>
    <Link to="/cart">Cart</Link>
  </div> 
  <div>
  <ProductList products={data.products} />
  </div>
    </div>
  );

export default HomePage;