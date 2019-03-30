import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskList from '../TodayList/TodayList';

class createTaskList extends Component {
  state = {
    isDoneOpen: false
  };

  buttonDoneClick = () => {
    this.setState({ isDoneOpen: true });
  };

  render() {
    const { isDoneOpen } = this.state;
    const { title, todayList, tomorrowList, doneList } = this.props;
    return (
      <div className={s.listsWrapper}>
        <TaskList title={title} tasks={todayList} />
        <TaskList title={title} tasks={tomorrowList} />
        {isDoneOpen ? (
          <TaskList title={title} tasks={doneList} onClick={this.buttonDoneClick} />
        ) : (
          <TaskList title={title} onClick={this.buttonDoneClick} />
        )}
      </div>
    );
  }
}

createTaskList.propTypes = {
  title: PropTypes.string,
  todayList: PropTypes.arrayOf(
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
  ),
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
  ),
  doneList: PropTypes.arrayOf(
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
};

createTaskList.defaultProps = {
  title: '',
  todayList: [],
  tomorrowList: [],
  doneList: []
};

const mapStateToProps = state => ({
  todayList: state.todayList,
  tommorrowList: state.tommorrowList,
  restList: state.restList,
  doneList: state.doneList
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createTaskList);
