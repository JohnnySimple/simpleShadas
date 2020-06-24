import React, { Component, useState } from 'react';
import Homepage from './components/Homepage.js';
import Dashboard from './components/Dashboard.js';
import Register from './components/views/Register.js';
import Login from './components/views/Login.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Logout from './components/views/Logout.js';
import ModalExample from './components/views/ModalExample.js';
import Cart from './components/views/Cart.js';


export class App extends Component {

  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.history.push("/dashboard");
  }


  render() {
    return (
      <div>
        
        {/* <Homepage></Homepage> */}
        <Router>
          <Switch>
            <Route path="/home" component={Homepage} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} handleSuccessfulAuth={this.handleSuccessfulAuth} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="logout" component={Logout} />
            <Route path="/modal" component={ModalExample} />
            <PrivateRoute path="/cart" component={Cart} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
