import React from 'react';
import Cart from './Cart';
import s from './TodayList.module.css';

const defaultQuests = [
  {
    isQuest: true,
    _id: '5c9d9f6b1f9b5b1fb73691a1',
    name: 'Create an account',
    group: 'Productivity',
    difficulty: 'Easy',
    dueData: 124,
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
  },
  {
    isQuest: true,
    _id: 'c9d9fcf1f9b5b1fb73691a3',
    name: 'Accept a challenge',
    group: 'Learning',
    difficulty: 'Normal',
    dueData: 12422,
    done: false,
    updatedAt: Date.now(),
    createdAt: Date.now()
  },
  {
    isQuest: true,
    _id: 'c9d9fe41f9b5b1fb73691a4',
    name: 'Complete 3 quests',
    group: 'Productivity',
    difficulty: 'Hard',
    dueData: 12422,
    done: false,
    updatedAt: Date.now(),
    createdAt: Date.now()
  },
  {
    isQuest: true,
    challengeSendToUser: false,
    _id: 'c9ddf186e5c254cb5c41556',
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

const TodayList = () => (
  <div className={s.menu}>
    <ul className={s.menuList}>
      {defaultQuests.map(quest => (
        <li key={quest.id} className={s.item}>
          <Cart />
        </li>
      ))}
    </ul>
  </div>
);
export default TodayList;
