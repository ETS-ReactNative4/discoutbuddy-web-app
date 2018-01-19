import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';
 import { Grid, Image, Header,Icon } from 'semantic-ui-react';
import Slider from 'react-slick';
import slider from 'react-slick/lib/slider';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const cardStyle= {
  height:250
}

const imgStyle= {
  height: 120,
  
}

class Store extends Component {
    constructor(props){
        super(props);
    
      }
    render(){
      var settings = {
        dots:true,
        prevArrow:<button><Icon size="large" name="angle arrow left"/></button>,
        nextArrow: <button><Icon size="large" name="angle arrow right"/></button>,
        infinite:true,
        slidesToShow:4,
        SlidesToSctroll:1,
        autoplay:false
      };
        console.log("My stores",this.props.stores)
        return (
            <div>
                <Slider {...settings}>
                { 
                     (()=>{
                    if(this.props.stores.length > 0){
                           return(
                             
                    this.props.stores.map(item=>{
                       
                        return(
                        
                          <Grid.Column>
                            <Card style={cardStyle} key={item._id}>
                            <Link to ={"/singlestore/"+item._id}> <CardImg style={imgStyle} src={"https://storage.googleapis.com/discountbuddy_stores/" + item.image} top width="100%" alt="Card image cap" link="true"/></Link>
                           <CardBody>
                               <CardTitle>{item.storename}</CardTitle>
                               <CardSubtitle>4 Items</CardSubtitle>
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
                </div>
                
        )}
        
    }
    function matchStateToProps(state){
      return {
          auth: state.auth,
          stores : state.stores
      }
  }

export default  connect(matchStateToProps)(Store);