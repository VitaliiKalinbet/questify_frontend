/* eslint react/prop-types: 0 */
import React from 'react';
import newId from 'uuid/v4';
import CardContainer from '../CardContainer/CardContainer';
import s from './CardsRow.module.css';

const CardsRow = ({ name, arr, type, addMode }) => {
  return (
    <section className={s.section}>
      {arr.length > 0 && <p className={s.name}>{name}</p>}
      <div className={s.container}>
        {type === 'today' && addMode && <CardContainer mode="newQuest" />}
        {arr.map(task => (
          <CardContainer mode="render" task={task} key={task._id || newId()} />
        ))}
      </div>
    </section>
  );
};

export default CardsRow;
