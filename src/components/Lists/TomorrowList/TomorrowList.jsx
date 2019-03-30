import React from 'react';
import Cart from '../TodayList/Cart';
import s from './TomorrowList.module.css';

const TomorrowList = (tomorrowList = []) => (
  <div className={s.menu}>
    <h2 className={s.title}>TommorrowList </h2>
    {tomorrowList.length > 0 ? (
      <ul className={s.menuList}>
        {tomorrowList.map(quest => (
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
export default TomorrowList;
