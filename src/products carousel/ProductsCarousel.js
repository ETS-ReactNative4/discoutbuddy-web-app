import React,{Component} from 'react'
import Slider from 'react-slick';
import {Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const cardStyle = {
    height:250
  }
  
  function SampleNextArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style, display: 'inline', background: 'red'}}
        onClick={onClick}
      ></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style, display: 'circle', background: 'red'}}
        onClick={onClick}
      ></div>
    );
  }

class SimpleSlider extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            products:[]
        }
    }
    render () {
        var settings = {
            dots: false,
            prevArrow: <SamplePrevArrow />,
            nextArrow: <SampleNextArrow />,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
           
        };
        
        const {products,categoryId} = this.props
       
        return (
          <Slider {...settings}>
          {
              (()=>{
                if(products.length > 0){
                 
                  return(
                    
                  products.map(product=>{
                  {
                    if(product.category._id === categoryId)
                    return(
                        <div >
                           <img href={"/product/"+product._id} style={cardStyle}src={"https://storage.googleapis.com/discountbuddy_products/"+ product.image} />
                        </div>
                  )

                }})
            )
            }
            })()
          }
            
          </Slider>
        );
      }
}
function matchStateToProps(state){
  return{
    products: state.products
  }
}

export default connect(matchStateToProps)(SimpleSlider);