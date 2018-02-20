import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import MapComponent from '../../components/map/mapComponent';
import {
    Image, 
    Card, 
    Form, 
    Button, 
    Icon, 
    Dimmer, 
    Loader, 
    Segment, 
    Header} from 'semantic-ui-react';

class StoreEditPart extends Component{
    constructor(props){
        super(props);
        this.state = {
           loading: false
        }
    }
    render(){

        return (
            <div>
                <Container>
                {!this.state.store && <Dimmer active><Loader>Loading...</Loader></Dimmer>}
                        <Row>
                        <Col md="7">
                        {this.state.store &&
                            <Form>
                                <Header as='h2'>
                                <Icon name='edit' />
                                <Header.Content>
                                  Edit: {this.state.store.storename}
                                </Header.Content>
                              </Header>
                                <Form.Input
                                defaultValue={this.state.store.storename}
                                label="Store Name"
                                onChange={(e)=>{this.setState({storename: e.target.value})}}
                                />
                                <Form.Input
                                defaultValue={this.state.store.formattedAddress}
                                disabled
                                label="Address"
                                />
                                <Form.Input
                                defaultValue={this.state.store.open}
                                type="time"
                                label="Opens"
                                onChange={(e)=>{this.setState({open: e.target.value})}}
                                />
                                <Form.Input
                                type="time"
                                defaultValue={this.state.store.closing}
                                label="Closes"
                                onChange={(e)=>{this.setState({closing: e.target.value})}}
                                />
                                <Form.Input
                                defaultValue={this.state.store.email}
                                label="Email"
                                onChange={(e)=>{this.setState({email: e.target.value})}}
                                />
                                <Form.Input
                                defaultValue={this.state.store.phoneNumber}
                                label="Phone #"
                                onChange={(e)=>{this.setState({phoneNumber: e.target.value})}}
                                />
                                <Form.Input
                                defaultValue={this.state.store.suburb}
                                label="Suburb"
                                onChange={(e)=>{this.setState({suburb: e.target.value})}}
                                />
                                <Form.Input
                                defaultValue={this.state.store.city}
                                label="City"
                                onChange={(e)=>{this.setState({city: e.target.value})}}
                                />
                                <Form.Input
                                defaultValue={this.state.store.province}
                                label="Province"
                                onChange={(e)=>{this.setState({province: e.target.value})}}
                                />
                            </Form>
                        }
                        </Col>
                        <Col md="5">
                            {this.state.store && <Card>
                                <Image src={"https://storage.googleapis.com/discountbuddy_stores/" + this.state.store.image} />
                                <Card.Content extra>
                                    {this.state.store.storename + ' ' + this.state.store.suburb}
                                    <Button fluid icon basic><Icon name="upload" /> Change Logo</Button>
                                </Card.Content>
                                <Card.Content>
                                <MapComponent isMarkerShown latitude={this.state.store.location[0]} longitude={this.state.store.location[1]} />
                                </Card.Content>
                            </Card>}
                        </Col>
                        
                        
                    </Row>
                    
                   
               
                    
                    <Row style={{marginTop: 10}}>
                        <Col md="6">
                                <Button fluid icon floated="left" color="red" onClick={()=>{this.props.history.goBack()}} ><Icon name="chevron left" /> Back</Button>
                              
                        </Col>
                        
                        <Col md="6">
                                
                                <Button fluid icon floated="right" color="green" onClick={this.updateStore.bind(this)} ><Icon name="save" /> Save</Button>
                        </Col>
                    </Row>
                    <Dimmer active={this.state.loading}>
                        <Loader>Processing...</Loader>
                    </Dimmer>
                </Container>
            </div> 
        )
    }

    async updateStore(){
        this.setState({
            loading: !this.state.loading
        });
       let obj = {
           "storename": this.state.storename || this.state.store.storename,
           "suburb": this.state.suburb || this.state.store.suburb,
           "city": this.state.city || this.state.store.city,
           "province":  this.state.province || this.state.store.province,
           "email": this.state.email || this.state.store.email,
           "phoneNumber": this.state.phoneNumber || this.state.store.phoneNumber,
           "open": this.state.open || this.state.store.open,
           "closing": this.state.open || this.state.store.closing
       }

       let response = await fetch('/api/store/' + this.state.store._id, {
           credentials: 'include',
           method: "PUT",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(obj)
       });
       let result = await response.json();
       this.setState({
           loading: !this.state.loading
       }, ()=>{
        this.props.history.replace('/manage/store');
       })
       
    }

    async getStore(){
        let response = await fetch('/api/store/' + this.props.match.params.storeId, {
            credentials: 'include'
        });
        let result = await response.json();
        this.setState({
            store: result.data
        });
    }
    componentDidMount(){
        this.getStore();
    }
}

export default withRouter(StoreEditPart);