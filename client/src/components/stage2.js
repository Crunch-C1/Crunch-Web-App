import React, { Component } from "react";
import { Container } from "reactstrap";
import logo from "../images/Crunch_logo_colored.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "../css/stage2.css";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
export default class stage2 extends Component {
  state = {
    selections: [],
    currentText: "",
    showInput: false,
    open: false
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
      open: false
    });
  };
  recordText = (text) => {
    this.setState({ currentText: text.target.value });
    console.log(this.state.currentText);
  };

   handleClickOpen = () => {
    this.setState({open:true});
  };


  handleClose = () => {
    this.setState({open:false});
  };

  render() {
    return (
      <Container className="user-dashboard-main-stage-two" fluid={true}>
        <Container
          className="user-dashboard-main-stage-two-content"
          fluid={true}
        >
      <div>
        <div className="user-dashboard-main-restaurants">
          <Grid container direction="column" alignItems="center" spacing={5}>
            <Grid item>
              <div className="user-dashboard-main-logo">
                <img src={logo}></img>
                <h1>Input Choices</h1>
              </div>
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
                    <Button className="adds" variant="outlined" color="primary" onClick={this.handleClickOpen}>
                      +
                    </Button>
                </Grid>
              </div>
            </Grid>
      <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Food Options</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Please input any restaurant that you would like to go to.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Restaurant of Choice"
            type="restaurant"
            fullWidth
            onChange={this.recordText}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.storeInfo} color="primary">
            Confirm
          </Button>
        </DialogActions>
        
      </Dialog>
      </Grid>
    </div>
    </div>
    </Container>
    </Container> 
    );
  }
}
