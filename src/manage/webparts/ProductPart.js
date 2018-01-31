import React, {Component} from 'react';
import {Grid, Segment,Container,Button, Checkbox, Icon, Table,Input, Dropdown,Image, Menu,Card} from 'semantic-ui-react';
import AddMultipleModal from './AddMultipleModal';
import AddProductModel from "./AddProductModel";
import {Router, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]


class ProductPart extends Component{
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }
    render(){
      console.log("user coming back",this.props.user);
        return (
          <Container>
              <Grid columns='equal'>
                <Grid.Row>
                  <Grid.Column>
                    <Table.Row>
                      <Table.HeaderCell colSpan='4'>
                       <AddProductModel></AddProductModel>

                      </Table.HeaderCell>
                    </Table.Row>
                  </Grid.Column>
                  <Grid.Column>
                    <Table.Row>
                      <Table.HeaderCell colSpan='4'>
                        <AddMultipleModal></AddMultipleModal>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Grid.Column>
                  <Grid.Column>
                     <Dropdown icon="angle down"  placeholder='Select Category' search selection  />
                  </Grid.Column>
                  <Grid.Column>
                      <Input icon='search' placeholder='Search Category...' />
                  </Grid.Column>
                </Grid.Row>
                {
                  (()=>{
                    if(this.state.products.length > 0){
                      return(
                        this.state.products.map(product=>{
                          
                            return(
                <Grid.Row columns = {2}>
                  <Grid.Column>
                        <Card>
                            <Image src={"https://storage.googleapis.com/discountbuddy_products/" + product.image} size="large"  />
                            <Card.Content>
                            <Card.Header>
                                {product.name}
                            </Card.Header>
                            <Card.Meta>
                                <span className='date'>
                                Joined in 2015
                                </span>
                            </Card.Meta>
                                <Card.Description>
                                {product.description}
                                </Card.Description>
                            </Card.Content>

                        </Card>
                  </Grid.Column>
                </Grid.Row>
                                          )
                                        })
                                      )}
                                  })()
                          }

          
              </Grid>
            </Container>

        )
    }
    async _getProduct(){
      let response = await fetch('http://api.rookies.co.za/api/my-product/'+this.props.user._id);
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
     }
  }
  
  export default  connect(matchStateToProps)(ProductPart);
  
