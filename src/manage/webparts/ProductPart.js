import React, {Component} from 'react';
import {Grid, Segment,Button, Form, 
  Checkbox, Icon, Table,Input, Header, 
  Dropdown,Image, Menu,Card, Sidebar,
  Dimmer, Loader} from 'semantic-ui-react';
import AddMultipleModal from './AddMultipleModal';
import AddProductModel from "./AddProductModel";
import {Row, Col, Container} from 'reactstrap';
import {Router, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import ProductCardComponent from './ProductCardPart';
import { Bubble } from 'react-chartjs-2';



class ProductPart extends Component{
  constructor(props){
    super(props)
    this.state = {
      products: [],
      visible: false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
    render(){
      let options = this.props.categories.map((item, i)=>{
        return {
          key: i,
          text: item.name,
          value: item._id
        }
      })
        return (
          <Sidebar.Pushable style={{height: 700}}>
          {this.state.product && 
                  <Sidebar style={{padding: 20}} direction='right' animation='push' width='wide' visible={this.state.visible}>
                    <Header
                    as="h2"
                    content="Edit Product"
                    />
                    <Image src={"https://storage.googleapis.com/discountbuddy_products/" + this.state.product.image} />
                    <Button icon basic><Icon name="upload" /> Change Image</Button>
                    <Form>
                      <Form.Input
                      label="Name"
                      defaultValue={this.state.product.name}
                      />
                      <Form.Input
                      label="Description"
                      defaultValue={this.state.product.description}
                      />
                      <Form.Input
                      label="Price"
                      defaultValue={this.state.product.price}
                      />
                      <Form.Input
                      label="Promo Price"
                      defaultValue={this.state.product.promo_price}
                      />
                      <Form.Input
                      label="Stock"
                      defaultValue={this.state.product.stock}
                      />
                      <Form.Input
                      label="Size"
                      defaultValue={this.state.product.size}
                      />
                      <div className="field">
                      <Button icon basic onClick={()=>this.setState({visible: false})}>
                      Cancel
                      </Button>
                      <Button icon basic onClick={()=>this.setState({visible: false})}>
                      Save
                      </Button>
                      </div>
                    </Form>
                    
                  </Sidebar>
                
            }
          <Sidebar.Pusher style={{padding: 10}}>
          <Container>             
                <Row>
                <Col md="3">
                     <Button fluid color="red" icon basic onClick={()=>{this.props.history.goBack()}}><Icon name="chevron left" /> Return To Store</Button>
                  </Col>
                  <Col md="3">
                    <AddProductModel></AddProductModel>
                  </Col>
                  <Col md="3">
                    <AddMultipleModal></AddMultipleModal>
                  </Col>
                 
                  <Col md="3">
                      <Input icon='search' placeholder='Search...' />
                  </Col>
                </Row>
                <Row style={{marginTop: 20}}>
                
                {
                  (()=>{
                    if(this.state.products.length > 0){
                      return(
                        this.state.products.map(product=>{
                          
                            return(
                                <ProductCardComponent toggleView={this.toggleVisibility} product={product} />
                                )
                              })
                            )}
                            else{
                              return (
                                <Dimmer active>
                                  <Loader>Loading Items</Loader>
                                </Dimmer>
                              )
                            }
                        })()
                      }
                  
                </Row>
            </Container>
            </Sidebar.Pusher>
            </Sidebar.Pushable>

        )
    }
    toggleVisibility(item){
      this.setState({ 
        visible: !this.state.visible,
        product: item
       }, ()=>{console.log(this.state)})
    }
    async _getProduct(){
      let response = await fetch('/api/product/store/' + this.props.match.params.storeId, {credentials: "include"});
      let result = await response.json();
  
      this.setState({
        products: result
      }, ()=>{console.log('data coming back',this.state.products)}
    );
    }
    
    componentDidMount(){
      this._getProduct();
    }
  
    }
  
  
  function matchStateToProps(state)
  {
     return{
      user: state.auth,
      products: state.products,
      categories: state.categories
     }
  }
  
  export default  withRouter(connect(matchStateToProps)(ProductPart));
  
