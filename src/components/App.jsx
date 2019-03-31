import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import PrivateRoute from '../hocs/privateRoute';
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={LoginPage} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
        </Router>
      </div>
    );
  }
}

export default hot(App);
