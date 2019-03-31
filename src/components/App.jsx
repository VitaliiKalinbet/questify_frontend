import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import PrivateRoute from '../hocs/protectedRout';
// for test
import Card from './Card/CardContainer';

const obj = {
  isQuest: true,
  _id: '5c9d9fa51f9b5b1fb73691a2',
  name: 'Create your first quest',
  group: 'Learning',
  difficulty: 'Normal',
  dueData: 124,
  done: false,
  updatedAt: '2019-03-29T10:12:08.484Z',
  createdAt: '2019-03-29T10:12:08.484Z'
};

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={LoginPage} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <Route exact path="/card" render={props => <Card {...props} mode="render" {...obj} />} />
          <Route exact path="/cardAdd" render={props => <Card {...props} mode="add" {...obj} />} />
        </Router>
      </div>
    );
  }
}

export default hot(App);
