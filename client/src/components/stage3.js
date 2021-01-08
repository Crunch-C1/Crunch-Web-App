import React, { Component } from 'react'
import { Container } from 'reactstrap';
import logo from "../images/Crunch_logo_colored.png";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "../css/stage3.css";

export default class stage3 extends Component {
    state = {
        selections: ["Chipotle", "Mcdonalds", "Wendy", "Sushi Fuku"],
        pick: 1,
        firstPick: "",
        secondPick: "",
        thirdPick: "",
        currentText: "",
        showInput: false,
    };
    toggle = (item) => 
    {
        if(this.state.pick === 1){
            this.setState({pick: 2, firstPick: item})
        }
        else if(this.state.pick === 2){
            this.setState({pick: 3, secondPick: item})
        }
        else if(this.state.pick === 3){
            this.setState({pick: 4, thirdPick: item})
        }
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
            <h1>Input Choices</h1>
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
                        <div className="entry" onClick={() => this.toggle(item)}>{item}</div>
                      </Grid>
                    ))}
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
          </div>
          {this.state.firstPick != "" ? (
              <div className = "first-pick-tab">
                  <h1>{this.state.firstPick} is your first pick</h1>
              </div>
          ) : null}
          {this.state.secondPick != "" ? (
              <div className = "first-pick-tab">
                  <h1>{this.state.secondPick} is your second pick</h1>
              </div>
          ) : null}
          {this.state.thirdPick != "" ? (
              <div className = "first-pick-tab">
                  <h1>{this.state.thirdPick} is your third pick</h1>
              </div>
          ) : null}
        </Container>
      </Container>
        )
    }
}
