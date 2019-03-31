import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskListView from './TaskListView';
import s from './TaskList.modules.css';

class TodayListContainer extends Component {
  state = {};

  render() {
    return (
      <div className={s.listsWrapper}>
        <h2> Today </h2>
      </div>
    );
  }
}

/* TodayListContainer.propTypes = {
  title: PropTypes.string,
  tomorrowList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      group: PropTypes.string,
      difficulty: PropTypes.string,
      challengeSendToUser: PropTypes.bool,
      isQuest: PropTypes.bool,
      done: PropTypes.bool,
      due: PropTypes.number
    })
  )
}; */

TodayListContainer.defaultProps = {
  title: '',
  todayList: []
};

const mapStateToProps = state => ({
  todayList: state.todayList
});

export default connect(mapStateToProps)(TodayListContainer);
