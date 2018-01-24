import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Grid, Segment,Container, Checkbox, Icon, Table,Input, Dropdown, Menu, Form} from 'semantic-ui-react';
import FormGroup from 'semantic-ui-react/dist/commonjs/collections/Form/FormGroup';



class AddStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
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
         <Button color ="red" onClick={this.toggle} floated='right' icon labelPosition='middle' size='mall'> <Icon name='add circle' />Add Store</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Store</ModalHeader>
            <Form >
              <ModalBody>
               <Form.Field>
                 <label>Store Name:</label>
                 <input type="text" id="productname" name="productname"  placeholder='Product name' />
               </Form.Field>
               <Form.Field> 
                 <label>Location:</label>
                 <input type="text" id="description" name="description"  placeholder='Description' />
               </Form.Field>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" color="Danger" onClick={this.toggle}>Add Product</Button>
                <Button type="submit" color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Form>
        </Modal>
      </div>
    );
  }
}

export default AddStore;
