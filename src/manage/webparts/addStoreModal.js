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
         <Button color ="red" onClick={this.toggle} floated='right' icon labelPosition='middle' size='mall'> <Icon name='add circle' />Add Multiple</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Products</ModalHeader>
            <Form >
              <ModalBody>
               <Form.Field>
                 <label>Product Name:</label>
                 <input type="text" id="productname" name="productname"  placeholder='Product name' />
               </Form.Field>
               <Form.Field>                 <label>Description:</label>
                 <input type="text" id="description" name="description"  placeholder='Description' />
               </Form.Field>
               <Form.Field>
                 <label>Price:</label>
                 <input type="number" id="price"  name="price"  placeholder='Price' />
               </Form.Field>
               <Form.Field>
                 <label>Promo Price:</label>
                 <input type="number" id="promo_price" name="promo_price"  placeholder='Promo Price' />
               </Form.Field>
               <Form.Field>
                 <label>Promo Expiry Date:</label>
                 <input type="date" id="promo_expiry_date" name="promo_expiry_date"  placeholder='Promo Expiry Date' />
               </Form.Field>
                <Form.Field label='Store' control='select'>
                  <option value='game'>game</option>
                  <option value='pnp'>pnp</option>
                </Form.Field>

                <Form.Field label='Gategory' control='select'>
                  <option value='electronic'>electronic</option>
                  <option value='games'>games</option>
                </Form.Field>
                <Form.Field>
                  <label>Picture:</label>
                  <input type="file" id="image" name="image"  placeholder='picture' />
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
