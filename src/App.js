import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import CartPage  from './components/pages/CartPage';

class App extends Component {
  render() {
    return (<div className="ui container"> 
    <Route path="/" exact component ={HomePage}></Route>
    <Route path="/login" exact component ={LoginPage}></Route>
    <Route path="/cart" exact component={CartPage}></Route>
     </div>
    );
  }
}
export default App;
