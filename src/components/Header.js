import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu,Input, Dropdown, Icon, Image,Search } from 'semantic-ui-react';
import {Link,Router, withRouter} from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



import {connect} from 'react-redux';
const logo = require('../images/db-inverse.png');


class Header extends Component {
  static propTypes = {
    color: PropTypes.string,
  }


  constructor(props)
  {
    super(props)  
    this.state={
      user : ''
    }
    this.doLogout = this.doLogout.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color,categories } = this.props
    const { activeItem } = this.state
    console.log(this.props)
 
    return (

         
      
      <Navbar style={{backgroundColor:"#fe0000"}} color="faded" dark expand="md">
        <NavbarBrand href="/">
          <img src={logo} style={{width:150,height:50}}  /> 
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
          {(() => {
            if (this.props.user){
              return (
   

                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret style={{color:"white"}}>
                          {this.props.user.displayName}
                        </DropdownToggle>
                        <DropdownMenu >

                         
                          <NavItem >
                          <NavLink style={{color:"white"}}> <DropdownItem><Link to="/profile"> <Icon name="user" /> Profile</Link></DropdownItem> </NavLink>
                          </NavItem>
                         
                          {this.props.user.admin?  <NavItem><NavLink style={{color:"white"}}><DropdownItem><Link to="/manage"><Icon name="setting" /> Manage Store</Link></DropdownItem> </NavLink> </NavItem>:null}
                        
                        
                          
                          <NavItem>
                         <NavLink style={{color:"white"}}> <DropdownItem><Link to="/api/logout"><Icon name="log out" /> Logout</Link></DropdownItem> </NavLink>
                         </NavItem>
                         
                        </DropdownMenu>
                      </UncontrolledDropdown>
              )
            } else {
              return (
                <NavItem>
                    <NavLink href="/login" style={{color:"white"}} >SIGN IN</NavLink>
                </NavItem>

                )
            }
         })()}

          </Nav>
        </Collapse>
      </Navbar>
   





    )
  }

  doLogout(){
  window.location.href="/api/logout";
  
  }
}

function matchStateToProps(state){
  return {
    user: state.auth
  }
}

export default withRouter(connect(matchStateToProps)(Header));
