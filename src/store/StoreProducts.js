
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';
 import { Grid, Image, Header,Icon } from 'semantic-ui-react';
 import {Link} from 'react-router-dom';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';


 const cardStyle= {
  height:290,
  width:250
}

const imgStyle= {
  height: 200,
  
}

class StoreProducts extends Component{

    constructor(props)
    {
        super(props)
        this.state = {

        }
    }    
    render(){
        return(
            <Container> 
              <Grid>
                <Grid.Row columns={3} >
                {
                (()=>{
                    if(this.props.products.length > 0){
                        return(        
                            this.props.products.map(item=>{
                            if(item.store._id === this.props.storeId)
                                return(
                                <Grid.Column style={{paddingBottom:"0.9em"}}>
                                    <Card style={cardStyle}>
                                    <Link to ={"/product/"+item._id}> <CardImg style={imgStyle} src={"https://storage.googleapis.com/discountbuddy_products/" + item.image} 
                                    top width="100%" alt="Card image cap" link="true"/></Link>
                                <CardBody>
                                    <CardTitle>{item.name}</CardTitle>
                                    <CardSubtitle style={{color:"red",paddingBottom:"0.4em"}} >R{item.promo_price} </CardSubtitle>
                                    <CardSubtitle style={{color:"Grey", textDecoration:'line-through' ,paddingBottom:"0.4em"}}>  was R{item.price}</CardSubtitle>
                                    <p style={{fontSize:"0.75rem"}}>{item.description}</p>
                                    </CardBody>
                                    </Card>
                                    </Grid.Column>
                                )
                            })
                            )
                        }
                    })()
                }
                </Grid.Row>
              </Grid>
            </Container>
        )
    }

}


function matchStateToProps(state){
    return {
        products : state.products
    }
}

export default connect(matchStateToProps) (StoreProducts);







