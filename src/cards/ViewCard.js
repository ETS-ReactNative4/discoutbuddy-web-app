import React,{ Component } from 'react'
import { Grid, Image, Container, Item, Icon, Form, TextArea, Rating, Button, Divider} from 'semantic-ui-react'
import { Collapse, CardBody, Card } from 'reactstrap';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
// import FontIcon from 'material-ui/FontIcon';

import ProductCard from './ProductCard'
import { connect } from "react-redux";
import Products from '../products carousel/ProductsCarousel'
import {Link} from 'react-router-dom'
import Moment from 'moment'
import pic from '../images/images/01.jpg';

// import {blue300,indigo900,orange200,deepOrange300,pink400,purple500,} from 'material-ui/styles/colors';

const base = 'http://api.rookies.co.za/api'

class ViewProduct extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            product: {},
            store:[],
            category:[],
            rating: 0,
            collapse: false
            // users: []
        }
        this.handleSubmit =this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
      }

    handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating });

    handleSubmit(e) {
        e.preventDefault();
        let obj = {
          "user": this.props.user._id,
          "product": this.state.product._id,
          "message": this.state.message,
          "rating":this.state.rating
     
        }
        // console.log(obj);
        fetch('http://api.rookies.co.za/api/add-review', {
            method: 'POST',
            headers:{
              "Accept":"application/json",
              "Content-Type":"application/json"
            }
            ,
            body: JSON.stringify(obj)
          })
          .then((data)=> {
            return data.json()
          }).then((body)=>{
            // console.log(body);
          
          });
      }
      
      

    render(){

        const{store,product,category} = this.state;
    
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
                     <div>
                        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Review</Button>
                        <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <List>
                                    <ListItem disabled={true} leftAvatar={
                                        <Avatar src={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR-IYZrLypNq_Ll2Vp9lW5p0WOmKjDctp0NNn2XQZPO3WFrshr4Tb5LkZ1QAU_oXfU1OmGq2a4D&usqp=CAc"} />
                                        }> Image Avatar vb
                                    </ListItem>
                                </List>
                            </CardBody>
                        </Card>
                        </Collapse>
                     </div>
                    </Grid.Column>
                </Grid>
                <Grid>
                    <Grid.Column width={10}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <TextArea rows={2} onChange={(e)=>{this.setState({message: e.target.value})}} placeholder='What do you think about this product?' />
                            </Form.Field>
                            <Rating icon='star' maxRating={5} onRate={this.handleRate}  onChange={(e)=>{this.setState({rating: e.target.value})}}/><br/>
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
        user: state.auth,
        products: state.products

    }
}

export default connect(matchStateToProps)(ViewProduct)