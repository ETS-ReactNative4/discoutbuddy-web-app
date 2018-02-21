import React, {Component} from 'react';
import { Button, Header, Icon, Modal} from 'semantic-ui-react';
import {Link,Router, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class DeleteStore extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          stores: []
        }
        this.handleSubmit =this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
      }
      async handleSubmit(e) {
        e.preventDefault();
        
       let response = await fetch('/api/store/'+ this.props.match.params.filter, {
          method: 'DELETE',
          credentials: "include"       
         
          });
        let result = await response.json();
        if(result){
          this.setState({
            modal: false
          });
          this.props.history.push('/manage');
        }
      }
      
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    render(){
        return (
            <Modal trigger={<Button color='red'><Icon name='delete' />Delete</Button>} basic size='tiny'>
                <Header icon='archive' content='Delete Store' />
                <Modal.Content>
                    <p>Are you sure you want to delete the store?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' inverted>
                        <Icon name='remove' /> No
                    </Button>
                   {/*} <Link to ={"/manage/store/" + this.state.store._id}> <Button color='green' inverted onSubmit={this.handleSubmit} type="submit">
                        <Icon name='checkmark' /> Yes
        </Button></Link>*/}
                </Modal.Actions>
            </Modal>
        )
    }
}
function matchStateToProps(state){
    return {
        stores: state.auth
    }
  }

export default DeleteStore;