import React from 'react';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Button,Grid, Segment,Container, Checkbox, Icon, Table,Input, Dropdown, Menu, Form} from 'semantic-ui-react';
import FormGroup from 'semantic-ui-react/dist/commonjs/collections/Form/FormGroup';
import {Link,Router, withRouter} from 'react-router-dom';

import {connect} from 'react-redux';



class AddStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          user: ""
        }
        this.handleSubmit =this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
      }
      handleSubmit(e) {
        e.preventDefault();
        let obj = new FormData();//{
        obj.append("storename", this.state.storename);
        obj.append("owner", this.state.owner);
        obj.append("streetAddress",this.state.streetAddress);
        obj.append("suburb", this.state.suburb);
        obj.append("city",this.state.city);
        obj.append("province",this.state.province);
        obj.append("phoneNumber",this.state.phoneNumber);
        obj.append("email",this.state.email);
        obj.append("image",this.state.image);
        obj.append("closing",this.state.closing);
        obj.append("open",this.state.open);
        obj.append("image", this.state.image);

        //}
        console.log(this.state);
        fetch('http://api.rookies.co.za/api/add-store', {
          method: 'POST',
          
          credentials: "include",        
          body: obj
          })
          .then((data)=> {
            return data.json()
          }).then((body)=>{
            console.log(body);
         // this.props.history.push('/dashboard');
          });
      }
      
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    

  render() {
     const { form } = this.state;
    //  console.log("user is:",this.props.user);
    return (
      <div>
         <Button basic color ="red" onClick={this.toggle} floated='left' icon labelPosition='middle' size='mall'> <Icon name='add circle' />Add Store</Button><br/>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Store</ModalHeader>
            <Form  onSubmit={this.handleSubmit} >
              <ModalBody>
               <Form.Field>
                 <input type="text"  placeholder='Store name'  id="storename" name="storenname" onChange={(e)=>{this.setState({storename: e.target.value})}} />
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
                 <input type="time" placeholder='Closing Time'  onChange={(e)=>{this.setState({closing: e.target.value})}}/>
               </Form.Field>
               <Form.Field> 
                  <label>Opening Time</label> 
                 <input type="time" placeholder='Opening Time'  onChange={(e)=>{this.setState({open: e.target.value})}}/>
               </Form.Field>
               <Form.Field> 
                  <label>Image</label> 
                 <input type="file"  onChange={(e)=>{this.setState({image: e.target.files[0]})}}/>
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
function matchStateToProps(state){
  return {
    user: state.auth
  }
}

export default connect(matchStateToProps)(withRouter(AddStore));


