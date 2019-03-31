import React from 'react';
import Cart from '../TodayList/Cart';
import s from './DoneList.module.css';

const DoneList = (doneList, isDoneOpen) => {
  return isDoneOpen ? (
    <div className={s.menu}>
      <div className={s.doneHeader}>
        <h2 className={s.title}>DONE </h2>
        <button type="button" className={s.btnOpen} />
        <div className={s.icon} />
      </div>
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
  ) : (
    <div className={s.menu}>
      <div className={s.doneHeader}>
        <h2 className={s.title}>DONE </h2>
        <button type="button" className={s.btnOpen} />
        <div className={s.icon} />
      </div>
    </div>
  );
};
export default DoneList;
