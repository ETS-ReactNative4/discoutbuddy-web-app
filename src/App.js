import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import Category from './category/Category'
import Product from './product/Product'
import Store from './store/Store'
import ViewStore from './store/ViewStore'
import Cat from './carousel/CategoryC'

import './App.css';
const base = "http://130.211.50.71:89";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      categories: [],
    
    }
    
  }

  render() {
    const {categories} = this.state
   
    return (
   
        <BrowserRouter>
          <div >
            <Header categories={this.state.categories} />
            <Route exact path="/" component={Cat}/>
            <Route path="/category/:filter?" component = {Category}/>
            <Route path="/products" component = {Product}/>
            <Route path="/stores" component = {Store}/>
            <Route path="/store/:filter?" component = {ViewStore}/>
          </div>
        </BrowserRouter>
    
    );
  }

  async _getCategory(){
    let response = await fetch('http://130.211.50.71:89/api/category');
    let result = await response.json();

    this.setState({
      categories: result
    });

  }



  componentDidMount(){
    this._getCategory();
  }

}

export default App;
