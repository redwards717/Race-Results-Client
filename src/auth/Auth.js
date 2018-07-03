import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import { Route } from 'react-router-dom';
import './Auth.css';

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            signupPressed: false,
            loginPressed: false
        }
    }

    backToWelcome = () =>{
        this.setState({
            signupPressed: false,
            loginPressed: false
        })        
    }
    signupState = () => {
        this.setState({
            signupPressed: true,
            loginPressed: false
        })
    }

    loginState = () => {
        this.setState({
            signupPressed: false,
            loginPressed: true
        })
    }

    toggleLogin = () => {
        if (this.state.signupPressed) {
            return ( 
                <div>             
                    <Route path='/Signup'>
                        <Signup setToken={this.props.setToken} getName={this.props.getName} />
                    </Route>  
                    <Button onClick={this.backToWelcome}> Back </Button>  
                    <br />
                    <br />
                       </div>        
            )
        } else if (this.state.loginPressed) {
            return (
                <div>
                    <Route path='/Login'>
                        <Login setToken={this.props.setToken} getName={this.props.getName} />
                    </Route>
                    <br />
                    <Button onClick={this.backToWelcome}> Back </Button>   
                    
                      </div>     
                        
            )
        } else {
            return (
                <div>
                    <h4>
                        Welcome to Bicycle Race Results, the place to track all your race results and manage your team!
                        </h4>
                    <h4> Are you a new user or do you already have an account with us?
                    </h4>
                    <Row className="btnRow">
                        <Col md='2'>
                            <Button outline color="info" onClick={this.signupState}> New User </Button>
                        </Col>
                        <Col md='2'>
                            <Button outline color="info" onClick={this.loginState}> Already have an account </Button>
                        </Col>
                    </Row>
                </div>
            )
        }
    }

    render() {
        return (
            <Container>
                <div className='auth'>
                    {this.toggleLogin()}
                    
                    {/* <Row>
                <Col>
                    <Signup setToken={this.props.setToken} getName={this.props.getName}/>
                </Col>
                <Col>
                    <Login setToken={this.props.setToken} getName={this.props.getName}/>
                </Col>
            </Row> */}
                </div>
            </Container>
        )
    }
}
export default Auth;