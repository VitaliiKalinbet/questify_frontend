import React, { Component } from 'react';
import ListsContainer from '../../components/Lists/ListsContainer';
import Header from '../../components/Header/Header';
import CreateQuestButton from '../../components/CreateQuestButton/CreateQuestButton';

class DashboardPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <ListsContainer />
        <CreateQuestButton />
      </div>
    );
  }
}

export default DashboardPage;
