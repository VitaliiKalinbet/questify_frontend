/* eslint react/prop-types: 0 */

import React from 'react';
import Card from '../Card/CardContainer';
import s from './Container.module.css';

const Container = ({ arr, type, addMode, name }) => {
  return (
    <section className={s.section}>
      {arr.length > 0 && <p className={s.name}>{name}</p>}
      <div className={s.container}>
        {type === 'today' && addMode && <Card mode="add" />}
        {arr.map(task => (
          <Card mode="render" {...task} key={task.dueDate} />
        ))}
      </div>
    </section>
  );
};

export default Container;
