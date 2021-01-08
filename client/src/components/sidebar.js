import React, { Component } from 'react'
import "../css/sidebar.css";
import { Container, NavLink } from 'reactstrap';
import pfp from "../images/pfp.png";
import settings from "../images/settings.png";

export default class sidebar extends Component {
    render() {
        return (
            <div>
                <Container className = "side-bar">
                    <div className = "side-bar-crunch">
                        <h1>crunch</h1>
                    </div>
                    <div className = "side-bar-image">
                        <img src = {pfp}></img>
                        <h1>Gregory Beitler</h1>
                    </div>
                    <div className = "side-bar-selection">
                        <hr/>
                        <NavLink href="Restaurants">Past Restaurants</NavLink>
                        <hr/>
                        <NavLink href="Expenses">Past Expenses</NavLink>
                        <hr/>
                        <h3>Past Choices</h3>
                        <hr/>
                    </div>
                    <div className = "blank">

                    </div>
                    <div className = "side-bar-settings">
                        <img src = {settings}></img>
                    </div>
                </Container>
            </div>
        )
    }
}
