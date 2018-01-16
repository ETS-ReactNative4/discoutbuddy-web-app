import React from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const cardStyle={
    height:250
}

const imgStyle={
    height:200
}
const Stores = () => (
    
    
  <Grid container columns={4}>
    <Grid.Column>
    <div>
      <Card style={cardStyle} class="active">
        <CardImg style={imgStyle}  top width="100%" src="http://www.cityview.co.za/ImageHandler.ashx?fId=156" alt="Card image cap" />
        </Card>
          <CardTitle><h4>Game Store</h4></CardTitle>
          <CardSubtitle>12 Items<Header as="h6" floated="right" color="red">11km away</Header></CardSubtitle>
    </div>
    </Grid.Column>

    <Grid.Column>
    <div>
      <Card style={cardStyle} class="active">
        <CardImg style={imgStyle}  top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1SKSdpgvagW6D2B4GPfceOSJh3JgOBdu6bpfngneqG782zLDVw" alt="Card image cap" />
        </Card>
          <CardTitle>Nando's</CardTitle>
          <CardSubtitle>3 Items <Header as="h6" floated="right" color="red">11km away</Header></CardSubtitle>
    </div>
    </Grid.Column>

    <Grid.Column>
    <div>
      <Card style={cardStyle} class="active">
        <CardImg style={imgStyle}  top width="100%" src="http://factory-shops-cape-town-south-africa.blaauwberg.net/uploads/image/factory_shop_brands_pick_n_pay_logo.jpg" alt="Card image cap" />
        </Card>
          <CardTitle>Pic n Pay store</CardTitle>
          <CardSubtitle>24 Items <Header as="h6" floated="right" color="red">11km away</Header></CardSubtitle>
    </div>
    </Grid.Column>

    <Grid.Column>
    <div>
      <Card style={cardStyle} class="active">
        <CardImg style={imgStyle}  top width="100%" src="http://www.almans.co.za/wp-content/uploads/images/Retailer-7.jpg" alt="Card image cap" />
        </Card>
          <CardTitle>Spar Supermarket</CardTitle>
          <CardSubtitle>18 Items <Header as="h6" floated="right" color="red">11km away</Header></CardSubtitle>
    </div>
    </Grid.Column>
  </Grid>

)

export default Stores 