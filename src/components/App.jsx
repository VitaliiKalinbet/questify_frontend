import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import Header from './Header/Header';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/dashboard" component={DashboardPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default hot(App);
