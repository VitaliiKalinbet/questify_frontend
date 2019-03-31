/* eslint react/prop-types: 0 */

import React from 'react';
import Card from '../../Card/CardContainer';
import s from './container.module.css';

const List = ({ arr }) => {
  return (
    <section className={s.container}>
      {arr.map(task => (
        <Card mode="render" {...task} key={task.dueDate} />
      ))}
    </section>
  );
};

export default List;
