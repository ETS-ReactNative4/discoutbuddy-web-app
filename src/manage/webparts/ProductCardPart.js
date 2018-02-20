import React, {Component} from 'react';
import {Card, Button, Image, Icon, Confirm} from 'semantic-ui-react';
import {Col} from 'reactstrap';

class ProductCardComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }
    show(){
        this.setState({ open: true })
      }
      handleConfirm(id){
        this.deleteProduct(id);
        this.setState({
          open: false
        });
       }
      handleCancel(){
        this.setState({
          open: false
        });
      }
      async deleteProduct(id){
        let response = await fetch('/api/product/' + id, {
          method: "DELETE",
          credentials: "include"
        });
        let result = await response.json();
        this.props.history.replace('/manage');
      }
    render(){
        return(
            <Col md="3">
                <Card>
                    <Image src={"https://storage.googleapis.com/discountbuddy_products/" + this.props.product.image} style={{height: 100}}  />
                    <Card.Content>
                    <Card.Header>
                        {this.props.product.name}
                    </Card.Header>
                    <Card.Description>Price: {this.props.product.promo_price}</Card.Description>
                    <Card.Description>Promo Price: {this.props.product.price}</Card.Description>
                    
                        <Card.Description>
                        {this.props.product.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button onClick={this.togglePanel} circular icon color='green'><Icon name="edit" /></Button>
                        <Button circular icon onClick={this.show.bind(this)} color='red'><Icon name="trash" /></Button>
                        
                    </Card.Content>
                </Card>
                <Confirm
                        
                        style={{height: 200}}
                        open={this.state.open}
                        closeOnEscape
                        closeOnDimmerClick
                        confirmButton={<Button icon color="green"><Icon name="thumbs outline up"/> Confirm</Button>}
                        cancelButton={<Button icon color="red"><Icon name="cancel"/> Cancel</Button>}
                        content="Are you sure?"
                        header={'Delete ' + this.props.product.name}
                        onCancel={this.handleCancel.bind(this)}
                        onConfirm={this.handleConfirm.bind(this, this.props.product._id)}
                    />
            </Col>
        )
    }
    togglePanel(){
        this.props.toggleView(this.props.product);
    }
}

export default ProductCardComponent