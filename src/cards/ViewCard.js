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
            collapse: false,
            rev:[],
            reviewer: []
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

        const{store,product,category,reviewer,rev} = this.state;
        const{ reviews } = this.props
        console.log('user',rev);
       
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
        
                
                               {
                                        (()=>{
                                            if(reviews.length > 0){
                                                return(
                                                
                                                    reviews.map(review=>{
                                                    {
                                                        if(this.props.match.params.filter === review.product._id)
                                                        return(
                                                            <div>
                                                                <Image src='data:image/jpeg;base64,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' avatar />
                                                                    <span>{review.user.displayName}</span> <Rating icon='star'  maxRating={5} onRate={review.rating}/>
                                                                <h6> {review.message}</h6>
                                                                <p>Posted on : {Moment(review.createdAt).format('DD MMM YYYY')}</p>
                                                                <hr/>
                                                            </div>
                                                    )
                                                }})
                                        )
                                        }
                                        })()
                                    }
                                      
                            </CardBody>
                        </Card>
                        </Collapse>
                     </div>

                    </Grid.Column>
                </Grid>
                <Grid>
                    {this.props.user?                    
                    <Grid.Column width={10}>
                    
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <TextArea rows={2} onChange={(e)=>{this.setState({message: e.target.value})}} placeholder='What do you think about this product?' />
                            </Form.Field>
                            <Rating icon='star' maxRating={5} onRate={this.handleRate}  onChange={(e)=>{this.setState({rating: e.target.value})}}/><br/>
                            <Button basic color='red' type='submit'>Submit</Button>   
                        </Form>                       
                    </Grid.Column>            
                   
                    :null}
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

      async _getReview(){
        let response = await fetch(base +'/review/'+this.props.match.params.filter);
        let result = await response.json();

        this.setState({
          rev: result,
          reviewer: result.product
        }
      );
      }
      
      componentDidMount(){
        this._getProduct();
        this._getReview();
      }
}

function matchStateToProps(state)
{
    return{
        user: state.auth,
        products: state.products,
        reviews: state.reviews

    }
}

export default connect(matchStateToProps)(ViewProduct)