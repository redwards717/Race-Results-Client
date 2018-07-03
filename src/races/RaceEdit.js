import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class RaceEdit extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            race_name: '',
            race_type: '',
            category: '',
            starters: '',
            place: '',
            date: '',
        };
    }

    componentWillMount = () => {
        this.setState({
            id: this.props.race.id,
            race_name: this.props.race.race_name,
            race_type: this.props.race.race_type,
            category: this.props.race.category,
            starters: this.props.race.starters,
            place: this.props.race.place,
            date: this.props.race.date,
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
                                <Label for="race_name">Race Name</Label>
                                <Input id="race_name" type="text" name="race_name" value={this.state.race_name}
                                    placeholder="enter name of race" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="race_type">Type of Race</Label>
                                <Input type="select" name="race_type" id="race_type" value={this.state.race_type} onChange={this.handleChange} placeholder="Type of Race">
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
                                <Input id="starters" type="text" name="starters" value={this.state.starters} placeholder="enter number of starters" onChange={this.handleChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="place"> Result </Label>
                                <Input id="place" type="text" name="place" value={this.state.place} placeholder="enter finishing position (1,2,3 etc.)" onChange={this.handleChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="date"> Date of Race </Label>
                                <Input id="date" type="date" name="date" value={this.state.date} placeholder="enter date of race" onChange={this.handleChange}></Input>
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