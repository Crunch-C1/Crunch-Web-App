import React, { Component } from "react";
import { Container } from "reactstrap";
import logo from "../images/Crunch_logo_colored.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "../css/stage2.css";
export default class stage2 extends Component {
  state = {
    selections: [],
    currentText: "",
    showInput: false,
  };
  toggle = () => {
    this.setState({ showInput: !this.state.showInput, currentText: "" });
  };
  storeInfo = () => {
    var prev = this.state.selections;
    prev.push(this.state.currentText);
    this.setState({
      showInput: !this.state.showInput,
      selections: prev,
      currentText: "",
    });
  };
  recordText = (text) => {
    this.setState({ currentText: text.target.value });
    console.log(this.state.currentText);
  };

  render() {
    return (
      <Container className="user-dashboard-main-stage-two" fluid={true}>
        <Container
          className="user-dashboard-main-stage-two-content"
          fluid={true}
        >
          <div className="user-dashboard-main-logo">
            <img src={logo}></img>
            <h1>Pick Restaurants</h1>
          </div>
          <div className="user-dashboard-main-restaurants">
            <Grid container direction="column" alignItems="center" spacing={5}>
              <Grid item>
                <div className="user-dashboard-main-selection">
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    spacing={2}
                  >
                    {this.state.selections.map((item) => (
                      <Grid item>
                        <div className="entry">{item}</div>
                      </Grid>
                    ))}
                    <Grid item className="adds" onClick={this.toggle}>
                      +
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <Grid container direction="row" spacing={10}>
                  <Grid item>
                    <Button variant="outlined">Confirm</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined">Cancel</Button>
                  </Grid>
                </Grid>
              </Grid>
              <div></div>
            </Grid>
            {this.state.showInput ? (
              <div className="prompt">
                <div className="prompt_inner">
                  <Grid
                    container
                    direction="column"
                    spacing={4}
                    alignItems="center"
                  >
                    <Grid item>
                      <TextField className = "my-textfield" onChange={this.recordText}>Location</TextField>
                    </Grid>
                    <Grid item>
                      <Grid container direction="row" spacing={10}>
                        <Grid item>
                          <Button variant="outlined" onClick={this.storeInfo}>
                            Confirm
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="outlined" onClick={this.toggle}>
                            Cancel
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </div>
            ) : null}
          </div>
        </Container>
      </Container>
    );
  }
}
