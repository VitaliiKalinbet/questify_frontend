/* eslint react/prop-types: 0 */

import React from 'react';
// import Card from '../Card/CardContainer';
import CardContainer from '../CardContainer/CardContainer';
import s from './CardsRow.module.css';

const Container = ({ name, arr, type, addMode }) => {
  return (
    // <section className={s.section}>
    //   {arr.length > 0 && <p className={s.name}>{name}</p>}
    //   <div className={s.container}>
    //     {type === 'today' && addMode && <Card mode="add" />}
    //     {arr.map(task => (
    //       <Card mode="render" {...task} key={task.dueDate} />
    //     ))}
    //   </div>
    // </section>

    <section className={s.section}>
      {arr.length > 0 && <p className={s.name}>{name}</p>}
      <div className={s.container}>
        {type === 'today' && addMode && <CardContainer mode="newQuest" />}
        {arr.map(task => (
          <CardContainer mode="render" task={task} key={task.dueDate} />
        ))}
      </div>
    </section>
  );
};

export default Container;
