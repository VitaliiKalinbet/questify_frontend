import React, { Component } from 'react';
import ListsContainer from '../../components/Lists/ListsContainer';
import Header from '../../components/Header/Header';

class DashboardPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <ListsContainer />
      </div>
    );
  }
}

export default DashboardPage;
