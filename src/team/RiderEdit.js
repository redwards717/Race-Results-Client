import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';


class RaceEdit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            rider_first_name: '',
            rider_last_name: '',
            category: '',
            riding_style: '',
            tenure: '',
        };
    }

    componentWillMount = () => {
        this.setState({
            id: this.props.rider.id,
            rider_first_name: this.props.rider.rider_first_name,
            rider_last_name: this.props.rider.rider_last_name,
            category: this.props.rider.category,
            riding_style: this.props.rider.riding_style,
            tenure: this.props.rider.tenure,
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader >Edit a Race</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="rider_first_name">Rider First Name</Label>
                                <Input id="rider_first_name" type="text" name="rider_first_name" value={this.state.rider_first_name}
                                    placeholder="enter rider's first name" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="rider_last_name">Rider Last Name</Label>
                                <Input type="text" name="rider_last_name" id="rider_last_name" value={this.state.rider_last_name} onChange={this.handleChange} placeholder="enter rider's last name">
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
                                <Label for="tenure"> Tenure </Label>
                                <Input id="tenure" type="number" name="tenure" value={this.state.tenure} placeholder="enter number of years rider has been with team" onChange={this.handleChange}></Input>
                            </FormGroup>
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>

                </Modal>

            </div>
        )
    }
}

export default RaceEdit;