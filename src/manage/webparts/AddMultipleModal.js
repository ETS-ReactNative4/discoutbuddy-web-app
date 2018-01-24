import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input,FormGroup} from 'reactstrap';
import {Grid, Segment,Container, Checkbox, Icon, Table, Dropdown, Menu,boarderColor} from 'semantic-ui-react';


class AddMultipleModal extends React.Component {
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
    return (
      <div>
        <Button color ="Danger" onClick={this.toggle} floated='right' icon labelPosition='middle' size='mall'> <Icon name='add circle' />Add Multiple</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
          <ModalHeader toggle={this.toggle}>Add Multiple Products</ModalHeader>
          <ModalBody>
           <FormGroup>
               <Input type="file" name="file" id="AddFile" />
           </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="red" onClick={this.toggle}>Save</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMultipleModal;