import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
  } from "reactstrap";
  import React, { Component } from "react";
  import "../css/navbar.css";
  
  export default class myNavbar extends Component {
    render() {
      return (
        <div>
          <Navbar fixed="top" color="dark" dark expand="sm" className="mb-5">
            <NavbarBrand href="">
              <h1 className="navbar-logo">crunch</h1>
            </NavbarBrand>
            <Nav className="ml-auto">
              <NavLink href="contact">About</NavLink>
              <NavLink href="about">Documentation</NavLink>
              <NavLink href="login">Login</NavLink>
            </Nav>
          </Navbar>
        </div>
      );
    }
  }
  