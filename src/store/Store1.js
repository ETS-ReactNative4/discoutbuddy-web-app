import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';
 import { Grid, Image, Header,Icon } from 'semantic-ui-react';
import Slider from 'react-slick';
import slider from 'react-slick/lib/slider';
import {Link} from 'react-router-dom';

const cardStyle= {
  height:250
}

const imgStyle= {
  height: 200
}

class Store extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          stores: []
        }
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
        
        return (
                 
                 
                  <div>
                      <Slider {...settings}>
                { 
                     (()=>{
                    if(this.state.stores.length > 0){
                           return(
                             
                    this.state.stores.map(item=>{
                       
                        return(
                        
                          <Grid.Column>
                            <Card style={cardStyle}>
                            <Link to ={"/singlestore/"+item._id}> <CardImg style={imgStyle} src={item.image} top width="100%" alt="Card image cap" link="true"/></Link>
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
        
        async _getStores(){
            let response = await fetch('http://api.rookies.co.za/api/store');
            let result1 = await response.json();
        
            this.setState({
              stores: result1.data
            });
          }
        
          componentDidMount(){
            this._getStores();
          }
    }

export default Store;