import React, { Component } from "react";
import { Container } from "reactstrap";
import logo from "../images/Crunch_logo_colored.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
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
      // <Container className="user-dashboard-main-stage-two" fluid={true}>
      //   <Container
      //     className="user-dashboard-main-stage-two-content"
      //     fluid={true}
      //   >
      //     <div className="user-dashboard-main-logo">
      //       <img src={logo}></img>
      //       <h1>Input Choices</h1>
      //     </div>
      //     <div className="user-dashboard-main-restaurants">
      //       <Grid container direction="column" alignItems="center" spacing={5}>
      //         <Grid item>
      //           <div className="user-dashboard-main-selection">
      //             <Grid
      //               container
      //               direction="column"
      //               alignItems="center"
      //               spacing={2}
      //             >
      //               {this.state.selections.map((item) => (
      //                 <Grid item>
      //                   <div className="entry">{item}</div>
      //                 </Grid>
      //               ))}
      //               <Grid item className="adds" onClick={this.toggle}>
      //                 +
      //               </Grid>
      //             </Grid>
      //           </div>
      //         </Grid>
      //         <Grid item>
      //           <Grid container direction="row" spacing={10}>
      //             <Grid item>
      //               <Button variant="outlined">Confirm</Button>
      //             </Grid>
      //             <Grid item>
      //               <Button variant="outlined">Cancel</Button>
      //             </Grid>
      //           </Grid>
      //         </Grid>
      //         <div></div>
      //       </Grid>
      //       {this.state.showInput ? (
      //         <div className="prompt">
      //           <div className="prompt_inner">
      //             <Grid
      //               container
      //               direction="column"
      //               spacing={4}
      //               alignItems="center"
      //             >
      //               <Grid item>
      //                 <TextField onChange={this.recordText}>Location</TextField>
      //               </Grid>
      //               <Grid item>
      //                 <Grid container direction="row" spacing={10}>
      //                   <Grid item>
      //                     <Button variant="outlined" onClick={this.storeInfo}>
      //                       Confirm
      //                     </Button>
      //                   </Grid>
      //                   <Grid item>
      //                     <Button variant="outlined" onClick={this.toggle}>
      //                       Cancel
      //                     </Button>
      //                   </Grid>
      //                 </Grid>
      //               </Grid>
      //             </Grid>
      //           </div>
      //         </div>
      //       ) : null}
      //     </div>
      //   </Container>
      // </Container> 

      <Container className="user-dashboard-main-stage-two" fluid={true}>
        <Container
          className="user-dashboard-main-stage-two-content"
          fluid={true}
        >
<<<<<<< HEAD
          <div className="user-dashboard-main-logo">
            <img src={logo}></img>
            <h1>Pick Restaurants</h1>
          </div>
          <div className="user-dashboard-main-restaurants">
            <Grid container direction="column" alignItems="center" spacing={5}>
              <Grid item>
                <div className="user-dashboard-main-selection">
                  <Grid
=======
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
>>>>>>> 86aea1f7663e33e95d4c295eaa934b5aa4223d44
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
