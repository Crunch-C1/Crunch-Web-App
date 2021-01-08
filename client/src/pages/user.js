import React, { Component } from 'react'
import { Container } from 'reactstrap';
import "../css/user.css";
import pfp from "../images/pfp.png";
import settings from "../images/settings.png";
export default class user extends Component {
    state = {
        currentStage: 1,
        articles: [],
    };

    render() {
        return (
            <div className = "user-dashboard">
                <Container className = "side-bar">
                    <div className = "side-bar-crunch">
                        <h1>crunch</h1>
                    </div>
                    <div className = "side-bar-image">
                        <img src = {pfp}></img>
                        <h1>Gregory Beitler</h1>
                    </div>
                    <div className = "side-bar-selection">
                        <h3>Past Restaurants</h3>
                        <h3>Past Expenses</h3>
                    </div>
                    <div className = "blank">

                    </div>
                    <div className = "side-bar-settings">
                        <img src = {settings}></img>
                    </div>
                </Container>

                <Container className = "user-dashboard-main">

                </Container>
            </div>
        )
    }
}
