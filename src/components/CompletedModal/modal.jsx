import React from 'react';
import PropTypes from 'prop-types';
import s from './CompletedModal.module.css';

const modalCompleted = ({ completedText, clickContinue, isQuest }) => {
  return (
    <div className={isQuest ? s.questBackground : s.challengeBackground}>
      <p className={`${s.text} ${!isQuest && s.challengeText}`}>
        COMPLETED: <span className={s.span}> {completedText}</span>
      </p>
      <button className={s.button} type="button" onClick={clickContinue}>
         Continue
        <span className={s.buttonArrow}/>
      </button>
    </div>
  );
};

modalCompleted.propTypes = {
  completedText: PropTypes.string,
  clickContinue: PropTypes.func
};

modalCompleted.defaultProps = {
  completedText: '',
  clickContinue: () => {}
};

export default modalCompleted;
