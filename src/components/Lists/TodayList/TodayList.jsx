import React from 'react';
import { withRouter } from 'react-router-dom';
// import Cart from './Cart';
import Card from '../../Card/CardContainer';
import s from './TodayList.module.css';

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

const TodayList = () => (
  <div className={s.menu}>
    <h2 className={s.title}>TodayList</h2>
    <ul className={s.menuList}>
      {defaultQuests.map(quest => (
        <li key={quest.id}>
          <Card mode="render" {...quest} />
        </li>
      ))}
    </ul>
  </div>
);
export default withRouter(TodayList);
