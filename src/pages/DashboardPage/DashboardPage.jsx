import React, { Component } from 'react';
import TodayList from '../../components/Lists/TodayList/TodayList';
import TomorrowList from '../../components/Lists/TomorrowList/TomorrowList';
import DoneList from '../../components/Lists/DoneList/DoneList';
import Header from '../../components/Header/Header';
// import CreateQuestButton from '../../components/CreateQuestButton/CreateQuestButton';

class DashboardPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <TodayList />
        <TomorrowList />
        <DoneList />
        {/* <CreateQuestButton /> */}
      </div>
    );
  }
}

export default DashboardPage;
