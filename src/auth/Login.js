import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/environment';

class Login extends Component {
    constructor (props) {
        super(props)
        this.state= {
            email: '',
            password: '',
            first_name:'',
            team: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        fetch(`${APIURL}/race/signin`, {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (res) => res.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
        event.preventDefault()
        console.log(this.state)
        // this.props.getName(this.state)
    }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="li_email" type="text" name="email" placeholder="enter email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password"> Password </Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit"> Log In</Button>
                </Form>
            </div>
        )
    }
    }
export default Login;


