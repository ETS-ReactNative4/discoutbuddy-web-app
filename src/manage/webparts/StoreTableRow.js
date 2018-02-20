import React, {Component} from 'react';
import {Table, Button, Confirm, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class StoreTableRow extends Component{
    constructor(props){
        super(props);
        this.togglePanel = this.togglePanel.bind(this);
    }
    render(){
        return(
            <Table.Row>
                <Table.Cell >{this.props.store.storename}</Table.Cell>
                <Table.Cell >{this.props.store.suburb}</Table.Cell>
                <Table.Cell >{this.props.store.city}</Table.Cell>
                <Table.Cell>
                <Link to={"/manage/product/" + this.props.store._id}><Button basic icon color="red"><Icon name='add circle' />Go to Products</Button></Link>
                <Button basic icon onClick={this.togglePanel} color="red"><Icon name='edit' />Edit</Button>
                <Button basic icon color="red" onClick={()=>{this.props.show()}}><Icon name='delete' />Delete</Button>
                
                <Confirm 
                    style={{height: 200}}
                    open={this.props.open}
                    closeOnEscape
                    closeOnDimmerClick
                    confirmButton={<Button icon color="green"><Icon name="thumbs outline up"/> Confirm</Button>}
                    cancelButton={<Button icon color="red"><Icon name="cancel"/> Cancel</Button>}
                    content="Are you sure? This action will delete all discount item related to this store"
                    header={'Delete ' + this.props.store.storename + ' - ' + this.props.store.city}
                    onCancel={()=>{this.props.handleCancel()}}
                    onConfirm={()=>{this.props.handleConfirm(this.props.store._id)}}
                    />
                    
                </Table.Cell>
            </Table.Row>
        )
    }
    togglePanel(){
        this.props.toggleView(this.props.store);
    }
}
export default StoreTableRow;