import React, { Component } from "react";
import { Container } from "reactstrap";
import "../css/tab.css";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
// import Modal from '@material-ui/core/Modal';
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import logo from "../images/2-person.png";

const Tab = ({ name, payment, quantity }) => {
  const [open, setOpen] = React.useState(false);
  const dummyArr = ["thing1", "thing2", "thing3", "thing4", "thing5"];

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Container className="user-dashboard-main-tab">
        <img src={logo} alt="Logo image" className="logo-img" onClick={toggle}></img>
        <div className="user-tab-content">
          <div className="user-tab-payment">
            <h1>{name}</h1>
            <h3>${payment.toFixed(2)}</h3>
            <h4>Qt. {quantity}</h4>
          </div>
          <div className="user-tab-buttons">
            <Button variant="outlined">Send Payment</Button>
          </div>
          {open ? (
            <div className="prompt">
              {/* <p>Information can go here.</p> */}
              <h1>Your Items</h1>
              {dummyArr.map((obj) => {
                return <p className = "prompt-p">{obj}</p>;
              })}
              <Button variant="outlined" onClick={toggle}>
                Close
              </Button>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default Tab;
