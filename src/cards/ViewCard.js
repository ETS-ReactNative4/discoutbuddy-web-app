import React,{ Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ProductCard from './ProductCard'
import { connect } from "react-redux";


class ViewProduct extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            
        }
    }
    render(){
       
        return(
            <div>
                <Grid centered columns={2}>
                    <Grid.Column>
                        <ProductCard productId={this.props.match.params.filter}/>
                    </Grid.Column>
                    <Grid.Row centered columns={4}>
                                    <Grid.Column>
                                        <Image src='/assets/images/wireframe/image.png' />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Image src='/assets/images/wireframe/image.png' />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Image src='/assets/images/wireframe/image.png' />
                                    </Grid.Column>
                                    </Grid.Row>
                    
                                    <Grid.Row centered columns={4}>
                                    <Grid.Column>
                                        <Image src='/assets/images/wireframe/image.png' />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Image src='/assets/images/wireframe/image.png' />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Image src='/assets/images/wireframe/image.png' />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Image src='/assets/images/wireframe/image.png' />
                                    </Grid.Column>
                                    </Grid.Row>
 
            
                </Grid>
            </div>
        )
    }
}
  
function matchStateToProps(state)
{
    return{
        auth: state.auth,
        
    }
}

export default connect(matchStateToProps)(ViewProduct)