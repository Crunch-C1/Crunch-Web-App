import React, { Component } from "react";
import "../css/login.css";
import logo from "../images/Crunch_logo_colored.png";
import login_pic from "../images/login_pic.png"
import {
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Login extends Component {


  render() {

    return (
      <div className="signup-login">
          <img style= {{position:"absolute", marginTop:150, marginLeft:220, width:600}} src={login_pic}/>
          <h1 style= {{position:"absolute",fontFamily:"Montserrat", color:"white",marginTop:530, marginLeft:200,width:750}}>Relax With Friends, You've Earned It!</h1>
        <Form className="signup-login-form">
          <FormGroup className="form-logo">
            <img className="form-logo-image" src={logo}></img>
            <h1 className="form-logo-header">crunch</h1>
          </FormGroup>
          <FormGroup className="form-input-group">
            <TextField id="standard-basic" label="Username" style={{width: "75%", borderRadius: "15px"}}/>
            <center>
            </center>
          </FormGroup>
          <FormGroup className="form-input-group">
            <TextField id="standard-basic" label="Password" style={{width: "75%", borderRadius: "15px"}}/>
            <center>
            </center>
          </FormGroup>
          <FormGroup className="form-stay" check>
            <Label check style={{marginLeft:35}}>
              <Input type="checkbox" /> Click To Remain Signed In
            </Label>
          </FormGroup>
          <FormGroup className="form-button-group">
            <Button variant="outlined">
                <a href="/search">Login</a>
            </Button>
          </FormGroup>
          <FormGroup className="form-links">
            <h1 className="form-link-h1">
              <a href="/">Create Account</a> | <a>Forgot Password</a>
            </h1>
          </FormGroup>
        </Form>
        <div className="signup-login-main">
        </div>
      </div>
    );
  }
}
