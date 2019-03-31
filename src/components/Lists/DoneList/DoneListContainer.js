import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import TaskListView from './TaskListView';
import s from './TaskList.modules.css';

class DoneListContainer extends Component {
  state = {
    isDoneOpen: false
  };

  buttonOpenClick = () => {
    this.setState({ isDoneOpen: true });
  };

  buttonHideClick = () => {
    this.setState({ isDoneOpen: false });
  };

  render() {
    const { isDoneOpen } = this.state;
    return isDoneOpen ? (
      <div className={s.listsWrapper}>
        <div className={s.doneHeader}>
          <h2 className={s.title}>DONE </h2>
          <button type="button" className={s.btnHide} onClick={this.buttonHideClick} />
          <div className={s.icon} />
        </div>
        <TaskListView />
      </div>
    ) : (
      <div className={s.listsWrapper}>
        <div className={s.doneHeader}>
          <h2 className={s.title}>DONE </h2>
          <button type="button" className={s.btnOpen} onClick={this.buttonOpenClick} />
          <div className={s.icon} />
        </div>
      </div>
    );
  }
}

/* DoneListContainer.propTypes = {
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

DoneListContainer.defaultProps = {
  title: '',
  doneList: []
};

export default DoneListContainer;
