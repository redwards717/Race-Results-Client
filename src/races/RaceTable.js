import React from 'react';
import { Table } from 'reactstrap';
import './RaceTable.css';

var RaceTable = (props) => {
    const upgradePts = props.races.map(race => Number(race.points)).reduce((prev, next) => prev + next, 0)

    return (
        <div className="resultsTable">
            <h3>Your Race Results</h3>
            <h5 className = "toNextUpgrade">Points towards your next upgrade: {upgradePts}</h5>
            
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>Race Name</th>
                        <th>Race Type</th>
                        <th>Category</th>
                        <th>Placing</th>
                        <th># of Starters</th>
                        <th>Date</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.races.map((race, id) => {
                            if ( race.place == 1){
                            return (
                                <tr key={id} style={{background:"gold"}}>
                                    <td className="raceName">{race.race_name}</td>
                                    <td>{race.race_type}</td>
                                    <td>{race.category}</td>
                                    <td>{race.place}</td>
                                    <td>{race.starters}</td>
                                    <td>{race.date}</td>
                                    <td>{race.points}</td>
                                    <td><img id={race.id} onClick={props.delete} src={window.location.origin + '/delete.png'} alt='delete' width="35px" height="35px"/></td>
                                    <td><img id={race.id} onClick={e => props.update(e, race)} src={window.location.origin + '/update.png'} alt='update' width="35px" height="35px" /></td>
                                </tr>
                            )
                        } else if ( race.place == 2) {
                            return (
                                <tr key={id} style={{background:"silver"}}>
                                    <td className="raceName">{race.race_name}</td>
                                    <td>{race.race_type}</td>
                                    <td>{race.category}</td>
                                    <td>{race.place}</td>
                                    <td>{race.starters}</td>
                                    <td>{race.date}</td>
                                    <td>{race.points}</td>
                                    <td><img id={race.id} onClick={props.delete} src={window.location.origin + '/delete.png'} alt='delete' width="35px" height="35px"/></td>
                                    <td><img id={race.id} onClick={e => props.update(e, race)} src={window.location.origin + '/update.png'} alt='update' width="35px" height="35px" /></td>
                                </tr>
                            )
                        } else if ( race.place == 3 ) {
                            return (
                                <tr key={id} style={{background:"orange"}}>
                                    <td className="raceName">{race.race_name}</td>
                                    <td>{race.race_type}</td>
                                    <td>{race.category}</td>
                                    <td>{race.place}</td>
                                    <td>{race.starters}</td>
                                    <td>{race.date}</td>
                                    <td>{race.points}</td>
                                    <td><img id={race.id} onClick={props.delete} src={window.location.origin + '/delete.png'} alt='delete' width="35px" height="35px"/></td>
                                    <td><img id={race.id} onClick={e => props.update(e, race)} src={window.location.origin + '/update.png'} alt='update' width="35px" height="35px" /></td>
                                </tr>
                            )
                        } else {
                            return (
                            <tr key={id}>
                                    <td className="raceName">{race.race_name}</td>
                                    <td>{race.race_type}</td>
                                    <td>{race.category}</td>
                                    <td>{race.place}</td>
                                    <td>{race.starters}</td>
                                    <td>{race.date}</td>
                                    <td>{race.points}</td>
                                    <td><img id={race.id} onClick={props.delete} src={window.location.origin + '/delete.png'} alt='delete' width="35px" height="35px"/></td>
                                    <td><img id={race.id} onClick={e => props.update(e, race)} src={window.location.origin + '/update.png'} alt='update' width="35px" height="35px" /></td>
                                </tr>
                            )
                        }
                        })
                    }
                </tbody>
            </Table>
            <br />
            <br />
            <br />
        </div>
    );
}

export default RaceTable;