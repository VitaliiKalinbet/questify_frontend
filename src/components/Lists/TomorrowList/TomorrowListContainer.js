import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import TaskListView from './TaskListView';
import s from './TaskList.modules.css';

class TomorrowListContainer extends Component {
  state = {};

  render() {
    // const { title } = this.props;
    return (
      <div className={s.listsWrapper}>
        <h2> Tomorrow </h2>
        <TaskListView />
      </div>
    );
  }
}

/* TomorrowListContainer.propTypes = {
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

const mapStateToProps = state => ({
  tomorrowList: state.tomorrowList
});

export default connect(mapStateToProps)(TomorrowListContainer);
