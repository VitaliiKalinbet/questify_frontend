import React from 'react';
import Cart from '../TodayList/Cart';
import s from './DoneList.module.css';

const DoneList = (doneList = []) => (
  <div className={s.menu}>
    <h2 className={s.title}>DoneList </h2>
    <button type="button" onClick={() => onClick()}>
      Open
    </button>
    {doneList.length > 0 ? (
      <ul className={s.menuList}>
        {doneList.map(quest => (
          <li key={quest.id}>
            <Cart
              isQuest={quest.isQuest}
              challengeSendToUser={quest.challengeSendToUser}
              name={quest.name}
              group={quest.group}
              difficulty={quest.difficulty}
              dueData={quest.dueData}
              done={quest.done}
              updatedAt={quest.updatedAt}
              createdAt={quest.createdAt}
            />
          </li>
        ))}
      </ul>
    ) : null}
  </div>
);
export default DoneList;
