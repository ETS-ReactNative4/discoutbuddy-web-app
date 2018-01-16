import React, {Component} from 'react';
import { Container,Button, Form, Image, Icon } from 'semantic-ui-react';
import img from '../images/discount buddy.png';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]
class Register extends Component {
  render(){
    return(
        <Container text>
            <Image src={img} size='small' centered/><br/>
            
            <Form>
                <Form.Field>
                    <input placeholder='First Name' />
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

                <Button fluid  type='submit'><Icon name='user' />Register</Button><br/>
                <a href = "/login">With acount? Login</a>
            </Form>
        </Container>
    )
  }
}

export default Register;