import React, { Component } from 'react';
import TodayList from '../../components/Lists/TodayList/TodayList';
import TomorrowList from '../../components/Lists/TomorrowList/TomorrowList';
import DoneList from '../../components/Lists/DoneList/DoneList';

class DashboardPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>DashboardPage</h2>
        <TodayList />
        <TomorrowList />
        <DoneList />
      </div>
    );
  }
}

export default DashboardPage;
