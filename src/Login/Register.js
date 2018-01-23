import React, {Component} from 'react';
import { Container,Button, Form, Image, Icon } from 'semantic-ui-react';
import img from '../images/discount buddy.png';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]
class Register extends Component {
    constructor(props){
        super(props);
  
        this.state = {
          users: []
  
        }
  
        this.handleSubmit =this.handleSubmit.bind(this);
      }
  
    handleSubmit(e) {
      e.preventDefault();
      let obj = {
        "FirstName":this.state.firstName,
        "lastName":this.state.lastName,
        "email": this.state.email,
        "password": this.state.password
      }
      console.log(obj);
      fetch('http://api.rookies.co.za/auth/signup', {
          method: 'POST',
          headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
          }
          ,
          body: JSON.stringify(obj)
        })
        .then((data)=> {
          return data.json()
        }).then((body)=>{
          console.log(body);
        sessionStorage.setItem("user",JSON.stringify(body));
        this.props.history.push('/');
  
        });
    }
  render(){
    return(
        <Container text >
            <Grid centered>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image src={img} size='small' centered/><br/>
            
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Field>
                                    <input placeholder='First Name' onChange={(e)=>{this.setState({firstName: e.target.value})}} />
                                </Form.Field>

                                <Form.Field>
                                    <input placeholder='Last Name' onChange={(e)=>{this.setState({lastName: e.target.value})}} />
                                </Form.Field>
                                <Form.Select fluid options={options} placeholder='Gender' />

                                <Form.Field>
                                    <input placeholder='Email' onChange={(e)=>{this.setState({email: e.target.value})}} />
                                </Form.Field>

                                <Form.Field>
                                    <input placeholder='Password' onChange={(e)=>{this.setState({password: e.target.value})}} />
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