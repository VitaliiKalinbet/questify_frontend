import React from 'react';
import PropTypes from 'prop-types';
import s from './CompletedModal.module.css';

const modalCompleted = ({ completedText, clickContinue }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.text}>
        COMPLETED: <span className={s.span}> {completedText}</span>
      </p>
      <button className={s.button} type="button" onClick={clickContinue}>
        Continue
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
