import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Button
} from 'reactstrap';
import "./Sitebar.css";

class Sitebar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    showLogoutButton = () => {
        var token = localStorage.getItem('token');
        if (token) {
            return (
                <Button onClick={() => this.props.clickLogout()}>Logout</Button>
            )
        } else {
            return (
                <div></div>
            )
        }

    }


    render() {
        return (
            <div className="siteBar">
                <Navbar>
                    <NavbarBrand href="/"><p>Bicycle Race Results</p></NavbarBrand>
                    <h3>Welcome {this.props.fn}</h3>
                    {/* <div className="settingsBtn">
                        <img src={window.location.origin + '/settings.png'} alt='settings' width='35px' height='35px' />
                    </div> */}
                    {this.showLogoutButton()}
                </Navbar>
            </div>
        );
    }
}

export default Sitebar;