import React from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
//import { Link } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router-dom';
import {Link, Route} from 'react-router-dom';

const StorePart = () => (
  <Table compact celled definition>
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

    <Table.Footer >
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='4'>
          <Button color ="red" floated='right' icon labelPosition='middle' size='big'>
            <Icon name='add circle' /> 
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default StorePart;
