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
  Container,
  Row,
  Col,
  Jumbotron
} from 'reactstrap';
import { Segment, Button, Divider,Grid, Image } from 'semantic-ui-react';
import Products from '../components/Product1';
import Stores from '../components/Store1';
import Carousel1 from '../components/ProductsCarousel';
import LandingScroll from '../components/LandingScroll';
import SubMenu from '../components/SubMenu';
import Category from '../components/Category';


class Home extends Component{
     constructor(props) {
    super(props);
  
  }

  componentWillMount(){
   
  }
   
    render(){
  
     return (
       <div className="homepage">
       
     
      
       <Container>
       <LandingScroll  />
       <Row style={{marginBottom:10,marginTop:10, backgroundColor:"black"}}>
       
       </Row>
         <Row>
           <Col md="3">
              
                <Category />
              
          </Col>
           <Col md="9">
            <Segment>
            
              <Divider hidden></Divider>
              <Divider horizontal>All Discounts around you</Divider>
              <Products/>
              <Divider hidden></Divider>
              <Divider horizontal>Stores Around</Divider>
              <Divider hidden></Divider>
              <Stores/>
              <Divider hidden></Divider>
            </Segment>
           </Col>
         </Row>
      </Container>
      </div>
     
    );
    }
    
}



export default connect(null,actions)(Home);