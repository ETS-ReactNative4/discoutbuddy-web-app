import React from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
//import { Link } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router-dom';
import {Link, Route} from 'react-router-dom';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';
import Backdrop from 'material-ui/Modal/Backdrop';
import addStoreModal from './addStoreModal'

const StorePart = () => (
  <Container>
    <Button basic color ="red"><Icon name='add circle' />Add Store</Button>
    <Table >
      <Table.Header >
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell >Store Name</Table.HeaderCell>
          <Table.HeaderCell>Store Location</Table.HeaderCell>
          <Table.HeaderCell><Icon name='add circle' /><Link to="/manage/product">Go to Product</Link></Table.HeaderCell>
          <Table.HeaderCell><Icon name='edit' />Edit</Table.HeaderCell>
          <Table.HeaderCell><Icon name='delete' />Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
        
        </Table.Row>
        <Table.Row>
        
          
        </Table.Row>
        <Table.Row>
        
      
        </Table.Row>
      </Table.Body>

    </Table>
  </Container>
)

export default StorePart;
