import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/environment';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            team: '',
            password: '',
            confirmPass: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    comparePass = () => {
        if (this.state.password !== this.state.confirmPass) {
            return (
                <div>
                    Passwords do not match!
                </div>
            )
        } else {
            return (<div></div>)
        }
    }

    handleSubmit = (event) => {
        fetch(`${APIURL}/race/createuser`, {
            method: 'POST',
            body: JSON.stringify({ user: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (res) => res.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })

        event.preventDefault()
    }


    render() {
        return (
            <div>
                <h1> Register </h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="su_email" type="email" name="email" placeholder="enter email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="first_name">First Name</Label>
                        <Input id="su_first_name" type="text" name="first_name" placeholder="enter first name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="last_name">Last Name</Label>
                        <Input id="su_last_name" type="text" name="last_name" placeholder="enter last name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Team Name</Label>
                        <Input id="su_team" type="text" name="team" placeholder="enter team name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirmPass">Confirm Password</Label>
                        <Input id="su_ConfirmPass" type="password" name="confirmPass" placeholder="re-enter password" onChange={this.handleChange} />
                    </FormGroup>
                    {this.comparePass()}
                    <Button type="submit"> Submit </Button>
                    <br />
                    <br />
                </Form>
            </div>


        )
    }


}

export default Signup;