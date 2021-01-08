import React, { Component } from "react";
import Navbar from "../components/navbar.js";
import { Container } from "reactstrap";
import "../css/home.css";

export default class EmptyPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className="main-home" fluid={true}>
          <Container className="main-home-background" fluid={true}>
            <Container className="main-home-circle" fluid={true}>
              <div className="home-first-div">
                <h1>Night Out With Friends?</h1>
                <p>Let Us Do The Crunching</p>
              </div>
            </Container>
          </Container>
        </Container>
      </div>
    );
  }
}
