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
import Login from './pages/login.js';
import User from './pages/user.js';
import Restaurants from './pages/restaurants.js';
import Expenses from './pages/expenses.js';

export default class App extends Component {
  render() {
    return (

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/user" component={User} />
          <Route path="/restaurants" component={Restaurants}/>
          <Route path="/expenses" component={Expenses}/>
          <Redirect to="/404-page-not-found" /> 
        </Switch>
      </Router>
    );
  }
}
