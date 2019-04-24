import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import PrivateRoute from '../hocs/privateRoute';
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';

import CardContainer from './CardContainer/CardContainer';

// Пример объекта челенджа:
const challenge = {
  challengeSendToUser: false,
  createdAt: '2019-04-22T17:44:22.004Z',
  difficulty: 'Normal',
  done: false,
  dueDate: '2019-03-30T19:14:07.691Z',
  group: 'Learning',
  isQuest: false,
  name: 'Read a book The brain that changes itself by Norman Doidge',
  updatedAt: '2019-04-22T17:44:22.004Z',
  _id: '5c9fc3ac8a9f77611f74e779'
};

// Пример объекта квеста:
// const task = {
//   createdAt: '2019-04-22T17:44:21.993Z',
//   difficulty: 'Hard',
//   done: false,
//   dueDate: '2019-03-30T19:14:07.686Z',
//   group: 'Productivity',
//   isPriority: false,
//   isQuest: true,
//   name: 'Complete 3 quests',
//   updatedAt: '2019-04-22T17:44:21.993Z',
//   _id: '5c9fc0988a9f77611f74e76e'
// };

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={LoginPage} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <Route path="/card" render={props => <CardContainer {...props} task={challenge} />} />
        </Router>
      </div>
    );
  }
}

export default hot(App);
