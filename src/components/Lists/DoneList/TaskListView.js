import React from 'react';
// import PropTypes from 'prop-types';
import Cart from './Cart';
import s from './TaskList.modules.css';

const tasks = [
  {
    isQuest: true,
    _id: '5c9d9f6b1f9b5b1fb73691a1',
    name: 'Create an account',
    group: 'Productivity',
    difficulty: 'Easy',
    date: 1554457003000,
    done: false
  },
  {
    isQuest: true,
    _id: '5c9d9fa51f9b5b1fb73691a2',
    name: 'Create your first quest',
    group: 'Learning',
    difficulty: 'Normal',
    date: 1554400003000,
    done: false
  },
  {
    isQuest: true,
    _id: '5c9d9fcf1f9b5b1fb73691a3',
    name: 'Accept a challenge',
    group: 'Learning',
    difficulty: 'Normal',
    date: 1554357003000,
    done: false
  },
  {
    isQuest: true,
    _id: '5c9d9fe41f9b5b1fb73691a4',
    name: 'Complete 3 quests',
    group: 'Productivity',
    difficulty: 'Hard',
    date: 1554457003000,
    done: false
  },
  {
    isQuest: true,
    _id: '5c9ddf186e5c254cb5c41556',
    name: 'Recommend Questify to a friend',
    group: 'Social',
    difficulty: 'Easy',
    dueData: 18372629654,
    done: false,
    updatedAt: Date.now(),
    createdAt: Date.now()
  },
  {
    isQuest: true,
    _id: 'c9d9fa51f9b5b1fb73691a2',
    name: 'Create your first quest',
    group: 'Learning',
    difficulty: 'Normal',
    dueData: 124,
    done: false,
    updatedAt: Date.now(),
    createdAt: Date.now()
  }
];

const TaskListView = () => (
  <div className={s.menu}>
    <ul className={s.menuList}>
      {' '}
      {tasks.map(quest => (
        <li key={quest.id} className={s.item}>
          <Cart />
        </li>
      ))}{' '}
    </ul>{' '}
  </div>
);

/* TaskList.propTypes = {
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
  )
};
*/
TaskListView.defaultProps = {
  title: '',
  tasks: []
};

export default TaskListView;
