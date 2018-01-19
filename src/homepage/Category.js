import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

 class Category extends Component {
  render() {
    return (
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Categories</Menu.Header>

          <Menu.Menu>
              {
                (()=>{
                    if(this.props.categories.length > 0){
                        return(
                                                        
                            this.props.categories.map(item=>{
                                                  
                                 return(
                                    <Link to={"/category/"+item._id}><Menu.Item key={item._id} name={item.name} />  </Link>                                  
                                )
                            })
                        )
                    }
                })()
              }
            
            
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}

function matchStateToProps(state){
    return{
       // auth: this.auth,
        categories: state.categories
    }
}

export default connect(matchStateToProps)(Category);