import React,{Component} from 'react';
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react';
//import { Link } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router-dom';
import {Link, Route} from 'react-router-dom';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';
import Backdrop from 'material-ui/Modal/Backdrop';
import AddStore from './addStoreModal';
import {Router, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class StorePart extends Component{
  constructor(props){
    super(props)
    this.state = {
      stores: []
    }
  }
  render(){
    return(
      <Container>

        <AddStore />
        <br/><Table >
          <Table.Header >
            <Table.Row>
              <Table.HeaderCell >Store</Table.HeaderCell>
              <Table.HeaderCell> Location</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
          {
            (()=>{
              if(this.state.stores.length > 0){
                return(
                  this.state.stores.map(store=>{
                    
                      return(
                        <Table.Row>
                            <Table.HeaderCell >{store.storename}</Table.HeaderCell>
                            <Table.HeaderCell>{store.formattedAddress}</Table.HeaderCell>
                            <Table.HeaderCell><Icon name='add circle' /><Link to="/manage/product">Products</Link></Table.HeaderCell>
                            <Table.HeaderCell><Icon name='edit' />Edit</Table.HeaderCell>
                            <Table.HeaderCell><Icon name='delete' />Delete</Table.HeaderCell>
                        </Table.Row>


                          )
                        })
                      )}
                  })()
          }
        </Table>
      </Container>
    )
  }
    async _getStore(){
      let response = await fetch('http://api.rookies.co.za/api/mystore/'+ this.props.match.params.filter);
      let result = await response.json();

      this.setState({
        stores: result.data
      }, ()=>{console.log('data coming back',this.state.stores)}
    );
    }
    
    componentDidMount(){
      this._getStore();
    }

  }


function matchStateToProps(state)
{
   return{
    user: state.auth,
    products: state.products,

   }
}

export default  connect(matchStateToProps)(StorePart);


