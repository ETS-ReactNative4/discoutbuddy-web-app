import React from 'react';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Button,Grid, Segment,Container, Checkbox, Icon, Table,Input, Dropdown, Menu, Form} from 'semantic-ui-react';
import FormGroup from 'semantic-ui-react/dist/commonjs/collections/Form/FormGroup';



class AddStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        }
        this.handleSubmit =this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
      }
      handleSubmit(e) {
        e.preventDefault();
        let obj = {
          "Storename": this.state.Storename,
          "owner": this.state.owner,
          "streetAddress":this.state.suburb,
          "city":this.state.city,
          "province":this.state.province,
          "phoneNumber":this.state.phonenumber,
          "email":this.state.email,
          "image":this.state.image,
          "closing":this.state.closing,
          "open":this.state.open

        }
        console.log(obj);
        fetch('http://api.rookies.co.za/api/add-store', {
            method: 'POST',
            headers:{
              "Accept":"application/json",
              "Content-Type":"application/json"
            }
            ,
            body: JSON.stringify(obj)
          })
          .then((data)=> {
            return data.json()
          }).then((body)=>{
            console.log(body);
          this.props.history.push('/dashboard');
          });
      }
      
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    

  render() {
     const { form } = this.state;
    return (
      <div>
         <Button basic color ="red" onClick={this.toggle} floated='left' icon labelPosition='middle' size='mall'> <Icon name='add circle' />Add Store</Button><br/>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Store</ModalHeader>
            <Form  onSubmit={this.handleSubmit} >
              <ModalBody>
               <Form.Field>
                 <input type="text"  placeholder='Store name'  onChange={(e)=>{this.setState({Storename: e.target.value})}} />
               </Form.Field>
               <Form.Field>
                 <input type="hidden"  placeholder='Owner'  onChange={(e)=>{this.setState({owner: this.props.user._id})}} />
               </Form.Field>
               <Form.Field>
                 <input type="text"  placeholder='Street Address'  onChange={(e)=>{this.setState({streetAddress: e.target.value})}}/>
               </Form.Field>
               <Form.Field>
                 <input type="text"  placeholder='Surburb'  onChange={(e)=>{this.setState({suburb: e.target.value})}}/>
               </Form.Field>
               <Form.Field>
                 <input type="text"  placeholder='city'  onChange={(e)=>{this.setState({city: e.target.value})}}/>
               </Form.Field>
               <Form.Field>
                 <input type="text"  placeholder='Province' onChange={(e)=>{this.setState({province: e.target.value})}} />
               </Form.Field>
               <Form.Field>
                 <input type="tel"  placeholder='Telephone'  onChange={(e)=>{this.setState({phoneNumber: e.target.value})}} />
               </Form.Field>
               <Form.Field>
                 <input type="email"  placeholder='Email'  onChange={(e)=>{this.setState({email: e.target.value})}}/>
               </Form.Field>
               <Form.Field>
                 <label>Closing Time</label> 
                 <input type="time" placeholder='Closing Time'  onChange={(e)=>{this.setState({closingtime: e.target.value})}}/>
               </Form.Field>
               <Form.Field> 
                  <label>Opening Time</label> 
                 <input type="time" placeholder='Opening Time'  onChange={(e)=>{this.setState({openingtime: e.target.value})}}/>
               </Form.Field>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" basic color="red" onClick={this.toggle}>Add Store</Button>
                <Button type="submit" basic color="red" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Form>
        </Modal>
      </div>
    );
  }
}

export default AddStore;
