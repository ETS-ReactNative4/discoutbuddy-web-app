import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Category from './screens/Category';

import ViewStore from './screens/ViewStore';
import HomePage from './screens/HomePage';
import ViewProduct from './screens/ViewCard';
import Login from './screens/Login';

import profile from './screens/profile';
import edit from './screens/edit-profile';
import Manage from './screens/Admin/Manage';

import Registration from './screens/Register'
import './App.css';

import stores from './screens/StoreView';
import {connect} from 'react-redux';
import * as actions from './redux/actions';


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
          <div>
            <Header categories={this.state.categories} />
            
            <Route exact path="/" component={HomePage}/>
            <Route path="/category/:filter?" component = {Category}/>
            <Route path="/manage" component={Manage} />
            <Route path="/store/:filter?" component = {ViewStore}/>
            <Route path="/login" component = {Login}/>
            <Route path="/register" component = {Registration}/>
            <Route path="/profile" component ={profile} />
            <Route path="/edit-profile" component ={edit} />
            <Route path="/singlestore/:filter?" component = {stores}/>
            <Route path="/product/:filter" component = {ViewProduct}/>
           
            
            </div>
        
        </BrowserRouter>
    
    );
  }

  componentDidMount(){
    this.props.fetchUser();
    this.props.fetchProductWithin();
    this.props.fetchStore();
    this.props.fetchProduct();
    this.props.fetchCategory();
    this.props.fetchReview();
    this.props.getDistance();
  }

}


export default connect(null, actions)(App);
