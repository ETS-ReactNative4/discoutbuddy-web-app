import React, { Component } from 'react'
<<<<<<< HEAD
import { Menu, Search ,Popup} from 'semantic-ui-react'
=======
import { Menu, Search ,Popup,Header} from 'semantic-ui-react'
>>>>>>> 047fba65acbf31724dfc7afab3e3613e35fd5375
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';
import ProductList from './ProductList';

 class Category extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            myId : ''
        }
        this.handleHover = this.handleHover.bind(this)
    }

    handleHover(e){
        console.log('catch',this.state.myId)
        this.state({myId: e.target.value},()=>(console.log('catch',this.state.myId)))
    }
  render() {
    const {products} = this.props
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
<<<<<<< HEAD
                                     <Popup trigger={<Link to={"/category/"+item._id}>
                                         <Menu.Item link={true} key={item._id} name={item.name} />  </Link>}
                                            flowing hoverable position=" right centre">

                                     <h5>products in this category</h5>
                                     </Popup>
                                                                    
=======
                                     <Popup  value={this.state.myId} onHover={this.handleHover}  trigger={ 
                                     <Link to={"/category/"+item._id} >
                                        <Menu.Item link={true} key={item._id} name={item.name} /> 
                                     </Link>
                                     }
                                     flowing hoverable position='right center'>

                                        <header><h4>Products under {item.name}</h4></header>
                                       
                                       {
                                        (()=>{
                                            if(products.length > 0){
                                                return(
                                                
                                                    products.map(product=>{
                                                    {
                                                        if(product.category._id === item._id)
                                                        return(
                                                            <div>
                                                            <Link to ={"/product/"+ product._id}> {product.name} </Link>
                                                            
                                                            </div>
                                                    )
                                                }})
                                        )
                                        }
                                        })()
                                    }
                                      
                                        
                                      </Popup>
                                        
>>>>>>> 047fba65acbf31724dfc7afab3e3613e35fd5375
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
       products: state.products,
        categories: state.categories

    }
}

export default connect(matchStateToProps)(Category);