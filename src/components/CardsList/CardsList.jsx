/* eslint react/prop-types: 0 */
import React from 'react';
import CardContainer from '../CardContainer/CardContainer';
import s from './CardsList.module.css';

const CardsList = ({ name, arr, type, addMode }) => {
  return (
    <section className={s.section}>
      <p className={s.name}>{name}</p>
      {arr.length < 1 && <p className={s.noQuest}>No quests or challenges for {name}</p>}
      <ul className={s.container}>
        {type === 'today' && addMode && <CardContainer mode="newQuest" />}
        {arr.map(task => (
          <CardContainer mode="render" name={name} task={task} key={task._id} />
        ))}
      </ul>
    </section>
  );
};

export default CardsList;
