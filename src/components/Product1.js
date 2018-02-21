import React,{Component} from 'react';
import { Icon, Dimmer, Loader } from 'semantic-ui-react';
import Slider from 'react-slick';
import slider from 'react-slick/lib/slider';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {calDistance} from '../utils/geoDistance';


import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const cardStyle= {
  height:290
}

const imgStyle= {
  height: 200,
  
}

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
          loading: false
        }
      }
      next() {
        this.slider.slickNext()
      }
      previous() {
        this.slider.slickPrev()
      }
    render(){
      var settings = {
        dots:false,
        infinite:true,
        slidesToShow:4,
        SlidesToSctroll:1,
        autoplay:false
      };
        return (
                  <div>
                <Slider ref={c => this.slider = c } {...settings}>
                      
                        { 
                            (()=>{
                            if(this.props.geoProducts.length > 0){
                                  return(
                                    
                            this.props.geoProducts.map(item=>{
                    
                                return(
                                
                                  <Link to={"/product/" + item._id}>
                                  <Card style={{margin:5}}>
                                  <CardImg top width="100%" height="120px" src={"https://storage.googleapis.com/discountbuddy_products/" + item.image} alt={item.name} />
                                  <CardBody>
                                    <CardTitle>{item.name}</CardTitle>
                                    <CardSubtitle>R {item.promo_price} was R{item.price} </CardSubtitle>
                                    <CardText>{calDistance(this.props.coords,item.location)} KM from your location</CardText>
                                  </CardBody>
                                </Card>
                                    </Link>
                                    
                                      
                                )
                            })
                                )
                          }else{
                              return(
                                <Dimmer active>
                                  <Loader>Loading Products</Loader>
                                </Dimmer>
                              )
                          }
                          })()
                        }
                 </Slider>
                 <div style={{textAlign: 'center', paddingTop: 10}}>
                  <Button icon basic onClick={this.previous.bind(this)}><Icon name="chevron left" /></Button>
                  <Button icon basic onClick={this.next.bind(this)}><Icon name="chevron right" /></Button>
                </div>
              </div>
                
        )}
        
    }

 function matchStateToProps(state)
 {
    return{
      auth: state.auth,
      products: state.products,
      geoProducts: state.geoProducts,
      coords: state.coords
    }
 } 

export default  connect(matchStateToProps)(Product);