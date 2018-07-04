import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sitebar from './home/Sitebar';
import Footer from './home/Footer';
import Dashboard from './home/Dashboard';
import Auth from './auth/Auth';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: '',
      email: '',
      first_name: '',
      team: '',
    }
  }


  componentWillMount = () => {
    var token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  getName = (data) =>
    this.setState({
        email: data.user.email,
        first_name: data.user.first_name,
        team: data.user.team,
    })

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }

  logout = () => {
    this.setState({
      sessionToken: '',
      first_name: ''
    });
    localStorage.clear();
  }

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Route path='/' exact>
            <Dashboard sessionToken={this.state.sessionToken} getName={this.getName} team={this.state.team} />
          </Route>
        </Switch>
      )
    } else {
      return (
        <Route path="/auth" >
          <Auth setToken={this.setSessionState} getName={this.getName}/>
        </Route>
      )
    }
  }



  render() {
    return (
      <Router>
        <div className="App">
          <Sitebar clickLogout={this.logout} fn={this.state.first_name} />
        <br />
          {this.protectedViews()}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
