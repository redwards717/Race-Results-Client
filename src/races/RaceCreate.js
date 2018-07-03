import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './RaceCreate.css';
import APIURL from '../helpers/environment';

class RaceCreate extends Component {
    constructor() {
        super()
        this.state = {
            race_name: '',
            race_type: '',
            category: '',
            starters: '',
            place: '',
            date: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        fetch(`${APIURL}/race/`, {
            method: 'POST',
            body: JSON.stringify({ race: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then(
            (res) => res.json()
        ).then((data) => {
            this.props.getRaces();
            this.setState({
                race_name: '',
                race_type: '',
                category: '',
                starters: '',
                place: '',
                date: '',
            })
        })
        event.preventDefault()
    }

    render() {
        return (
            <div className="raceCreate">
                <h3> Enter a new race result </h3>
                <hr />
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="race_name"> Race Name </Label>
                        <Input id="race_name" type="text" name="race_name" value={this.state.race_name} placeholder="enter name of race" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="race_type"> Race Type </Label>
                        <Input id="race_type" type="select" name="race_type" value={this.state.race_type} placeholder="select type of race" onChange={this.handleChange}>
                            <option></option>
                            <option value="Criterium">Criterium</option>
                            <option value="Road Race">Road Race</option>
                            <option value="Time Trial">Time Trial</option>
                            <option value="General Classification">General Classification</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="category"> Category at time of race </Label>
                        <Input id="category" type="select" name="category" value={this.state.category} placeholder="select your category at time of race" onChange={this.handleChange}>
                            <option></option>
                            <option value="1">Cat 1</option>
                            <option value="2">Cat 2</option>
                            <option value="3">Cat 3</option>
                            <option value="4">Cat 4</option>
                            <option value="5">Cat 5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="starters"> Starters </Label>
                        <Input id="starters" type="number" name="starters" value={this.state.starters} placeholder="enter number of starters" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="place"> Result </Label>
                        <Input id="place" type="number" name="place" value={this.state.place} placeholder="enter finishing position (1,2,3 etc.)" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="date"> Date of Race </Label>
                        <Input id="date" type="date" name="date" value={this.state.date} placeholder="enter date of race" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                    <br />
                    <br />
                    <br />
                </Form>
            </div>
        )
    }

}

export default RaceCreate;





