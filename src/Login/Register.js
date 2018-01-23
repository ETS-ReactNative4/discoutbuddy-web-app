import React, {Component} from 'react';
import { Container,Button, Form, Image, Icon } from 'semantic-ui-react';
import img from '../images/discount buddy.png';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]
class Register extends Component {
  render(){
    return(
        <Container text >
            <Grid centered>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image src={img} size='small' centered/><br/>
            
                            <Form>
                                <Form.Field>
                                    <input placeholder='First Name'  />
                                </Form.Field>

                                <Form.Field>
                                    <input placeholder='Last Name' />
                                </Form.Field>
                                <Form.Select fluid options={options} placeholder='Gender' />

                                <Form.Field>
                                    <input placeholder='Email' />
                                </Form.Field>

                                <Form.Field>
                                    <input placeholder='Password' />
                                </Form.Field>
                                <Form.Field>
                                    <input type ="hidden" value="true" />
                                </Form.Field>

                                <Button fluid  type='submit'><Icon name='user' />Register</Button><br/>
                                <a href = "/login">Do you have an acount? Login</a>
                            </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
           
        </Container>
    )
  }
}

export default Register;