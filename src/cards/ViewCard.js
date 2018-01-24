import React,{ Component } from 'react'
import { Grid, Image, Container, Item, Icon, Form, TextArea, Rating, Button, Divider } from 'semantic-ui-react'
import ProductCard from './ProductCard'
import { connect } from "react-redux";
import Products from '../products/ProductsCarousel'
import pic from '../images/images/01.jpg'

const base = 'http://api.rookies.co.za/api'

class ViewProduct extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            product: []
        }
    }
    render(){
       console.log('nothing',this.state.product)

        return(
            <div>
                <Container>
                    
                  <Grid>
                    <Grid.Column width={10}>
                    <Image src={pic} />
                    </Grid.Column>
                    <Grid.Column width={6}>
                    <Item>
                         <Item.Content>
                            <Item.Header as='h2'>Computer</Item.Header>
                            <Item.Description as='h4' style={{color:"red"}}>
                                R5000
                            </Item.Description>
                            <Item.Description as='h6' style={{textDecoration:'line-through'}}>
                                was R5500
                            </Item.Description >
                            <Item.Description as='h6' >
                                Store : GAME Mirand
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
                        <Products/>
                    </Grid.Column>

                </Grid>
                </Container>
            </div>
        )
    }
    async _getProduct(){
        let res = await fetch(base+'/product/'+this.props.match.params.filter)
        let result = await res.json();

        this.setState({product: result},()=>console.log('res',result))
    }

    ComponentDidMount()
    {
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