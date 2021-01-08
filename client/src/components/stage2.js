import React, { useState } from "react";
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
import { findRestaurantsByName } from '../api/Util';

const Stage2 = ({room, setRoom, next}) => {

  const [selections, setSelections] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [open, setOpen] = useState(false);

  const proceed = async () => {
    let newRoom = room;
    console.log(room);
    const restaurants = await findRestaurantsByName(selections);
    newRoom.choices = newRoom.choices.concat(restaurants);
    setRoom(newRoom);
    next();
  }

  const toggle = () => {
    setShowInput(!showInput);
    setCurrentText("");
  };

  const storeInfo = () => {
    setSelections(selections.concat(currentText));
    setShowInput(!showInput);
    setCurrentText("");
    setOpen(false);
  };

  const recordText = (text) => {
    setCurrentText(text.target.value);
    // this.setState({ currentText: text.target.value });
    // console.log(this.state.currentText);
  };

  const handleClickOpen = () => {
     setOpen(true);
    // this.setState({open:true});
  };


  const handleClose = () => {
    setOpen(false);
    // this.setState({open:false});
  };

    return (
      <Container className="user-dashboard-main-stage-two" fluid={true}>
        <Container
          className="user-dashboard-main-stage-two-content"
          fluid={true}
        >
          <div className="user-dashboard-main-logo">
            <img src={logo}></img>
            <h1>Pick Restaurants({5 - selections.length} left)</h1>
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
        {selections.map((item) => (
          <Grid item>
            <div className="entry">{item}</div>
            </Grid>
      ))}
      {selections.length < 5 ? <div className="adds" variant="outlined" color="primary" onClick={handleClickOpen}>
        +
      </div> : ''}
      </Grid>
      </div>
      <Button variant="outlined" color="primary" size="large"  style={{margin: "2em"}} onClick={() => {proceed();}}>Continue</Button>
      </Grid>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
            onChange={recordText}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={storeInfo} color="primary">
            Confirm
          </Button>
        </DialogActions>
        
      </Dialog>
      </Grid>
    </div>
    </Container> 
    </Container>
    );
  
}

export default Stage2;