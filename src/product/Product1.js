import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap';
 import { Grid, Image, Header,Icon,Button } from 'semantic-ui-react';
import Slider from 'react-slick';
import slider from 'react-slick/lib/slider';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

const cardStyle= {
  height:290
}

const imgStyle= {
  height: 200,
  
}

class Product extends Component {
    constructor(props){
        super(props);
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
                            if(this.props.products.length > 0){
                                  return(
                                    
                            this.props.products.map(item=>{
                    
                                return(
                                
                                  <Grid.Column>
                                    <Card style={cardStyle} >
                                    <Link to ={"/product/"+item._id}> <CardImg style={imgStyle} src={"https://storage.googleapis.com/discountbuddy_products/" + item.image} top width="100%" alt="Card image cap" link="true"/></Link>
                                  <CardBody>
                                      <CardTitle>{item.name}</CardTitle>
                                      <CardSubtitle style={{color:"red", paddingBottom:"0.4em"}}>R{item.promo_price}</CardSubtitle>
                                      <CardSubtitle style={{color:"Grey", textDecoration:'line-through' , paddingBottom:"0.4em"}}>  was R{item.price}</CardSubtitle>
                                      <p style={{fontSize:"0.8rem"}}>{item.description}</p>
                                      </CardBody>
                                      </Card>
                                      </Grid.Column> 
                                )
                            })
                                )
                          }
                          })()
                        }
                 </Slider>
                 <div style={{textAlign: 'center', paddingTop: 10}}>
                  <Button icon basic color="red" onClick={this.previous.bind(this)}><Icon name="angle left" /></Button>
                  <Button icon basic color="red" onClick={this.next.bind(this)}><Icon name="angle right" /></Button>
                </div>
              </div>
                
        )}
        
    }

 function matchStateToProps(state)
 {
    return{
      auth: state.auth,
      products: state.products
    }
 } 

export default  connect(matchStateToProps)(Product);