import React from 'react';
import Card from './CardContainer';
import s from './TestList.module.css';

// eslint-disable-next-line react/prop-types
const CardList = ({ list }) => (
  <ul className={s.list}>
    {list.map(item => (
      <li>
        <Card mode="render" {...item} />
      </li>
    ))}
  </ul>
);

export default CardList;
