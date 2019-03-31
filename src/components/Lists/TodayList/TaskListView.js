import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Card from '../../Card/CardContainer';
import s from './TaskList.modules.css';
import { userSelectors } from '../../../redux/user';

const defaultQuests = [
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
    date: 18372629654,
    done: false
  }
];

// eslint-disable-next-line react/prop-types
const TaskListView = ({ addMode }) => (
  <div className={s.menu}>
    <ul className={s.menuList}>
      {addMode && <Card mode="add" />}
      {defaultQuests.map(quest => (
        <li key={quest.id} className={s.item}>
          <Card mode="render" {...quest} />
        </li>
      ))}
    </ul>
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

const mapStateToProps = store => ({ addMode: userSelectors.getAddMode(store) });
export default connect(mapStateToProps)(TaskListView);
