import React,{ Component } from 'react'
import { Grid, Image, Container, Item, Icon, Form, TextArea, Rating, Button, Divider } from 'semantic-ui-react'
import ProductCard from './ProductCard'
import { connect } from "react-redux";
import Products from '../products carousel/ProductsCarousel'
import {Link} from 'react-router-dom'
import Moment from 'moment'
import pic from '../images/images/01.jpg'

const base = 'http://api.rookies.co.za/api'

class ViewProduct extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            product: {},
            store:[],
            category:[]
        }
    }
    render(){

        const{store,product,category} = this.state;
        console.log(this.props.match.params.filter)
        return(
            <div>
                <Container>
                    
                  <Grid>
                    <Grid.Column width={10}>
                    <Image src={"https://storage.googleapis.com/discountbuddy_products/" + product.image} />
                    </Grid.Column>
                    <Grid.Column width={6}>
                    <Item>
                         <Item.Content>
                            <Item.Header as='h2'>{product.name}</Item.Header>
                            <Item.Description as='h4' style={{color:"red"}}>
                                R{product.promo_price}
                            </Item.Description>
                            <Item.Description as='h6' style={{textDecoration:'line-through'}}>
                                was R{product.price}
                            </Item.Description >
                            <Item.Description as='h6' >
                                 Store : {store.storename} 
                            </Item.Description>

                         </Item.Content>
                     </Item>
                     <Divider hidden></Divider>
                     <Item>
                         <Item.Content>
                            <Item.Header as='h4'>About {product.name}</Item.Header>
                            <Item.Description as='h6' >
                                {product.description}
                            </Item.Description>
                            <Item.Description style={{color:"red"}} as='h6' >
                               Valid till: {Moment(product.promo_expiry_date).format('DD MMM YYYY')}
                            </Item.Description>
                            <Item.Description as='h6' >
                               Fall under <Link to={'/category/'+category._id}>{category.name}</Link> category
                            </Item.Description>
                            <Item.Extra>
                            <Icon color='green' name='check' /> 121 Votes
                            </Item.Extra>
                         </Item.Content>
                     </Item>
                    </Grid.Column>
                </Grid>
                <Grid>
                    <Grid.Column width={10}>
                        <Form>
                            <Form.Field>
                                <TextArea rows={2} placeholder='What do you think about this product?' />
                            </Form.Field>
                            <Button basic color='red' type='submit'>Submit</Button>   
                        </Form>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Button color='red' type='submit'>11 Km away</Button>
                    </Grid.Column>
                    <Divider horizontal>Products That in same category</Divider>
                    <Grid.Column width={16}>
                        <Products categoryId={category._id}/>
                    </Grid.Column>

                </Grid>
                </Container>
            </div>
        )
    }

    
    async _getProduct(){
        let response = await fetch(base +'/product/'+this.props.match.params.filter);
        let result = await response.json();

        this.setState({
          product: result,
          store: result.store,
          category: result.category
        }
      );
      }
      
      componentDidMount(){
        this._getProduct();
      }
}

function matchStateToProps(state)
{
    return{
        auth: state.auth,
        products: state.products

    }
}

export default connect(matchStateToProps)(ViewProduct)