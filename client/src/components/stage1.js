import React, { useState } from "react";
import { Container } from "reactstrap";
import logo from "../images/Crunch_logo_colored.png";
import "../css/stage1.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createRoom } from '../api/Util';

const Stage1 = ({room, setRoom, next}) => {

  const [title, setTitle] = useState("");
  const [restrictions, setRestrictions] = useState([]);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const initRoom = async () => {
    console.log("Called init");
    if(name.length && name.length && phoneNumber.length) {
      let newRoom = await createRoom(name, phoneNumber, title, restrictions);
      setRoom(newRoom);
      console.log(newRoom, room);
      next();
    } else {
      alert("Please fill in the required fields");
    }
  }

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
            onInput={(event) => setTitle(event.target.value)}
          />
          <TextField
            id="standard basic"
            label="Dietary Restriction"
            style={{ width: "75%", borderRadius: "15px" }}
            onInput={(event) => setRestrictions(event.target.value)}
          />
          <TextField
            id="standard basic"
            label="Name"
            style={{ width: "75%", borderRadius: "15px" }}
            onInput={(event) => setName(event.target.value)}
          />
          <TextField
            id="standard basic"
            label="Phone Number"
            style={{ width: "75%", borderRadius: "15px" }}
            onInput={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <Button variant="outlined" onClick={async () => {await initRoom()}}>
              Create
        </Button>
      </Container>
    </Container>
  );
  
}

export default Stage1;