import React from 'react';
import s from './Card.module.css';
// components
import CompletedModal from '../CompletedModal/CompletedModal';
import DeleteQuestModal from '../DeleteQuestModal/DeleteQuestModal';

const CardView = ({ name, difficulty, group, editMode, completeModal, deleteQuestModal, agreedDeleting }) => (
  <div className={s.card}>
    <div className={s.box}>
      <h2 className={s.title}>Visit the dentist at Lumident</h2>
      <p className={s.date}>Today, 13:30</p>
    </div>
  </div>
);

export default CardView;
