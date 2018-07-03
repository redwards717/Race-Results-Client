import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import AddRider from './AddRider';
import RiderTable from './RiderTable';
import RiderEdit from './RiderEdit';
import './TeamIndex.css';
import APIURL from '../helpers/environment';

class TeamIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            riders: [],
            updatePressed: false,
            riderToUpdate: {}
        }
    }

    riderUpdate = (event, updatedRider) => {
        console.log(updatedRider)
        fetch(`${APIURL}/team/update`, {
            method: 'PUT',
            body: JSON.stringify({ team: updatedRider }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((res) => {
            this.setState({ updatePressed: false })
            this.fetchRiders();
        })
    }

    setUpdatedRider = (event, rider) => {
        this.setState({
            riderToUpdate: rider,
            updatePressed: true
        })
    }

    fetchRiders = () => {
        var fetch_url = `${APIURL}/team/${this.props.team}`
        console.log(fetch_url)
        fetch(fetch_url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }).then((res) => res.json())
        .then((data) => {
            console.log('fetch success', data.team)
            return this.setState({ riders: data.team })
        })
    }

    riderDelete = (event) => {
        fetch(`${APIURL}/team/del`, {
            method: 'DELETE',
            body: JSON.stringify({ team: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }).then((res) => this.fetchRiders())
    }

    componentDidMount = () => {
        this.fetchRiders();
    }

    render(){
        return(
            <div>
            <Row>
                <Col md="4">
                    <AddRider getRiders={this.fetchRiders} team={this.props.team}/>
                </Col>
                <Col md="8">
                    <RiderTable riders={this.state.riders} team={this.props.team} delete={this.riderDelete} update={this.setUpdatedRider}/>
                </Col>
            </Row>
            <Col md='8'>
                {
                    this.state.updatePressed ? <RiderEdit update={this.riderUpdate} rider={this.state.riderToUpdate} /> : <div></div>
                }
            </Col>
            </div>
        )
    }

}
export default TeamIndex;