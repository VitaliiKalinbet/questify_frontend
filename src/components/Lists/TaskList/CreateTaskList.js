import React, { Component } from 'react';
import TodayListContainer from './TodayListContainer';
import TomorrowListContainer from './TomorrowListContainer';
import DoneListContainer from './DoneListContainer';
import s from './TaskList.modules.css';

class createTaskList extends Component {
  state = {};

  render() {
    return (
      <div className={s.listsWrapper}>
        <TodayListContainer />
        <TomorrowListContainer />
        <DoneListContainer />
      </div>
    );
  }
}

export default createTaskList;
