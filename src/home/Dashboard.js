import React, { Component } from 'react';
import RacesIndex from '../races/RacesIndex';
import { Button } from 'reactstrap';
import './Dashboard.css'
import { Route } from 'react-router-dom';
import TeamIndex from '../team/TeamIndex';
import APIURL from '../helpers/environment';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamView: false,
        }
    }

    fetchUserInfo = () => {
        fetch(`${APIURL}/race/user`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }).then((res) => res.json())
         .then((data) => {
             this.props.getName(data)
         })
    }

    componentDidMount = () => {
        this.fetchUserInfo()
    }

    toggleState = () => {
        this.setState({
            teamView: !this.state.teamView,
        })
    }

    toggleTeams = () => {
        if (!this.state.teamView) {
            return (
                <Route path='/race'>
                    <RacesIndex token={this.props.sessionToken} />
                </Route>
            )
        } else {
            return (
                <Route path='/team'>
                    <TeamIndex token={this.props.sessionToken} team={this.props.team}/>
                </Route>
            )
        }
    }


    render() {
        return (
            <div>
                <br />
                {this.toggleTeams()}
                <div className="teamButton">
                    <Button onClick={this.toggleState}><b> Toggle Team Manage View </b></Button>
                    <br />
                </div>
            </div>
        )
    }
}

export default Dashboard;