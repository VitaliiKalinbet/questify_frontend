import React from 'react';
import s from './DeleteQuestModal.module.css';

const Modal = ({ onDelete, clickCancel, isQuest }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.body}>
        <p className={s.text}>{isQuest ? 'Delete this Quest?' : 'Delete this Challenge?'}</p>
        <button className={s.buttonCancel} type="button" onClick={clickCancel}>
          cancel
        </button>
        <button className={s.buttonDelete} type="button" onClick={onDelete}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Modal;
