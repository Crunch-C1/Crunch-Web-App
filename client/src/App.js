import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Pages
// import NotFound from './pages/contact.js';
import Home from './pages/home.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {
            <Route exact path="/" component={Home} />
          /* 
          <Route path="/404-page-not-found" component={NotFound} />
          <Redirect to="/404-page-not-found" /> 
          */}
        </Switch>
      </Router>
    );
  }
}
