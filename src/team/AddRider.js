import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../helpers/environment';

class AddRider extends Component {
    constructor() {
        super()
        this.state = {
            team_name: '',
            rider_first_name: '',
            rider_last_name: '',
            category: '',
            riding_style: '',
            tenure: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        var fetch_url = `${APIURL}/team/${this.props.team}`
        fetch(fetch_url, {
            method: 'POST',
            body: JSON.stringify({ team: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }).then(
            (res) => res.json()
        ).then((data) => {
            this.props.getRiders();
            this.setState({
                team_name: '',
                rider_first_name: '',
                rider_last_name: '',
                category: '',
                riding_style: '',
                tenure: ''
            })
        })
        event.preventDefault()
    }

    render() {
        return (
            <div className="raceCreate">
                <h3> Add a new {this.props.team} member </h3>
                <hr />
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="team_name"> Team </Label>
                        <Input id="team_name" type="text" name="team_name" value={this.props.team} onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="rider_first_name"> First Name </Label>
                        <Input id="rider_first_name" type="text" name="rider_first_name" value={this.state.rider_first_name} placeholder="enter rider's first name" onChange={this.handleChange}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="rider_last_name"> Last Name </Label>
                        <Input id="rider_last_name" type="text" name="rider_last_name" value={this.state.rider_last_name} placeholder="enter rider's last name" onChange={this.handleChange}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="category"> Category </Label>
                        <Input id="category" type="select" name="category" value={this.state.category} placeholder="select rider's category" onChange={this.handleChange}>
                            <option></option>
                            <option value="1">Cat 1</option>
                            <option value="2">Cat 2</option>
                            <option value="3">Cat 3</option>
                            <option value="4">Cat 4</option>
                            <option value="5">Cat 5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label for="riding_style"> Riding Style </Label>
                        <Input id="riding_style" type="select" name="riding_style" value={this.state.riding_style} placeholder="select style of rider" onChange={this.handleChange}>
                            <option></option>
                            <option value="Sprinter">Sprinter</option>
                            <option value="Breakaway Specialist">Breakaway Specialist</option>
                            <option value="Time Trials">Time Trials</option>
                            <option value="Domestique">Domestique</option>
                            <option value="All-Arounder">All-Arounder</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="tenure"> Years on team </Label>
                        <Input id="tenure" type="number" name="tenure" value={this.state.tenure} placeholder="enter years rider has been on team" onChange={this.handleChange}></Input>
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
export default AddRider;