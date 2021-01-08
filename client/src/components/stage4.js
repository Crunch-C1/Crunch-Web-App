import React, { Component } from 'react'
import { Container } from 'reactstrap';
import logo from "../images/Crunch_logo_colored.png";
import "../css/stage4.css";
export default class stage4 extends Component {
    render() {
        return (
            <div>
                <Container className = "user-dashboard-main">
                    <div className = "user-dashboard-main-logo">
                        <img src = {logo}></img>
                        <h1>Room Creation</h1>
                    </div>
                    <div className = "user-dashboard-main-form">

                    </div>
                </Container>
            </div>
        )
    }
}
