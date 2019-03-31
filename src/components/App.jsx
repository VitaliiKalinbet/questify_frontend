import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
// for test
import Card from './Card/CardContainer';
import TestList from './Card/TestCardList';

const list = [
  {
    isQuest: true,
    _id: '5c9d9f6b1f9b5b1fb73691a1',
    name: 'Create an account',
    group: 'Productivity',
    difficulty: 'Easy',
    date: 1554457003000,
    done: false
  },
  {
    isQuest: true,
    _id: '5c9d9fa51f9b5b1fb73691a2',
    name: 'Create your first quest',
    group: 'Learning',
    difficulty: 'Normal',
    date: 1554400003000,
    done: false
  },
  {
    isQuest: true,
    _id: '5c9d9fcf1f9b5b1fb73691a3',
    name: 'Accept a challenge',
    group: 'Learning',
    difficulty: 'Normal',
    date: 1554357003000,
    done: false
  },
  {
    isQuest: true,
    _id: '5c9d9fe41f9b5b1fb73691a4',
    name: 'Complete 3 quests',
    group: 'Productivity',
    difficulty: 'Hard',
    date: 1554257003000,
    done: false
  },
  {
    isQuest: true,
    challengeSendToUser: false,
    _id: '5c9ddf186e5c254cb5c41556',
    name: 'Recommend Questify to a friend',
    group: 'Social',
    difficulty: 'Easy',
    date: 18372629654,
    done: false
  }
];

const obj = {
  isQuest: true,
  challengeSendToUser: false,
  _id: '5c9ddf186e5c254cb5c41556',
  name: 'Recommend Questify to a friend',
  group: 'Social',
  difficulty: 'Easy',
  date: 18372629654,
  done: false
};

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={LoginPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route exact path="/card" render={props => <TestList {...props} list={list} />} />
          <Route exact path="/cardAdd" render={props => <Card {...props} mode="add" {...obj} />} />
        </Router>
      </div>
    );
  }
}

export default hot(App);
