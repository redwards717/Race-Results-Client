import React from 'react';
import { Table } from 'reactstrap';
import './RiderTable.css';

var RiderTable = (props) => {
    return(
        <div className="resultsTable">
            <h3> Team {props.team} </h3>
            <Table striped>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Category</th>
                        <th>Riding Style</th>
                        <th>Tenure</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.riders.map((rider, id) => {
                            return (
                                <tr key={id}>
                                <td> {rider.rider_first_name}</td>
                                <td> {rider.rider_last_name}</td>
                                <td> {rider.category}</td>
                                <td> {rider.riding_style}</td>
                                <td> {rider.tenure}</td>
                                <td><img id={rider.id} onClick={props.delete} src={window.location.origin + '/delete.png'} alt='delete' width="35px" height="35px"/></td>
                                <td><img id={rider.id} onClick={e => props.update(e, rider)} src={window.location.origin + '/update.png'} alt='update' width="35px" height="35px" /></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>

            </Table>
            <br />
            <br />
        </div>
    )
}




export default RiderTable;