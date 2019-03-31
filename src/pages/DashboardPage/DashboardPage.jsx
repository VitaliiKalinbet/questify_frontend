import React, { Component } from 'react';
import CreateTaskList from '../../components/Lists/TaskList/CreateTaskList';
import Header from '../../components/Header/Header';

class DashboardPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <CreateTaskList />
      </div>
    );
  }
}

export default DashboardPage;
