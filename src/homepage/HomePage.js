import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/index';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardBody,
  Container
} from 'reactstrap';
import { Segment, Button, Divider,Grid, Image } from 'semantic-ui-react';
import Products from '../product/Product1';
import Stores from '../store/Store1';
import Carousel1 from '../products carousel/ProductsCarousel';
import LandingScroll from '../products carousel/Dash';
import SubMenu from './SubMenu';
import Category from './Category';


class Home extends Component{
     constructor(props) {
    super(props);
  
  }

  componentWillMount(){
   
  }
   
    render(){
  
     return (
       <div style={{paddingTop: 70}}>
       <Container style={{width:"100%", height:"400"}}>
      <LandingScroll />
    
      <Grid>
        <Grid.Row>
              <Grid.Column computer={3} >
              <Grid.Column computer={3} >
              <Container style={{height:"1000",paddingTop:"2.1rem"}}>
                <Category />
                </Container>
                </Grid.Column>  
              </Grid.Column>
              <Grid.Column computer={10}>
              
                  <Divider hidden></Divider>
                
                  <Divider horizontal>All Discounts around you</Divider>
                  <Products/>
                  <Divider hidden></Divider>
                  <Divider horizontal>Stores Around</Divider>
                  <Divider hidden></Divider>
                  <Stores/>
                  <Divider hidden></Divider>
             
              </Grid.Column>
              <Grid.Column computer={3} />
        </Grid.Row>           
      </Grid>
      </Container>
      </div>
    );
    }
    
}



export default connect(null,actions)(Home);