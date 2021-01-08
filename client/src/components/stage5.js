import React, { Component } from "react";
import { Container } from "reactstrap";
import logo from "../images/Crunch_logo_colored.png";
import "../css/stage5.css";
import Tab from "./tab";
import Button from "@material-ui/core/Button";

const stage5 = () => {
  const totalPayment = 100;

  return (
    <Container className="user-dashboard-main-stage-two" fluid = {true}>
      <Container className="user-dashboard-main-stage-two-content" fluid = {true}>
        <div className="user-dashboard-main-logo">
          <img src={logo}></img>
          <h1>Group Total</h1>
        </div>
        <div className="user-dashboard-main-form-stage5">
          <div className="user-tabs-stage5">
            <Tab key={"bob"} name={"Bob"} payment={15} quantity={5} />
            <Tab key={"sahil"} name={"Sahil"} payment={10} quantity={3} />
            <Tab key={"sahil"} name={"Sahil"} payment={10} quantity={3} />
            <Tab key={"sahil"} name={"Sahil"} payment={10} quantity={3} />
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default stage5;
