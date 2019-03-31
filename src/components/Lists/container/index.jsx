/* eslint react/prop-types: 0 */

import React from 'react';
import Card from '../../Card/CardContainer';
import s from './container.module.css';

const Container = ({ arr, type, addMode }) => {
  return (
    <section className={s.container}>
      {type === 'today' && addMode && <Card mode="add" />}
      {arr.map(task => (
        <Card mode="render" {...task} key={task.dueDate} />
      ))}
    </section>
  );
};

export default Container;
