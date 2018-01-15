import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu,Input, Dropdown, Icon } from 'semantic-ui-react'

class Header extends Component {
  static propTypes = {
    color: PropTypes.string,
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Menu.Item>
            <a href="/auth/google">Login With Google</a>
          </Menu.Item>
        );
      default:
        return (
          <Menu.Item>
            <a href="/api/logout">Log Out</a>
          </Menu.Item>
        );
    }

  }
  constructor(props)
  {
    super(props)  
    this.state={
      user : ''
    }
    this.doLogout = this.doLogout.bind(this);
  }

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color,categories } = this.props
    const { activeItem } = this.state
 
    return (
      <Menu color={'red'} inverted size='large'>
        <Menu.Item icon='home' name='DiscountBuddy' href='/' active={activeItem === 'DiscountBuddy'} onClick={this.handleItemClick} />
        <Menu.Item icon='tags' name='Products' href="/products" active={activeItem === 'Products'} onClick={this.handleItemClick} />
        <Menu.Item icon='shopping bag' name='Stores' href="/stores" active={activeItem === 'Stores'} onClick={this.handleItemClick} />
        
        <Dropdown item text='Shopping'>
          <Dropdown.Menu>
            <Dropdown.Header>Categories</Dropdown.Header>
            {
                        (()=>{
                            if(categories.length > 0){
                                return(
                            categories.map(item=>{
                                return(
                                    <Dropdown.Item key={item._id} href={"/category/"+ item._id}>{item.name}</Dropdown.Item>

                                )
                           })

                        )
                        }
                        })()
                   }
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...'  width={'100%'}/>
          </Menu.Item>

          {(() => {
                      if (this.state.user){

                        return (
                          <div>
                          {/* <NavItem>
                            <NavLink>{this.props.auth.displayName}</NavLink>
                          </NavItem> */}
                                  <Menu.Item   name='logout' active={activeItem === 'logout'} onClick={this.doLogout} />
                          </div>
                        )
                      } else {
                        return (
                          <Menu.Item  href="http://discountbuddyreact.ddns.net:89/auth/google/" name='Login With Google' active={activeItem === 'Login With Google'} onClick={this.handleItemClick} />
                        )
                      }
                   })()}
        </Menu.Menu>
      </Menu>
    )
  }
  async _getUser(){
    let response = await fetch('/user/get-current-user');
    let data = await response.json();

    this.setState({user : data},()=>(console.log('User', data)))
  }

  doLogout(){
    console.log("fired");
    //this.props.logout();
  }
}

export default Header
