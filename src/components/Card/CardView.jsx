import React from 'react';
import s from './Card.module.css';

const CardView = () => (
  <div className={s.card}>
    <h2 className={s.title}>Visit the dentist at Lumident</h2>
    <p className={s.date}>Today, 13:30</p>
  </div>
);

export default CardView;
