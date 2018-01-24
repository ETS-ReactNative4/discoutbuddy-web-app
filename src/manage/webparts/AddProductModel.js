import React from 'react';
<<<<<<< HEAD
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Grid,  Button, Segment,Container, Checkbox, Icon, Table,Input, Dropdown, Menu, Form} from 'semantic-ui-react';
=======
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Grid, Segment,Container, Checkbox, Icon, Table,Input, Dropdown, Menu, Form,Select} from 'semantic-ui-react';
>>>>>>> 718365fe02556386df526a94c9d69b07fd761b2c
import FormGroup from 'semantic-ui-react/dist/commonjs/collections/Form/FormGroup';
import {connect} from 'react-redux'


class AddProduct extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
    }
    this.handleSubmit =this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


async handleSubmit() {
  let obj = new FormData();
    obj.append("productname", this.state.productname);
    obj.append("description", this.state.description);
    obj.append("price", this.state.price);
    obj.append("promo_price", this.state.promo_price);
    obj.append("promo_expiry_date", this.state.promo_expiry_date);
    obj.append("image", this.state.image);
    obj.append("store", this.state.store);
    obj.append("category", this.state.category);
    obj.append("owner", this.state.owner);


  // console.log(obj);
  let response = await fetch('http://api.rookies.co.za/api/add-product', {
      method: 'POST',
      body: obj
    });
  let result = response.json();
  console.log(result);
}



  render() {
    const { form } = this.state;
    return (
      <div>
        <Button basic color ="red" onClick={this.toggle} floated='right' icon labelPosition='middle' size='mall'> <Icon name='add circle' />Add Products</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Products</ModalHeader>
            <Form onSubmit={this.handleSubmit}>
              <ModalBody>
                <Form.Field>
                  <label for="store">Store</label>
                  <select type="select"  id="store" name="store"  onChange={(e)=>{this.setState({store: e.target.value})}}>
                  
                    { (()=>{
                        if(this.props.stores.length > 0){
                            return(
                        this.props.stores.map((store)=>{
                            return(
                                <option id="store" name="store" value={store._id}>{store.storename}</option>
                                )
                            })
                        )
                        }
                        })()
                    }
                  </select>
              </Form.Field>
              
               <Form.Field>
                  <label for="category">Category</label>
                  <select type="select"  id="category" name="category"  onChange={(e)=>{this.setState({store: e.target.value})}}>
                  
                    { (()=>{
                        if(this.props.categories.length > 0){
                            return(
                        this.props.categories.map((categories)=>{
                            return(
                                <option id="category" name="category" value={categories._id}>{categories.name}</option>
                                )
                            })
                        )
                        }
                        })()
                    }
                  </select>
               </Form.Field>
                <Form.Field>
                  <label>Product Name:</label>
                  <input type="text" id="productname" name="productname" onChange={(e)=>{this.setState({productname: e.target.value})}} placeholder='Product name' />
                </Form.Field>
                <Form.Field>                 <label>Description:</label>
                  <input type="text" id="description" name="description" onChange={(e)=>{this.setState({description: e.target.value})}} placeholder='Description' />
                </Form.Field>
                <Form.Field>
                  <label>Price:</label>
                  <input type="number" id="price"  name="price" onChange={(e)=>{this.setState({price: e.target.value})}} placeholder='Price' />
                </Form.Field>
                <Form.Field>
                  <label>Promo Price:</label>
                  <input type="number" id="promo_price" name="promo_price" onChange={(e)=>{this.setState({promo_price: e.target.value})}} placeholder='Promo Price' />
                </Form.Field>
                <Form.Field>
                  <label>Promo Expiry Date:</label>
                  <input type="date" id="promo_expiry_date" name="promo_expiry_date" onChange={(e)=>{this.setState({promo_expiry_date: e.target.value})}}  placeholder='Promo Expiry Date' />
                </Form.Field>

                <Form.Field>
                  <input type="number"   id="owner" name="owner" onChange={(e)=>{this.setState({owner: this.props.user.name})}} placeholder='owner' />
                </Form.Field>
                <Form.Field>
                  <label>Size:</label>
                  <input type="number" id="size"  name="size" onChange={(e)=>{this.setState({size: e.target.value})}} placeholder='size' />
                </Form.Field>
                <Form.Field>
                  <label>Weight:</label>
                  <input type="number" id="weight" name="weight" onChange={(e)=>{this.setState({weight: e.target.value})}} placeholder='Promo weight' />
                </Form.Field>
                <Form.Field>
                  <label>Size Measurement:</label>
                  <input type="number" id="size_measurement"  name="size_measurement" onChange={(e)=>{this.setState({size_measurement: e.target.value})}} placeholder='size measurement' />
                </Form.Field>
                <Form.Field>
                  <label>Weight Measurement:</label>
                  <input type="number" id="weight_measurement" name="weight_measurement" onChange={(e)=>{this.setState({weight_measurement: e.target.value})}} placeholder='weight measurement' />
                </Form.Field>
                <Form.Field>
                  <label>SKU:</label>
                  <input type="text" id="sku" name="sku" onChange={(e)=>{this.setState({sku: e.target.value})}} placeholder='sku' />
                </Form.Field>
                <Form.Field>
                  <label>Stock:</label>
                  <input type="number" id="stock" name="stock" onChange={(e)=>{this.setState({stock: e.target.value})}} placeholder='stock' />
                </Form.Field>

                <Form.Field>
                  <label>Picture:</label>
                  <input type="file" id="image" name="image" onChange={(e)=>{this.setState({image: e.target.value})}} placeholder='picture' />
                </Form.Field>



              </ModalBody>
              <ModalFooter>
                <Button type="submit" basic color="red" onClick={this.toggle}>Add Product</Button>
                <Button type="submit" basic color="red" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Form>
        </Modal>
      </div>
    );
  }
}

function matchStateToProps(state)
{
   return{
    stores: state.stores,
    products: state.products,
    user: state.auth,
    categories: state.categories
   }
}

export default  connect(matchStateToProps)(AddProduct);
