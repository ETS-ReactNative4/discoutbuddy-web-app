import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Grid,  Button, Segment,Container, Checkbox, Icon, Table,Input, Dropdown, Menu, Form,Select} from 'semantic-ui-react';
import FormGroup from 'semantic-ui-react/dist/commonjs/collections/Form/FormGroup';
import {connect} from 'react-redux'


const options = [
{ key: 'm', text: 'Male', value: 'male' },
{ key: 'f', text: 'Female', value: 'female' },
]

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
    let response = await fetch('http://api/rookies.co.za/api/add-product', {
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
        <Button basic color ="red" onClick={this.toggle} floated='right'  size='small'> <Icon name='add circle' />Add Products</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Products</ModalHeader>
            <Form onSubmit={this.handleSubmit}>
              <ModalBody>

                <Form.Field control={Select} label='Store' onChange={(e)=>{this.setState({store: e.target.value})}} options={
                  (()=>{
                    if(this.props.stores.length > 0){
                        return(
                    this.props.stores.map((stores)=>{
                      {/* console.log(stores.storename); */}
                        return(
                              <option id="store"  name="store" value={stores._id}>{stores.storename}</option>
                                )

                        })
                    )
                    }
                  })()
                } placeholder='Store' />
                <Form.Field control={Select} label='Category' onChange={(e)=>{this.setState({category: e.target.value})}} options={
                  (()=>{
                    if(this.props.categories.length > 0){
                        return(
                    this.props.categories.map((categories)=>{
                      {/* console.log(categories.name); */}
                        return(
                            <option id="category" name="category" value={categories._id}>{categories.name}</option>
                                  )
                        })
                    )
                    }
                    })()
                      } placeholder='Category' />


                 <Form.Field>
                   <label>Product Name:</label>
                   <input type="text" id="productname" name="productname" onChange={(e)=>{this.setState({productname: e.target.value})}} placeholder='Product name' />
                 </Form.Field>
                 <Form.Field> 
                   <label>Description:</label>
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
                   <input type="date" id="promo_expiry_date" name="promo_expiry_date" onChange={(e)=>{this.setState({promo_expiry_date: e.target.value})}} onchange="{this.changeHandler}" placeholder='Promo Expiry Date' />
                 </Form.Field>

                 <Form.Field>
                   <input type="hidden"   id="owner" name="owner" onChange={(e)=>{this.setState({owner:  e.target.value})}} placeholder='owner' />
                 </Form.Field>
                 <Form.Field>
                   <label>Size:</label>
                   <input type="number" id="size"  name="size" onChange={(e)=>{this.setState({size: e.target.value})}} placeholder='size' />
                 </Form.Field>
                 <Form.Field>
                   <label>Weight:</label>
                   <input type="number" id="weight" name="weight" onChange={(e)=>{this.setState({weight: e.target.value})}} placeholder='Promo_weight' />
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
     categories: state.categories
   }
}

export default  connect(matchStateToProps)(AddProduct);
