import React, { Component } from 'react'
import { Menu, Search ,Popup} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';

 class Category extends Component {
  render() {
    return (
      <Menu vertical>
          
        <Menu.Item>
          <Menu.Header as="h2">CATEGORIES</Menu.Header>
        </Menu.Item>
              {
                (()=>{
                    if(this.props.categories.length > 0){
                        return(
                                                        
                            this.props.categories.map(item=>{
                                                  
                                 return(
                                     <Popup trigger={<Link to={"/category/"+item._id}>
                                         <Menu.Item link={true} key={item._id} name={item.name} />  </Link>}
                                            flowing hoverable position=" right centre">

                                     <h5>products in this category</h5>
                                     </Popup>
                                                                    
                                )
                            })
                        )
                    }
                })()
              }

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