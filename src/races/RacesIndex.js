import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import RaceCreate from './RaceCreate';
import RaceTable from './RaceTable';
import RaceEdit from './RaceEdit';
import './RacesIndex.css';
import APIURL from '../helpers/environment';


class RacesIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            races: [],
            updatePressed: false,
            raceToUpdate: {}
        }
    }

    raceUpdate = (event, updatedRace) => {
        fetch(`${APIURL}/race/update`, {
            method: 'PUT',
            body: JSON.stringify({ race: updatedRace }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then((res) => {
            this.setState({ updatePressed: false })
            this.fetchRaces();
        })
    }

    setUpdatedRace = (event, race) => {
        this.setState({
            raceToUpdate: race,
            updatePressed: true
        })
    }

    fetchRaces = () => {
        fetch(`${APIURL}/race/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then((res) => res.json())
            .then((data) => {
                return this.setState({ races: data.race })
            })
    }

    raceDelete = (event) => {
        fetch(`${APIURL}/race`, {
            method: 'DELETE',
            body: JSON.stringify({ race: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => this.fetchRaces())
    }

    componentDidMount = () => {
        this.fetchRaces()
    }

    render() {
        var races = this.state.races ?
            <RaceTable races={this.state.races} delete={this.raceDelete} update={this.setUpdatedRace}/> :
            <h2>No Race results to show yet, Start submitting your race results!</h2>
        return (
            <div>
                <Row>
                    <Col md="3">
                        <RaceCreate token={this.props.token} getRaces={this.fetchRaces} />
                    </Col>
                    <Col md="9">
                        {races}
                    </Col>
                </Row>
                <Col md="8">
                 {
                     this.state.updatePressed ? <RaceEdit t={this.state.updatePressed} update={this.raceUpdate} race={this.state.raceToUpdate} /> : <div></div>
                 }
                </Col>
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default RacesIndex;