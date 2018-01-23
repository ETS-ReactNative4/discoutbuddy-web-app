import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Grid, Segment,Container, Checkbox, Icon, Table,Input, Dropdown, Menu} from 'semantic-ui-react';
import FormGroup from 'semantic-ui-react/dist/commonjs/collections/Form/FormGroup';

class ModalE extends React.Component {
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
        <Button color ="red" onClick={this.toggle} floated='right' icon labelPosition='middle' size='mall'> <Icon name='add circle' />Add Multiple</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
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

export default ModalE;