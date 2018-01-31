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
        dots:false,
        prevArrow:<button><Icon size="large" name="angle  left"/></button>,
        nextArrow: <button><Icon size="large" name="angle  right"/></button>,
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
                        
                            <Link to ={"/singlestore/"+item._id}> <Image  src={"https://storage.googleapis.com/discountbuddy_stores/" + item.image}
                            size='small' alt="Card image cap" link="true"/></Link>
                          
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