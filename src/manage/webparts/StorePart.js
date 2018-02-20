import React,{Component} from 'react';
import { Button, Checkbox, Icon, Table, Sidebar, Image, Card, Form, 
  Dimmer, Loader, Divider, Header, Confirm} from 'semantic-ui-react';
import {Link, Route} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import AddStore from './addStoreModal';
import {Router, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import MapComponent from '../../components/map/mapComponent';
import StoreTableRow from './StoreTableRow';

class StorePart extends Component{
  constructor(props){
    super(props)
    this.state = {
      open: false,
      visible: false,
      loading: false
    }
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.show = this.show.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  show(){
    this.setState({ open: true })
  }
  handleConfirm(id){
    this.deleteStore(id);
    this.setState({
      open: false
    });
   }
  handleCancel(){
    this.setState({
      open: false
    });
  }

  toggleVisibility(item){
    this.setState({ 
      visible: !this.state.visible,
      store: item
     }, ()=>{console.log(this.state)})
  }

  render(){
    return(
      <Sidebar.Pushable style={{height: 600}}>
          {this.state.store && 
                  <Sidebar style={{padding: 20}} direction='right' animation='push' width='very wide' visible={this.state.visible}>
                    <Header
                    as="h2"
                    content="Edit Store"
                    />
                    <Row>
                        <Col md="7">
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
                                onChange={(e)=>{this.setState({opens: e.target.value})}}
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
                    
                        </Col>
                        <Col md="5">
                           <Card>
                                <Image src={"https://storage.googleapis.com/discountbuddy_stores/" + this.state.store.image} />
                                <Card.Content extra>
                                    {this.state.store.storename + ' ' + this.state.store.suburb}
                                    <Button fluid icon basic><Icon name="upload" /> Change Logo</Button>
                                </Card.Content>
                                <Card.Content>
                                <MapComponent isMarkerShown latitude={this.state.store.location[0]} longitude={this.state.store.location[1]} />
                                </Card.Content>
                            </Card>
                        </Col>
                        
                        
                    </Row>
                    <Row style={{marginTop: 10}}>
                        <Col md="6">
                                <Button fluid icon floated="left" color="red" onClick={()=>{this.setState({visible: !this.state.visible})}} ><Icon name="chevron left" /> Back</Button>
                              
                        </Col>
                        
                        <Col md="6">
                                
                                <Button fluid icon floated="right" color="green" onClick={this.updateStore.bind(this)} ><Icon name="save" /> Save</Button>
                        </Col>
                    </Row>
                    <Dimmer active={this.state.loading}>
                        <Loader>Processing...</Loader>
                    </Dimmer>
                    
                  </Sidebar>
                
            }
          <Sidebar.Pusher style={{padding: 10}}>
      <Container>
       
        <AddStore />
        <br />
        <Row>
        {!this.state.stores && <Dimmer active>
                            <Loader>Loading Stores</Loader>
                          </Dimmer>}
        {
          this.state.stores &&
              
                <Col>
                  <Table basic="very" celled>
                    <Table.Header >
                      <Table.Row>
                        <Table.HeaderCell >Store</Table.HeaderCell>
                        <Table.HeaderCell>Suburb</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {
            
                  this.state.stores.map(store=>{
                    
                      return(
                        
                        <StoreTableRow key={store._id} toggleView={this.toggleVisibility} store={store} show={this.show} handleCancel={this.handleCancel} handleConfirm={this.handleConfirm} open={this.state.open} />


                          )
                        })
                      }
                      </Table.Body>
                      </Table>
                     
                      </Col>
                      } 
                  </Row>
  
      </Container>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
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
       "open": this.state.opens || this.state.store.open,
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
    this.setState({
      visible: !this.state.visible
    });
   });   
}
    async deleteStore(id){
      let response = await fetch('/api/store/' + id, {
        method: "DELETE",
        credentials: "include"
      });
      let result = await response.json();
      this.props.history.replace('/manage');
    }
    async _getStore(){
      let response = await fetch('/api/mystore', {credentials: "include"});
      let result = await response.json();

      this.setState({
        stores: result
      }
    );
    }
    
    componentDidMount(){
      this._getStore();
    }

  }


function matchStateToProps(state)
{
   return{
    user: state.auth,
    products: state.products,

   }
}

export default  connect(matchStateToProps)(StorePart);


