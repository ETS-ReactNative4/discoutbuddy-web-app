import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap';
 import { Grid, Image, Header,Icon,Button } from 'semantic-ui-react';
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
                 <div style={{textAlign: 'center', paddingTop: 10}}>
                  <Button icon basic color="red" onClick={this.previous.bind(this)}><Icon name="angle left" /></Button>
                  <Button icon basic color="green" onClick={this.next.bind(this)}><Icon name="angle right" /></Button>
                </div>
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