import React, { Component } from "react";
import { Container } from "reactstrap";
import logo from "../images/Crunch_logo_colored.png";
import "../css/stage1.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class stage1 extends Component {
  state = {
    currentStage: 1,
  };
  render() {
    return (
      <Container className="user-dashboard-main-stage-one" fluid={true}>
          <Container
            className="user-dashboard-main-stage-one-content"
            fluid={true}
          >
          <div className="user-dashboard-main-logo">
            <img src={logo}></img>
            <h1>Room Creation</h1>
          </div>
          <div className="user-dashboard-main-form">
            <TextField
              id="standard basic"
              label="Group Name"
              style={{ width: "75%", borderRadius: "15px" }}
            />
            <TextField
              id="standard basic"
              label="Dietary Restriction"
              style={{ width: "75%", borderRadius: "15px" }}
            />
          </div>
          <Button variant="outlined">
                <a href="/search">Login</a>
            </Button>
        </Container>
      </Container>
    );
  }
}
