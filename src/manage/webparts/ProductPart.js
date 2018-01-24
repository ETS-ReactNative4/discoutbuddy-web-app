import React, {Component} from 'react';
import {Grid, Segment,Container,Button, Checkbox, Icon, Table,Input, Dropdown, Menu} from 'semantic-ui-react';
import AddMultipleModal from './AddMultipleModal';
import AddProductModel from "./AddProductModel"
const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

class ProductPart extends Component{
    render(){
        return (
          <Container>
              <Grid columns='equal'>
                <Grid.Row>
                  <Grid.Column>
                    <Table.Row>
                      <Table.HeaderCell colSpan='4'>
                       <AddProductModel></AddProductModel>

                      </Table.HeaderCell>
                    </Table.Row>
                  </Grid.Column>
                  <Grid.Column>
                    <Table.Row>
                      <Table.HeaderCell colSpan='4'>
                        <AddMultipleModal></AddMultipleModal>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Grid.Column>
                  <Grid.Column>
                     <Dropdown icon="angle down"  placeholder='Select Category' search selection  />
                  </Grid.Column>
                  <Grid.Column>
                      <Input icon='search' placeholder='Search Category...' />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Column>
                  <Table.Row>
                    <Table.HeaderCell colSpan='4'>
                      <Button color ="white" floated='right' icon labelPosition='middle' size='small'>
                        <Icon name='sort alphabet ascending' />

                      </Button>
                    </Table.HeaderCell>
                  </Table.Row>
                </Grid.Column>
              </Grid>
            </Container>

        )
    }
}

export default ProductPart;
