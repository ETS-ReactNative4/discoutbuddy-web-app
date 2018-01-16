import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {  Card, Icon,Image, Input, Segment, Divider, Grid } from 'semantic-ui-react'
import { CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap'
import Moment from 'moment'



const cardStyle = {
  height:250
}

const imgStyle = {
height:200
}

class Product extends Component {
  render(){
    return(
      <div className="container">
        <Grid relaxed='very' columns={4}>
          <Grid.Column>
            <Card style={cardStyle}>
              <CardImg top  style={imgStyle} width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5AICzPF8vXd0BBolbGY95Vu2wrBUBbZEAK5yu4uobSgUUBZgWg" alt="produc img" />
            </Card>
            <CardTitle>Shoes</CardTitle>
            <CardSubtitle>R76776</CardSubtitle>
          </Grid.Column>

          <Grid.Column>
            <Card style={cardStyle}>
              <CardImg top style={imgStyle}  width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdTz3Ubk30mr1NWpXHkeAvrZmItULBHwowkmytlfek3F18ysdp" alt="produc img" />
            </Card>
            <CardTitle>Camera</CardTitle>
            <CardSubtitle>R76776</CardSubtitle>
          </Grid.Column>

          <Grid.Column>
            <Card style={cardStyle}>
                <CardImg top style={imgStyle} width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44YM5gJdgpjEr23vF7d9XT9K44CKAwkkcSSDoL1xH_uIf4U-vGg" alt="produc img" />
            </Card>
            <CardTitle>Tablats</CardTitle>
            <CardSubtitle>R76776</CardSubtitle>
          </Grid.Column>

          <Grid.Column>
            <Card style={cardStyle}>
                <CardImg top style={imgStyle} width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuyHWXsbdhDCi290P344vAwxnNCc8TgAASzVOYn663DKPOxMJ" alt="produc img" />
            </Card>
            <CardTitle>Iphone</CardTitle>
            <CardSubtitle  color="red">R76776</CardSubtitle>
          </Grid.Column>
        </Grid>
      </div>
    )
  }

}

export default Product;
