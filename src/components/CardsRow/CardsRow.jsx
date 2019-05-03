/* eslint react/prop-types: 0 */
import React from 'react';
import newId from 'uuid/v4';
import moment from 'moment';
import CardContainer from '../CardContainer/CardContainer';
import s from './CardsRow.module.css';

// const newQuest = {
//   difficulty: 'Easy',
//   done: false,
//   dueDate: moment(new Date()).format('YYYY-MM-DDTHH:mm:ss.sssZ'),
//   group: 'Stuff',
//   isPriority: false,
//   isQuest: true,
//   name: '',
//   _id: newId()
// };

const CardsRow = ({ name, arr, type, addMode }) => {
  return (
    <section className={s.section}>
      {arr.length > 0 && <p className={s.name}>{name}</p>}
      <div className={s.container}>
        {type === 'today' && addMode && <CardContainer mode="newQuest" />}
        {arr.map(task => (
          <CardContainer mode="render" name={name} task={task || newQuest} key={task._id || newId()} />
        ))}
      </div>
    </section>
  );
};

export default CardsRow;
