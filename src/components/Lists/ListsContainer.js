import React, { Component } from 'react';
import TodayListContainer from './TodayList/TodayListContainer';
import TomorrowListContainer from './TomorrowList/TomorrowListContainer';
import DoneListContainer from './DoneList/DoneListContainer';

class ListsContainer extends Component {
  state = {};

  render() {
    return (
      <div>
        <TodayListContainer />
        <TomorrowListContainer />
        <DoneListContainer />
      </div>
    );
  }
}

export default ListsContainer;
