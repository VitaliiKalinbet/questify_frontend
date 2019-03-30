import React from 'react';
import PropTypes from 'prop-types';
import Cart from '../TodayList/Cart';
import s from './TaskList.modules.css';

const TaskList = ({ title, tasks = [], onClick }) => (
  <div className={s.menu}>
    <h2 className={s.title}>{title}</h2>
    <button type="button" onClick={() => onClick()}>
      Open
    </button>
    <ul className={s.menuList}>
      {tasks.map(quest => (
        <li key={quest.id}>
          <Cart />
        </li>
      ))}
    </ul>
  </div>
);

TaskList.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.arrayOf(
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
  onClick: PropTypes.func
};

TaskList.defaultProps = {
  title: '',
  tasks: [],
  onClick: () => {}
};

export default TaskList;
