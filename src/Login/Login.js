import React, {Component} from 'react';
import { Container,Button, Form, Image, Icon} from 'semantic-ui-react';
import img from '../images/discount buddy.png';



class Login extends Component {
  render(){
    return(
        <Container text>
            <Image src={img} size='small' centered/><br/>
            <Form>
                <Form.Field>
                    <input placeholder='Email' />
                </Form.Field>

                <Form.Field>
                    <input placeholder='Password' />
                </Form.Field>

                <Button fluid  type='submit'><Icon name='user' />Login</Button><br/>
                <Button fluid color = 'facebook' type='submit'><Icon  name='facebook f' />Login with Facebook</Button><br/>
                <Button fluid color = 'google plus' type='submit'><Icon  name='google plus' />Login with Google </Button><br/>
                <a href = "/register">Without acount? Register</a>
            </Form>

        </Container>
    )
  }
}

export default Login;